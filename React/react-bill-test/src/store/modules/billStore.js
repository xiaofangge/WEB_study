import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: "billStore",
    initialState: {
        billList: [],
    },
    reducers: {
        setBillList: (state, action) => {
            state.billList = action.payload;
        }
    }
})

const { setBillList } = billStore.actions;

// 编写异步请求
const getBillList = () => {
    return async (dispatch) => {
        // 异步请求
        const billList = await axios.get("http://localhost:3001/ka");
        // 触发同步reducer
        dispatch(setBillList(billList.data));
    }
}

export default billStore.reducer;

export { setBillList, getBillList };