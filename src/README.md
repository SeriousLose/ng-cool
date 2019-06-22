# 项目目录

```

longAngular
.
├── src      // 包含组件文件，其中定义了应用逻辑和数据
│   ├── app                               // 应用逻辑和数据。Angular 组件、模板和样式都在这里
│   │   ├── app-routing.module.ts         // 定义前端路由模块
│   │   ├── app.component.html            // 定义与根组件 AppComponent 关联的模板
│   │   ├── app.component.less            // 定义根组件 AppComponent 的 CSS 样式表
│   │   ├── app.component.spec.ts         // 定义根组件 AppComponent 的单元测试文件
│   │   ├── app.component.ts              // 定义应用程序根组件
│   │   ├── app.module.ts                 // 定义根模块
│   │   ├── components                    // 组件
│   │   ├── framework                     // 架构
│   │   │   ├── components                // 单一组件
│   │   │   ├── directive                 // 指令
│   │   │   │   └── debounce-click.directive.ts
│   │   │   ├── http                      // 数据请求
│   │   │   ├── pipe                      // 管道
│   │   │   ├── public                    // 公共资源
│   │   │   │   ├── css                   // css
│   │   │   │   ├── js                    // js
│   │   │   │   │   └── common.ts         // common.ts 公共js文件
│   │   │   │   └── tools                 // 工具
│   │   │   └── services                  // 服务
│   │   └── pags                          // 所有的页面
│   ├── assets                            // 包含图像文件和其它文件，当构建应用时会被原样复制到构建目标中。
│   │   ├── css
│   │   │   └── reset.less
│   │   ├── fonts
│   │   ├── i18n
│   │   │   ├── en-US.json
│   │   │   ├── zh-CN.json
│   │   │   └── zh-TW.json
│   │   ├── images
│   │   └── themes
│   ├── browserslist                    // 配置各个目标浏览器和 Node.js 版本之间的市场占有率，供各种前端工具使用。
│   ├── environments                    // 包含针对特定目标环境的配置选项。
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico                     // 一个用在书签栏上的应用图标。
│   ├── index.html                      // 当有人访问你的应用时给出的主 HTML 文件
│   ├── karma.conf.js
│   ├── main.ts                         // 应用的主入口点。
│   ├── polyfills.ts                    // 为浏览器支持提供腻子脚本（polyfill）
│   ├── styles.less                     // 列出为项目提供样式的 CSS 文件。其扩展名和你为项目配置的样式预处理器保持一致
│   ├── test.ts                         // 单元测试的主入口点，其中带有一些特定于 Angular 的配置。一般来说你不必编辑这个问题。
│   ├── tsconfig.app.json               // 继承自工作区级的 tsconfig.json 文件。
│   ├── tsconfig.spec.json              // 继承自工作区级的 tsconfig.json 文件。
│   └── tslint.json                     // 继承自工作区级的 tsconfig.json 文件

```