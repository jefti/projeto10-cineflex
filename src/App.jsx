import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
  axios.defaults.headers.common['Authorization'] = 'W89TZQ0D4qdiN0sj82XFVVCP';

  return (
        <>
		<BrowserRouter>
      <NavContainer>CINEFLEX</NavContainer>
			<Routes>
				<Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route path="/assentos/:idSessao" element={<SeatsPage />} />
        <Route path="/sucesso/:nome/:hora/:comprador/:cpf/:dia/:mes/:ano/:assentos" element={<SuccessPage />} />
			</Routes>
		</BrowserRouter>

           

            {/* <SeatsPage /> */}
            {/* <SessionsPage /> */}
            {/* <SuccessPage /> */}
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
