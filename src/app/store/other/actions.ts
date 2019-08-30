import constList from '../constants'
let actions = constList.other;

export default {
  [actions.SOME_ACTION]({commit, model}, payload: any) {
    commit(actions.SOME_ACTION, payload);
  },

  [actions.RESET_OTHER]({commit}) {
    commit(actions.RESET_OTHER);
  }   
}