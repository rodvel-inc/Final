import json
import boto3
import os

def lambda_handler(event, context):
    # Initialize dynamodb boto3 object
    dynamodb = boto3.resource('dynamodb')
    # Set dynamodb table name
    table = dynamodb.Table('Visitor_Counter')

    # Atomic update item in table or add if doesn't exist
    ddbResponse = table.update_item(
        Key={
            "Count_ID": "visitorCount"
        },
        UpdateExpression='ADD amount :inc',
        ExpressionAttributeValues={
            ':inc': 1
        },
        ReturnValues="UPDATED_NEW"
    )

    # Format dynamodb response into variable
    responseBody = json.dumps(int(float(ddbResponse["Attributes"]["amount"])))
    

    # Create api response object
    apiResponse = {
        "isBase64Encoded": False,
        "statusCode": 200,
        #"visitorCount": int(float(ddbResponse["Attributes"]["amount"])),
        "body": responseBody,
        "headers": {
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS" 
        },
    }