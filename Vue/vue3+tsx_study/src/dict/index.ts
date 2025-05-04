import { closeLoading, showLoading } from '@/core/utils';
import tool from '@/core/utils/tool';
import { Dict } from '../core/utils/dict';

class SysDictUtil {
  find = (key: TDictStrType, keyValue: any) => {
    let rs = this.getCache(key, 0);
    if (tool.isPromise(rs)) {
      return new Promise(async (resolve, reject) => {
        let array = await this.getCache(key, 0)
        if (Array.isArray(array)) {
          resolve(array.find(j => {
            return j.value + "" === keyValue + "";
          }) ?? {})
        } else {
          reject("key=" + key + " 返回结果不是数组")
        }
      })
    }
    let array = rs;
    if (Array.isArray(array)) {
      return array.find(j => {
        return j.value + "" === keyValue + "";
      }) ?? {};
    } else {
      throw new Error("key=" + key + " 返回结果不是数组")
    }
  }

  _getCacheJson = (key: string) => {
    let cacheDict = tool.config.getInstance(tool.getWindow()).get("cache.dict");
    let json = tool.config.getInstance(cacheDict).get(key);
    return json;
  }

  set = (key: string, value: any | ((param: any) => Promise<any>)) => {
    let json = this._getCacheJson(key);
    json.timestamp = new Date().getTime();
    json.value = value;
  }

  get = async (dictKey: TDictStrType | Dict, param?: any) => {

    // 新字典形式
    if (typeof dictKey !== "string") {
      return await dictKey.get(param)
    }

    let key: any = dictKey as string
    let json = this._getCacheJson(key);
    if (!json.value) {
      throw new Error("key=" + key + " 字典函数未定义")
    }
    if (typeof json.value != 'function') {
      return json.value;
    }

    return new Promise(async resolve => {
      let _func = json.value;
      let rs = await _func(param);
      resolve(rs);
    })
  };

  getFun = (key: string) => {
    let json = this._getCacheJson(key);
    if (!json.value) {
      throw new Error("key=" + key + " 字典函数未定义")
    }
    return json.value;
  }

  /** 获取静态data数据 */
  getStatic = (dictKey: TDictStrType | Dict)=>{
    // 新字典形式
    if (typeof dictKey !== "string") {
      return dictKey.getStatic()
    }
    let json = this._getCacheJson(dictKey);
    return json.value
  }

  getCache = async (dictKey: TDictStrType | Dict, timeout: number = 0) => {

    // 新字典形式
    if (typeof dictKey !== "string") {
      return await dictKey.getCache()
    }

    let key: any = dictKey as string
    let cacheDict = tool.config.getInstance(tool.getWindow()).get("cache.dict");
    let json = this._getCacheJson(key);
    if (typeof json.value !== 'function') {
      if (json.timestamp && (timeout === 0 || new Date().getTime() <= json.timestamp + timeout)) {
        return json.value;
      }
      let tool_cache = tool.config.getInstance(cacheDict);
      tool_cache.get(key).timestamp = new Date().getTime();
      return tool_cache.get(key).value;
    }

    if (json.timestamp && json.value_cache && (timeout === 0 || new Date().getTime() <= json.timestamp + timeout)) {
      return json.value_cache;
    }
    let that = this;
    let tool_cache = tool.config.getInstance(cacheDict);
    if (tool_cache.get(key).loading === true) {
      return new Promise(async resolve => {
        setTimeout(async () => {
          let rs = await that.getCache(key, timeout)
          resolve(rs);
        }, 1000)
      })
    }
    tool_cache.get(key).loading = true;
    let func = this.getFun(key);
    return new Promise(async resolve => {
      let func_rs = await func().catch(() => {
        console.error(key + " 字典获取失败")
      });
      let tool_cache = tool.config.getInstance(cacheDict);
      tool_cache.get(key).timestamp = new Date().getTime();
      tool_cache.get(key).loading = false;
      tool_cache.get(key).value_cache = func_rs;
      resolve(func_rs)
    })

  };
  removeCache = (key: string) => {
    let json = this._getCacheJson(key);
    json.timestamp = null;
  }

  setDicts = async (arr: any[]) => {
    showLoading("字典正在加载中")
    for (const item in arr) {
      await this.getCache(arr[item], 0);
    }
    closeLoading()
    return arr;
  }

  /** 字典初始化 */
  initDict = () => {
    let saveTypes: string[] = []
    let modulesFiles: any = import.meta.glob("./modules/**/*.ts", { eager: true })
    Object.keys(modulesFiles).forEach(key => {
      for (const item in modulesFiles[key]) {
        let keyTemp = key + "/" + item
        let saveKey = keyTemp.replace("./modules/", "").replace(".ts", "").split("/").join(".")
        saveTypes.push(saveKey)
        this.set(saveKey, modulesFiles[key][item])
      }
    })
    
    modulesFiles = import.meta.glob("./modules/**/*.tsx", { eager: true })
    Object.keys(modulesFiles).forEach(key => {
      for (const item in modulesFiles[key]) {
        let keyTemp = key + "/" + item
        let saveKey = keyTemp.replace("./modules/", "").replace(".ts", "").split("/").join(".")
        saveTypes.push(saveKey)
        this.set(saveKey, modulesFiles[key][item])
      }
    })

  }
}

export default new SysDictUtil();
