import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";

import { Container, Image, InputLabel, Input,} from './style'
import Logo from '../../assets/logo-burguer.png'

import { H1 } from "../../components/title/style";
import ContainerItens from "../../components/containeritens";
import Button from "../../components/button";



function App() {

  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push('/usuarios')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Logo} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputName} placeholder="Digite seu pedido" />

        <InputLabel>Nome do cliente</InputLabel>
        <Input ref={inputAge} placeholder="Digite seu nome" />

        <Button onClick={addNewUser}>
          Novo pedido
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App