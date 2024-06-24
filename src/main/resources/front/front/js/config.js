
var projectName = '师生共评的作业管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '课程',
	url: './pages/kecheng/list.html'
}, 
{
	name: '作业',
	url: './pages/zuoye/list.html'
}, 
{
	name: '作业互评',
	url: './pages/zuoyehuping/list.html'
}, 

]

var adminurl =  "http://localhost:8080/springbootj8m2s/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"组长","menuJump":"列表","tableName":"zuzhang"}],"menu":"组长管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"小组信息","menuJump":"列表","tableName":"xiaozuxinxi"}],"menu":"小组信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["新增","查看","修改","删除","提交"],"menu":"作业","menuJump":"列表","tableName":"zuoye"}],"menu":"作业管理"},{"child":[{"buttons":["新增","查看","修改","删除","评分"],"menu":"作业互评","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"作业评分","menuJump":"列表","tableName":"zuoyepingfen"}],"menu":"作业评分管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"作业提交","menuJump":"列表","tableName":"zuoyetijiao"}],"menu":"作业提交管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看","提交"],"menu":"作业列表","menuJump":"列表","tableName":"zuoye"}],"menu":"作业模块"},{"child":[{"buttons":["查看","评分"],"menu":"作业互评列表","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["查看","提交"],"menu":"作业","menuJump":"列表","tableName":"zuoye"}],"menu":"作业管理"},{"child":[{"buttons":["查看","评分"],"menu":"作业互评","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评管理"},{"child":[{"buttons":["查看"],"menu":"作业评分","menuJump":"列表","tableName":"zuoyepingfen"}],"menu":"作业评分管理"},{"child":[{"buttons":["查看"],"menu":"作业提交","menuJump":"列表","tableName":"zuoyetijiao"}],"menu":"作业提交管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看","提交"],"menu":"作业列表","menuJump":"列表","tableName":"zuoye"}],"menu":"作业模块"},{"child":[{"buttons":["查看","评分"],"menu":"作业互评列表","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"小组信息","menuJump":"列表","tableName":"xiaozuxinxi"}],"menu":"小组信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["新增","查看","修改","删除","提交"],"menu":"作业","menuJump":"列表","tableName":"zuoye"}],"menu":"作业管理"},{"child":[{"buttons":["新增","查看","修改","删除","评分"],"menu":"作业互评","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"作业评分","menuJump":"列表","tableName":"zuoyepingfen"}],"menu":"作业评分管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看","提交"],"menu":"作业列表","menuJump":"列表","tableName":"zuoye"}],"menu":"作业模块"},{"child":[{"buttons":["查看","评分"],"menu":"作业互评列表","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"课程","menuJump":"列表","tableName":"kecheng"}],"menu":"课程管理"},{"child":[{"buttons":["查看"],"menu":"作业","menuJump":"列表","tableName":"zuoye"}],"menu":"作业管理"},{"child":[{"buttons":["查看","评分"],"menu":"作业互评","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"作业评分","menuJump":"列表","tableName":"zuoyepingfen"}],"menu":"作业评分管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"课程列表","menuJump":"列表","tableName":"kecheng"}],"menu":"课程模块"},{"child":[{"buttons":["查看","提交"],"menu":"作业列表","menuJump":"列表","tableName":"zuoye"}],"menu":"作业模块"},{"child":[{"buttons":["查看","评分"],"menu":"作业互评列表","menuJump":"列表","tableName":"zuoyehuping"}],"menu":"作业互评模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"组长","tableName":"zuzhang"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
