import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 223px;
    height: 100vh;
    padding-top: 162px;
`;

const Element = styled.div`
    width: 182px;
    height: 63px;
    font-size: 24px;
    border-radius: 4px;
    color: #B5B5B5;
    text-align: center;
    line-height: 63px;
    cursor: pointer;
    margin: 0 auto 10px;

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
