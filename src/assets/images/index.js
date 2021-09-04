const files = import.meta.globEager("./*")
const modules = {};

for (const key in files) {
    if (Object.prototype.hasOwnProperty.call(files, key)) {
        modules[key.replace(/(\.\/|\.ts)/g, '')] = files[key].default
    }
}

export default modules;