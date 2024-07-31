
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'

const InputField = (props) => {
    const { 
        text, 
        type, 
        placeholder,
        name 
    } = props

    return (
        <div className=''>
            <Label text={text} />
            <Input 
                type={type}
                placeholder={placeholder}
                name={name}
            />
        </div>
    )
}

export default InputField;