const {promisify} = require(`util`)
const path = require(`path`)

const download = promisify(require(`download-git-repo`))
const open = require(`open`)

const {vueRepo}= require('../config/repo-config')
const {commandSpawn} = require('../utils/terminal')
const {compile,writeToFile,createDirSync} = require(`../utils/util`)


const createProjectAction =  async (project) =>{
    console.log(`frose is helping you to built up`);
    //1clone项目
    await download(vueRepo,project,{clone:true})
    //2 npm  install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command,[`install`],{cwd:`./${project}`})
    //3 npm run serve
    commandSpawn(command,['run','serve'],{cwd:`./${project}`})
    //4 open browser
    open(`http://loaclhost:8080/`)
}
const addCpnAction = async (name,dest) =>{
    //对应ejs模块
    //编译ejs
    const res =  await compile("vue-component.ejs",{name,lowerName:name.toLowerCase()})
    // console.log(res);
    //将res写入到.vue
    const targetPath = path.resolve(dest,`${name}.vue`)
    writeToFile(targetPath,res)
    //放到对应文件夹中 
}
const addPageAndRouteAction = async (name,dest)=>{
    const  pageRes = await compile(`vue-component.ejs`,{name,lowerName:name.toLowerCase()})
    const  routeRes = await compile(`vue-router.ejs`,{name,lowerName:name.toLowerCase()})
    //

    const targetDest = path.resolve(dest,name.toLowerCase())
    if(createDirSync(targetDest)){
        const targetPagePath = path.resolve(targetDest,`${name}.vue`)
        const targetRoutePath = path.resolve(targetDest,`router.js`)
        //写入文件
        writeToFile(targetPagePath,pageRes)
        writeToFile(targetRoutePath,routeRes)
    }
   

}
const addStoreAction = async (name,dest) => {
    const storeRes = await compile('vue-store.ejs',{});
    const typeRes = await compile(`vuex-types.ejs`,{})
    const targetDest = path.resolve(dest,name.toLowerCase())
    if(createDirSync(targetDest)){
        const targetPagePath = path.resolve(targetDest,`${name}.js`)
        const targetRoutePath = path.resolve(targetDest,`types.js`)
        //写入文件
        writeToFile(targetPagePath,storeRes)
        writeToFile(targetRoutePath,typeRes)
    }
}


module.exports  ={
    createProjectAction,
    addCpnAction,
    addPageAndRouteAction,
    addStoreAction
}