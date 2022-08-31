import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import fs from 'fs'
import {verifyPassword} from '/opt/nodejs/handler'


export async function lambdaHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	if (verifyPassword(event.queryStringParameters?.pass ?? '')) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'welcome!',
            }),
        }
    } else {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'you cannot pass!',
            }),
        }
    }
}
