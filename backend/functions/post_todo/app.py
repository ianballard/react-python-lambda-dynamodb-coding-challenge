import json

from dynamodb.entity.todo.todo_entity import TodoEntity
from request.request import api_endpoint
from request.response import Response
from service.todo.todo_service import TodoService


class PostTodoRequest:

    def __init__(self, event):
        self.list_id = event["pathParameters"]["listId"]
        self.new_todo = json.loads(event["body"])


@api_endpoint()
def post_todo(event, context):

    post_todo_request = PostTodoRequest(event)

    todo = TodoEntity.from_dict(post_todo_request.new_todo)
    todo.pk = post_todo_request.list_id
    todo = TodoService().put_todo(todo=todo)

    return Response.build_response(201, body=todo.to_dict())
