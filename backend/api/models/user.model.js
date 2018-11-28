var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		trim: true,
		lowercase: true
	},
	email: {
		type: String,
		//required: true,
		unique: true,
		trim: true,
		lowercase: true
	},
	password: {
		type: String,
		trim: true
	},
	firstName: {
		type: String,
		trim: true
	},
	lastName: {
		type: String,
		trim: true
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
