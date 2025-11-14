import express from 'express';
import OverviewController from '../controllers/overviewController.js';

const router = express.Router();

// ✅ Get complete overview
router.get('/', OverviewController.getOverviewStatistics);

// ✅ Get total patients
router.get('/total-patients', OverviewController.getTotalPatients);

// ✅ Get active patients
router.get('/active-patients', OverviewController.getActivePatients);

// ✅ Get total appointments
router.get('/total-appointments', OverviewController.getTotalAppointments);

// ✅ Get critical cases
router.get('/critical-cases', OverviewController.getCriticalCases);

export default router;
