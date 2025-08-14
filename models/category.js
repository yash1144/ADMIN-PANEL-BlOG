const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    }
}, { timestamps: true });

categorySchema.statics.catPath = '/uploads/categories';

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;