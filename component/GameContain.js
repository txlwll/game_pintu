class GameContain extends React.Component {
    render() {
        return (
            <div className="game-contain">
                <div className="game-contain-detail" style={{display: this.props.gameStarted ? 'none' : 'block'}}>
                    <p>你还有<span>{this.props.playTimeout}</span>秒时间看原图哦</p>
                    <img src={require('../images/chocolate.png')} alt="#"/>
                </div>
                <div className="game-contain-detail" style={{display: this.props.gameStarted ? 'block' : 'none'}}>
                    <div class="puzzle" id="puzzle" >
                        <div className="time" style={{display: 'none'}}><span>0</span> <span>00:00.000</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameContain