ex04: Component - State

01. 기본개념
    src/01

02. 제어 컴포넌트
    src/02
    src/03

03. 상태(Stateful) 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
    emaillist

1. 설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

2. 설정
config/webpack.config.js 설정
config/babel.config.json 설정

3. npm 스크립트 추가하기
  "scripts": {
    "debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env ",
    "build": "npx webpack"
  }

4. 실행
$ npm run debug src={01|02|03|04......}