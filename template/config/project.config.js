module.exports = {
    projectTemplate: 'lokialone/vue-project-pc-template#2.0',
    noEscape: {{ noEscape }},
name: '{{ name }}',
    description: '{{ description }}',
        author: '{{ author }}',
            singlePage: { { singlePage } },
/*
 * 多页面的应用，要在 multiPageNames 里配置每个页面的名称, eg:
 *
 *    multiPageNames: [ 'list', 'detail' ]
 *
 * 然后需要在 src/pages 目录下创建同名文件
 */
multiPageNames: [],
    build: '{{ build }}',
        unit: { { unit } },
e2e: { { e2e } },
port: { { port } },
vuex: { { vuex } },
router: { { router } },
hash: { { hash } },
destDirName: '{{ destDirName }}',
    autoOpenBrowser: true
};
