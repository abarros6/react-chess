import BlackKnight from '../../assets/knight_b.png'
import WhiteKnight from '../../assets/knight_w.png'

const Knight = (props) => {
    const color = true;

    return (
        color ? <img src={BlackKnight}></img>  : 
                <img src={WhiteKnight}></img>
    )
}

export default Knight;