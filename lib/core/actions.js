const {promisify} = require(`util`)

const download = promisify(require(`download-git-repo`))
const open = require(`open`)

const {vueRepo}= require('../config/repo-config')
const {commandSpawn} = require('../utils/terminal')
const {compile} = require(`../utils/util`)


const createProjectAction =  async (project) =>{
    console.log(project);
    console.log(`frose is helping you to built up`);
    //1clone项目
    await download(vueRepo,project,{clone:true})
    //2 npm  install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command,[`install`],{cwd:`./${project}`})
    //3 npm run serve
    WcommandSpawn(command,['run','serve'],{cwd:`./${project}`})
    //4 open browser
    open(`http://loaclhost:8080/`)
}
const addCpnAction = async (name,dest) =>{
    //对应ejs模块
    //编译ejs
    const res =  await compile("vue-component.ejs",{name,lowerName:name.toLowerCase()})
    console.log(res);
    //将res写入到.vue
    //放到对应文件夹中 
}

module.exports  ={
    createProjectAction,
    addCpnAction
}