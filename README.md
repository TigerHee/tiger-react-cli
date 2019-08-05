# tiger-react-cli
> ## 技术栈包含：
- react
- redux
- redux-saga
- react-router异步加载
- antd按需加载
- less
- es6装饰器
- jest单元测试

It will create a directory called `tiger-react-cli` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
tiger-react-cli
├── README.md
├── node_modules        //node包
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets          //静态资源
    │   ├── style       //css文件
    │   ├── img         //图片
    │   └── js          //js包
    ├── components      //组件
    ├── page            //页面及路由
    ├── servers         //ajax请求方法
    ├── redux           //redux数据管理
    │   ├── actions
    │   ├── reducers
    │   ├── saga        //redux-saga
    │   └── stores.js
    ├── index.js
    ├── index.less
    └── serviceWorker.js
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd tiger-react-cli
```

## Build Setup

``` bash
# install dependencies
npm install / yarn install

# serve with hot reload at localhost:9999
npm start / yarn start

# build for production with minification
npm run build / yarn build

```

