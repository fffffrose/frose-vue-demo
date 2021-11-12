const fs = require(`fs`)
const ejs = require(`ejs`)
const path = require(`path`)
const compile = (name, data) => {
    const templatePosition = `../templates/${name}`
    const templatePath = path.resolve(__dirname, templatePosition)

    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, { data }, {}, (err, res) => {
            if (err) {
                console.log(err);
                reject(err)
                return
            }
            resolve(res)

        })
    })
    // console.log(templatePath);


}

const createDirSync = (pathName) => {
    if (fs.existsSync(pathName)) return true
    else {
        if (createDirSync(path.dirname(pathName))) {
            fs.mkdirSync(pathName)
            return true
        }
    }
}

const writeToFile = (path, content) => {
        return fs.promises.writeFile(path, content)
    
}
module.exports = {
    compile,
    writeToFile,
    createDirSync
}