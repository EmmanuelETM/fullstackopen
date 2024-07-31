const Button = (props) => {
    const { type, onClick, text } = props

    return (
        <button
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded-lg "
            type={type} 
            onClick={() => onClick()} 
            
        >
            {text}
        </button>
    )
}

export default Button;