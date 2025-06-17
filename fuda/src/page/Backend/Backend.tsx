import { useEffect, useState } from 'react';
import '../../App.css';
import data from './data';
import * as _ from '../../components/style';
import Bar from '../../components/Navbar';

export default function Entire() {
    const [time, setTime] = useState(0);
    const [answer, setAnswer] = useState('');
    const [questionIndex, setQuestionIndex] = useState(() => Math.floor(Math.random() * data.length));
    const [savedQA, setSavedQA] = useState(() => {
        const data = localStorage.getItem('savedQA');
        return data ? JSON.parse(data) : [];
    });

    const currentQuestion = data[questionIndex];

    const handleSave = () => {
        const newQA = { question: currentQuestion, answer };
        const updatedQA = [...savedQA, newQA];
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * data.length);
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
            newIndex = Math.floor(Math.random() * data.length);
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
            <_.Container>
                <_.Timer>{formatTime(time)}</_.Timer>
                <_.Question>{currentQuestion}</_.Question>
                <_.InputBox
                    placeholder="입력하세요"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <_.ButtonContainer>
                    <_.NextButton onClick={handleNext}>넘어가기</_.NextButton>
                    <_.SaveButton onClick={handleSave}>저장하기</_.SaveButton>
                </_.ButtonContainer>
            </_.Container>
        </>
    );
}