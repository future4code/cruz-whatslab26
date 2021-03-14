import React from "react";
import styled from "styled-components";
import './Post.css';

class Post extends React.Component {

  
  render() {

    return (
      <div className="Post">
        <p>Nome: {this.props.usuarioNome}</p>
        <p>Mensagem: {this.props.usuarioMensagem}</p>
        
      </div>
    );
  }
}

export default Post;
