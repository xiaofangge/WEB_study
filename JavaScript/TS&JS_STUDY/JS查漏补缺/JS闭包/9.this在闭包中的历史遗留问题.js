let student1 = {
    name: 'Tom',
    getName: function() {
        return function () {
            return this.name;
        }
    }
}

const studentName = student1.getName();
console.log(studentName()); // undefined


// 方案1:保存this指针
let student2 = {
    name: 'Tom',
    getName: function() {
        let that = this; // 保存this指针
        return function () {
            return that.name;
        }
    }
}

const studentName2 = student2.getName();
console.log(studentName2()); // Tom

// 方案2:使用箭头函数
let student3 = {
    name: 'Tom',
    getName: function() {
        return () => this.name;
    }
}

const studentName3 = student3.getName();
console.log(studentName3()); // Tom

