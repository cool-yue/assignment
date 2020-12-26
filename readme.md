## 运行说明 ##
1.运行前，需打开mock服务器,见`src/mock`

2.运行前，需`npm install`

3.`npm run lint`,查看代码是否符合规范

4.`npm run fix`,修改不符合规范的代码（仅限eslint能fix的）

5.`npm run test`,执行单元测试(基于karma,mocha，sinon，chai)，需要安装`chrome driver`(环境配置的是chrome，也可以自行配置)

## 目录说明 ##

`src/api`: http数据请求的方法

`src/assets`: 静态文件

`component`: 能够或者可能复用的组件

`layout`: 业务输出界面

`test`: 测试代码

`utils`： 工具代码