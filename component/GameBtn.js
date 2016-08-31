
class GameBtn extends React.Component {
    render(){
        return (
            <div className="game-btn">
                <button className={this.props.isDisable ? 'game-status is-disable' : 'game-status'}
                        onClick={this.props.onUserClick}>
                    {this.props.btnText}
                </button>
            </div>
        )
    }
}

export default GameBtn
