module.export = {
    generateID: () =>
        Math.floor(Math.random() * new Date().getMilliseconds) / 30,
}
