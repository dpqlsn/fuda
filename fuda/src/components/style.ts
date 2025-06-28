import styled from '@emotion/styled';

export const Container = styled.div`
    position: fixed;
    width: 100%;
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
    font-size: 1.3rem;
    padding: 0.5% 1%;
    border-radius: 20px;
    margin-bottom: 2%;
    text-align: center;
    font-family: 'Beanpole', sans-serif;
`;

export const Question = styled.div`
    font-size: 2.4rem;
    text-align: center;
    color: #161716;
    margin-bottom: 2%;
    line-height: 1.5;
`;

export const InputBox = styled.textarea`
    width: 50%;
    height: 16vh;
    background-color: #F9F9F9;
    border: none;
    border-radius: 8px;
    padding: 1%;
    resize: none;
    margin-bottom: 4%;
    font-size: 1.2rem;
    font-family: 'Beanpole', sans-serif;
    cursor: pointer;

    &::placeholder {
        color: #B5B5B5
    }

    &:focus {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const NextButton = styled.button`
    background-color: #7BC357;
    color: white;
    padding: 1% 4%;
    border: none;
    border-radius: 24px;
    font-size: 1.5rem;
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
    border: 1.5px solid #7BC357;
    padding: 1% 4%;
    border-radius: 24px;
    font-size: 1.5rem;
    font-family: 'Beanpole', sans-serif;

    :hover {
        background-color: #7BC357;
        color: white;
        cursor: pointer;
    }
`;