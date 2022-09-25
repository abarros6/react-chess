import {ReactComponent as BlackBishop} from '../../assets/blackBishop.svg'
import {ReactComponent as WhiteBishop} from '../../assets/whiteBishop.svg'

const Bishop = (props) => {
    const color = true;

    return (
        color ? <BlackBishop/> : <WhiteBishop/>
    )
}

export default Bishop;