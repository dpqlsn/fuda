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
        "Javascript가 단일 스레드인데 어떻게 멀티스레드처럼 동작하나요?",
        "CSR과 SSR의 차이점은 무엇인가요?",
        "웹 접근성(WA, a11y)을 고려한 개발 경험이 있다면 알려주세요.",
        "프론트엔드에서 CORS란 무엇이며, 어떻게 해결하나요?",
        "디바운싱과 스로틀링의 차이와 사용 사례는 무엇인가요?",
        "웹팩(Webpack)과 번들링에 대해 설명해주세요.",
        "REST API와 GraphQL의 차이점을 설명해주세요.",
        "브라우저의 이벤트 버블링과 캡처링에 대해 설명해주세요.",
        "컴포넌트 재사용성을 높이기 위해 어떤 방법을 사용하셨나요?",
        "Intersection Observer는 무엇이며 어떤 상황에서 유용한가요?",
        "프론트엔드 테스트에는 어떤 도구를 사용해봤고, 어떤 테스트를 작성했나요?",
        "SPA와 MPA의 차이점은 무엇인가요?",
        "Lazy loading이란 무엇인가요?",
        "이미지 최적화를 위한 방법은?",
        "PWA(Progressive Web App)란 무엇인가요?",
        "Service Worker는 어떤 역할을 하나요?",
        "LocalStorage와 SessionStorage의 차이는 무엇인가요?",
        "Fetch API와 Axios의 차이점은?",
        "CSP(Content Security Policy)란 무엇인가요?",
        "HTTP 캐싱 전략은 어떻게 구성하나요?",
        "CSS Flexbox와 Grid의 차이점은?",
        "반응형 웹 디자인은 어떻게 구현하나요?",
        "폴리필(polyfill)이란 무엇인가요?",
        "브라우저 호환성을 어떻게 관리하나요?",
        "렌더링 차단 자원(render-blocking resources)은 무엇인가요?",
        "WebSocket이란 무엇인가요?",
        "ARIA 속성은 언제 사용하나요?",
        "SEO를 개선하기 위한 방법은?",
        "서버 컴포넌트 SSR과 CSR의 장단점은?",
        "CSS Modules란 무엇인가요?",
        "Styled-components가 무엇인가요?",
        "BEM(Block Element Modifier) 방식이란 무엇인가요?",
        "ESLint나 Prettier를 왜 사용하나요?",
        "버전 관리(Git) 시 브랜치 전략은 어떻게 구성하나요?",
        "CI/CD 파이프라인에서 프론트엔드 배포는 어떻게 하나요?",
        "브라우저의 렌더 트(Render Tree)란 무엇인가요?",
        "Critical Rendering Path는 무엇인가요?",
        "DOMContentLoaded와 load 이벤트의 차이는?",
        "postMessage API는 무엇인가요?",
        "Shadow DOM이란 무엇인가요?",
        "Custom Element(Web Component)란 무엇인가요?",
        "비동기 처리 방식(Promise, async/await)의 차이점은?",
        "이벤트 위임(Event Delegation)이란 무엇인가요?",
        "Context API와 Redux의 사용 경험을 비교해보세요.",
        "React에서 useEffect 훅이 의존성 배열에 따라 어떻게 다르게 실행되나요?",
        "Ref를 언제 사용하나요?",
        "React.memo는 무엇이며 어떻게 활용하나요?",
        "Vue에서 컴포넌트 라이프사이클 훅은 어떤 순서로 실행되나요?",
        "CSS-in-JS를 사용할 때의 장단점은?",
        "styled-jsx는 무엇인가요?",
        "Jest를 사용한 테스트 코드 경험이 있다면 알려주세요.",
        "Cypress나 Selenium 같은 E2E 테스트 도구를 사용해 본 경험이 있나요?",
        "Lighthouse를 이용해 본 경험이 있다면 주요 체크 항목은 무엇이었나요?",
        "웹폰트(woff, woff2, ttf)의 차이점은 무엇인가요?",
        "HTTP/2나 HTTP/3의 장점은 무엇인가요?",
        "서버 사이드 렌더링에서 hydrate란 무엇인가요?",
        "API 에러 처리는 어떻게 구성하나요?",
        "axios interceptor를 사용했던 경험이 있나요?",
        "웹 보안에서 XSS, CSRF는 무엇인가요?",
        "Cookie의 SameSite 속성은 무엇인가요?",
        "CSR/SSR 중 SEO를 어떻게 보완하나요?",
        "브라우저 스토리지의 보안 이슈는?",
        "Deferred, async script 속성의 차이점은?",
        "웹 폰트 옵티마이징 방법은?",
        "Viewport meta 태그가 왜 중요한가요?",
        "HTTP 헤더 중 Cache-Control 설정은 어떻게?",
        "코드 스플리팅(Code Splitting)이란 무엇인가요?",
        "babel이란 무엇인가요?",
        "Polyfill과 Transpiler의 차이는?",
        "React의 Suspense 기능 활용 경험이 있다면?",
        "React Server Component와 클라이언트 컴포넌트 차이는?",
        "Next.js CSR, SSG, SSR 방식 차이는?",
        "Next.js의 ISR이란?",
        "TailwindCSS란 무엇이며, 사용해본 경험은?",
        "CSS 변수(--*, var())란 무엇인가요?",
        "PostCSS란 무엇인가요?",
        "MobX란 무엇인가요?",
        "Immutable data란 무엇인가요?",
        "Hot Module Replacement가 왜 중요한가요?",
        "웹 접근성 심사를 위해 어떤 툴을 써봤나요?",
        "React에서 에러 처리 전략은 무엇인가요?",
        "HTML semantic tag 사용하는 이유는?",
        "SEO meta 태그 작성 시 유의점은?",
        "웹 페이지 퍼포먼스 측정 지표(LCP, FID 등)는?",
        "Image lazy-loading은 어떻게 구현하나요?",
        "Preload와 Prefetch의 차이점은?",
        "Critical CSS란 무엇인가요?",
        "브라우저의 렌더링 과정(flow)을 설명해주세요.",
        "브라우저의 reflow와 repaint 차이는?",
        "CSS 2D/3D transform이란 무엇인가요?",
        "prefers-color-scheme 미디어쿼리는 뭐에요?",
        "Touch 이벤트와 Pointer 이벤트 차이점은?",
        "웹 애니메이션 API와 CSS 애니메이션의 차이는?",
        "CSS 트랜지션과 애니메이션이란?",
        "ARIA 속성 예시 하나만 설명해주세요.",
        "반응형 이미지(srcset, sizes)는 어떻게 사용하나요?",
        "DevTools의 주요 기능은?",
        "브라우저의 메모리 릭 분석은 어떻게 하시나요?",
        "CSS specificity는 무엇인가요?",
        "클라이언트 사이드 라우팅이란 무엇인가요?"
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