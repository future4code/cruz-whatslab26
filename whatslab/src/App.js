import React from "react";
import styled from "styled-components";
import Post from "./Post"
import './Post.css';


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  /* margin:0px; */
  flex-direction: column;
  align-items:center;
  height: 100vh;
  border-style: solid;
  background-color: yellow;
  /* margin-left: 44vh; */
  position: fixed; left: 24vw;
`;

const PostContainer = styled.div`
  border: 1px solid gray;
  height: 50px;
  width: 300px;
  margin-bottom: 10px;
`;


const FormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 45vw;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
  background-color: orange;
  position: fixed; top: 564px;
  
`;
class App extends React.Component {
    state = {
      mensagens: [
        {
          usuarioNome: "Digite seu nome",
          usuarioMensagem: "Digite sua mensagem",
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
        <AppContainer>
            {this.state.mensagens.map((mensagem) => {
              return <Post
                key = {mensagem.usuarioMensagem}
                usuarioNome = {mensagem.usuarioNome}
                usuarioMensagem = {mensagem.usuarioMensagem}


              />

            })}
            <FormContainer>
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
            </FormContainer>
            

      </AppContainer>
        );
    
  } 
    
} 
  
  
export default App;
