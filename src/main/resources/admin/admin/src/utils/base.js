const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootj8m2s/",
            name: "springbootj8m2s",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootj8m2s/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "师生共评的作业管理系统"
        } 
    }
}
export default base
