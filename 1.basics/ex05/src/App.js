import React from "react";
const App = function (){
//    const app =  document.createElement('h1');
//    app.textContent = 'Hello world';
    const App = React.createElement('h1',null,'Hello world');
    return App;
}

export { App}