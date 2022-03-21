ex03: Component - React Event

01: Inline Handler
02: Function Handler
03: Synthetic Event(이벤트 합성)
04: Event Handler 예제들
05: Event Handler에서 'ref'를 사용하기: Functional Component
06: Event Handler에서 'ref'를 사용하기: Class Component

1. 설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom prop-types

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