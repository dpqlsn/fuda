import { useEffect, useState } from "react";
import Bar from "../components/Navbar";
import DownIcon from "../assets/download.svg";
import "../App.css";
import * as _ from "./style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
interface Saved {
  question: string;
  answer: string;
}

export default function SavedList() {
  const [qaList, setQaList] = useState<Saved[]>(() => {
    const data = localStorage.getItem("savedQA");
    return data ? JSON.parse(data) : [];
  });

  const [highlightedTexts, setHighlightedTexts] = useState<string[]>(() => {
    const stored = localStorage.getItem("highlightedTexts");
    return stored ? JSON.parse(stored) : [];
  });

  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection()?.toString().trim();
      if (!selection) return;

      const lowerSelection = selection.toLowerCase();
      const lowerHighlightedTexts = highlightedTexts.map((t) => t.toLowerCase());

      if (lowerHighlightedTexts.includes(lowerSelection)) {
        const updated = highlightedTexts.filter(
          (t) => t.toLowerCase() !== lowerSelection
        );
        setHighlightedTexts(updated);
        localStorage.setItem("highlightedTexts", JSON.stringify(updated));
      } else {
        const updated = [...highlightedTexts, selection];
        setHighlightedTexts(updated);
        localStorage.setItem("highlightedTexts", JSON.stringify(updated));
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [highlightedTexts]);

  const handleDelete = (index: number) => {
    const newList = qaList.filter((_, i) => i !== index);
    setQaList(newList);
    localStorage.setItem("savedQA", JSON.stringify(newList));
    setSelectedIndexes((prev) => prev.filter((i) => i !== index));
  };

  const toggleSelect = (index: number) => {
    setSelectedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const escapeHtml = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const getHighlightedParts = (text: string) => {
    if (!highlightedTexts.length) return [text];

    const pattern = new RegExp(
      `(${highlightedTexts
        .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`,
      "gi"
    );
    return text.split(pattern);
  };

  const highlightMatched = (text: string) =>
    getHighlightedParts(text).map((part, i) =>
      highlightedTexts.some((ht) => ht.toLowerCase() === part.toLowerCase()) ? (
        <mark key={i} style={{ backgroundColor: "#fff8cc" }}>
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    );

  const getHighlightedHTML = (text: string) =>
    getHighlightedParts(text)
      .map((part) =>
        highlightedTexts.some((ht) => ht.toLowerCase() === part.toLowerCase())
          ? `<mark style="background-color:#fff8cc;">${escapeHtml(part)}</mark>`
          : escapeHtml(part)
      )
      .join("");

  const handleDownloadPDF = async () => {
    if (selectedIndexes.length === 0) {
      alert("하나 이상의 항목을 선택하세요");
      return;
    }

    const container = document.createElement("div");
    Object.assign(container.style, {
      position: "fixed",
      left: "-9999px",
      background: "white",
      padding: "20px",
      width: "210mm",
      fontFamily: "Arial, sans-serif",
    });

    selectedIndexes.forEach((index) => {
      const { question, answer } = qaList[index];

      const questionElem = document.createElement("div");
      questionElem.innerHTML = getHighlightedHTML(question);
      questionElem.style.fontWeight = "bold";
      questionElem.style.marginBottom = "8px";

      const answerElem = document.createElement("div");
      answerElem.innerHTML = getHighlightedHTML(answer);
      answerElem.style.marginBottom = "24px";

      container.appendChild(questionElem);
      container.appendChild(answerElem);
    });

    document.body.appendChild(container);

    const canvas = await html2canvas(container);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pageWidth) / imgProps.width;

    let position = 0;
    if (imgHeight > pageHeight) {
      let heightLeft = imgHeight;
      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) pdf.addPage();
      }
    } else {
      pdf.addImage(imgData, "PNG", 0, position, pageWidth, imgHeight);
    }

    pdf.save("savedQA.pdf");
    document.body.removeChild(container);
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
          {qaList.length > 0 ? (
            qaList.map((item, index) => (
              <_.Item
                key={index}
                selected={selectedIndexes.includes(index)}
                onClick={() => toggleSelect(index)}
              >
                <_.Question>{highlightMatched(item.question)}</_.Question>
                <_.Answer>{highlightMatched(item.answer)}</_.Answer>
                <_.DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                >
                  삭제
                </_.DeleteButton>
              </_.Item>
            ))
          ) : (
            <_.Answer>저장된 질문이 없습니다.</_.Answer>
          )}
        </_.MainArea>
      </_.Container>
    </>
  );
}