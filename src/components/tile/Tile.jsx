import './tile.css'

const Tile = (props) => {

    //inside the tile divs, render a piece if the
    const selectPiece = () => {
        
    }
    

    return (
        props.color ? 
            <div className="tile black-tile">{props?.piece?.component}</div> : 
            <div className="tile white-tile">{props?.piece?.component}</div>
    )
}

export default Tile;