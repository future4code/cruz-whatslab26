import React from "react";
import styled from "styled-components";
import Post from "./Post"
import './Post.css';
// import Fundo from 'background.jpg';


const TelaTotal = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  flex-direction: column;
  align-items:center;
  height: 100vh;
  overflow:auto; 
  background-color: #b4e0f9;
  position: fixed; left: 24vw;
`;

const TelaMensagens = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 45vw;
  margin: 20px;
  padding: 30px;
  background-color: #34aceb;
  /* opacity: 80%; */
  position: fixed; top: 564px;
`;

class App extends React.Component {
    state = {
      mensagens: [
        {
          usuarioNome: "Olá",
          usuarioMensagem: "Bem vindo",
        }
      ],
      valorInputNome: "",
      valorInputMensagem: ""
    };

  onChangeNomeUsuario = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeMensagemUsuario = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  addNovaMensagem = () => {
    const novaMensagem = {
      usuarioNome: this.state.valorInputNome,
      usuarioMensagem: this.state.valorInputMensagem
    };
    const novasMensagens = [...this.state.mensagens, novaMensagem]
    
    this.setState({
      mensagens: novasMensagens,
      valorInputNome: "",
      valorInputMensagem: ""
    });
  };

  render() {
      return (
        <TelaTotal>
            {this.state.mensagens.map((mensagem) => {
              return <Post
                key = {mensagem.usuarioMensagem}
                usuarioNome = {mensagem.usuarioNome}
                usuarioMensagem = {mensagem.usuarioMensagem}
              />
            })}
            <TelaMensagens>
              <input class="usuario"
                placeholder={"Usuário"}
                value={this.state.valorInputNome}
                onChange={this.onChangeNomeUsuario}
              />
              <input class="msg"
                placeholder={"Mensagem"}
                value={this.state.valorInputMensagem}
                onChange={this.onChangeMensagemUsuario}
              />
              <button onClick={this.addNovaMensagem}>Enviar</button>
            </TelaMensagens>
      </TelaTotal>
        );
  }   
}   
export default App;