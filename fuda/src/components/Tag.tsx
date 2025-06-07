import styled from '@emotion/styled';
import '../App.css';

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const MainTag = styled.div`
    width: 91px;
    height: 40px;
    font-size: 24px;
    background-color: #7BC357;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    cursor: pointer;

    :hover {
        background-color: #557E41;
    }
`;

export default function Tag() {
    return (
        <TagContainer>
            <MainTag>#전체</MainTag>
            <MainTag>#인성</MainTag>
            <MainTag>#기술</MainTag>
        </TagContainer>
    );
}
