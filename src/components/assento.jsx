import styled from "styled-components";
export default function Assento(props){
    const {id, name, isAvaliable} = props;
    function selecionar() {
        isAvaliable?
        alert('selecionado'):alert('Esse assento não está disponível')
    };
    return(
        <SeatItem habilitado={isAvaliable} onClick={selecionar}>{name}</SeatItem>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => (props.habilitado===true)? "#808F9D": "#F7C52B"};
    background-color: ${props => (props.habilitado===true)? "#C3CFD9": "#FBE192"};    // Essa cor deve mudar
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