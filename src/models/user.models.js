import mongoose, { Schema } from "mongoose"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true // If you want to use this field more often then assign index:true (mtlb kisi bhi field ko searchable bnana hai)
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String,// Cloudinary url
            required: true
        },
        coverImage: {
            type: String,// Cloudinary url
        },
        //Now their is another field which depends on video
        watchHistory: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        refreshToken: {
            type: String
        },

    },
    {
        timestamps: true
    }
)


// Jb data save krna ho usse pehle ka middleware
//Abhi isme ek problem hai jb bhi hum data save krengay tb ye password ko change kr dega
//jb bss password change tb chalao ise uske liye if statement
userSchema.pre("save", async function(next){

    if (!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
})


// Jb password check krana ho toh methods bnana padega
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.models.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


userSchema.models.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const USER = mongoose.model("User", userSchema)