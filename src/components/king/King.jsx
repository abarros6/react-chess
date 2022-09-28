import BlackKing from '../../assets/king_b.png'
import WhiteKing from '../../assets/king_w.png'

const King = (props) => {
    

    return (
        props.color ? <img src={BlackKing}></img>  : 
                <img src={WhiteKing}></img>
    )
}

export default King;