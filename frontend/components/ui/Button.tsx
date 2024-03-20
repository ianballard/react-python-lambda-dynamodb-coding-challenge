import React from "react";

interface ButtonProps {
    value: string;
    onClick?: any;
    type: "submit" | "button";
}


const Button: React.FC<ButtonProps> = ({onClick, value, type = "button"}) => {
    return <button className="my-4 px-4 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded" onClick={onClick}
                   type={type}>
        {value}
    </button>;
};

export default Button;