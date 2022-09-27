import Tile from '../tile/Tile.jsx'
import './board.css'

const Board = (props) => {

    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const ranks = ['8', '7', '6', '5', '4', '3', '2', '1']

    //this is just for visualizing the grid
    let xy = [
        [0,1,2,3,4,5,6,7], //0
        [0,1,2,3,4,5,6,7], //1
        [0,1,2,3,4,5,6,7], //2
        [0,1,2,3,4,5,6,7], //3
        [0,1,2,3,4,5,6,7], //4
        [0,1,2,3,4,5,6,7], //5
        [0,1,2,3,4,5,6,7], //6
        [0,1,2,3,4,5,6,7], //7
    ]

    const createBoard = () => {
        let chessGrid = []

        for (let rank of ranks) {
            for (let file of files) {
                let x = files.indexOf(file)
                let y = ranks.indexOf(rank)
                let n = x + y + 2
                n % 2 === 0 ? 
                    chessGrid.push(<Tile color={false} x={x} y={y}/>) :
                    chessGrid.push(<Tile color={true} x={x} y={y}/>)  
            }
        }

        return chessGrid
    }

    const boardArray = createBoard()

    return (
        <div id={'chessboard'}>
            {boardArray} 
        </div>
    )
}

export default Board;