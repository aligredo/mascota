var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		trim: true,
		required: true,
		lowercase: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	},
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
	},
	mobileNumber:{
		type: String,
		trim: true,
		required: true
	}
});

// Override the transform function of the schema to delete the password before it returns the object
if (!userSchema.options.toObject) {
	userSchema.options.toObject = {};
}
userSchema.options.toObject.transform = (document, transformedDocument) => {
	delete transformedDocument.password;
	return transformedDocument;
};

mongoose.model("User", userSchema);
