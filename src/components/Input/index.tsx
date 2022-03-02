import React from 'react'
import { Container, InputElement, LabelElement } from './styles'

interface IInputProps {
    type?: string;
    name?: string;
    label: string;
    placeHolder?: string;
    onChange?: () => void;
}

const Input: React.FC<IInputProps> = ({ type, label, name, placeHolder, onChange }) => {

    return (
        <Container>
            <LabelElement>
                {label}
                <InputElement
                    type={type}
                    name={name}
                    placeholder={placeHolder}
                    onChange={onChange}
                />
            </LabelElement>
        </Container>
    )
}

export default Input