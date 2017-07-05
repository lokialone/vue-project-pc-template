# {{ name }}

> {{ description }}

## 项目简介

### 1. 如何访问

// TODO

### 2. 项目文档、设计稿

// TODO

## 初始化项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

## 发布

> 默认是将 Makefile 同级目录 dist 文件夹下的所有文件发布到服务器上指定目录

```bash
# 预览发布详情（不会执行发布）
make preview-dev

# 发布到测试环境
make publish-dev

# 更多命令
make help
```
