import { message } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginUser } from "../Reducers/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  function login(e) {
    e.preventDefault();
    dispatch(loginUser({
      userName: e.target.username.value,
      password: e.target.password.value,
    }));
    messageApi.success("Logged in successfully!");
    setTimeout(() => {
      window.location = "/home";
    }, 2000);
  }
  return (
    <div>
      {contextHolder}
      <form onSubmit={login} className="Log">
        <h2>Log into an account</h2>
        <p>Enter your details below</p>
        <input type="text" name='username' placeholder='Username' />
        <input type="password" name='password' placeholder='Password' />
        <button type='submit' className='logB'>Log in</button>
        <img src="/image copy 6.png" width={"420px"} alt="" />
        <div className="fl">
          <p>Dont have account?</p>
          <Link to={'/'}>Sign up</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;