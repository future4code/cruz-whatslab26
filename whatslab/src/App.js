import React from "react";
import styled from "styled-components";

const arrayMensagem =[];

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`;
class App extends React.Component {
    state = {
      mensagens: arrayMensagem,
      usuarioNome: '',
      usuarioMensagem: ''
    };

  changeUsuarioNome = (event) => {
    this.setState({ usuarioNome: event.target.value });
  };

  changeUsuarioMensagem = (event) => {
    this.setState({ usuarioMensagem: event.target.value });
  };

  addNovaMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.usuarioNome,
      mensagemUsuario: this.state.usuarioMensagem
    };
    this.setState({
      mensagens: [...this.state.mensagens, novaMensagem],
      usuarioNome: "",
      usuarioMensagem:""
    });
  };

  render() {
    const componentesMensagem = this.state.mensagens.map((p) => {
      return (
        <div
          nomeUsuario={p.nomeUsuario}
          mensagemUsuario={p.mensagemUsuario}
        />  
      );
    });
      return (
        <AppContainer>
          <FormContainer>
            <input
              placeholder={"Usuário"}
              value={this.state.usuarioNome}
              onChange={this.nomeUsuario}
            />
            <input
              placeholder={"Mensagem"}
              value={this.state.usuarioMensagem}
              onChange={this.mensagemUsuario}
            />
            <button onClick={this.addNovaMensagem}>Enviar</button>
          </FormContainer>
          {componentesMensagem}
      </AppContainer>
        );
    }   
  } 
  
    export default App;
