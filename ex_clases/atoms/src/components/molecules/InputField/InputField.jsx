
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'

const InputField = (props) => {
    const { 
        text, 
        type, 
        placeholder, 
        value, 
        onChange, 
        name 
    } = props

    return (
        <div className=''>
            <Label text={text} />
            <Input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    )
}

export default InputField;