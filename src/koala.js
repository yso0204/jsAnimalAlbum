const API_URL = 'https://animal-api-two.vercel.app/';
//사진을 넣기 위해 content class 를 찾고
const $content = document.querySelector('div.content');
//사진을 여러개 넣어서 전달하기 위한 빈 문자열 선언
let template = "";
const getData = async (name) => {
    let res = await fetch(`${API_URL}${name}`);
    //api를 비동기 적으로 처리하기 위해서 asyn 함수로 구현
    try {
        if (res) {
            let data = await res.json();
            data.photos.forEach(element => {
                const img = document.createElement('img');
                img.src = element.url;
                $content.appendChild(img);
            });
        }
    }
    catch (err){
        console.log(err);
    }
}

getData('koala');