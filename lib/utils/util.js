const ejs = require(`ejs`)
const path = require(`path`)
console.log(__dirname);
const compile = (name,data)=>{
    const templatePosition = `../templates/${name}`
    const templatePath = path.resolve(__dirname,templatePosition)
   
    return new Promise((resolve,reject) => {
        ejs.renderFile(templatePath,{data},{},(err,res)=>{
            if(err){
                console.log(err);
                reject(err)
                return
            }
            resolve(res)
            
        })
    })
    // console.log(templatePath);

    
}
module.exports={
    compile
}