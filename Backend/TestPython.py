from pprint import pprint
import unittest
import boto3
import lambda_function
from botocore.exceptions import ClientError
from moto import mock_dynamodb
from unittest import mock
import json
import requests
import os

def test_get_visitor_number_response_is_dict(self):
        response = requests.get("https://axk4k5xkn8.execute-api.us-east-1.amazonaws.com/")
        #data = json.loads(response.content)
        #self.assertIs(type(data), dict)
        #self.assertIn('count', data)
        self.assertEqual(200, response['ResponseMetadata']['HTTPStatusCode'])


if __name__ == '__main__':
    unittest.main()