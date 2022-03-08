CSS 모듈 번들링 하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader

2. CSS loader 설정(webpack.confi.js)
       module: {
        rules:[{
            test: /\.css$/i,
            use: ['style-loader','css-loader']
        }]
    }

3. 개발 서버 실행
$ npm start
