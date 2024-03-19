import React from 'react';
import TodoListItemComponent from "@/components/TodoListItemComponent";
import {TodoListItem} from "@/types/todoTypes";


interface TodoListsComponentProps {
    lists: TodoListItem[];
    loading: boolean;
    error: Error | null;
    lastEvaluatedKey: string | null;
    fetchMore: any;
}

const TodoListItemsComponent: React.FC<TodoListsComponentProps> = ({lists, loading, error, lastEvaluatedKey, fetchMore}) => {

    return (
        <div className="flex flex-col items-center justify-center">
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            <ul className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
                {lists.map(list => <li key={list.sk}> <TodoListItemComponent list={list}/> </li>)}
            </ul>
            {lastEvaluatedKey && !loading && (
                <button className="mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded" onClick={fetchMore}>
                    Load More
                </button>
            )}
        </div>
    );
};

export default TodoListItemsComponent;
