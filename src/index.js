//SPA로 구현할때
const API_URL = 'https://animal-api-two.vercel.app/';
const $content = document.querySelector('div.content');
const $tabs = document.querySelectorAll('.tab');

const getData = async (animal) => {
    try {
        const url = animal === 'all' ? API_URL : `${API_URL}${animal}`;
        let res = await fetch(url);
        if (res) {
            let data = await res.json();
            $content.innerHTML = ""; //이전 내용 비우기
            data.photos.forEach(element => {
                const img = document.createElement('img');
                img.src = element.url;
                $content.appendChild(img);
            });
        }
    }
    catch (err) {
        console.log(err);
    }
};

//tab 클릭 이벤트 구현
$tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        $tabs.forEach((t) => t.classList.remove('clicked'));
        tab.classList.add('clicked');

        const animal = tab.dataset.animal;
        getData(animal);
    })
});

getData('all');