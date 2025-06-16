import { useEffect, useState } from 'react';
import '../App.css'
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

export default function Framework() {
    const questionList = [
        "React에서 useState hook은 무엇이고 어떻게 사용하나요?",
        "Vue의 반응형 시스템은 어떻게 동작하나요?",
        "Next.js와 CRA(Create React App)의 차이점은 무엇인가요?",
        "Angular에서 의존성 주입(Dependency Injection)은 어떻게 이루어지나요?",
        "React의 useEffect 훅은 어떤 역할을 하나요?",
        "React에서 상태 끌어올리기(lifting state up)는 왜 필요한가요?",
        "Vue의 Composition API와 Options API의 차이점은 무엇인가요?",
        "Svelte는 다른 프레임워크와 어떤 점에서 다른가요?",
        "Next.js에서 getServerSideProps와 getStaticProps의 차이점은?",
        "Angular의 컴포넌트 라이프사이클은 어떻게 구성되어 있나요?",
        "React의 Context API는 무엇이며, 언제 사용하나요?",
        "Vue의 v-if와 v-show의 차이는 무엇인가요?",
        "React에서 key prop은 왜 필요하고, 어떻게 작동하나요?",
        "Next.js에서 동적 라우팅은 어떻게 구현하나요?",
        "React에서 useMemo와 useCallback의 차이점은?",
        "Vue에서 computed와 watch의 차이는 무엇인가요?",
        "Angular에서 RxJS Observables를 어떻게 사용하나요?",
        "Svelte의 reactive statement `$:`는 무엇인가요?",
        "Next.js의 API Routes는 무엇이고, 어떻게 사용하나요?",
        "React에서 폼(form) 상태 관리를 어떻게 하나요?",
        "Vue Router에서 네비게이션 가드(Navigation Guard)는?",
        "Angular CLI에서 제공하는 주요 기능은 무엇인가요?",
        "Svelte의 lifecycle hook(onMount 등)은?",
        "Next.js에서 ISR(Incremental Static Regeneration)이란?",
        "React에서 Error Boundary를 어떻게 구현하나요?",
        "Vuex 상태 관리를 어떻게 하나요?",
        "Angular에서 양방향 바인딩(Two-way binding)은?",
        "React Router에서 nested routes는 어떻게 구성하나요?",
        "Vue의 Slot과 Scoped Slot은 어떻게 다른가요?",
        "Angular의 NgModule 구조는 어떻게 구성되나요?",
        "Svelte에서 store를 어떻게 사용하나요?",
        "Next.js의 Image 컴포넌트는 어떤 장점이 있나요?",
        "React에서 CSS-in-JS란 무엇인가요?",
        "Vue에서 mixin과 plugin의 차이점은?",
        "Angular에서 형식 기반 폼(Template-driven form)과 반응형 폼(Reactive form)의 차이?",
        "React에서 lazy load와 Suspense는 어떻게 쓰이나요?",
        "Vue의 Composition API에서 setup() 함수 역할은?",
        "Angular에서 서비스(service)의 역할은 무엇인가요?",
        "Next.js에서 Custom Document(_document.js)는 언제 사용하나요?",
        "Svelte와 React 중 성능 차이의 주요 원인은?",
        "React에서 포털(portal)이란 무엇인가요?",
        "Vue의 Teleport 기능은 무엇인가요?",
        "Angular에서 AOT(Ahead-of-Time) vs JIT 컴파일 차이?",
        "Next.js에서 middleware 역할은 무엇인가요?",
        "React에서 controlled vs uncontrolled component 차이?",
        "Vue에서 dynamic component는 어떻게 사용하나요?",
        "Angular에서 Change Detection 전략은 무엇인가요?",
        "SvelteKit은 무엇이며, 전통 Svelte와의 차이는?",
        "Next.js에서 App Router와 Pages Router 비교는?",
        "React에서 Recoil과 Redux의 차이는?",
        "Vue Router에서 lazy loading 방식은 어떻게 하나요?",
        "Angular에서 http 요청 시 HttpClient 모듈 사용법은?",
        "Svelte의 transitions 효과는 어떻게 적용하나요?",
        "Next.js에서 head 메타데이터 관리를 어떻게 하나요?",
        "React에서 refs를 어떻게 사용하나요?",
        "Vue의 directive(custom directive)는 어떻게 만드나요?",
        "Angular의 RxJS Subject vs BehaviorSubject 차이?",
        "Svelte에서 action 기능은 무엇인가요?",
        "Next.js에서 인증 구현 방식 예시는?",
        "React에서 Portal의 대표적 사용 사례는?",
        "Vuex vs Pinia 차이점은 무엇인가요?",
        "Angular에서 Interceptor를 어떻게 구현하나요?",
        "Svelte의 scoped CSS는 어떻게 동작하나요?",
        "Next.js에서 환경 변수(env)를 설정하는 방법은?",
        "React에서 hook 규칙(Rules of Hooks)이란?",
        "Vue의 provide/inject API는 무엇인가요?",
        "Angular에서 Service Worker를 어떻게 설정하나요?",
        "Svelte에서 context API 사용 예시는?",
        "Next.js에서 Redirect와 Rewrites 차이?",
        "React에서 state 관리 라이브러리 비교해보세요.",
        "Vue에서 async component를 어떻게 사용하나요?",
        "Angular의 Lazy Loading 모듈 구성은?",
        "Svelte에서 reactive store와 writable store 차이?",
        "Next.js에서 multi-region 배포 전략은?",
        "React에서 higher-order component(HOC)란 무엇인가요?",
        "Vue에서 watchEffect와 watch의 차이는?",
        "Angular에서 Form Validation을 어떻게 구성하나요?",
        "Svelte에서 server-side rendering(SSR)은 어떻게 되나요?",
        "Next.js에서 TVP(Tailwind, Vercel, Preview)?",
        "React에서 Suspense를 활용한 코드 분할은?",
        "Vue의 Composition API와 React Hook의 유사점은?",
        "Angular HTTP interceptor로 인증 토큰 처리?",
        "SvelteKit의 load() 함수 역할은?",
        "Next.js에서 i18n(국제화) 설정 방법은?",
        "React에서 Error Boundary와 try/catch 블록 비교?",
        "Vue의 teleport과 React portal 차이점은?",
        "Angular에서 service의 제공범위(provideIn)는?",
        "Svelte에서 타사 라이브러리 통합 시 고려사항은?",
        "Next.js에서 AMP 지원 방식은?",
        "React에서 forwardRef는 무엇인가요?",
        "Vue의 reactive vs ref 차이는?",
        "Angular에서 router-based preloading 전략은?",
        "Svelte에서 lifecycle cleanup(onDestroy 등)은?",
        "Next.js에서 CSS Modules 지원 방식은?",
        "React에서 SSR 서버 구성 예시는?",
        "Vue에서 teleport vs portal 방식 비교?",
        "Angular에서 zone.js 역할은 무엇인가요?",
        "Svelte의 compile-time vs runtime 차이는?",
        "Next.js에서 streaming SSR이란?",
        "React에서 hydration란 무엇인가요?",
        "Vue의 vue-cli vs vite 차이는?",
        "Angular에서 i18n 번역 전략은?",
        "SvelteKit에서 adapter 역할은 무엇인가요?",
        "Next.js에서 단일 페이지 vs 다이나믹 페이지 구성은?",
        "React에서 custom hook 만드는 기준은?",
        "Vue에서 컴포저블(composable)이란 무엇인가요?",
        "Angular에서 메타데이터 데코레이터란?",
        "SvelteKit에서 form handling 방법은?",
        "Next.js에서 서버 컴포넌트(Server Component)는?",
        "React에서 표준 상태 관리 방식을 추천한다면?",
        "Vue에서 SSR과 CSR의 차이는?",
        "Angular Universal SSR 지원은?",
        "Svelte에서 타입스크립트(TypeScript) 사용법은?",
        "Next.js에서 Edge Runtime 활용 사례는?",
        "React에서 state reconciliation은 무엇인가요?",
        "Vue의 Vite 플러그인 작성 방법은?"
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