import { useEffect, useState } from 'react';
import '../App.css';
import styled from '@emotion/styled';
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

export default function Entire() {
    const questionList = [
        "React 에서 Usestate hook은 무엇이고 무슨 기능을 담당하나요?",
        "리더십 경험이 있다면 소개해주세요.",
        "실패를 경험한 적이 있다면, 그 상황과 배운 점을 알려주세요.",
        "브라우저 렌더링 과정에 대해 설명해주세요.",
        "Typescript를 사용하는 이유와 장점은 무엇인가요?",
        "인증과 인가의 차이점은? JWT에 대해 설명해주세요.",
        "Redis를 사용하는 이유는 무엇인가요?",
        "HTTP와 HTTPS의 차이점은?",
        "해시 테이블의 시간 복잡도와 충돌 해결 방법은?",
        "정규화란 무엇이며, 어떤 장점이 있나요?",
        "Primary Key와 Foreign Key의 차이점은 무엇인가요?",
        "CSR과 SSR의 차이점과 장단점은 무엇인가요?",
        "클로저(Closure)가 무엇이며, 어떤 상황에서 사용하나요?",
        "REST API란 무엇이고, RESTful하게 설계한다는 것은 어떤 의미인가요?",
        "Git에서 rebase와 merge의 차이점은 무엇인가요?",
        "브라우저의 이벤트 루프(Event Loop)에 대해 설명해주세요.",
        "React에서 key prop을 사용하는 이유는 무엇인가요?",
        "동기와 비동기의 차이점은 무엇인가요?",
        "Docker를 사용하는 이유와 장점은 무엇인가요?",
        "Node.js의 이벤트 기반 아키텍처에 대해 설명해주세요.",
        "CORS란 무엇이며, 왜 발생하고 어떻게 해결하나요?",
        "Promise와 async/await의 차이점과 각각의 장점은 무엇인가요?",
        "배열과 객체의 차이점과 각각의 적절한 사용 예시는?",
        "CI/CD란 무엇이며, 어떤 도구들을 사용해 보았나요?",
        "웹 보안 취약점 중 XSS와 CSRF의 차이점은 무엇인가요?",
        "로컬 스토리지와 세션 스토리지의 차이점은?",
        "브라우저 캐싱의 종류와 동작 방식은?",
        "트랜잭션이란 무엇이며, ACID 원칙을 설명해주세요.",
        "컴포넌트 재사용성을 높이기 위한 방법은 무엇인가요?",
        "React에서 useEffect의 의존성 배열이 작동하는 방식은?",
        "MVC 패턴이란 무엇이며, 각각의 역할은 무엇인가요?"
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