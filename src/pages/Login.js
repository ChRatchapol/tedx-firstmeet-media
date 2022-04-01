import styled from "styled-components";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const H1 = styled.h1``;

const Wrapper = styled.div`
  text-align: center;
`;

const FormWrapper = styled.div`
  padding: 2.5%;
`;

const LineWrapper = styled.div``;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const btnClickHandle = () => {
    console.log(`username: ${username} password: ${password}`);
    navigate("/home");
  };

  return (
    <Wrapper>
      <H1>Login</H1>
      <FormWrapper>
        <LineWrapper>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </LineWrapper>
        <LineWrapper>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </LineWrapper>
      </FormWrapper>
      <button onClick={btnClickHandle}>Login</button>
    </Wrapper>
  );
};

export default Login;
