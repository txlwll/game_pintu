import GameBtn from './GameBtn'

class Dialog extends React.Component {
    render () {
        return (
            <div className="dialog-mask" style={{ display: this.props.isShow ? 'block' : 'none'}} >
                <div className="dialog-detail">
                    <div className="dialog-hd">
                        <h4>恭喜您获得</h4>
                    <span className="dialog-close ">
                        <span className="dialog-close-btn" onClick={this.props.hideDialog}></span>
                    </span>
                        <p className="cash">100元现金劵</p>
                    </div>
                    <GameBtn btnText='前往领取'/>
                </div>
            </div>
        )
    }
}

export default Dialog