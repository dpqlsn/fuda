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

export default function Frontend() {
    const questionList = [
        "React에서 상태 관리는 어떻게 하나요? (예: Redux, Context API)",
        "브라우저 렌더링 과정에 대해 설명해주세요.",
        "웹 성능 최적화 경험이 있다면 설명해주세요.",
        "Typescript를 사용하는 이유와 장점은 무엇인가요?",
        "Javascript가 단일 스레드인데 어떻게 멀티스레드 처럼 동작하나요?",
        "CSR과 SSR의 차이점은 무엇인가요?",
        "웹 접근성(WA, a11y)을 고려한 개발 경험이 있다면 알려주세요.",
        "프론트엔드에서 CORS란 무엇이며, 어떻게 해결하나요?",
        "디바운싱과 스로틀링의 차이와 사용 사례는 무엇인가요?",
        "웹팩(Webpack)과 번들링에 대해 설명해주세요.",
        "REST API와 GraphQL의 차이점을 설명해주세요.",
        "브라우저의 이벤트 버블링과 캡처링에 대해 설명해주세요.",
        "컴포넌트 재사용성을 높이기 위해 어떤 방법을 사용하셨나요?",
        "Intersection Observer는 무엇이며 어떤 상황에서 유용한가요?",
        "프론트엔드 테스트에는 어떤 도구를 사용해봤고, 어떤 테스트를 작성했나요?"
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