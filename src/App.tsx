import LoginForm, { Props as LoginFormProps } from './components/LoginForm';
import './App.css';

function App() {
  const handleUsernameChange = (username: string) => {
    console.log(username)
  };

  const handlePasswordChange = (password: string) => {
		console.log(password)
  };

  const handleRememberChange = (remember: boolean) => {
    console.log(remember)
  };

  const handleSubmit = (username: string, password: string) => {
    console.log(username)
		console.log(password)
  };

  const loginFormProps: LoginFormProps = {
    shouldRemember: true,
    onUsernameChange: handleUsernameChange,
    onPasswordChange: handlePasswordChange,
    onRememberChange: handleRememberChange,
    onSubmit: handleSubmit,
  };

  return (
    <div className="App">
      <LoginForm {...loginFormProps} />
    </div>
  );
}

export default App;
