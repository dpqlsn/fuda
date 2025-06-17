import { useState } from 'react';
import styled from '@emotion/styled';
import Bar from '../components/Navbar';
import DownIcon from '../assets/download.svg';
import '../App.css';
interface Saved {
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

const Item = styled.div`
    display: flex;
    background: #F9F9F9;
    padding: 32px;
    border-radius: 8px;
    margin-bottom: 24px;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const TitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 44px;
`;

const Title = styled.div`
    color: #161716;
    font-size: 44px;
    text-align: left;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
`;

const Question = styled.div`
    flex: 1;
    font-size: 24px;
    margin-right: 16px;
    text-align: left;
    word-break: break-word;

    ::selection {
        background: #f6f1c6;
        color: black;
    }
`;

const Answer = styled.div`
    flex: 2;
    color: gray;
    text-align: left;
    font-size: 20px;
    word-break: break-word;
    white-space: pre-wrap;

    ::selection {
        background: #f6f1c6;
        color: black;
    }
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
                    <TitleArea>
                        <Title>저장 된 질문보기</Title>
                            <IconButton onClick={() => console.log('체크')}>
                            <img src={DownIcon} alt="Download" />
                        </IconButton>
                    </TitleArea>
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
