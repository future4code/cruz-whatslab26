import React from "react";
import styled from "styled-components";

class Post extends React.Component {

  
  render() {

    return (
      <div>
        <p>Nome: {this.props.usuarioNome}</p>
        <p>Mensagem: {this.props.usuarioMensagem}</p>
        
      </div>
    );
  }
}

export default Post;
