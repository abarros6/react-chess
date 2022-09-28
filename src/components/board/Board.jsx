import Tile from '../tile/Tile.jsx'
import './board.css'

import King from '../king/King.jsx'
import Queen from '../queen/Queen.jsx'
import Knight from '../knight/Knight.jsx'
import Rook from '../rook/Rook.jsx'
import Bishop from '../bishop/Bishop.jsx'
import Pawn from '../pawn/Pawn.jsx'

import { useState, useEffect} from 'react'

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

    //returns an array of piece objects
    const initPieces = () => {
        const startingPieces = xy.map((x) => {
            let rank = xy.indexOf(x)
            return x.map((y) => {
                let file = y
                let piece = {x: rank, y: file, component: ''}

                //bunch of conitions for the returned peices 
                
                //black pawns 
                if (rank === 1) {
                    piece.component = <Pawn color={true}/>
                    return piece
                }

                //white pawns 
                if (rank === 6) {
                    piece.component = <Pawn color={false}/>
                    return piece
                }

                //black kinghts, rooks, bishops, king, queen
                if (rank === 0) {
                    if (file === 0 || file === 7) {
                        piece.component = <Rook color={true}/>
                        return piece
                    }
                    if (file === 1 || file === 6) {
                        piece.component = <Knight color={true}/>
                        return piece
                    }
                    if (file === 2 || file === 5) {
                        piece.component = <Bishop color={true}/>
                        return piece
                    }
                    if (file === 3) {
                        piece.component = <Queen color={true}/>
                        return piece
                    }
                    if (file === 4) {
                        piece.component = <King color={true}/>
                        return piece
                    }
                }

                //white kinghts, rooks, bishops, king, queen
                if (rank === 7) {
                    if (file === 0 || file === 7) {
                        piece.component = <Rook color={false}/>
                        return piece
                    }
                    if (file === 1 || file === 6) {
                        piece.component = <Knight color={false}/>
                        return piece
                    }
                    if (file === 2 || file === 5) {
                        piece.component = <Bishop color={false}/>
                        return piece
                    }
                    if (file === 3) {
                        piece.component = <Queen color={false}/>
                        return piece
                    }
                    if (file === 4) {
                        piece.component = <King color={false}/>
                        return piece
                    }
                }
            })
        })

        return startingPieces
    }

    const [piecesArray, setPiecesArray] = useState(initPieces())

    console.log(piecesArray)

    useEffect(() => {
        renderBoard()
    }, [piecesArray])

    const renderBoard = () => {
        let chessGrid = []
        for (let rank of ranks) {
            for (let file of files) {
                let x = files.indexOf(file)
                let y = ranks.indexOf(rank)
                let n = x + y + 2
                let piece = piecesArray[y][x]
                n % 2 === 0 ? 
                    chessGrid.push(<Tile color={false} x={x} y={y} piece={piece}/>) :
                    chessGrid.push(<Tile color={true} x={x} y={y} piece={piece}/>)  
            }
        }
        return chessGrid
    }

    const boardArray = renderBoard()

    return (
        <div id={'chessboard'}>
            {boardArray} 
        </div>
    )
}

export default Board;