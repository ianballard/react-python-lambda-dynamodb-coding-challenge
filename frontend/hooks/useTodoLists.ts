import {useEffect, useState} from 'react';
import {fetchTodoLists} from '@/api';
import {TodoListItem} from '@/types/todoTypes';

export const useTodoLists = () => {
    const [items, setItems] = useState<TodoListItem[]>([]);
    const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchLists = async (key: string | null = null) => {
        setLoading(true);
        try {
            const {items: newItems, last_evaluated_key} = await fetchTodoLists(key);
            setItems(currentItems => [...currentItems, ...newItems]);
            const id = last_evaluated_key?.sk?.split("#")[1];
            setLastEvaluatedKey(id as string);
            setLoading(false);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error('An unknown error occurred'));
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLists();
    }, []);

    return {items, lastEvaluatedKey, loading, error, fetchMore: () => fetchLists(lastEvaluatedKey)};
};
