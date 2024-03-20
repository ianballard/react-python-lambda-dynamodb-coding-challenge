import React from "react";
import Button from "@/components/ui/Button";

interface ListProps {
    children: React.ReactNode;
    loading: boolean;
    error: Error | null;
    lastEvaluatedKey: string | null;
    fetchMore: any;
}


const List: React.FC<ListProps> = ({children, loading, error, lastEvaluatedKey, fetchMore}) => {
    return <>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <ul className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
            {children}
        </ul>
        {lastEvaluatedKey && !loading && <Button value='Load More' onClick={fetchMore} type={"button"}/>}
    </>;
};

export default List;