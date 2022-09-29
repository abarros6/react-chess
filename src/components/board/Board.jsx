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
                let piece = {y: rank, x: file, component: ''}

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

    const renderBoard = () => {
        let chessGrid = []
        for (let rank of ranks) {
            for (let file of files) {
                let x = files.indexOf(file)
                let y = ranks.indexOf(rank)
                let n = x + y + 2
                let piece = piecesArray[y][x]
                let moveCircle = showMoveCircles[y][x]
                n % 2 === 0 ? 
                    chessGrid.push(<Tile color={false} x={x} y={y} piece={piece} moveStyles={moveCircle}/>) :
                    chessGrid.push(<Tile color={true} x={x} y={y} piece={piece} moveStyles={moveCircle}/>)  
            }
        }
        return chessGrid
    }

    const [piecesArray, setPiecesArray] = useState(initPieces())
    const [boardArray, setBoardArray] = useState(renderBoard())
    const [movesArray, setMovesArray] = useState([])
    const [whosTurn, setWhosTurn] = useState(0) //0 is whites turn, 1 is black's turn 
    const [showMoveCircles, setShowMoveCircles] = useState([])

    //console.log(piecesArray)

    useEffect(() => {
        setBoardArray(renderBoard())
    }, [piecesArray])

    //const boardArray = renderBoard()

    //want to show opaque circles on the board when a piece gets clicked at 
    //all the locations that piece can move to
    const bishopMoves = (x,y) => {
        return xy.map((r) => {
            let rank = xy.indexOf(r)
            return r.map((file) => {
                if (Math.abs(file - y) === Math.abs(rank - x)) {
                    return file
                } 
                return null
            })
        })
    }

    const rookMoves = (x,y) => {
        return xy.map((r) => {
            let rank = xy.indexOf(r)
            return r.map((file) => {
                if (file - y === 0 || rank - x === 0) {
                    return file
                } 
                return null
            })
        })
    }

    const kingMoves = (x,y) => {
        return xy.map((r) => {
            let rank = xy.indexOf(r)
            return r.map((file) => {
                if ((file - y === 0 && Math.abs(rank - x) === 1) || 
                    (rank - x === 0 && Math.abs(file - y) === 1) || 
                    (Math.abs(rank - x) === 1 && Math.abs(file - y) === 1)) 
                {
                    return file
                } 
                return null
            })
        })
    }

    const queenMoves = (x,y) => {
        return xy.map((r) => {
            let rank = xy.indexOf(r)
            return r.map((file) => {
                if ((Math.abs(file - y) === Math.abs(rank - x)) || file - y === 0 || rank - x === 0) {
                    return file
                } 
                return null
            })
        })
    }

    const knightMoves = (x,y) => {
        return xy.map((r) => {
            let rank = xy.indexOf(r)
            return r.map((file) => {
                if ((Math.abs(rank - x) === 1 && Math.abs(file - y) === 2) || 
                    (Math.abs(rank - x) === 2 && Math.abs(file - y) === 1)) 
                {
                    return file
                } 
                return null
            })
        })
    }

    //need to write the logic for the pawns including capture movement
    const pawnMoves = (x,y) => {
        return xy.map((r) => {
            let rank = xy.indexOf(r)
            return r.map((file) => {
                //need to add logic if the pawn is on the second rank (white) then two spaces
                //if the pawn is on the seventh rank (black) then two spaces 
                //also need to add logic for if the pawn can capture 

                // if ()
                // {
                //     return file
                // } 
                return null
            })
        })
    }

    console.log('bishop: ',bishopMoves(3,3))
    console.log('rook: ', rookMoves(3,3))
    console.log('queen: ', queenMoves(3,3))
    console.log('king: ', kingMoves(3,3))
    console.log('knight: ', knightMoves(3,3))


    const showMoves = (piece, x, y) => {
        switch (piece) {
            case 'bishop': 
                bishopMoves(x,y)
                break
            case 'rook': 
                rookMoves(x,y)
                break
            case 'queen':
                queenMoves(x,y)
                break
            case 'king': 
                kingMoves(x,y)
                break
            case 'knight':
                knightMoves(x,y)
                break
            default: 
                console.log('didnt enter a valid piece name')
        }
        return 
    }


    //how does movement work in this game 
    //event, click on a piece
    //check the potential moves array and display circles on the tiles with 
    //potential moves 
    //when player clicks one of the circles change the pices array to match the selected tile with the 
    //selected piece

    return (
        <div id={'chessboard'}>
            {boardArray} 
        </div>
    )
}

export default Board;