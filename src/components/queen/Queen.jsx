import {ReactComponent as BlackQueen} from '../../assets/blackQueen.svg'
import {ReactComponent as WhiteQueen} from '../../assets/whiteQueen.svg'

const Queen = (props) => {
    const color = true;

    return (
        color ? <BlackQueen/> : <WhiteQueen/>
    )
}

export default Queen;