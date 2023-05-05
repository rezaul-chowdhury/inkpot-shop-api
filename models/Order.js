const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: 'string',
            required: true,
        },
        products: [
            {
                productId: 'string'
            },
            {
                quantity: Number,
                default: 1,
            },
        ],
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
