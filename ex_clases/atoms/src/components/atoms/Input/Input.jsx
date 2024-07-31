const Input = (props) => {
    const { type, value, onChange, name } = props

    return (
        <input
            className="mb-4 p-2 border border-black rounded-md w-full "
            type={type}
            name={name}
        />
    )

}

export default Input;