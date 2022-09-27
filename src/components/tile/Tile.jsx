import './tile.css'
import King from '../king/King.jsx'
import Queen from '../queen/Queen.jsx'
import Knight from '../knight/Knight.jsx'
import Rook from '../rook/Rook.jsx'
import Bishop from '../bishop/Bishop.jsx'
import Pawn from '../pawn/Pawn.jsx'



const Tile = (props) => {

    //inside the tile divs, render a piece if the
    
    

    return (
        props.color ? 
            <div className="tile black-tile"><King color = {true} className = {'piece'}/></div> : 
            <div className="tile white-tile"></div>
    )
}

export default Tile;