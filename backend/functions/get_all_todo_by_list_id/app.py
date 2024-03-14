from dynamodb.entity.todo.todo_entity import TodoEntity
from dynamodb.entity.todo.todo_entity_repo import TodoQueryResponse
from request.request import api_endpoint
from request.response import Response, ResponseAttribute
from service.todo.todo_service import TodoService


class GetAllTodoByListIdRequest:

    def __init__(self, event):
        self.list_id = event["pathParameters"]["listId"]


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
    list_id = GetAllTodoByListIdRequest(event).list_id

    todo_list_query_response: TodoQueryResponse = (
        TodoService().find_all_todo_by_list_id(list_id=list_id)
    )
    todo_list_api_response_body = GetAllTodoByListIdResponseBody(
        todo_list_query_response=todo_list_query_response
    ).to_dict()

    return Response.build_response(status_code=200, body=todo_list_api_response_body)
