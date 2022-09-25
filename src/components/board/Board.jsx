import Tile from '../tile/Tile.jsx'

const Board = (props) => {

    const size = '80px'
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    const makeBoard = () => {
        let boardCoordinates = []
        for (let r = 1; r < 9; r++) {
            let row = []
            for (let c = 1; c < 9; c++) {

                r % 2 === 0 ? c % 2 === 0 ? 
                row.push(<Tile color={'#F0D9B5'} size={size} coor={{file: files[c-1], rank: r}}/>) : 
                row.push(<Tile color={'#B58962'} size={size} coor={{file: files[c-1], rank: r}}/>)
                : c % 2 === 0 ? 
                row.push(<Tile color={'#B58962'} size={size} coor={{file: files[c-1], rank: r}}/>) : 
                row.push(<Tile color={'#F0D9B5'} size={size} coor={{file: files[c-1], rank: r}}/>)

            }
            boardCoordinates.push(row)
        }
        return boardCoordinates
    }
    
    const boardArray = makeBoard()
    

    return (
        <div>
            <tbody>
            {
                boardArray.map((row, rowIndex) => {
                    return (
                        <tr>
                            {row.map((tile) => {
                                return (
                                    <td>
                                        {tile}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })

            }
            </tbody>
            
        </div>
    )
}

export default Board;