import styled from '@emotion/styled';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

const MainTag = styled.div`
    padding: 8px 16px;
    font-size: 24px;
    background-color: #7BC357;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 200px;
    white-space: nowrap;
    cursor: pointer;

    :hover {
        background-color: #557E41;
    }
`;

export default function Tag() {
    const navigate = useNavigate();

    const handleClick = (tag: string) => {
        if (tag === '#전체') {
            navigate('/entire');
        } else if (tag === '#인성'){
            navigate('/character');
        } else if (tag === '#백엔드'){
            navigate('/backend');
        } else if (tag === '#CS'){
            navigate('/cs');
        } else if (tag === '#프론트엔드'){
            navigate('/frontend');
        } else if (tag === '#프레임워크'){
            navigate('/framework');
        }
    };

    return (
        <TagContainer>
            <MainTag onClick={() => handleClick('#전체')}>#전체</MainTag>
            <MainTag onClick={() => handleClick('#인성')}>#인성</MainTag>
            <MainTag onClick={() => handleClick('#백엔드')}>#백엔드</MainTag>
            <MainTag onClick={() => handleClick('#CS')}>#CS</MainTag>
            <MainTag onClick={() => handleClick('#프론트엔드')}>#프론트엔드</MainTag>
            <MainTag onClick={() => handleClick('#프레임워크')}>#프레임워크</MainTag>
        </TagContainer>
    );
}
