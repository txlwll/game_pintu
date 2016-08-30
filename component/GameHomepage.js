
import PingtuHeader from './PintuHeader'
import GameRule from './GameRule'
import GameBtn from './GameBtn'
import GameContain from './GameContain'

require('../css/game.css')

var game = null;


class GameHomepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isUserStarted: false, //是否参与活动
            playTimeout: 10,      //游戏开始倒计时
            isStarted: false,    //是否点击开始游戏
            gameStarted: false,   //游戏开始
            gameTimeout: 60,       //游戏结束时间倒计时
        };
    }
    // 跳转到游戏
    goToPlay = () => {
        this.setState({
            isUserStarted: true,
        })
    }

    //组件挂载后初始化game
    componentDidMount() {
        game = new Puzzle('puzzle', 280, 280, 'images/chocolate_280.png', 3, true);
    }

        //开始倒计时10秒
    startPlay = () => {
        if (this.state.isStarted === true) {
            return false
        }
        this.setState({
            isStarted: true
        });
        this.startPlayInterval();
        return false;
    }

    startPlayInterval = () =>{
    const playInterval = setInterval(() => {
        this.setState({
            playTimeout: this.state.playTimeout - 1
        })
        if (this.state.playTimeout <= 0){
            clearInterval(playInterval)
            this.setState({
                gameStarted: true
            });
            this.gameStart()
        }
    },1000)}

    // 游戏结束倒计时60秒
    gameStart = () =>{
        const gameInterval = setInterval(() =>{
            this.setState({
                gameTimeout: this.state.gameTimeout - 1
            });
            if(this.state.gameTimeout <= 0){
                clearInterval(gameInterval)
                this.setState({
                    playTimeout: 10,
                    isStarted: false,
                    gameStarted: false,
                    gameTimeout: 60,
                });
                game.shuffle();
            }
            else {
                if(game.isOkay()){
                    clearInterval(gameInterval);
                    this.setState({
                        isSuccess: true,
                    })
                };
            }
        },1000)
    }

    render (){
        return (
            <div className="container" style={{background: this.state.isUserStarted ? '#DE5E5E' : '#ccc'}}>
                <PingtuHeader />
                <div className="game-content">
                    { this.state.isUserStarted ?
                        <GameContain isStarted = 'false'
                                     playTimeout = {this.state.playTimeout}
                                     gameStarted = {this.state.gameStarted}
                                     gameTimeout = {this.state.gameTimeout}
                    />
                        :
                        <GameRule /> }
                </div>
                <GameBtn btnText={this.state.isUserStarted ? '看完，开始！' : '立即开始'}
                         onUserClick = {this.state.isUserStarted ? this.startPlay : this.goToPlay}
                         isDisable = {this.state.isStarted}
                />
            </div>
        )
    }
}

export default GameHomepage
