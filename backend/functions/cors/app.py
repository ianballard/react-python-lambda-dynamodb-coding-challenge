from request.response import Response


def cors(event, context):
    return Response.build_response(status_code=204, body=None)
