from response import Response
from dynamodb_client import DynamoDBClient


def get_todo_list(event, context):
    list_id = event["pathParameters"]["listId"]

    dynamodb = DynamoDBClient()

    todo_list = dynamodb.get_todo_list(list_id=list_id)

    return Response.build_response(200, todo_list)
