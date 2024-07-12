使用Monorepo管理方案,使用pnpm管理依赖,实现多项目之间资源复用.

项目采用vite搭建, 配置自动引入(AutoImport),请求代理,环境变量

技术: vue3.0,pinia,vue-router,naive-ui等相关技术 包含子项目: threejs, openlayers, cesium

数据采用mock环境,实现真实请求

包含功能演示: 路由权限校验,微前端(qiankun)使用,封装threejs, openlayers, cesium并演示vue3.0中的最佳使用方案

各子项目可独立部署, 也可集成

#运行

pnpm i

pnpm dev
