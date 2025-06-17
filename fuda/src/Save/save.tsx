import { useState } from 'react';
import Bar from '../components/Navbar';
import DownIcon from '../assets/download.svg';
import '../App.css';
import * as _ from './style';

interface Saved {
    question: string;
    answer: string;
};

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
            <_.Container>
                <_.MainArea>
                    <_.TitleArea>
                        <_.Title>저장 된 질문보기</_.Title>
                            <_.IconButton onClick={() => console.log('체크')}>
                            <img src={DownIcon} alt="Download" />
                        </_.IconButton>
                    </_.TitleArea>
                    {qaList.map((item: Saved, index: number) => (
                        <_.Item key={index}>
                                <_.Question>{item.question}</_.Question>
                                <_.Answer>{item.answer}</_.Answer>
                            <_.DeleteButton onClick={() => handleDelete(index)}>삭제</_.DeleteButton>
                        </_.Item>
                    ))}
                    {qaList.length === 0 && <_.Answer>저장된 질문이 없습니다.</_.Answer>}
                </_.MainArea>
            </_.Container>
        </>
    );
}