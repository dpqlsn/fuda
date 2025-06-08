import styled from '@emotion/styled';
import '../App.css';
import Bar from '../components/navbar';

const Container = styled.div`
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

export default function Save(){
    return(
        <Container>
            <Bar />
        </Container>
    );
}