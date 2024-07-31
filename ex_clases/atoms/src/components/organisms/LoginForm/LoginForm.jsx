
import InputField from '../../molecules/InputField/InputField'
import Button from '../../atoms/Button/Button'

const LoginForm = () => {
    return (
    <form className="bg-white rounded-lg p-5 shadow-lg">
        <InputField
            text="User"
            type="text"
            name="username"
        />
        <InputField
            text="Contraseña"
            type="password"
            name="password"
        />
        <Button type="button" text="Log In"/>
    </form>
 )
}

export default LoginForm;