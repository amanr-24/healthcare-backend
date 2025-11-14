import express from 'express';
import FinancialController from '../controllers/financialController.js';

const router = express.Router();

// 🔹 General financial routes
router.get('/', FinancialController.getAll);
router.get('/year/:year', FinancialController.getByYear);
router.get('/summary/year/:year', FinancialController.getYearlySummary);
router.get('/summary/monthly/year/:year', FinancialController.getMonthlySummary);
router.get('/summary/quarter/year/:year', FinancialController.getQuarterlySummary);
router.get('/years', FinancialController.getAvailableYears);


// Department-specific routes
router.get('/departments/:id', FinancialController.getByDepartment);
router.get('/departments/:id/yearly/:year', FinancialController.getDepartmentYearlySummary);
router.get('/departments/:id/monthly/:year', FinancialController.getDepartmentMonthlySummary);
router.get('/departments/:id/quarterly/:year', FinancialController.getDepartmentQuarterlySummary);
router.get('/departments', FinancialController.getAllDepartments);

export default router;
