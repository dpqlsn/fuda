import styled from '@emotion/styled';
import '../App.css';
import Bar from '../components/navbar';
import { useState } from 'react';

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

const Title = styled.div`
    font-size: 40px;
    color: #161716;
    margin-bottom: 20px;
`;

const Message = styled.div`
    font-size: 20px;
    color: #B5B5B5;
`;

export default function Save() {
    const [savedQuestions] = useState<string[]>([]);

    return (
        <>
            <Bar />
            <Container>
                <Title>저장 된 질문보기</Title>
                {savedQuestions.length === 0 && (
                    <Message>저장된 질문이 없습니다</Message>
                )}
            </Container>
        </>
    );
}
