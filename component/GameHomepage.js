import PintuHeader from './PintuHeader'
import GameRule from './GameRule'
import GameBtn from './GameBtn'
import GameContain from './GameContain'
import Dialog from './Dialog'

var game = null;
var playInterval = null;


class GameHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserStarted: false, //是否参与活动
            playTimeout: 10,      //游戏开始倒计时
            isStarted: false,    //是否点击开始游戏
            gameStarted: false,   //游戏开始
            gameTimeout: 60,       //游戏结束时间倒计时
        };
    }

    //组件挂载后初始化game
    // componentDidMount() {
    //     game = new Puzzle('puzzle', 280, 280, 'images/chocolate_280.png', 3, true);
    // console.log($('#puzzle'))
    // }

    // 跳转到游戏
    goToPlay = () => {
        this.autoPlay()
        this.setState({
            isUserStarted: true,
        })
        game = new Puzzle('puzzle', 280, 280, 'images/game1.png', 3, true);
    }

    //游戏自动倒计时10秒
    autoPlay = () => {
        this.startPlayInterval();
        return false;
    }

    // 点按钮直接进入游戏界面
    startPlay = () => {
        if (this.state.isStarted === true) {
            return false
        }
        clearInterval(playInterval);
        this.setState({
            isStarted: true,
            gameStarted: true,
            playTimeout: 0,
        });
        this.startGameInterval();
        game.start();
    }


    //游戏倒计时10秒动作
    startPlayInterval = () => {
        playInterval = setInterval(() => {
            this.setState({
                playTimeout: this.state.playTimeout - 1
            })
            if (this.state.playTimeout <= 0) {
                clearInterval(playInterval)
                this.setState({
                    gameStarted: true,
                    isStarted: true,
                });
                this.startGameInterval();
                game.start();
            }
        }, 1000)
    }

    // 游戏结束倒计时60秒
    startGameInterval = () => {
        const gameInterval = setInterval(() => {
            this.setState({
                gameTimeout: this.state.gameTimeout - 1
            });
            if (this.state.gameTimeout <= 0) {
                clearInterval(gameInterval)
                this.setState({
                    playTimeout: 10,
                    isStarted: false,
                    gameStarted: false,
                    gameTimeout: 60,
                });
                game.shuffle();
                this.autoPlay();
            }
            else {
                if (game.isOkay()) {
                    clearInterval(gameInterval);
                    this.setState({
                        isSuccess: true,
                    });
                };
            }
        }, 1000)
    }

    //弹出框关闭
    handleHideDialog = () =>{
        this.setState({
            // playTimeout: 10,
            // isStarted: false,
            // gameStarted: false,
            isSuccess: false,
            // gameTimeout: 60,
        });
        // game.shuffle();
    }

    render() {
        let imgUrl = require('../images/gamebtn1.png');
        if(this.state.isUserStarted === true){
            imgUrl = require('../images/gamebtn2.png')
        }
        if(this.state.isStarted === true){
            imgUrl = require('../images/gamebtn3.png')
        }
        if(this.state.isSuccess === true) {
            imgUrl = require('../images/gamebtn4.png')
        }
        const containerBgc = this.state.isUserStarted ? 'container-two' : 'container';
        return (
            <div className={containerBgc}>
                <PintuHeader gameHeader={this.state.isUserStarted}/>
                <div className="game-content">
                    <div style={{display: this.state.isUserStarted ? 'block' : 'none'}}>
                        <GameContain isStarted='false'
                                     playTimeout={this.state.playTimeout}
                                     gameStarted={this.state.gameStarted}
                                     gameTimeout={this.state.gameTimeout}
                        />
                    </div>
                    <div className="rule" style={{display: this.state.isUserStarted ? 'none' : 'block'}}>
                        <GameRule />
                    </div>
                </div>
                <GameBtn btnImg={imgUrl}
                         onUserClick={this.state.isUserStarted ? this.startPlay : this.goToPlay}
                         isDisable={this.state.isStarted}
                />
                <Dialog isShow = {this.state.isSuccess}
                        hideDialog = {this.handleHideDialog}
                />
            </div>
        )
    }
}

export default GameHomepage
