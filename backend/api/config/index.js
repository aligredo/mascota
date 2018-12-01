// Global App Configuration
module.exports = {
	FRONTEND_URI: process.env.FRONTEND_URI || "http://localhost:3006/",
	SECRET: "32876qihsdh76@&#!742(*#HG&#28702y&##@^!()(&^#))jhscbd", // for authentication
	MONGO_URI: "mongodb://localhost:27017/mascota",
	ClOUDINARY_CLOUD_NAME: 'maskota',
	CLOUDINARY_API_KEY: '819421223196944',
	CLOUDINARY_API_SECRET: '6DIgJoqfegdqrRygJrRz09Psj8k',
	MOBILE_REGEX : /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
	EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};