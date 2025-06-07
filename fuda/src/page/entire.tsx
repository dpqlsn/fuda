import '../App.css';
import styled from '@emotion/styled';
import Bar from '../components/navbar';

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const Question = styled.div `
    font-size: 40px;
    color: #161716;
    margin-bottom: 24px;
    width: 405px;
`;

export default function Entire() {
    return (
        <>
            <Bar />
            <Container>
                <Question>React 에서 Usestate hook은 무엇이고 무슨 기능을 담당하나요?</Question>
            </Container>
        </>
    );
}