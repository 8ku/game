# about build

[link](https://chirpy.cotes.info/posts/getting-started/)

- 安装ruby(之前安装过, 如果换电脑可能工程量极大)

- `sudo gem install 缺少的插件`

- 安装额外文件 `brew install coreutils`

- 拉下项目后清空原项目里的配置和post `bash tools/init.sh`

- 更改`_config.yml`里的`url` 和 `baseurl`

  - url: 填原地址
  - baseurl: /仓库名

- 本地测试: `bash tools/run.sh`

- post格式

  - ```xml 
    ---
    title: TITLE
    date: date: 2019-08-08 14:10:00 +0800
    categories: [TOP_CATEGORIE, SUB_CATEGORIE]
    tags: [TAG]     # TAG names should always be lowercase
    ---
    ```

  - 一级标题和二级标题可以出现在右侧浮动内导航中

- 推送到github前先随便commit点东西,再把github page的branch 更改为`gh-pages`

- 修改主题css: `assets/css/_colors`