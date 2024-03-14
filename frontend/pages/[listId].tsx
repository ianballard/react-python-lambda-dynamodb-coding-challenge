import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {getTodoList, TodoListApiResponse} from '@/api';
import TodoItems from "@/components/TodoItems";
import {TodoItem} from "@/types/todoTypes"; // This needs to be implemented

const TodoListPage: React.FC = () => {
    const [items, setItems] = useState<TodoItem[]>([]);
    const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string | null>(null);
    const router = useRouter();
    const {listId} = router.query; // Assuming you're passing listId in the URL

    useEffect(() => {
        const fetchItems = async () => {
            if (typeof listId === 'string') { // Ensure listId is not an array or undefined
                const data: TodoListApiResponse = await getTodoList(listId, null);
                setItems(data.items);
                setLastEvaluatedKey(data.last_evaluated_key);
            }
        };

        fetchItems();
    }, [listId]);

    const loadMoreItems = async () => {
        if (lastEvaluatedKey && typeof listId === 'string') {
            const data: TodoListApiResponse = await getTodoList(listId, lastEvaluatedKey); // Adjust to pass LastEvaluatedKey
            setItems(prev => [...prev, ...data.items]);
            setLastEvaluatedKey(data.last_evaluated_key);
        }
    };

    if (!items) return <p>Loading...</p>;

    return (
        <div>
            <TodoItems items={items}/>
        </div>
    );
};

export default TodoListPage;
