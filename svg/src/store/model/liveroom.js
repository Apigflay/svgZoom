// 状态
const state = {
	liveEnterData:[],//进入房间消息
	liveChatData:[],//房间聊天信息
	liveUserListData: [],//房间用户列表
	liveOverData:null,//下播消息
  
}
const getters ={
	get_liveEnterData(state){
		return state.liveEnterData;
	},
	get_liveChatData(state){
		return state.liveChatData;
	},
	get_liveUserListData(state){
		return state.liveUserListData;
	},
	get_liveOverData(state){
		return state.liveOverData;
	}
}
// 提交
const mutations = {
	set_liveEnterData:(state,data)=>{
		state.liveEnterData = data 
	},
	set_liveChatData:(state,data)=>{
		state.liveChatData = data 
	},
	set_liveUserListData:(state,data)=>{
		state.liveUserListData = data 
	},
	set_liveOverData:(state,data)=>{
		state.liveOverData = data 
	},
}
// 方法
const actions = {
	SET_liveEnterData: ({ commit }, data) => {
		commit('set_liveEnterData', data)
	},
	SET_liveChatData: ({ commit }, data) => {
		commit('set_liveChatData', data)
	},
	SET_liveUserListData: ({ commit }, data) => {
		commit('set_liveUserListData', data)
	},
	SET_liveOverData: ({ commit }, data) => {
		commit('set_liveOverData', data)
	},
  
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
