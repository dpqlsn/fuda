import { useState } from 'react';
import styled from '@emotion/styled';
import Bar from '../components/NavBar';
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
    padding-left: 120px;
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
`;

const Question = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    margin-left: 24px;
    width: 220px;
    text-align: left;
`;

const Answer = styled.div`
    color: gray;
    width: 220px;
    text-align: left;
    margin-left: 120px;
    font-size: 20px;
`;

const DeleteButton = styled.button`
    display: flex;
    justify-content: right;
    background-color: #7BC357;
    color: white;
    border: none;
    padding: 12px 24px;
    margin-left: 120px;
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
