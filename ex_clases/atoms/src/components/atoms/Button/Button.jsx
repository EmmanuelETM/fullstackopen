const Button = (props) => {
    const { type, onClick, text } = props

    return (
        <button
            type={type} 
            onClick={() => onClick()} 
            className=""
        >
            {text}
        </button>
    )
}

export default Button;