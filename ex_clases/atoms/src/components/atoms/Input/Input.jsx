const Input = (props) => {
    const { type, value, onChange, name } = props

    return (
        <input
            type={type}
            value={value}
            onChange={() => onChange()}
            name={name}
            className=""
        />
    )

}

export default Input;