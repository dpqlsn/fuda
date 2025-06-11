import styled from '@emotion/styled';
import '../App.css';
import Tag from '../components/Tag';
import Bar from '../components/NavBar';

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

const MainArea = styled.div`
    width : 370px;
    height : 115px;
    align-items: center;
    justify-content: center;
`;

const Question = styled.div `
    font-size: 40px;
    color: #161716;
    margin-bottom: 24px;
`;

export default function Choice() {
    return (
        <>
            <Bar />
            <Container>
                <MainArea>
                    <Question>무슨 종류의 면접을 보고싶나요?</Question> 
                    <Tag />
                </MainArea>
            </Container>
        </>
    );
}
