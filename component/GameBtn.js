class GameBtn extends React.Component {
    render() {
        return (
            <div className="game-btn" onClick={this.props.onUserClick}>
                <img src={this.props.btnImg} alt=""/>
            </div>
        )
    }
}

export default GameBtn
