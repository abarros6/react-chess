import './tile.css'

const Tile = (props) => {

    //inside the tile divs, render a piece if the
    const selectPiece = () => {
        
    }
    

    return (
        props.color ? 
            <div className={`tile black-tile ${props?.moveCircle}`}>
                {/* {props?.piece?.component} */}
                <span className='circle'>
                    {props?.piece?.component}
                </span>
            </div> : 
            <div className={`tile white-tile ${props?.moveCircle}`}>
                <span>
                    {props?.piece?.component}
                </span>
                {/* {props?.piece?.component} */}
            </div>
    )
}

export default Tile;