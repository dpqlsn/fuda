import { useState } from 'react';
import styled from '@emotion/styled';
import Bar from '../components/Navbar';
import '../App.css';

type Saved = {
    question: string;
    answer: string;
};

const Container = styled.div`
    position: relative;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

const MainArea = styled.div`
    width: 870px;
`;

const Title = styled.div`
    color: #161716;
    font-size: 44px;
    margin-bottom: 44px;
    text-align: left;
`;

const Item = styled.div`
    display: flex;
    background: #F9F9F9;
    padding: 32px;
    border-radius: 8px;
    margin-bottom: 24px;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const Question = styled.div`
    flex: 1;
    font-size: 24px;
    margin-right: 16px;
    text-align: left;
    word-break: break-word;
`;

const Answer = styled.div`
    flex: 2;
    color: gray;
    text-align: left;
    font-size: 20px;
    word-break: break-word;
    white-space: pre-wrap;
`;

const DeleteButton = styled.button`
    background-color: #7BC357;
    color: white;
    border: none;
    padding: 12px 24px;
    margin-left: 20px;
    font-size: 20px;
    border-radius: 24px;
    cursor: pointer;
    font-family: 'Beanpole', sans-serif;
`;


export default function SavedList() {
    const [qaList, setQaList] = useState<Saved[]>(() => {
        const data = localStorage.getItem('savedQA');
        return data ? JSON.parse(data) : [];
    });

    const handleDelete = (index: number) => {
        const newList = [...qaList];
        newList.splice(index, 1);
        setQaList(newList);
        localStorage.setItem('savedQA', JSON.stringify(newList));
    };

    return (
        <>
            <Bar />
            <Container>
                <MainArea>
                    <Title>저장 된 질문보기</Title>
                    {qaList.map((item: Saved, index: number) => (
                        <Item key={index}>
                                <Question>{item.question}</Question>
                                <Answer>{item.answer}</Answer>
                            <DeleteButton onClick={() => handleDelete(index)}>삭제</DeleteButton>
                        </Item>
                    ))}
                    {qaList.length === 0 && <Answer>저장된 질문이 없습니다.</Answer>}
                </MainArea>
            </Container>
        </>
    );
}
