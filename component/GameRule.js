class GameRule extends React.Component {
    render() {
        return (
            <div className="game-rule">
                <div className="game-rule-detail">
                    <img src={require('../images/game-rule-title.png')} alt=""/>
                    <p>
                        1234在规定的时间内完成拼图将有机会获得10元，50元，100元等现金劵
                    </p>
                </div>
            </div>
        )
    }
}

export default GameRule