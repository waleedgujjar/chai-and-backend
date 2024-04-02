import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is sbscrinbing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one who is sbscrinbing is subscribing
        ref: "User"
    }
},{timestamps: true})


export const subscription = mongoose.model("subscription", subscriptionSchema)