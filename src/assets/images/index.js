// const files = import.meta.globEager("./*.j*")
// const modules = {};

// for (const key in files) {
//     if (Object.prototype.hasOwnProperty.call(files, key)) {
//         modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key].default
//     }
// }

// export default modules;

const files = import.meta.globEager("./bridge/*/*.j*")

const modules = {};

for (const key in files) {
    const k = key.split('./bridge/')[1].split('/')[0]

    modules[k] = modules[k] || [] 
    if (Object.prototype.hasOwnProperty.call(files, key)) {
        
        // modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key].default
        modules[k].push(files[key].default)
    }
}

console.log('123123====>', modules)

export default modules;