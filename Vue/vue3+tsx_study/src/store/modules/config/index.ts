// 项目初始化数据-项目运行只走一次
import { defineStore } from "pinia";
import { SHOW_LAYOUT } from "@/config"
import { setStorage } from '@/core/utils';

interface IState {
	/** 是否显示外框 */
	showLayout: boolean,
	/** 调试模式，可以看到model文件位置 */
	debug: boolean,
	/** 测试模式，可以更具该变量控制页面显示 */
	test: boolean,
	/** main窗口发生变化时值会被修改 */
	mainContentResize: number,
	errorPageFlag: boolean;
	/** 全局字体大小 */
	fontSize:TFontSize
}

export const useConfigStore = defineStore({
	// 每个 store 的 id 必须唯一
	id: 'pad_config',
	// state 表示数据源
	state: (): IState => ({
		showLayout: SHOW_LAYOUT,
		debug: false,
		test: false,
		mainContentResize: 0,
		errorPageFlag: false,
		fontSize:"small"
	}),
	// actions 用来修改 state
	actions: {
		setFontSize(size:TFontSize){
			this.$patch(state => {
				state.fontSize = size
			})
		},
		setErrorPageFlag(bool: boolean) {
			this.$patch(state => {
				state.errorPageFlag = bool
			})
		},
		setShowLayout(bool: boolean) {
			setStorage("showLayout", bool)
			this.$patch(state => {
				state.showLayout = bool
			})
		},
		setDebug(bool: boolean) {
			setStorage("debug", bool)
			this.$patch(state => {
				state.debug = bool
			})
		},
		setTest(bool: boolean) {
			setStorage("test", bool)
			this.$patch(state => {
				state.test = bool
			})
		},
		/** 重新计算表格高度 */
		resetTableHeight() {
			this.setMainContentResize()
		},
		setMainContentResize() {
			this.$patch(state => {
				state.mainContentResize += 1
			})
		}
	}
})
