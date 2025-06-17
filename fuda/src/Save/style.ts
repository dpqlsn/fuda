import styled from '@emotion/styled';

export const Container = styled.div`
    position: relative;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

export const MainArea = styled.div`
    width: 870px;
`;

export const Item = styled.div`
    display: flex;
    background: #F9F9F9;
    padding: 32px;
    border-radius: 8px;
    margin-bottom: 24px;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const TitleArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 44px;
`;

export const Title = styled.div`
    color: #161716;
    font-size: 44px;
    text-align: left;
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
`;

export const Question = styled.div`
    flex: 1;
    font-size: 24px;
    margin-right: 16px;
    text-align: left;
    word-break: break-word;
`;

export const Answer = styled.div`
    flex: 2;
    color: gray;
    text-align: left;
    font-size: 20px;
    word-break: break-word;
    white-space: pre-wrap;
`;

export const DeleteButton = styled.button`
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

export const mark = styled.div`
    background:rgb(212, 255, 0);
    padding: 0 2px; 
`;