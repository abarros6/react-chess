import {ReactComponent as BlackRook} from '../../assets/blackRook.svg'
import {ReactComponent as WhiteRook} from '../../assets/whiteRook.svg'

const Rook = (props) => {
    const color = true;

    return (
        color ? <BlackRook/> : <WhiteRook/>
    )
}

export default Rook;