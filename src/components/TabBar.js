export default function Tabbar({ $app,initialState, onClick }) { 
    this.state = {
        initialState
    }
    this.onClick = onClick;

    this.$target = document.createElement('div');
    this.$target.className = 'tab-bar';
    $app.appendChild(this.$target);

    this.template = () => {
        return `
        <div id="all">전체</div>
        <div id="penguin">펭귄</div>
        <div id="koala">코알라</div>
        <div id="panda">판다</div>
        `;
    }
    this.render = () => {
        // console.log(this.template());
        this.$target.innerHTML = this.template();

        let $currentTab = document.getElementById(this.state);
        //$currentTab ? $currentTab.className = 'clicked' : '';
        $currentTab && ($currentTab.className = 'clicked');
        //버튼요소들에 onClick 적용
        //4개의 요소를 감싸고 있는 $target에서 div 요소 들을 다 가져옴
        const $tabBar = this.$target.querySelectorAll('div');
        // console.log(this.$target)
        // console.log($tabBar)
        //tabBar에 click 했을때 onClick 이 동작하도록 작성
        //onClick은 App.js에서 상태의 currentTab을 누른 id 값으로 설정
        $tabBar.forEach((element) => {
            element.addEventListener('click', () => {
                onClick(element.id)
            })
        });

    }
    
    this.setState = (newState) => {
        this.state = newState;
        this.render();
    }

}