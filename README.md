
### 配置主题
- 在themes目录下创建主题文件夹，如se；
- 添加index.less
  ```
  // 引入当前工程中antd.less文件
  @import '../../node_modules/antd/dist/antd.less';

  @primary-color: #3dcd58;
  @success-color: @primary-color;
  @warning-color: #fbb325;
  @error-color: #ff4d4d;
  @highlight-color: #ff4d4d;
  @border-radius-base: 2px;
  @link-color: #3dcd58;
  @info-color: #3dcd58;
  @border-color-base: #d9d9d9;
  @border-color-split: @border-color-base;
  //disabled
  @disabled-color: #d9d9d9;
  @disabled-bg: #f2f2f2;
  // menu
  @menu-dark-bg: @primary-color;
  //input
  @input-height-base: 36px;
  @input-height-lg: 50px;
  @input-height-sm: 28px;
  //text
  @heading-color: #333333;
  @text-color: #666666;
  @text-color-secondary: #999999;
  @disabled-color: #c0c0c0;
  //btn
  @btn-height-base: 36px;
  @btn-height-lg: 50px;
  @btn-height-sm: 28px;
  @btn-shadow: 0 0 0 rgba(255, 255, 255, 0);
  @btn-primary-shadow: 0 0 0 rgba(255, 255, 255, 0);
  @btn-text-shadow: 0 0 0 rgba(255, 255, 255, 255);
  //font-family
  @font-family: PingFang SC, Microsoft YaHei Light, Microsoft YaHei, arial, sans-serif;

  [class*='ant'] {
    box-sizing: border-box;
    & * {
      box-sizing: border-box;
    }
    a:active {
      color: #29a644;
    }
    a:hover {
      color: #64d975;
    }
    & .ant-calendar-input {
      height: 24px;
    }
  }
  .ant {
    &-drawer-title {
      font-weight: 600;
    }
  }
  //以上的less变量可以覆盖默认的antd样式，打包后将以css3变量的形式存在，全局生效
  :root {
    // 全局变量
    --main-color: @primary-color;
    --logo-border-color: rebeccapurple;

    --header-height: 68px;
    --content-padding: 20px;

    --base-line-height: 1.428571429;
    --transition-duration: 0.35s;
    --external-link: "external link";
  }

  ```
- 添加其他样式（如有需要）

### 主题构建命令
```
// 可根据参数构建任意版本的antd主题，构建完成后，将生成两个css文件
// --t theme name，默认 se
// --v antd版本, 默认 4.17.0

npm run build --t=se --v=4.13.0
```
主题文件生后的路径为 ./themes/[-t]/[-t]@[-v].css 和 ./themes/[-t]/[-t]@[-v]-min.css

