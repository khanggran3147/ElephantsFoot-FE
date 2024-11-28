

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const axios = require('axios');
const AWS = require('aws-sdk');
const secretsManager = new AWS.SecretsManager();

exports.handler = async (event) => {
    const secretName = 'tmdb/dev/key';  // Replace with your actual secret name

    // Fetch the secret from AWS Secrets Manager
    const secretValue = await secretsManager.getSecretValue({ SecretId: secretName }).promise();

    let TMDB_API_KEY;

    // Check if the secret is a string or binary and extract the key
    if (secretValue.SecretString) {
        const secret = JSON.parse(secretValue.SecretString);
        TMDB_API_KEY = secret.TMDB; 
    } else {
        throw new Error('Secret is binary, unable to parse');
    }

    console.log(`EVENT: ${JSON.stringify(event)}`);

    try {
        // Fetch the list of popular movies
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: TMDB_API_KEY,
                language: 'en-US',
                page: 1,  // You can paginate through results
            },
        });

        return {
            statusCode: 200,
            //  Uncomment below to enable CORS requests
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
            body: JSON.stringify(response.data.results),  // Send only the list of movies
        };
    } catch (error) {
        return {
            statusCode: 200,
            //  Uncomment below to enable CORS requests
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
            body: JSON.stringify({ message: TMDB_API_KEY }),
        };
    }
};
