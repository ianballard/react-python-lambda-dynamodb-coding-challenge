from response import Response
from dynamodb_client import DynamoDBClient


def get_todo_lists(event, context):
    dynamodb = DynamoDBClient()

    todo_lists = dynamodb.get_todo_lists()

    return Response.build_response(200, todo_lists)
