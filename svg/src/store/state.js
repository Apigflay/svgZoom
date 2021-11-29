const state ={//所有状态以all开头
	allProcessId:0,//流程id
	allLoginInfo:null,//socket登录成功信息
	allUserInfo:null,//账号密码--no
	allIsLogin:false,//是否socket登录  默认为不登录 修改状态采用异步方法
	allGiftData:[],//直播间礼物信息
	allEmojiData:[],//直播间表情信息
	allAnchorLoginData:{},//主播登录信息
	alluserIdx:null,//用户idx
	allusertoken:null,//用户token
}
export default state