const UserModel = require('../models/Users')

let create = async (req, res) => {
    const { Name, Age, Phone } = req.body;
  
    try {
      const user = new UserModel({ Name, Age, Phone });
      await user.save();
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
}

let find = async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
}

let findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById({_id: id});
    res.send(user);
  }
  catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

let updateOne = async (req, res) => {
    const { id } = req.params;
    const { Name, Age, Phone } = req.body;
  
    try {
      const user = await UserModel.findByIdAndUpdate(id, { Name, Age, Phone }, { new: true });
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
}

let deleteOne = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await UserModel.findByIdAndDelete(id);
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
}

module.exports = { create, updateOne, find, findOne, deleteOne }