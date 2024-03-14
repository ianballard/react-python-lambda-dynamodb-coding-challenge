import json

from request.request import api_endpoint
from request.response import Response
from service.todo.todo_service import TodoService


class PatchTodoRequest:

    def __init__(self, event):
        self.list_id = event["pathParameters"]["listId"]
        self.todo_id = event["pathParameters"]["todoId"]
        self.updates = json.loads(event["body"])


@api_endpoint()
def patch_todo(event, context):
    patch_todo_request = PatchTodoRequest(event)

    TodoService().update_todo(
        list_id=patch_todo_request.list_id,
        todo_id=patch_todo_request.todo_id,
        updates=patch_todo_request.updates,
    )

    return Response.build_response(200, body=None)
