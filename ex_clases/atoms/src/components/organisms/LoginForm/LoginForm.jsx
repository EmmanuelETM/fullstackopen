
import InputField from '../../molecules/InputField/InputField'
import Button from '../../atoms/Button/Button'

const LoginForm = (props) => {

    const {
        data,
        handleSubmit,
        handleChange
    } = props

    const { username, password } = data

    return (
    <form 
        className="bg-white rounded-lg p-5 shadow-lg"
        onSubmit={handleSubmit}
    >
        <InputField
            text="Username"
            type="text"
            value={username}
            onChange={handleChange}
            name="username"
        />
        <InputField
            text="Password"
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
        />
        <Button type="button" action={handleSubmit} text="Log In"/>
    </form>
 )
}

export default LoginForm;