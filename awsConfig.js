import AWS from 'aws-sdk';
// Initialize the Amazon Cognito credentials provider
AWS.config.region = "us-east-2"; // Region
// Now the AWS SDK is configured and ready to use
export default AWS;
