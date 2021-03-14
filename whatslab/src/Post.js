import React from "react";
import styled from "styled-components";
import './Post.css';

class Post extends React.Component {

  
  render() {

    return (
        <div className="bananinha">
            <div className="Post">
                <div>Nome: {this.props.usuarioNome}</div>
                <div>Mensagem: {this.props.usuarioMensagem}</div>
            </div>
        </div>
    );
  }
}

export default Post;
