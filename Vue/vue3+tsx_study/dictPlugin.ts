/**
 * 自动生成dict.d.ts数据 - 需要先建好dict.d.ts
 */

const fs: any = require("fs")

export default function viteDictPlugin(options = { dictPath: "", dictTypePath: "./dict.d.ts" }) {

	return {
		name: 'vite:plugin-test',
		load(fileId: any) {
			let dictPath = options.dictPath
			if (fileId.includes(dictPath)) {
				let fileName = ""
				// 解析文件名前缀
				let prefix = fileId
				if (prefix.indexOf(".ts") != -1) {
					prefix = prefix.replace(/.ts/g, "")
				} else if (prefix.indexOf(".tsx") != -1) {
					prefix = prefix.replace(/.tsx/g, "")
				}
				if (prefix.includes("/")) {
					let prefixList = prefix.split("/")
					prefix = prefixList[prefixList.length - 2] + "." + prefixList[prefixList.length - 1] + "."
					fileName = prefixList[prefixList.length - 2] + "/" + prefixList[prefixList.length - 1]
				} else if (prefix.includes("\\")) {
					let prefixList = prefix.split("\\")
					prefix = prefixList[prefixList.length - 2] + "." + prefixList[prefixList.length - 1] + "."
					fileName = prefixList[prefixList.length - 2] + "/" + prefixList[prefixList.length - 1]
				}

				let updateFile = fs.readFileSync(options.dictTypePath, 'utf8')
				if (!updateFile.includes(prefix)) {
					fs.writeFileSync(options.dictTypePath, updateFile.trim() + "\n | " + "`" + prefix + "${keyof typeof import('." + dictPath + fileName + "')}`")
				}
			}
		},
	}
}
