import json
from response import Response
from dynamodb_client import DynamoDBClient


def post_todo(event, context):
    list_id = event["pathParameters"]["listId"]
    todo_details = json.loads(event["body"])

    todo_list = DynamoDBClient().create_todo_item(
        list_id=list_id, todo_details=todo_details
    )

    return Response.build_response(201, todo_list)
