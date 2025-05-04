
/** 下拉选类型字典 */
type SelectDict = ((...args: any) => (Promise<{ label: string, value: string, [key: string]: any }[]>))
	| {
		label: string,
		value: string|number,
		[key: string]: any
	}[]

// type TableDict<T> = ((...args: any) => (Promise<{
// 	title: string,
// 	// 选完显示的字段
// 	showLabel: string,
// 	showValue: string,
// 	column: T[] |any[],
// 	dataFlag: TDictStrType
// }>)) | {
// 	title: string,
// 	// 选完显示的字段
// 	showLabel: string,
// 	showValue: string,
// 	column: T[],
// 	dataFlag: TDictStrType
// }

/** vxe保存数据到本地格式 */
type VxeSaveJson  = {
	width: number | string
	dataKey: string
}