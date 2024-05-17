import styled from 'styled-components';
import background from '../assets/images/background.jpg'

export const Container = styled.div`
  max-width: 500px;
  background: url(${background}) no-repeat;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  text-align: center;

  h1 {
    font-size: 40px;
    color: #ffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Plus Jakarta Sans";

  }

  img {
    /* align-items: center; */
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  /* garante que o input e o botão fiuem sempre um ao lado do outro */
  flex-direction: row;

  input {
    /* faz com que ele ocupe todo o espaço possível */
    flex: 1;
    border: 1px solid #eee;
    /* 10px em cima e em baixo e 15 na esquerda e na direita */
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    font-family: "Plus Jakarta Sans";
  }
`;