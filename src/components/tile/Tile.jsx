const Tile = (props) => {
    const customStyles = {
        color: props.color,
        height: props.height,
        width: props.width,
    }

    return (
        <div 
            style = {`color: ${props.color}; height: ${props.height}; `}
        >

        </div>
    )
}

export default Tile;