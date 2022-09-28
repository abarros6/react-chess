import BlackBishop from '../../assets/bishop_b.png'
import WhiteBishop from '../../assets/bishop_w.png'

const Bishop = (props) => {

    return (
        props.color ? <img src={BlackBishop}></img>  : 
                <img src={WhiteBishop}></img>
    )
}

export default Bishop;