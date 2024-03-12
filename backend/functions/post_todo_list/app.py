from response import Response
from dynamodb_client import DynamoDBClient
import json


def post_todo_list(event, context):
    todo_list_details = json.loads(event["body"])

    dynamodb = DynamoDBClient()

    todo_list = dynamodb.create_todo_list(todo_list_details=todo_list_details)

    return Response.build_response(201, todo_list)
