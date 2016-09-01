class GameBtn extends React.Component {
    render() {
        const gameBtn = this.props.isDisable ? 'game-play' : 'game-btn'
        return (
            <div className={gameBtn} onClick={this.props.onUserClick}>
                <img src={require('../images/gamebtn1.png')} alt=""
                     style={{display: this.props.btnImg ? 'none' : 'block'}}/>
                <img src={require('../images/gamebtn2.png')} alt=""
                     style={{display: this.props.btnImg ? 'block' : 'none'}}/>
                <img src={require('../images/gamebtn3.png')} alt="" style={{display:'none'}}/>
            </div>
        )
    }
}

export default GameBtn
