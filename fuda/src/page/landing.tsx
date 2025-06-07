import styled from '@emotion/styled';
import '../App.css';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
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

export default function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/choice');
    };

    return (
        <Container onClick={handleClick}>
            <Logo src={logo} alt="logo" />
            <SubTitle>당신을 위한 면접 서비스</SubTitle>
            <Title>푸다</Title>
        </Container>
    );
}
