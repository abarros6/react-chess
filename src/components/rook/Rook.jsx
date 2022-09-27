import BlackRook from '../../assets/rook_b.png'
import WhiteRook from '../../assets/rook_w.png'

const Rook = (props) => {
    const color = true;

    return (
        color ? <img src={BlackRook}></img>  : 
                <img src={WhiteRook}></img>
    )
}

export default Rook;