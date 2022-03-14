ex01: Property

01. props(property)
    1) 컴포넌트의 데이터
    2) 부모에서 자식으로 전달 된다.
        - Component Communication(컴포넌트간의 통신), Data Flow
        - Top -> Down
    3) 자식 컴포넌트에서 변경 불가
    4) 부모가 소유한다.

02. Foodlist src/01 : 클래스 컴포넌트
03. Foodlist src/02 : Data Flow(Top -> Down) : 클래스 컴포넌트
04. Foodlist src/03 : Data Flow(Top -> Down) : 함수 컴포넌트
05. Foodlist src/04 : Validation

1. 설치
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
$ npm i react react-dom

2. 설정
webpack.config.js 설정
babel.config.json 설정

3. npm 스크립트 추가하기
  "scripts": {
    "debug": "npx webpack serve --progress --mode develpment --env ",
    "build": "npx webpack"
  }

4. 실행
$ npm run debug src={01|02|03|04......}
