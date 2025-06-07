import React from 'react';
import styled from '@emotion/styled'
import '../App.css';
import logo from '../assets/logo.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white;
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
`;

const SubTitle = styled.div`
    font-size: 20px;
    color: #999;
    margin-bottom: 16px;
`;

const Title = styled.h1`
    font-size: 40px;
    color: #557E41;
    font-weight: bold;
    margin: 0;
`;

const Landing: React.FC = () => {
    return (
        <Container>
        <Logo src={logo} alt="logo" />
        <SubTitle>당신을 위한 면접 서비스</SubTitle>
        <Title>푸다</Title>
        </Container>
    );
};

export default Landing;
