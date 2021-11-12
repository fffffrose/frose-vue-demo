const program = require('commander')
const {createProjectAction,addCpnAction,addPageAndRouteAction,addStoreAction} = require('./actions')
const createCommands = () =>{
    program
    .command(`create <project> [others...]`)
    .description(`clone repository into a folder`)
    .action(createProjectAction)
    
    program
    .command(`addcpn <name>`)
    .description(`add vue component Such as  frose addcpn HelloWorld [-d src/components]`)
    .action((name)=>{
        addCpnAction(name,program.dest||`src/components`)
    })

    program
    .command(`addpage <page>`)
    .description(`add vue page ande router config Such as frose addpage Home [-d src/pages]`)
    .action((page) => {
        addPageAndRouteAction(page,program.dest||`src/pages`)
    })

    program
    .command(`addstore <store>`)
    .description(`add vue page ande router config Such as frose addpage Home [-d src/pages]`)
    .action((store) => {
        addStoreAction(store,program.dest||`src/store/modules`)
    })
}
module.exports = createCommands