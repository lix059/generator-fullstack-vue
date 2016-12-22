import * as types from './mutation_types'

export default {

    [types.ADD_TOTAL_TIME](state, time) {
        state.totalTime = state.totalTime + time
    },
    [types.DEC_TOTAL_TIME](state, time) {
        state.totalTime = state.totalTime - time
    },
    [types.SAVE_PLAN](state, plan) {
        const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
        state.list.push(
            Object.assign({name:'test', avatar: avatar}, plan)
        );
    },
    [types.DELETE_PLAN](state, idx){
        state.list.splice(idx,1);
    },



    [types.SEARCH_DOC] (state, doctors){
        state.doctors = Array.from(doctors);
    }
}
