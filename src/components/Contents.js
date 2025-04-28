export default function Content({$app,initialState}) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'content';
    $app.appendChild(this.$target);
    
    this.template = () => {
        let temp = '';
        //현재 눌린 버튼의 사진 데이터가 담겨있는 state 가 존재 한다면
        if (this.state) {
            this.state.forEach((elm) => {
                temp += `<img src ="${elm.url}"></img>`;
            })
        }
        return temp;
    }

    this.render = () => {
        this.$target.innerHTML = this.template();
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render();
}