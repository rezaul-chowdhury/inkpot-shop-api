const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: 'string',
            required: true,
        },
        products: [productSchema],
        amount: {
            type: Number,
            required: true,
        },
        address: {
            type: Object,
            required: true,
        },
        status: {
            type: 'string',
            default: 'pending'
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
