const program = require('commander')
const helpOptions = () => {
    //增加自己的Option
    program.option(`-w, --why`, `a frose cli`)
    program.option('-d, --dest <dest>', ' a destination folder 例如 -d /src/components'   )
    program.option(`-f, --framework <framework>`, `your frameword`)

    program.on(`--help`, function () {
        console.log(``);
        console.log(`Other:`);
        console.log(`  Other options~`);
    })
}
module.exports = helpOptions