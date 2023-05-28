import styled from "styled-components";
export default function Caption(){
    return(
        <CaptionContainer>
        <CaptionItem>
            <CaptionCircle border="#0E7D71" background="#1AAE9E"/>
            Selecionado
        </CaptionItem>
        <CaptionItem>
            <CaptionCircle border="#808F9D" background="#C3CFD9"/>
            Disponível
        </CaptionItem>
        <CaptionItem>
            <CaptionCircle border="#F7C52B" background="#FBE192"/>
            Indisponível
        </CaptionItem>
    </CaptionContainer>
    )
}

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.border};         // Essa cor deve mudar
    background-color: ${props => props.background};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`