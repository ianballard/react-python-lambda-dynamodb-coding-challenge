from response import Response
from dynamodb_client import DynamoDBClient
import json


def patch_todo(event, context):
    list_id = event["pathParameters"]["listId"]
    todo_id = event["pathParameters"]["todoId"]
    todo_updates = json.loads(event["body"])

    todo_list = DynamoDBClient().update_todo_item(list_id, todo_id, todo_updates)

    return Response.build_response(200, todo_list)
