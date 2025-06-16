import styled from '@emotion/styled';

export const Container = styled.div`
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

export const Timer = styled.div`
    background-color: #7BC357;
    color: white;
    font-size: 24px;
    padding: 8px 14px;
    border-radius: 20px;
    margin-bottom: 40px;
    text-align: center;
    font-family: 'Beanpole', sans-serif;
`;

export const Question = styled.div`
    font-size: 40px;
    text-align: center;
    color: #161716;
    margin-bottom: 48px;
    line-height: 1.5;
`;

export const InputBox = styled.textarea`
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

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const NextButton = styled.button`
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

export const SaveButton = styled.button`
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