import { useState } from "react";
import styled from "styled-components";
export default function Assento(props){
    const {id, name, isAvaliable,listaSelecionados, setListaSelecionados,listaIds, setListaIds} = props;
    const [selecionado, setSelecionado] = useState(false);

    function selecionar() {
        if (isAvaliable === false){
            alert('Esse assento não está disponível');
        } else {
            if(listaSelecionados.includes(id)){
                const indice = listaSelecionados.indexOf(id);
                const indice2 = listaIds.indexOf(name);
                let lista = [...listaSelecionados];
                let lista2 = [...listaIds];

                lista.splice(indice,1);
                lista2.splice(indice2,1);
                //console.log(lista);
                setListaSelecionados(lista);
                setListaIds(lista2);
                setSelecionado(false);

            } else {
                let lista = [...listaSelecionados];
                let lista2 = [...listaIds];
                lista2.push(name);
                lista.push(id);
                //console.log(lista);
                setListaSelecionados(lista);
                setListaIds(lista2);
                setSelecionado(true);
            }
        }
    };
    return(
        <SeatItem habilitado={isAvaliable} selecionado = {selecionado} onClick={selecionar} data-test="seat">{name}</SeatItem>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => {
            if(props.habilitado===false){
                return "#F7C52B";
            } else {
                if(props.selecionado){
                    return "#0E7D71";
                } else{
                    return "#808F9D";
                }
            }
        }
    };

    background-color: ${props => {
            if(props.habilitado===false){
                return "#FBE192";
            } else {
                if(props.selecionado){
                    return "#1AAE9E";
                } else{
                    return "#C3CFD9";
                }
            }
        }
    };


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