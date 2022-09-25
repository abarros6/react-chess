const Tile = (props) => {
    const customStyles = {
        backgroundColor: props.color,
        height: props.size,
        width: props.size,
    }

    return (
        <div 
            style = {customStyles}
        >
            {props.coor.file}
            {props.coor.rank}
        </div>
    )
}

export default Tile;