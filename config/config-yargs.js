const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Direction of climate',
        demand: true

    }
}).argv;

module.exports = {
    argv
}