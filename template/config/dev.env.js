var merge = require('webpack-merge');
var commonConf = require('./common.env');
var projectConfig = require('./project.config')

var devConf = merge(commonConf, {
    env: 'dev',
    assetsPublicPath: '//f2e.souche.com/projects/{{ department }}/{{ name }}/',
    // globalConfig 中的 key 需要为 JSON 字符串
    globalConfig: {
        NODE_ENV: JSON.stringify("development")
    },
    port: projectConfig.port,
    proxyTable: {}
});

module.exports = devConf;
