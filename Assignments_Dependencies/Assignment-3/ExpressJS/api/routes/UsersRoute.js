const express = require('express');
const UserModel = require('../controllers/UsersController')
const router = express.Router()

// Create User
router.post('/users', UserModel.create);
  
// Get all users
router.get('/users', UserModel.find);

// Get a specific User
router.get('/users/:id', UserModel.findOne);

// Update a user
router.put('/users/:id', UserModel.updateOne);
  
// Delete a user
router.delete('/users/:id', UserModel.deleteOne);



module.exports = router