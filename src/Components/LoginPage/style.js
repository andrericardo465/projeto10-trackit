import styled from "styled-components"
import {Link} from 'react-router-dom'


const ContanierForm = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 22vw;
    min-width: 15rem;
    height: auto;
    margin: 150px auto 10px auto;
  }

  form{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input{
    background-color: #F4DDC8;
    border: 1px solid #FAF0D7;
  }
  
  input::placeholder{
    color: #764AF1;
  }

  button{
    background-color: #FF5D5D;
  }
`

const StyledLink = styled(Link)`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FF8C8C;
  font-size: 14px;
`;

export{
    ContanierForm,
    StyledLink
}