import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    className = '',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`border-3 border-l-4 border-t-4 border-b-emerald-950 border-r-emerald-900 border-emerald-700 cursor-pointer py-0.5 px-2 font-bold flex flex-row justify-center items-center shadow shadow-emerald-800 text-emerald-500 text-base ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;