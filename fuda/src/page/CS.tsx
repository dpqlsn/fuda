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

export default function CS() {
const questionList = [[
    "스레드와 프로세스의 차이를 설명해주세요.",
    "HTTP와 HTTPS의 차이점은?",
    "브라우저에 URL을 입력했을 때 일어나는 일을 설명해주세요.",
    "해시 테이블의 시간 복잡도와 충돌 해결 방법은?",
    "쿠키, 세션, 로컬스토리지의 차이점은?",
    "RESTful API란 무엇인가요?",
    "TCP와 UDP의 차이점은?",
    "OSI 7계층에 대해 설명해주세요.",
    "DNS가 무엇이고 어떻게 동작하나요?",
    "동기와 비동기의 차이점은 무엇인가요?",
    "Garbage Collection은 어떻게 작동하나요?",
    "Call Stack과 Event Loop의 관계를 설명해주세요.",
    "데드락(Deadlock)은 무엇이고 어떻게 방지하나요?",
    "Virtual Memory는 무엇인가요?",
    "캐시(Cache)의 역할과 종류는 무엇인가요?",
    "서버와 클라이언트의 차이점은?",
    "CORS란 무엇이고 어떻게 해결하나요?",
    "TLS/SSL은 무엇이고 어떻게 동작하나요?",
    "DNS 조회 과정(Recursive vs Iterative)은?",
    "IP와 MAC 주소의 차이점은?",
    "포트란 무엇이고 왜 중요한가요?",
    "HTTP 메서드(GET, POST, PUT, DELETE) 의미는 무엇인가요?",
    "HTTP 상태 코드 200, 404, 500의 의미는?",
    "HTTPS 인증서가 어떻게 작동하나요?",
    "웹소켓(WebSocket)이란 무엇인가요?",
    "JSON과 XML 포맷의 차이는?",
    "REST와 GraphQL 방식의 차이는?",
    "TCP 3-way handshake란 무엇인가요?",
    "TCP 연결 종료 과정은 어떻게 되나요?",
    "ARP와 RARP는 무엇인가요?",
    "URL 구조(Protocol, Host, Path 등)를 설명해주세요.",
    "세그먼트와 패킷의 차이는 무엇인가요?",
    "라우팅(Routing)이란 무엇인가요?",
    "로드밸런서(Load Balancer)의 역할은?",
    "DNS 캐싱이란 무엇인가요?",
    "정규 표현식(Regex)이란 무엇인가요?",
    "스택(Stack)과 큐(Queue)의 차이점은?",
    "이진 트리(Binary Tree)란 무엇인가요?",
    "트리와 그래프의 차이는 무엇인가요?",
    "깊이 우선 탐색(DFS)과 너비 우선 탐색(BFS)은?",
    "O(N), O(log N), O(N^2)의 의미는?",
    "이진 탐색(Binary Search)이란 무엇인가요?",
    "정렬 알고리즘(버블/삽입/선택)은 어떻게 다르나요?",
    "힙(Heap) 자료구조는 무엇인가요?",
    "우선순위 큐(Priority Queue)란?",
    "해시 충돌(Chaining vs Open Addressing)은?",
    "LRU 캐시란 무엇인가요?",
    "트라이(Trie) 자료구조는 무엇인가요?",
    "LR(Left-Right) 회전이란 무엇인가요?",
    "그래프에서 사이클 탐지 방법은?",
    "최단 경로 알고리즘(Dijkstra)이란?",
    "최소 신장 트리(MST, Kruskal/Prim)는?",
    "동기화(Synchronization)란 무엇인가요?",
    "뮤텍스(Mutex)와 세마포어(Semaphore)는?",
    "스핀락(Spinlock)이란?",
    "Race condition(경쟁 상태)이란?",
    "스레드 안전(Thread safety)이란?",
    "GC 마크-스윕(Mark-and-Sweep)이란?",
    "GC 세대별 수집(Young/Old) 전략은?",
    "메모리 누수(Memory Leak)란 무엇인가요?",
    "스택 오버플로우(Stack overflow)란?",
    "힙 오버플로우란 무엇인가요?",
    "페이지 교체 알고리즘(LRU, FIFO)은?",
    "가상 주소와 실제 주소 랩핑이란?",
    "TLB(Translation Lookaside Buffer)란?",
    "메모리 단편화(Fragmentation)이란?",
    "프로세스 동기화란 무엇인가요?",
    "Context Switch란 무엇인가요?",
    "CPUs 코어나 스케줄러의 역할은?",
    "시그널(Signals)과 인터럽트란?",
    "시스템 콜(System Call)이란?",
    "가상화(Virtualization)이란 무엇인가요?",
    "컨테이너(Container)와 VM의 차이점은?",
    "프로세스 간 통신(IPC) 방식은?",
    "파이프(Pipe)와 소켓(Socket)의 차이는?",
    "메시지 큐 IPC란 무엇인가요?",
    "공유 메모리(shared memory)란?",
    "비동기 I/O란 무엇인가요?",
    "블로킹 I/O와 넌블로킹 I/O의 차이점은?",
    "이벤트 기반 프로그래밍이란?",
    "프록시 서버란 무엇인가요?",
    "리버스 프록시란?",
    "CDN(Content Delivery Network)이란?",
    "SSL 인증서 검증 과정은?",
    "OAuth 인증 방식이란?",
    "JWT 토큰 구조는?",
    "세션 고정(Session Fixation)이란 무엇인가요?",
    "CSRF 공격은 무엇인가요?",
    "XSS 공격은 무엇이고 예방법은?",
    "SQL Injection이란 무엇인가요?",
    "NoSQL Injection이란?",
    "CAP 이론이란 무엇인가요?",
    "BASE 모델이란?",
    "ACID vs BASE의 차이는?",
    "샤딩(Sharding)이란?",
    "Replication이란?",
    "Consistency Level이란?",
    "EPOL L란 무엇인가요?",
    "Haproxy란?",
    "NGINX 리버스 프록시 역할은?",
    "C10k 문제란 무엇인가요?",
    "TLS 핸드쉐이크란?",
    "프로토콜 버퍼(Protobuf)란?",
    "REST HATEOAS란 무엇인가요?",
    "웹훅(Webhook)이란 무엇인가요?",
    "CLI와 GUI의 차이점은?",
    "서비스 메시(Service Mesh)란?",
    "헬스 체크란?",
    "폴링(Polling) vs 푸시(Push)의 차이는?"
]];

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