const program = require('commander')
const {createProjectAction,addCpnAction} = require('./actions')
const createCommands = () =>{
    program
    .command(`create <project> [others...]`)
    .description(`clone repository into a folder`)
    .action(createProjectAction)
    program
    .command(`addcpn <name>`)
    .description(`add vue component`)
    .action(addCpnAction)
}
module.exports = createCommands