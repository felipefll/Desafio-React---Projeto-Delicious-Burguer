import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Container, Image, User } from './style'
import Sacola from '../../assets/sacola-pedido.png'
import Trash from '../../assets/trash.png'

import { H1 } from "../../components/title/style";
import ContainerItens from "../../components/containeritens";
import Button from "../../components/button";

function Users() {

  const [users, setUsers] = useState([]);
  const history = useHistory()
  


  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers()

  }, [])

  async function deleteUser(userid) {
    await axios.delete(`http://localhost:3001/users/${userid}`)

    const newUsers = users.filter(user => user.id !== userid);
    setUsers(newUsers);

  }
  
  function goBackPage(){
    history.push("/")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Sacola} />
      <ContainerItens isBlur = {true}>
        <H1>Pedidos</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <div className="P">
              <p>{user.name}</p>
              <p>{user.age}</p>
              </div>
              <div className="Button">
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
              </div>
            </User>
          ))
          }
        </ul>

        <Button isBack={true} onClick={goBackPage}>Voltar</Button>
        
       

      </ContainerItens>
    </Container>
  );
}

export default Users;