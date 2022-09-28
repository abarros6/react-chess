import BlackKnight from '../../assets/knight_b.png'
import WhiteKnight from '../../assets/knight_w.png'

const Knight = (props) => {

    return (
        props.color ? <img src={BlackKnight}></img>  : 
                <img src={WhiteKnight}></img>
    )
}

export default Knight;