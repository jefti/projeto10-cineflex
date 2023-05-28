import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Assentos from "../../components/assentos";
import Footer from "../../components/Footer";
import Caption from "../../components/caption";
import Formulario from "../../components/formulario";

export default function SeatsPage(props) {
    const {setHoraFilme, setData,  setUsuario, setCodigoPessoaFisica, setAssentosComprados} = props;

    const navigate = useNavigate();
    const {idSessao} = useParams();
    const [listaSelecionados, setListaSelecionados] = useState([]);
    const [listaIds, setListaIds] = useState([]);
    const [listaData, setListaData] = useState({});
    const [listaFilme, setListaFilme] = useState({});
    const [listaSeats, setListaSeats] = useState([]);
    const [hora, setHora] = useState();
    //console.log(hora);

    useEffect(()=>{
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(url);
        promise.then(
            (resp) =>{
                console.log(resp.data.day.date);

                setHoraFilme(resp.data.name);
                setData(resp.data.day.date);

                setListaData(resp.data.day);
                setListaFilme(resp.data.movie);
                setListaSeats(resp.data.seats);
                setHora(resp.data.name);
            }
        );
        promise.catch((erro)=> console.log(erro));
    },[])

    const enviarPedido = function (nome, cpf){
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
        if(listaSelecionados.length >0){
            const objeto = {ids: listaSelecionados, name: nome, cpf: cpf, }
            //console.log(objeto.ids);
            const promise = axios.post(url, objeto);
            promise.then( resposta => {
                //console.log(resposta);
                const texto = listaIds.join();
                setUsuario(nome);
                setCodigoPessoaFisica(cpf);
                setAssentosComprados(texto);
                navigate(`/sucesso`);
            });
            promise.catch( erro => console.log(erro));

        } else {
            alert('Selecione assentos que deseja reservar!');
        }

    };

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <Assentos seats={listaSeats} listaSelecionados = {listaSelecionados} setListaSelecionados={setListaSelecionados} listaIds={listaIds} setListaIds={setListaIds}/>

            <Caption />

            <Formulario enviarPedido={enviarPedido}/>

            <Footer title={listaFilme.title} posterURL= {listaFilme.posterURL} sessao={`${listaData.weekday} - ${hora}`}/>


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
    padding-bottom: 120px;
    padding-top: 70px;
`




const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`