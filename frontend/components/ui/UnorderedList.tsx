import React from "react";

interface ListProps {
    children: React.ReactNode;
}


const UnorderedList: React.FC<ListProps> = ({children}) => {
    return <ul className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
        {children}
    </ul>;
};

export default UnorderedList;