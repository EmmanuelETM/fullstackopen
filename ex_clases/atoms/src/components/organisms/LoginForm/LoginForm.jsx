
import InputField from '../../molecules/InputField/InputField'
import Button from '../../atoms/Button/Button'

const LoginForm = (props) => {
    const {
        handleSubmit,
        handleChange,
        data,
    } = props

    const { username, password } = data

    return (
    <form 
        className="bg-white rounded-lg p-5 shadow-lg" 
        onSubmit={handleSubmit}
    >
        <InputField
            text="Usuario"
            type="text"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={handleChange}
            name="username"
        />
        <InputField
            text="Contraseña"
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={handleChange}
            name="password"
        />
        <Button type="submit" onClick={() => {}} text="Log In"/>
    </form>
 )
}

export default LoginForm;