import {fetchApi} from "./utils";
import {TodoListApiResponse, TodoListsApiResponse} from "@/types/types";

export const fetchAllTodoLists = (lastEvaluatedKey: string | null): Promise<TodoListsApiResponse> => {
    const queryParams = {
        limit: 1,
    };
    if (lastEvaluatedKey) {
        // @ts-ignore
        queryParams["nextToken"] = lastEvaluatedKey;
    }
    return fetchApi("todo-list", {
        queryParams
    });
};

export const fetchTodoItemsByListId = (listId: string, lastEvaluatedKey: string | null): Promise<TodoListApiResponse> => {
    const queryParams = {
        limit: 1
    };
    if (lastEvaluatedKey) {
        // @ts-ignore
        queryParams["nextToken"] = lastEvaluatedKey;
    }
    return fetchApi(`todo-list/${listId}/todo`, {
        queryParams
    });
};
