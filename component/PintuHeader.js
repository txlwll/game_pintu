class PintuHeader extends React.Component {

    render() {
        const gameHeader = this.props.gameHeader ? ' header game-header' : 'header';

        return (
            <div className={gameHeader}>
                <img src={require('../images/gametitle.png')} alt=""/>
            </div>
        )
    }
}

export default PintuHeader
