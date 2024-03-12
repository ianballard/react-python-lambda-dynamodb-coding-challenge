import React, {useEffect, useState} from 'react';
import {getTodoLists, TodoListsApiResponse} from '@/api';
import {TodoListItem} from "@/types/todoTypes";
import {useRouter} from "next/router";


const TodoLists: React.FC = () => {
    const [items, setItems] = useState<TodoListItem[]>([]);
    const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchLists = async () => {
            const data: TodoListsApiResponse = await getTodoLists(); // Adjust this function based on how you're fetching data
            setItems(data.Items);
            setLastEvaluatedKey(data.LastEvaluatedKey);
        };

        fetchLists();
    }, []);

    // Function to load more items, assuming your API supports pagination through LastEvaluatedKey
    const loadMoreItems = async () => {
        if (lastEvaluatedKey) {
            const data: TodoListsApiResponse = await getTodoLists(); // Adjust to pass lastEvaluatedKey as a parameter
            setItems((prevItems) => [...prevItems, ...data.Items]);
            setLastEvaluatedKey(data.LastEvaluatedKey);
        }
    };

    const handleListClick = (sk: string) => {
        // Navigate to the list items page for the clicked list
        router.push(`/${sk}`); // Assuming your page to display list items is named [sk].tsx
    };

    return (
        <div>
            {items.map((item) => (
                <button key={item.sk} onClick={() => handleListClick(item.sk)}>{item.name}</button>
            ))}
            {lastEvaluatedKey && (
                <button onClick={loadMoreItems}>Load More</button>
            )}
        </div>
    );
};

export default TodoLists;
