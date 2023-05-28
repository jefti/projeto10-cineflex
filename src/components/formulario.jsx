import { useState } from "react";
import styled from "styled-components";

export default function Formulario(props){

    const {enviarPedido} = props;

    const [nome, setNome] = useState([]);    
    const [CPF, setCPF] = useState([]);    
    function Reservar(e){
        e.preventDefault();
        if(CPF.length === 11){
            enviarPedido(nome,CPF);
        } else {
            console.log('preencha um CPF válido');
        }

    }

    return(
    <FormContainer onSubmit={Reservar}>
        <label htmlFor="nome">Nome do Comprador:</label>
        <input name="nome" id="nome" type="text" placeholder="Digite seu nome..." value={nome} onChange={(e)=> setNome(e.target.value)} required/>

        <label htmlFor="CPF"> CPF do Comprador:</label>
        <input name="CPF" id="CPF" type="text" placeholder="Digite seu CPF..." maxLength={11} value={CPF} onChange={(e)=> setCPF(e.target.value)} required />

        <button type="submit" >Reservar Assento(s)</button>
    </FormContainer>
    )
}

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`