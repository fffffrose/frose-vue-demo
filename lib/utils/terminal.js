//执行终端命令
const { spawn } = require(`child_process`)

const commandSpawn = (...args) => {
    return new Promise((res, rej) => {
        const childProcess = spawn(...args)
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        childProcess.on("close", () => {
            res()
        })
    })
}
module.exports = {
    commandSpawn
}