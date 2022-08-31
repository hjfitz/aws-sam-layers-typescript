import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import fs from 'fs'


export async function lambdaHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
	const files = fs.readdirSync('/opt/nodejs')
	console.log({files})
    let response: APIGatewayProxyResult;
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world',
            }),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }

    return response;
}
