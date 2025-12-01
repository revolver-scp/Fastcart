import { message } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { registerUser } from "../Reducers/authSlice";
const SignUp = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  function registration(e) {
    e.preventDefault();
    dispatch(registerUser({
      userName: e.target.username.value,
      phoneNumber: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.password.value,
    }));
    messageApi.success("Signed in successfully!");
  }
  return (
    <form onSubmit={registration} className="Log">
      {contextHolder}
      <h2>Create an account</h2>
      <p>Enter your details below</p>
      <input type="text" name='username' placeholder='Name' />
      <input type="text" name='phone' placeholder='Phone number' />
      <input type="text" name='email' placeholder='Email' />
      <input type="password" name='password' placeholder='Password' />
      <button type='submit' className='logB'>Create account</button>
      <img className='ps' src="/image copy 6.png" width={"420px"} alt="" />
      <div className="fl">
        <p>Already have account?</p>
        <Link to={'/login'}>Log in</Link>
      </div>
    </form>
  );
};
export default SignUp;