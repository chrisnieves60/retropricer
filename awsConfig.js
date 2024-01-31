import AWS from 'aws-sdk';
// Initialize the Amazon Cognito credentials provider
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'your-region' // Example: 'us-east-1'
  });
// Now the AWS SDK is configured and ready to use
export default AWS;
