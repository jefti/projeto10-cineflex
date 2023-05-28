import styled from "styled-components"
import Assento from "./assento";

export default function Assentos(props){
    const {seats, listaSelecionados, setListaSelecionados, listaIds, setListaIds} = props;

    const lista = (seats.length=== 0)?<div>Carregando ...</div>:seats.map( (el)=> <Assento key={el.id} name ={el.name} isAvaliable = {el.isAvailable} id={el.id} listaSelecionados={listaSelecionados} setListaSelecionados={setListaSelecionados} listaIds={listaIds} setListaIds={setListaIds}/>);
    return (
        <SeatsContainer>
            {lista}
        </SeatsContainer>
    )
}

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const SeatItem = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`