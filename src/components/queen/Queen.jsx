import BlackQueen from '../../assets/queen_b.png'
import WhiteQueen from '../../assets/queen_w.png'

const Queen = (props) => {
    const color = true;

    return (
        color ? <img src={BlackQueen}></img>  : 
                <img src={WhiteQueen}></img>
    )
}

export default Queen;