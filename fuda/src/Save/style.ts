import styled from "@emotion/styled";
interface ItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  position: relative;
  padding: 2% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const MainArea = styled.div`
  width: 70%;
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5%;
`;

export const Title = styled.div`
  color: #161716;
  font-size: 2.6rem;
  text-align: left;
`;

export const IconButton = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;

  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  background: #f9f9f9;
  padding: 4%;
  border-radius: 8px;
  margin-bottom: 3%;
  align-items: flex-start;
  flex-wrap: wrap;
  transition: background-color 0.3s;
  background-color: ${({ selected }) =>
    selected ? "rgba(0, 0, 0, 0.1)" : "f9f9f9"};
`;

export const Question = styled.div`
  flex: 1;
  font-size: 1.5rem;
  margin-right: 2%;
  text-align: left;
  word-break: break-word;
`;

export const Answer = styled.div`
  flex: 2;
  color: gray;
  text-align: left;
  font-size: 1.2rem;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const DeleteButton = styled.button`
  background-color: #7bc357;
  color: white;
  border: none;
  padding: 1% 3%;
  margin-left: 5%;
  font-size: 1.3rem;
  border-radius: 24px;
  cursor: pointer;
  font-family: "Beanpole", sans-serif;
`;

export const PdfContainer = styled.div`
  position: fixed;
  left: -9999px;
  background: white;
  padding: 20px;
  width: 210mm;
  font-family: Arial, sans-serif;
`;
