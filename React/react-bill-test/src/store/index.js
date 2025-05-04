import { configureStore } from '@reduxjs/toolkit';
import billReducer from './modules/billStore';

// 组合子模块，导出store实例
const store = configureStore({
    reducer: {
        bill: billReducer
    }
})

export default store;