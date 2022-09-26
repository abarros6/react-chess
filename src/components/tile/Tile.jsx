import './tile.css'

const Tile = (props) => {
    const customStyles = {
        backgroundColor: props.color,
        height: props.size,
        width: props.size,
    }

    return (
        <div 
            style = {customStyles}
            className={`tile ${props.coor.file.concat(props.coor.rank)}`}
            onClick={() => {console.log(document.getElementsByClassName(props.coor.file.concat(props.coor.rank)))}}
        >
            <p>
                {props.coor.file}
                {props.coor.rank}
            </p>
        </div>
    )
}

export default Tile;