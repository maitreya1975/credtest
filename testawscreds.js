var AWS = require('aws-sdk');

AWS.config.update({region: 'us-west-2'});
console.log("AWS SDK Version=", JSON.stringify(AWS.VERSION));

AWS.config.getCredentials(useCredentials);

function useCredentials(err) {
	if(err) throw err;
	console.log("Credentials=", JSON.stringify(AWS.config.credentials));
	if(AWS.config.credentials != undefined) {
		console.log("SecretKey=", JSON.stringify(AWS.config.credentials.secretAccessKey));
	}
	var s3 = new AWS.S3();

	s3.getSignedUrl('getObject', {Bucket: 'test-bucket', Key: 'test-key'}, useSignedUrl);

	function useSignedUrl(err, url) {
		if(err) throw err;

		console.log("SignedUrl=", JSON.stringify(url));
	}

}
