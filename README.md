
### 配置主题

- 在themes目录下创建主题文件夹，如se；
- 添加index.less

```
// 引入当前工程中antd.less文件
@import '../../node_modules/antd/dist/antd.less';
// less变量，用来覆盖antd样式
@primary-color: #3dcd58;
@success-color: @primary-color;
@warning-color: #fbb325;
...
// 以上的less变量可以覆盖默认的antd样式，打包后将以css3变量的形式存在，全局生效
:root {
    // 全局变量
    --main-color: @primary-color;
}
```

- 可添加其他全局样式（如有需要）

```
:root {
    // 全局变量
    --main-color: @primary-color;
    --logo-border-color: rebeccapurple;
    --header-height: 68px;
    --content-padding: 20px;
...
}

```
### 主题构建命令

- 可根据参数构建任意版本的antd主题，构建完成后，将在dist目录下生成压缩和未压缩两版css文件

```
// --t 主题名，默认 se
// --v antd版本, 默认 4.17.0
yarn build --t=se --v=4.13.0

```

### 使用方法

- 一：在项目的根html最底部，通过cdn的方式远程引用，引用地址为：https://cdn.jsdelivr.net/npm/webstyles-antd-css3-template/dist/[主题名称]@[antd版本].css
- 二：如果远程引用并不能满足需求，可以通过npm i webstyles-antd-css3-template 或 yarn add webstyles-antd-css3-template将工程安装到本地，自定义构建，然后引用本地文件

```
<body>
  <div id="root" style="height:100vh;background:#f0f2f5;overflow: hidden;"></div>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/webstyles-antd-css3-template/dist/se@4.17.0.css" />
</body>
</html>

```