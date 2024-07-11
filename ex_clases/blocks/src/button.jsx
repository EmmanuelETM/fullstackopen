const Button = (props) => {
    const { handle, text } = props

    return(
        <>
            <button onClick={handle}>
                {text}
            </button>
        </>
    )
}

export default Button;