import styled from "styled-components"


export default function Footer(props){

    const {title,posterURL,sessao} = props;
    return(
        title===undefined
        ? 
            <FooterContainer>
                <div>
                    <img src="https://img.freepik.com/premium-vector/update-concept-application-loading-process-symbol-web-screen-vector-illustration-flat_186332-1253.jpg" alt="Carregando imagem" />
                </div>
                <div>
                    <p>Carregando ...</p>
                </div>
            </FooterContainer>
        :
        <FooterContainer>
        <div>
            <img src={posterURL} alt={title} />
        </div>
        <div>
            <p>{title}</p>
            <p>{sessao}</p>
        </div>
        </FooterContainer>
    )
}

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