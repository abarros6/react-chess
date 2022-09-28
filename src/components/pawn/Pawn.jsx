import BlackPawn from '../../assets/pawn_b.png'
import WhitePawn from '../../assets/pawn_w.png'

const Pawn = (props) => {

    return (
        props.color ? <img src={BlackPawn}></img>  : 
                <img src={WhitePawn}></img>
    )
}

export default Pawn;