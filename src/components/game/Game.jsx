import Board from '../board/Board.jsx'
import King from '../king/King.jsx'
import Queen from '../queen/Queen.jsx'
import Knight from '../knight/Knight.jsx'
import Rook from '../rook/Rook.jsx'
import Bishop from '../bishop/Bishop.jsx'
import Pawn from '../pawn/Pawn.jsx'

const Game = (props) => {
    const color = true;

    return (
        <div>
            <Board
                piece={{location: {file: 0, rank: 0}, component: <Bishop color ={false}/>}}
            />
        </div>
    )
}

export default Game;