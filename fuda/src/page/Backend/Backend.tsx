import { useEffect, useState } from "react";
import "../../App.css";
import data from "./data";
import * as _ from "../../components/style";
import Bar from "../../components/Navbar";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function Entire() {
    const [time, setTime] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(() =>
        Math.floor(Math.random() * data.length)
    );
    const [savedQA, setSavedQA] = useState(() => {
        const data = localStorage.getItem("savedQA");
        return data ? JSON.parse(data) : [];
    });
    const [manualAnswer, setManualAnswer] = useState("");

    const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const currentQuestion = data[questionIndex];

    const answer = manualAnswer.trim() || transcript.trim();

    const handleSave = () => {
        if (!answer) {
        alert("답변을 입력하거나 음성으로 녹음해주세요.");
        return;
        }

        const newQA = { question: currentQuestion, answer };
        const updatedQA = [...savedQA, newQA];

        let newIndex;
        do {
        newIndex = Math.floor(Math.random() * data.length);
        } while (newIndex === questionIndex);

        setQuestionIndex(newIndex);
        setManualAnswer("");
        SpeechRecognition.stopListening();
        setTime(0);

        setSavedQA(updatedQA);
        localStorage.setItem("savedQA", JSON.stringify(updatedQA));
    };

    const handleNext = () => {
        let newIndex;
        do {
        newIndex = Math.floor(Math.random() * data.length);
        } while (newIndex === questionIndex);

        setQuestionIndex(newIndex);
        setManualAnswer("");
        SpeechRecognition.stopListening();
        setTime(0);
    };

    useEffect(() => {
        const timer = setInterval(() => setTime((t) => t + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (t: number) =>
        `${Math.floor(t / 60)}:${(t % 60).toString().padStart(2, "0")}`;

    if (!browserSupportsSpeechRecognition) {
        return (
        <>
            <Bar />
            <_.Container>
            <p>이 브라우저는 음성 인식을 지원하지 않습니다.</p>
            </_.Container>
        </>
        );
    }

    return (
        <>
        <Bar />
        <_.Container>
            <_.Timer>{formatTime(time)}</_.Timer>
            <_.Question>{currentQuestion}</_.Question>

            <_.InputBox
            as="textarea"
            rows={5}
            placeholder="텍스트를 입력하거나 음성 녹음을 사용하세요."
            value={manualAnswer || transcript}
            onChange={(e) => setManualAnswer(e.target.value)}
            />

            <_.ButtonContainer>
            <_.NextButton onClick={handleNext}>넘어가기</_.NextButton>
            <_.SaveButton onClick={handleSave}>저장하기</_.SaveButton>
            </_.ButtonContainer>

            <_.ButtonContainer>
            {listening ? (
                <_.NextButton onClick={SpeechRecognition.stopListening}>녹음 중지</_.NextButton>
            ) : (
                <_.SaveButton onClick={() => SpeechRecognition.startListening({ language: "ko-KR" })}>
                음성 녹음 시작
                </_.SaveButton>
            )}
            </_.ButtonContainer>
        </_.Container>
        </>
    );
}