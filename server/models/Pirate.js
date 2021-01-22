const mongoose = require('mongoose');



const PirateSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[ true, "You need a name!"],
        minlength: [ 3, "I have never met a pirate with less than 3 letters in his name!"]
        
    },
    image: {
        type:String,
        required: [true, "You need an image!"],
        minlength: [ 5, "How will we know what you look like without at least 5 characters!"]
    },
    pegLeg: {
        type: Boolean,
        required: true,
        default: true
    },
    eyePatch: {
        type: Boolean,
        required: true,
        default: true
    },
    hookHand: {
        type: Boolean,
        required: true,
        default: true
    },
    chests:{
        type:Number,
        required:true,
        default:0
    },
    phrase: {
        type:String,
        required:[ true, "You need a Catch Phrase!"],
        minlength: [ 3, "We don't accept catch phrases with less than 5 characters!"]
        
    },
    position: {
        type:String,
        required:[true, "You need a position to be on this ship!"],
        default:"Deck Hand"

    }

}, {timestamps: true})


mongoose.model("Pirate", PirateSchema);