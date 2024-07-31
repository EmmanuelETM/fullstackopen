
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
        className="" 
        onSubmit={handleSubmit}
    >
        <InputField
            label="Usuario"
            type="text"
            placeholder="Ingrese su usuario"
            value={username}
            onChange={handleChange}
            name="username"
        />
        <InputField
            label="Contraseña"
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={handleChange}
            name="password"
        />
        <Button type="submit">Iniciar Sesión</Button>
    </form>
 )
}

export default LoginForm;