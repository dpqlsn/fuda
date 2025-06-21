import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 13%;
    height: 100vh;
    padding-top: 8%;
    z-index: 200;
`;

const Element = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 80%;
    font-size: 1.5rem;
    border-radius: 4px;
    color: #B5B5B5;
    text-align: center;
    padding: 10% 0%;
    cursor: pointer;
    margin: 0 auto 2%;


    :hover {
        background-color: #E5F3DD;
        color: #557E41;
    }
`;

export default function Bar() {
    const navigate = useNavigate();

    return (
        <Container>
            <Element onClick={() => navigate('/choice')}>홈 화면</Element>
            <Element onClick={() => navigate('/save')}>저장</Element>
        </Container>
    );
}
