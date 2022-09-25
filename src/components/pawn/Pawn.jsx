import {ReactComponent as BlackPawn} from '../../assets/blackPawn.svg'
import {ReactComponent as WhitePawn} from '../../assets/whitePawn.svg'

const Pawn = (props) => {
    const color = true;

    return (
        color ? <BlackPawn/> : <WhitePawn/>
    )
}

export default Pawn;