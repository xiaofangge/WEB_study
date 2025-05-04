// 打开或创建数据库: 返回一个Promise对象，让我们可以进行链式调用
function openDB(dbName, version = 1) {
    return new Promise((resolve, reject) => {
        // 兼容浏览器
        var indexDB = window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB;
        let db;
        // 打开数据库，若没有则会创建
        const request = indexDB.open(dbName, version)
        // 数据库打开成功回调
        request.onsuccess = (event) => {
            // 数据库对象
            db = event.target.result;
            console.log("数据库打开成功")
            resolve(db)
        }
        // 数据库打开关闭回调
        request.onerror = () => {
            console.log("数据库打开报错")
        }
        // 数据库有更新时候回调
        request.onupgradeneeded = (event) => {
            // 数据库创建或升级的时候会触发
            console.log("onupgradeneeded event => ", event)
            // 数据库对象
            db = event.target.result;
            var objectStore;
            // 创建存储库- users 仓库名
            objectStore = db.createObjectStore("users", {
                keyPath: "uuid",  // 这是主键
                // autoIncrement: true,    // 实现自增
            })
            // 创建索引，在后面查询数据的时候可以根据索引查
            objectStore.createIndex("uuid", "uuid", { unique: true }) // unique:  true 唯一 false 代表不唯一
            objectStore.createIndex("name", "name", { unique: false })
            objectStore.createIndex("age", "age", { unique: false })
        }
    })
}



// 插入数据
function add(db, store, data) {
    let request = db
        .transaction([store], "readwrite") // 事务对象，指定表格名称和操作模式（“只读”或“读写”） 
        .objectStore(store) // 仓库对象
        .add(data)

    request.onsuccess = (event) => {
        console.log("数据写入成功")
    }

    request.onerror = (event) => {
        console.log("数据写入失败")
    }
}

// 通过主键查询数据
function getDataByKey(db, storeName, key) {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction([storeName])   // 事务
        let objectStore = transaction.objectStore(storeName)    // 仓库对象
        let request = objectStore.get(key)  // 通过主键获取数据

        request.onerror = (event) => {
            console.log("事务失败")
        }

        request.onsuccess = (event) => {
            console.log(`主键【${key}】查询结果 => `, request.result)
        }
    })
}

// 通过游标查询数据 cursor
function cursorGetData(db, storeName) {
    let list = [];
    let store = db.transaction(storeName, "readwrite")  // 事务
        .objectStore(storeName)   // 仓库对象
    let request = store.openCursor();   // 指针对象
    // 游标开启成功，逐行读数据
    request.onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
            list.push(cursor.value)
            // 游标指向下一个元素
            cursor.continue();
        } else {
            console.log("游标读取的数据 => ", list)
        }
    }

    request.onerror = (event) => {
        console.log("游标失败")
    }
}

// 通过索引查询数据-只会查询第一条数据
function getDataByIndex(db, storeName, indexName, indexValue) {
    let store = db.transaction(storeName, 'readwrite').objectStore(storeName)
    let request = store.index(indexName).get(indexValue)

    request.onerror = (event) => {
        console.log("事务失败")
    }

    request.onsuccess = (event) => {
        console.log("索引查询结果 => ", event.target.result)
    }
}

// 通过索引和游标查询数据-查出所有复合条件的数据
function cursorDataByeIndex(db, storeName, indexName, indexValue) {
    let list = [];
    let store = db.transaction(storeName, "readwrite").objectStore(storeName) // 仓库对象
    let request = store.index(indexName)    // 索引对象
        .openCursor(IDBKeyRange.only(indexValue))        // 游标

    request.onerror = (event) => {
        console.log("索引游标失败")
    }

    request.onsuccess = (event) => {
        let cursor = event.target.result;
        if (cursor) {
            list.push(cursor.value)
            // 游标指向下一个
            cursor.continue()
        } else {
            console.log("游标索引查询结果 => ", list)
        }
    }
}

// 通过索引和游标分页查询
function cursorGetDataByIndexAndPage(
    db,
    storeName,
    indexName,
    indexValue,
    page,
    pageSize
) {
    let list = [];
    let counter = 0; // 计数器
    let advanced = true; // 是否跳过多少条查询
    var store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
    var request = store
        .index(indexName) // 索引对象
        .openCursor(IDBKeyRange.only(indexValue)); // 指针对象
    request.onsuccess = function (e) {
        var cursor = e.target.result;
        if (page > 1 && advanced) {
            advanced = false;
            cursor.advance((page - 1) * pageSize); // 跳过多少条
            return;
        }
        if (cursor) {
            // 必须要检查
            list.push(cursor.value);
            counter++;
            if (counter < pageSize) {
                cursor.continue(); // 遍历了存储对象中的所有内容
            } else {
                cursor = null;
                console.log("分页查询结果", list);
            }
        } else {
            console.log("分页查询结果", list);
        }
    };
    request.onerror = function (e) { };
}


// 更新数据
function updateDB(db, storeName, data) {
    let request = db.transaction([storeName], "readwrite")  // 事务对象
        .objectStore(storeName) // 仓库对象
        .put(data)

    request.onerror = (event) => {
        console.log("数据更新报错")
    }

    request.onsuccess = (event) => {
        console.log("数据更新成功")
    }
}

// 通过主键删除数据
function deleteDB(db, storeName, id) {
    let request = db.transaction([storeName], "readwrite")  // 事务对象
        .objectStore(storeName) // 仓库对象
        .delete(id)

    request.onerror = (event) => {
        console.log("数据删除报错")
    }

    request.onsuccess = (event) => {
        console.log("数据删除成功")
    }
}


// 通过索引和游标删除指定数据
function cursorDelete(db, storeName, indexName, indexValue) {
    let store = db.transaction(storeName, "readwrite")  // 事务对象
        .objectStore(storeName);  // 仓库对象
    let request = store.index(indexName)    // 索引对象
        .openCursor(IDBKeyRange.only(indexValue))    // 指针对象

    request.onsuccess = (event) => {
        let cursor = event.target.result;
        let deleteReqeust;
        if (cursor) {
            deleteReqeust = cursor.delete();    // 请求删除当前项
            deleteReqeust.onerror = () => {
                console.log("游标删除该记录失败")
            }

            deleteReqeust.onsuccess = () => {
                console.log("游标删除该记录成功")
            }
            cursor.continue()
        }
    }

    request.onerror = (event) => {

    }
}


/**
 * 关闭数据库
 * @param {object} db 数据库实例
 */
function closeDB(db) {
    db.close();
    console.log("数据库已关闭");
}


/**
 * 删除数据库
 * @param {object} dbName 数据库名称
 */
function deleteDBAll(dbName) {
    console.log(dbName);
    let deleteRequest = window.indexedDB.deleteDatabase(dbName);
    deleteRequest.onerror = function (event) {
        console.log("删除失败");
    };
    deleteRequest.onsuccess = function (event) {
        console.log("删除成功");
    };
}