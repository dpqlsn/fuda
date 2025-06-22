import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const Container = styled.div`
    background-color: white;
    border-radius: 12px;
    text-align: center;
    padding: 4%
`;

export const Message = styled.p`
    margin-bottom: 12%;
    margin-top: 1%;
    font-size: 1.8rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
`;

export const ButtonOk = styled.button`
    margin: 0 4%;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    border: 1px solid #7BC357;
    border-radius: 8px;
    background-color: #7BC357;
    color: #fff;
    font-family: 'Beanpole', sans-serif;
`;

export const ButtonNo = styled.button`
    margin: 0 4%;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    border: 2px solid #7BC357;
    color: #7BC357;
    border-radius: 8px;
    background-color: transparent;
    font-family: 'Beanpole', sans-serif;
`;
