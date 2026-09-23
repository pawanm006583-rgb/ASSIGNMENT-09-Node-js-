
const express = require("express");
const mongoose = require("mongoose");
const User = require("../ model/userModel");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create user",
            error: error.message
        });
    }
});


router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve users",
            error: error.message
        });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Update data is required"
            });
        }

        
        const user = await User.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User updated successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update user",
            error: error.message
        });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

    
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid user ID"
            });
        }

        
        const user = await User.findByIdAndDelete(id);

    
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete user",
            error: error.message
        });
    }
});

module.exports = router;