module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "项目名称"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project description",
            "default": "A Vue.js project"
        },
        "author": {
            "type": "string",
            "message": "Author"
        },
        "build": {
            "type": "list",
            "message": "Vue build",
            "choices": [{
                "name": "Runtime + Compiler: recommended for most users",
                "value": "standalone",
                "short": "standalone"
            }, {
                "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
                "value": "runtime",
                "short": "runtime"
            }]
        },
        "singlePage": {
            "type": "confirm",
            "message": "是否为单页面应用"
        },
        "port": {
            "type": "string",
            "message": "本地开发端口",
            "default": 8080
        },
        "hash": {
            "type": "confirm",
            "message": "打包格式(Y: 'index.js?ts=***', N: 'index.***.js')",
            "default": false
        },
        "vuex": {
            "type": "confirm",
            "message": "Use vuex?",
            "default": false
        },
        "router": {
            "type": "confirm",
            "message": "Use vue-router?",
            "default": false
        },
        "unit": {
            "type": "confirm",
            "message": "Setup unit tests with Karma + Mocha?",
            "default": false
        },
        "e2e": {
            "type": "confirm",
            "message": "Setup e2e tests with Nightwatch?",
            "default": false
        }
    },
    "filters": {
        "test/unit/**/*": "unit",
        "test/e2e/**/*": "e2e",
        "src/main.js": "singlePage",
        "src/App.vue": "singlePage",
        "src/pages/**/*": "!singlePage",
        "src/vuex/**/*": "vuex",
        "src/router-config.js": "router"
    },
    "completeMessage": "Just coding 💻"
}
