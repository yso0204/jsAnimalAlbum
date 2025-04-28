import App from './App.js';

const $app = document.getElementById('app');
//생성자를 통해 가져와야 this 같은게 문제가 안생김(안그럼 window)를 가리킴
// let app = new App($app);
new App($app);