import Tile from '../tile/Tile.jsx'

const Board = (props) => {

    const size = '80px'
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    const makeBoard = () => {
        let boardCoordinates = []
        for (let r = 8; r > 0; r--) {
            let row = []
            for (let c = 1; c < 9; c++) {

                r % 2 === 0 ? c % 2 === 0 ? 
                row.push(<Tile color={'#B58962'} size={size} coor={{file: files[c-1], rank: r}}/>) : 
                row.push(<Tile color={'#F0D9B5'} size={size} coor={{file: files[c-1], rank: r}}/>)
                : c % 2 === 0 ? 
                row.push(<Tile color={'#F0D9B5'} size={size} coor={{file: files[c-1], rank: r}}/>) : 
                row.push(<Tile color={'#B58962'} size={size} coor={{file: files[c-1], rank: r}}/>)

            }
            boardCoordinates.push(row)
        }
        return boardCoordinates
    }
    
    const boardArray = makeBoard()
    
    //if the props.piece.component === the actual react piece 
    // props.piece.position === the index on the board of that peices' location

    return (
        <tbody>
            {
                boardArray.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex}>
                            {row.map((tile, tileIndex) => {
                                return (
                                    <td key={tileIndex}>
                                        {tile}
                                        {console.log(`${rowIndex}, and the tile index ${tileIndex}`)}
                                        {console.log(props.piece)}
                                        {props.piece.location === {file: rowIndex, rank: tileIndex} && 
                                        props.piece.component}
                                        
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })

            }
        </tbody>
    )
}

export default Board;