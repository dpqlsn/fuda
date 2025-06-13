import { useEffect, useState } from 'react';
import '../App.css';
import styled from '@emotion/styled';
import Bar from '../components/Navbar';

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
        color: #fff;
        background-color: #557E41;
        cursor: pointer;
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
        cursor: pointer;
    }
`;

export default function Backend() {
const questionList = [
    "데이터베이스 정규화와 비정규화의 차이점은 무엇인가요?",
    "트랜잭션이란 무엇이고, ACID는 어떤 원칙인가요?",
    "인증과 인가의 차이점은? JWT에 대해 설명해주세요.",
    "Redis를 사용하는 이유는 무엇인가요?",
    "REST API와 SOAP의 차이점을 설명해주세요.",
    "SQL과 NoSQL의 차이는 무엇인가요?",
    "ORM(Object-Relational Mapping)이란 무엇인가요?",
    "Docker와 같은 컨테이너 기술의 장점은 무엇인가요?",
    "CI/CD란 무엇이며, 어떻게 동작하나요?",
    "MVC 패턴이란 무엇인가요?",
    "웹 서버와 WAS(Web Application Server)의 차이는?",
    "GraphQL과 REST API의 차이점을 설명해주세요.",
    "JWT의 구조와 장단점은 무엇인가요?",
    "비동기 처리와 동기 처리의 차이점은?",
    "Node.js의 이벤트 루프(Event Loop)에 대해 설명해주세요.",
    "마이크로서비스 아키텍처(MSA)의 장점과 단점은?",
    "API 게이트웨이란 무엇이며 어떤 역할을 하나요?",
    "OAuth2.0 인증 흐름에 대해 설명해주세요.",
    "Load Balancer(로드 밸런서)의 역할은 무엇인가요?",
    "캐싱(Caching)이란 무엇이고, 언제 사용하는 것이 좋은가요?"
];


    const [time, setTime] = useState(0);
    const [answer, setAnswer] = useState('');
    const [questionIndex, setQuestionIndex] = useState(() => Math.floor(Math.random() * questionList.length));
    const [savedQA, setSavedQA] = useState(() => {
        const data = localStorage.getItem('savedQA');
        return data ? JSON.parse(data) : [];
    });

    const currentQuestion = questionList[questionIndex];

    const handleSave = () => {
        const newQA = { question: currentQuestion, answer };
        const updatedQA = [...savedQA, newQA];
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * questionList.length);
        } while (newIndex === questionIndex);
        setQuestionIndex(newIndex);
        setAnswer('');
        setTime(0);

        setSavedQA(updatedQA);
        localStorage.setItem('savedQA', JSON.stringify(updatedQA));
        setAnswer('');
    };

    const handleNext = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * questionList.length);
        } while (newIndex === questionIndex);
        setQuestionIndex(newIndex);
        setAnswer('');
        setTime(0);
    };

    useEffect(() => {
        const timer = setInterval(() => setTime(t => t + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (t: number) =>
        `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, '0')}`;

    return (
        <>
            <Bar />
            <Container>
                <Timer>{formatTime(time)}</Timer>
                <Question>{currentQuestion}</Question>
                <InputBox
                    placeholder="입력하세요"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <ButtonContainer>
                    <NextButton onClick={handleNext}>넘어가기</NextButton>
                    <SaveButton onClick={handleSave}>저장하기</SaveButton>
                </ButtonContainer>
            </Container>
        </>
    );
}