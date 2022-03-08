import React from "react";
const App = function (){
    // const app = React.createElement('h1',null,'Hello world');
    // return app;
    const message = 'Hello World'
    return (
        <div>
            <h1>{message}</h1>;
        </div>
    );
       
}

export { App}