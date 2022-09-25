import {ReactComponent as BlackKing} from '../../assets/blackKing.svg'
import {ReactComponent as WhiteKing} from '../../assets/whiteKing.svg'

const King = (props) => {
    const color = true;

    return (
        color ? <BlackKing/> : <WhiteKing/>
    )
}

export default King;