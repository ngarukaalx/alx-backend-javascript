// Write the routes
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const router = express.Router();

// Link the route / to the AppController
router.get('/', AppController.getHomepage);

// Link the route /students
router.get('/students', StudentsController.getAllStudents);

// link the route /students/:major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);
// Export the default router
export default router;
