import React, {useEffect, useState} from 'react';
import {getTodoLists, TodoListsApiResponse} from '@/api';
import {TodoListItem} from "@/types/todoTypes";
import {useRouter} from "next/router";
import '../app/globals.css'


const TodoLists: React.FC = () => {
    const [items, setItems] = useState<TodoListItem[]>([]);
    const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchLists = async () => {
            const data: TodoListsApiResponse = await getTodoLists(); // Adjust this function based on how you're fetching data
            setItems(data.items);
            setLastEvaluatedKey(data.last_evaluated_key);
        };

        fetchLists();
    }, []);

    // Function to load more items, assuming your API supports pagination through LastEvaluatedKey
    const loadMoreItems = async () => {
        if (lastEvaluatedKey) {
            const data: TodoListsApiResponse = await getTodoLists(); // Adjust to pass lastEvaluatedKey as a parameter
            setItems((prevItems) => [...prevItems, ...data.items]);
            setLastEvaluatedKey(data.last_evaluated_key);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <ul className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
                {items.map((item) => {
                        const id = item.sk.split("#")[1]
                        return <li key={id} className="w-full">
                            <a href={`/${id}`} className="flex items-center p-3 hover:bg-gray-100">
                                <span className="ml-2 text-sm font-medium text-black">{item.name}</span>
                            </a>
                        </li>
                    }
                )}
            </ul>
            {lastEvaluatedKey && (
                <button onClick={loadMoreItems}>Load More</button>
            )}
        </div>
    );
};

export default TodoLists;
