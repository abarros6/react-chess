import {ReactComponent as BlackKnight} from '../../assets/blackKnight.svg'
import {ReactComponent as WhiteKnight} from '../../assets/whiteKnight.svg'

const Knight = (props) => {
    const color = true;

    return (
        color ? <BlackKnight/> : <WhiteKnight/>
    )
}

export default Knight;