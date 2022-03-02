import React from 'react'
import { Button } from './styles'
interface IButtonProps {
    name?: string;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    color?: 'primary' | 'secondary'
    children?: React.ReactNode
    style?: React.CSSProperties;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonElement: React.FC<IButtonProps> = ({
    name,
    children,
    style,
    color,
    type,
    disabled,
    onClick }) => {
    return (
        <Button
            name={name}
            type={type}
            disabled={disabled}
            style={style}
            color={color}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default ButtonElement