import json

from dynamodb.entity.todo_list.todo_list_entity import TodoListEntity
from request.request import api_endpoint
from request.response import Response
from service.todo_list.todo_list_service import TodoListService


class PostTodoListRequest:

    def __init__(self, event):
        self.new_todo_list = json.loads(event["body"])


@api_endpoint()
def post_todo_list(event, context):
    post_todo_list_request = PostTodoListRequest(event)

    todo_list = TodoListEntity.from_dict(post_todo_list_request.new_todo_list)
    todo_list = TodoListService().put_todo_list(todo_list=todo_list)

    return Response.build_response(status_code=201, body=todo_list.to_dict())
