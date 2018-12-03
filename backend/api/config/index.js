// Global App Configuration
module.exports = {
	FRONTEND_URI: process.env.FRONTEND_URI,
	SECRET: process.env.SECRET,
	MONGO_URI: process.env.MONGO_URI,
	ClOUDINARY_CLOUD_NAME: process.env.ClOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY: process.env.ClOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
	MOBILE_REGEX : /^[0][1-9]\d{9}$|^[1-9]\d{9}$/,
	EMAIL_REGEX: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};