import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SecaoHorario( props){
    const {weekday, date, showtimes} = props.dados;
    const botoes = showtimes.map( (el,i) => <Link to={`/assentos/${el.id}`} key={'botao'+el.id} data-test="showtime"><button> {el.name} </button></Link>);

    return (
    <SessionContainer data-test="movie-day">
        {weekday} - {date}
        <ButtonsContainer>
            {botoes}
        </ButtonsContainer>
    </SessionContainer>
    );
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`