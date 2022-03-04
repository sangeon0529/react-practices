import './assets/css/App.css';

const app = function (){
    const app =  document.createElement('h1');
    app.className='Header';
    app.textContent = 'Hello world';
    return app;
}

export { app}