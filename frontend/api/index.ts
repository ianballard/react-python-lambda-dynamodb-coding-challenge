import {fetchApi} from './utils';
import {TodoListApiResponse, TodoListsApiResponse} from "@/types/todoTypes";

export const fetchTodoLists = (lastEvaluatedKey: string | null): Promise<TodoListsApiResponse> => {
    const queryParams = {
        limit: 1,
    }
    if (lastEvaluatedKey) {
        // @ts-ignore
        queryParams["nextToken"] = lastEvaluatedKey;
    }
    return fetchApi('todo-list', {
        queryParams
    });
};

export const fetchTodoList = (listId: string, lastEvaluatedKey: string | null): Promise<TodoListApiResponse> => {
    const queryParams = {
        limit: 1
    }
    if (lastEvaluatedKey) {
        // @ts-ignore
        queryParams["nextToken"] = lastEvaluatedKey;
    }
    return fetchApi(`todo-list/${listId}/todo`, {
        queryParams
    });
};
