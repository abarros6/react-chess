import BlackBishop from '../../assets/bishop_b.png'
import WhiteBishop from '../../assets/bishop_w.png'

const Bishop = (props) => {

    return (
        props.color ? <img src={BlackBishop} onClick={props.onClick}></img>  : 
                <img src={WhiteBishop} onClick={props.onClick}></img>
    )
}

export default Bishop;