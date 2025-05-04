/**
 * 自动导入，勿手动修改
 */
type TDictStrType =""
 | `modules.index.${keyof typeof import('./src/dict/modules/modules/index')}`