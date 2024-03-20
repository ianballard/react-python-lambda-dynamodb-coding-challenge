from dynamodb.entity.todo_list.todo_list_entity import TodoListEntity
from dynamodb.entity.todo_list.todo_list_entity_repo import TodoListQueryResponse
from request.request import api_endpoint
from request.response import Response, ResponseAttribute
from service.todo_list.todo_list_service import TodoListService


class GetTodoListsRequest:

    def __init__(self, event):
        query_params = event["queryStringParameters"]
        self.limit = int(query_params.get("limit", 10)) if query_params else 10
        self.next_token = query_params.get("nextToken") if query_params else None


class GetTodoListsResponseBody:

    def __init__(self, todo_list_query_response: TodoListQueryResponse):
        self.items = [
            TodoListEntity.to_dict(item) for item in todo_list_query_response.items
        ]
        self.last_evaluated_key = todo_list_query_response.last_evaluated_key

    def to_dict(self):
        return {
            ResponseAttribute.Items.value: self.items,
            ResponseAttribute.LastEvaluatedKey.value: self.last_evaluated_key,
        }


@api_endpoint()
def get_todo_lists(event, context):
    request = GetTodoListsRequest(event)

    todo_list_query_response: (
        TodoListQueryResponse
    ) = TodoListService().find_all_todo_lists(
        next_token=request.next_token, limit=request.limit
    )
    todo_list_api_response_body = GetTodoListsResponseBody(
        todo_list_query_response=todo_list_query_response
    ).to_dict()

    return Response.build_response(status_code=200, body=todo_list_api_response_body)
