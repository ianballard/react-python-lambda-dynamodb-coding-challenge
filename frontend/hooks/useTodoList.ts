import { useEffect, useState } from 'react';
import { fetchTodoList } from '@/api';
import { TodoItem } from '@/types/todoTypes';

export const useTodoList = (listId: string) => {
    const [items, setItems] = useState<TodoItem[]>([]);
    const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchListDetails = async (key: string | null = null) => {
        setLoading(true);
        try {
            const { items: newItems, last_evaluated_key } = await fetchTodoList(listId, key);
            setItems(currentItems => [...currentItems, ...newItems]);
            const id = last_evaluated_key?.sk?.split("#")[1];
            setLastEvaluatedKey(id as string);
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchListDetails();
    }, [listId]);

    return { items, lastEvaluatedKey, loading, error, fetchMore: () => fetchListDetails(lastEvaluatedKey) };
};
