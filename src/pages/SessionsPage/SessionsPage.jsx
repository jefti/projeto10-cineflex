import { React, useEffect, useState, useSyncExternalStore } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
import Footer from "../../components/Footer";
import SecaoHorario from "../../components/Secao-horario"

export default function SessionsPage() {
    const {idFilme} = useParams();
    const [listaDados, setListaDados] = useState({});
    const [dias, setDias] = useState([]);

    useEffect (()=>{
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(url);
        promise.then(
            (resp) => {
                setListaDados(resp.data);
                setDias(resp.data.days);
                //console.log(resp.data.days);
            }
        );

    },[])
    
   const sessos = dias.length === 0?
    <div>carregando ...</div>
   :
    dias.map((el,i)=> <SecaoHorario dados = {el} key={'secaoHorario' + i}/> );

    

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {sessos}
            </div>

            <Footer title={listaDados.title} posterURL= {listaDados.posterURL}/>


        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`

