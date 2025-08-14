const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    blogImage: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, { timestamps: true });

blogSchema.statics.blogPath = '/uploads/blogs';

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;