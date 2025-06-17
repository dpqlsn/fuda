import { useState } from 'react';
import Bar from '../components/Navbar';
import DownIcon from '../assets/download.svg';
import '../App.css';
import * as _ from './style';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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

    const handleDownloadPDF = async () => {
        const element = document.querySelector(".aiReport_page");

        if (element !== null && element instanceof HTMLElement) {
            const canvas = await html2canvas(element);
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const imgProps = pdf.getImageProperties(imgData);
            const imgWidth = pageWidth;
            const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

            let position = 0;

            if (imgHeight > pageHeight) {
                let heightLeft = imgHeight;
                while (heightLeft > 0) {
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                    position -= pageHeight;
                    if (heightLeft > 0) pdf.addPage();
                }
            } else {
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            }

            pdf.save('savedQA.pdf');
        }
    };

    return (
        <>
            <Bar />
            <_.Container>
                <_.MainArea className="aiReport_page">
                    <_.TitleArea>
                        <_.Title>저장 된 질문보기</_.Title>
                        <_.IconButton onClick={handleDownloadPDF}>
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
