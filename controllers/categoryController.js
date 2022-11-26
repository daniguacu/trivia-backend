const mongoose = require('mongoose');
const Category = require('../models/categoryModel');


const categoryController = {
    getCategories: async function (req, res) {
        const categories = await Category.find().populate('name');;
        res.json(categories)
    }

    
    };

module.exports = categoryController;