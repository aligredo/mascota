var mongoose = require("mongoose");

var petSchema = mongoose.Schema({
    ownerUsername:{
        type: String,
        trim: true,
        required: true,
		lowercase: true
    },
    ownerMobileNumber:{
        type: String,
        trim: true,
        required: true
    },
	name: {
		type: String,
        trim: true,
        required: true,
		lowercase: true
	},
	type: {
		type: String,
		required: true,
		trim: true,
		lowercase: true
    },
    species:{
        type: String,
		required: true,
		trim: true,
		lowercase: true
    },
	gender: {
		type: String,
        trim: true,
        required: true
	},
	offer: {
		type: String,
        trim: true,
        required: true
	},
	price: {
		type: String,
		trim: true
    },
    age: {
        type: Number,
        trim: true,
        required: true
    },
    photoId:{
        type: String,
        trim: true,
        required: true,
		lowercase: true
    }
});

mongoose.model("Pet", petSchema);
