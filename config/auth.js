// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1414529962132864', // your App ID
		'clientSecret' 	: '9b868077e0883839ce779237a91b9353', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'xrlIWUOIMJ0Egdy2P31PRw',
		'consumerSecret' 	: 'Nvd7jHZYO6mYseqze6pPn3SzITKMkbnLM1PFTb94sM',
		'callbackURL' 		: 'http://lvh.me:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '431456994447-qt3fp0itjmh6r2h17i4f64vppf12ih30.apps.googleusercontent.com',
		'clientSecret' 	: 'eBmmVpgpNnzKcUli_-dCpRpZ',
		'callbackURL' 	: 'http://lvh.me:8080/auth/google/callback'
	}

};
