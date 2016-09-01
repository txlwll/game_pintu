import GameBtn from './GameBtn'

class Dialog extends React.Component {
    render () {
        let imgUrl = require('../images/gamebtn4.png');
        // if(this.props.isShow === true){
        //     imgUrl = require('../images/gamebtn4.png')
        // }
        return (
            <div className="dialog-mask" style={{ display: this.props.isShow ? 'block' : 'none'}} >
                <div className="dialog-detail">
                    <div className="dialog-hd">
                    <span className="dialog-close ">
                        <span className="dialog-close-btn" onClick={this.props.hideDialog}></span>
                    </span>
                        <p className="cash">2000金币</p>
                    </div>
                    <GameBtn btnImg={imgUrl}/>
                </div>
            </div>
        )
    }
}

export default Dialog