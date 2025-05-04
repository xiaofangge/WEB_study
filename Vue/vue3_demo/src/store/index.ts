import { createStore } from 'vuex';

export default createStore({
    state: {
        curIdx: 0
    },
    mutations: {
        setCurIdx(state, index) {
            state.curIdx = index;
        }
    },
    modules: {
            
    }
})