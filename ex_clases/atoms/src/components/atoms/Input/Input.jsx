const Input = (props) => {
    const { type, value, onChange, name } = props

    return (
        <input
            className="mb-4 border border-black rounded-md w-full "
            type={type}
            value={value}
            onChange={() => onChange()}
            name={name}
        />
    )

}

export default Input;