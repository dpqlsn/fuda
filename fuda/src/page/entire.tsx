import { useEffect, useState } from 'react';
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

const Timer = styled.div`
    background-color: #7BC357;
    color: white;
    font-size: 24px;
    padding: 8px 14px;
    border-radius: 20px;
    margin-bottom: 40px;
    text-align: center;
    font-family: 'Beanpole', sans-serif;
`;

const Question = styled.div`
    font-size: 40px;
    text-align: center;
    color: #161716;
    margin-bottom: 48px;
    width: 380px;
    line-height: 1.5;
`;

const InputBox = styled.textarea`
    width: 900px;
    height: 120px;
    background-color: #F9F9F9;
    border: none;
    border-radius: 8px;
    padding: 16px;
    resize: none;
    margin-bottom: 80px;
    font-size: 20px;
    font-family: 'Beanpole', sans-serif;
    cursor: pointer;

    &::placeholder {
        color: #B5B5B5;
    }

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

const NextButton = styled.button`
    background-color: #7BC357;
    color: white;
    padding: 12px 80px;
    border: none;
    border-radius: 24px;
    font-size: 24px;
    font-family: 'Beanpole', sans-serif;

    :hover {
        color: #7BC357;
        background-color: white;
        border: 1.5px solid #7BC357;
    }
`;

const SaveButton = styled.button`
    background-color: white;
    color: #7BC357;
    padding: 12px 80px;
    border: 1.5px solid #7BC357;
    border-radius: 24px;
    font-size: 24px;
    font-family: 'Beanpole', sans-serif;

    :hover {
        background-color: #7BC357;
        color: white;
    }
`;

export default function Entire() {
    const [seconds, setSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (Second: number) => {
        const min = Math.floor(Second / 60);
        const sec = Second % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <Bar />
            <Container>
                <Timer>{formatTime(seconds)}</Timer>
                <Question>
                    React 에서 Usestate hook은 무엇이고 무슨 기능을 담당하나요?
                </Question>
                <InputBox placeholder="입력하세요" />
                <ButtonContainer>
                    <NextButton>넘어가기</NextButton>
                    <SaveButton>저장하기</SaveButton>
                </ButtonContainer>
            </Container>
        </>
    );
}
