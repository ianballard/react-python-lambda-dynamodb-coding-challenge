import React from "react";

interface ButtonProps {
    value: string;
    onClick: any;
}


const Button: React.FC<ButtonProps> = ({onClick, value}) => {
    return <button className="mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded" onClick={onClick}>
        {value}
    </button>;
};

export default Button;