import React from "react";
import './style.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contato(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();
  if(name === "" || email === "" || message === "" ){
    alert("preencha os campos!");
    return;
  }
  
  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }
  // Ordem Emailjs: service | template | template params | Public key
  emailjs.send("service_kj4mzo8","template_6ph1sl9", templateParams,"8cu891HBiPDNUArC-")
  .then((response) => {
    console.log("EMAIL ENVIADO", response.status, response.text)
    alert('Email enviado!');
    setName('')
    setEmail('')
    setMessage('')
    
  }, (err) =>{
    console.log("ERRO: ", err)
    alert('Erro! Não foi possível enviar sua mensagem.');
  })
  
  }

    return(
        <>
         <div className="colorido">
      <div className="bloco0">
        <form
          onSubmit={sendEmail}
          name="formu"
        >
          <tr>
            <td>
              <p className="tex">Envie o seu email!</p>
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                className="formte"
                id="nome"
                name="nome"
                placeholder="Qual o seu nome?"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <br />
              <br />
            </td>
          </tr>
          
          <tr>
            <td>
              <input
                type="text"
                className="formte"
                id="senha"
                name="senha"
                placeholder="Qual o seu e-mail?"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <textarea
                name="contato"
                className="forme"
                id="contato"
                title="Escreva a sua mensagem"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <center>
                <input
                  type="submit"
                  className="formb"
                  name="enviar"
                  value="Enviar"
            
                />
                <input
                  type="reset"
                  className="formb"
                  value="limpar"
                />
              </center>
              <br />
            </td>
          </tr>
        </form>
      </div>
    </div>
        </>
    )
}
export default Contato;