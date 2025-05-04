import tool from '@/core/utils/tool';
/** 初始化 */
export function init() {
	tool.getWindow().tool = tool;

	tool.dict.initDict()
}
