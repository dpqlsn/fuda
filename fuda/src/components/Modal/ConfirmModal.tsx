import React from "react";
import * as _ from "./style";

interface ConfirmModalProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, onCancel }) => {
    return (
        <_.Overlay>
        <_.Container>
            <_.Message>데이터를 PDF로 변환하시겠습니다? </_.Message>
            <_.ButtonGroup>
            <_.ButtonOk onClick={onConfirm}>예</_.ButtonOk>
            <_.ButtonNo onClick={onCancel}>아니요</_.ButtonNo>
            </_.ButtonGroup>
        </_.Container>
        </_.Overlay>
    );
};

export default ConfirmModal;
