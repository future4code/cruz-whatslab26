import React from "react";
import styled from "styled-components";
import Post from "./Post"



const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin:100px;
  flex-direction: column;
  align-items:center;
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
  width: 70vw;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
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
              <input
                placeholder={"Usuário"}
                value={this.state.valorInputNome}
                onChange={this.onChangeNomeUsuario}
              />
              <input
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
