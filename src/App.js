import Tabbar from "./components/TabBar.js";
import Content from "./components/Contents.js";
import { request } from "./components/Api.js";

export default function App($app) {
    //초기값 설정
    this.state = {
        // curreneTab: 'all',
        curreneTab: window.location.pathname.replace('/','') || 'all',
        photos:[],
    }

    const tabBar = new Tabbar({
        $app,
        initialState: '',
        onClick: async (name) => {
            // 주소에 /panda 같은 값들이 들어가게 수정
            history.pushState(null, `${name} 사진`, name);
            this.updateContent(name);
        }
    });

    const content = new Content({
        $app,
        initialState: [],
    });
    
    //상태 업데이트
    this.setState = (newState) => {
        this.state = newState;
        tabBar.setState(this.state.curreneTab);
        content.setState(this.state.photos);
    }

    this.updateContent = async (tabName) => {
        const curreneTab = tabName === 'all' ? '' : tabName;
        const photos = await request(curreneTab);
        this.setState({
            ...this.state,
            curreneTab: tabName,
            photos: photos,
        });
    };
    //앞,뒤로 가기 이벤트 발생 시
    window.addEventListener('popstate', async () => {
        this.updateContent(window.location.pathname.replace('/', '') || 'all');
        
    })

    const init = async () => {
        try {
            this.updateContent(window.location.pathname.replace('/', '') || 'all');
        }
        catch (error) {
            console.log(error);
        }
    };

    init();
}