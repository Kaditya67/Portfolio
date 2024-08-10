const router = require('express').Router();
const { Intro, About, Project, Contact, Experience } = require('../models/portfolioModel');

const User = require('../models/userModel');

// Route to fetch portfolio data
router.get('/get-portfolio', async (req, res) => {
    try {
        const intro = await Intro.findOne();
        const about = await About.findOne();
        const project = await Project.find();
        const contact = await Contact.findOne();
        const experience = await Experience.find();

        res.status(200).json({
            intro,
            about,
            project,
            contact,
            experience
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to update intro data
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id }, // Assuming _id is provided in req.body
            req.body,
            { new: true } // Return the updated document
        );

        res.status(200).json({
            data: intro,
            success: true,
            message: 'Updated Successfully'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to update about data
router.post('/update-about', async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id }, // Assuming _id is provided in req.body
            req.body,
            { new: true } // Return the updated document
        );

        res.status(200).json({
            data: about,
            success: true,
            message: 'Updated Successfully'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to add experience data
router.post('/add-experience', async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).json({
            data: experience,
            success: true,
            message: 'Experience added successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add experience', details: err });
    }
});

// Route to update experience data
router.post('/update-experience', async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id }, // Assuming _id is provided in req.body
            req.body,
            { new: true } // Return the updated document
        );

        res.status(200).json({
            data: experience,
            success: true,
            message: 'Experience updated successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update experience', details: err });
    }
});

// Route to delete experience data
router.post('/delete-experience', async (req, res) => {
    try {
        await Experience.findOneAndDelete({ _id: req.body._id }); // Assuming _id is provided in req.body

        res.status(200).json({
            success: true,
            message: 'Experience deleted successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete experience', details: err });
    }
});

// Route to add project data
router.post('/add-project', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).json({
            data: project,
            success: true,
            message: 'Project added successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add project', details: err });
    }
});

// Route to update project data
router.post('/update-project', async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id }, // Assuming _id is provided in req.body
            req.body,
            { new: true } // Return the updated document
        );

        res.status(200).json({
            data: project,
            success: true,
            message: 'Project updated successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update project', details: err });
    }
});

// Route to delete project data
router.post('/delete-project', async (req, res) => {
    try {
        await Project.findOneAndDelete({ _id: req.body._id }); // Assuming _id is provided in req.body

        res.status(200).json({
            success: true,
            message: 'Project deleted successfully'
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete project', details: err });
    }
});

// Route to update intro data
router.post('/update-contact', async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id }, // Assuming _id is provided in req.body
            req.body,
            { new: true } // Return the updated document
        );

        res.status(200).json({
            data: contact,
            success: true,
            message: 'Updated Successfully'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/admin-login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password });
        if (user) {
            res.status(200).json({
                success: true,
                message: 'Login Successful',
                data: user
            });
        } else {
            res.status(500).json({ success: false, message: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
