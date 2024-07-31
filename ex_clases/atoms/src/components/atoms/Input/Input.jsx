const Input = (props) => {
    const { type, value, onChange, name } = props

    return (
        <input
            className="mb-4 p-2 border border-black rounded-md w-full "
            type={type}
            value={value}
            onChange={event => onChange(event)}
            name={name}
        />
    )

}

export default Input;