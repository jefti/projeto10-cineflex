import styled from "styled-components"
import axios from  'axios';
import { useEffect, useState } from "react";
import MovieContainer from "../../components/movieContainer";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const [listaFilmes, setListaFIlmes] = useState([]);
    useEffect(()=>{
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(url);
        promise.then((resp) => {
            //console.log(resp.data);
            setListaFIlmes(resp.data);
        });
        promise.catch( (erro) => console.log(erro));    
    },[]);

    const Filmes = listaFilmes.map((el)=>
        <MovieContainer id={el.id} posterURL={el.posterURL} title ={el.title} key={el.id}/>
    );


    return (
        (listaFilmes.length === 0)
        ?
            <Loading>Carregando filmes...</Loading>
        :
            <PageContainer>
                Selecione o filme

                <ListContainer>
                    {Filmes}
                </ListContainer>

            </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const Loading = styled.div`
    margin-top: 80px;
    color: #AAA;
    font-size: 20px;
    display: flex;
    justify-content: center;
`