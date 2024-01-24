import AWS from 'aws-sdk';
// Initialize the Amazon Cognito credentials provider
AWS.config.region = process.env.AWS_REGION; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.AWS_COGNITO_IDENTITY_POOL_ID, // your identity pool id here
});

// Now the AWS SDK is configured and ready to use
export default AWS;
