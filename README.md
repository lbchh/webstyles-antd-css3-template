### 介绍


一款主题css文件构建器，可以自定义antd主题，并将修改后的antd主题变量整合到css3变量中，最终构建成一个纯css文件。

- 支持创建自定义主题
- 可以通过cdn引用
- 一键生成指定antd版本的主题文件


### 使用方法

- 一：在项目的html最底部，通过cdn的方式远程引用，引用地址为：
      https://cdn.jsdelivr.net/npm/webstyles-antd-css3-template[webstyles-antd-css3-template版本]/dist/[主题名称]@[antd版本].css

```
<body>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/webstyles-antd-css3-template@1.2.4/dist/se@4.13.0.css" />
</body>
</html>

```

- 二：如果远程引用不能满足需求，或者缺少相应antd版本的主题，可通过install将工程安装到本地，自定义构建主题文件

### 构建主题

- 首先安装webstyles-antd-css3-template： npm i webstyles-antd-css3-template 或 yarn add webstyles-antd-css3-template
- 然后：cd .\node_modules\webstyles-antd-css3-template\
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
    // css3全局变量
    --primary-color: @primary-color;
    --success-color: @success-color;
    --warning-color: @warning-color;
    --error-color: @error-color;
    --highlight-color: @highlight-color;
    ...
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

- 最后执行主题构建命令：yarn theme --t=se --v=4.17.0，两个参数，--t是主题名称（默认se），--v是antd版本(默认4.17.0)
- 根据参数构建任意版本的antd主题，构建完成后，将在dist目录下生成压缩和未压缩的两版css文件

```
yarn theme --t=se --v=4.13.0

```

