from dynamodb.entity.todo.todo_entity import TodoEntity
from dynamodb.entity.todo.todo_entity_repo import TodoQueryResponse
from request.request import api_endpoint
from request.response import Response, ResponseAttribute
from service.todo.todo_service import TodoService


class GetAllTodoByListIdRequest:

    def __init__(self, event):
        query_params = event["queryStringParameters"]
        self.list_id = event["pathParameters"]["listId"]
        self.limit = int(query_params.get("limit", 10)) if query_params else 10
        self.next_token = query_params.get("nextToken") if query_params else None


class GetAllTodoByListIdResponseBody:

    def __init__(self, todo_list_query_response: TodoQueryResponse):
        self.items = [
            TodoEntity.to_dict(item) for item in todo_list_query_response.items
        ]
        self.last_evaluated_key = todo_list_query_response.last_evaluated_key

    def to_dict(self):
        return {
            ResponseAttribute.Items.value: self.items,
            ResponseAttribute.LastEvaluatedKey.value: self.last_evaluated_key,
        }


@api_endpoint()
def get_all_todo_by_list_id(event, context):
    request = GetAllTodoByListIdRequest(event)
    list_id = request.list_id
    next_token = request.next_token
    limit = request.limit

    todo_list_query_response: (
        TodoQueryResponse
    ) = TodoService().find_all_todo_by_list_id(
        list_id=list_id, next_token=next_token, limit=limit
    )
    todo_list_api_response_body = GetAllTodoByListIdResponseBody(
        todo_list_query_response=todo_list_query_response
    ).to_dict()

    return Response.build_response(status_code=200, body=todo_list_api_response_body)
