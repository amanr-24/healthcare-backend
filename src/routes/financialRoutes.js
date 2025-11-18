import express from 'express';
import FinancialController from '../controllers/financialController.js';

const router = express.Router();

// ---------- General financial routes ----------
router.get('/', FinancialController.getAll);
router.get('/year/:year', FinancialController.getByYear);

// General summaries
router.get('/summary/year/:year', FinancialController.getYearlySummary);
router.get('/summary/month/:year', FinancialController.getMonthlySummary);
router.get('/summary/quarter/:year', FinancialController.getQuarterlySummary);

// Available years
router.get('/years', FinancialController.getAvailableYears);

// ---------- Department-specific routes ----------
router.get('/departments', FinancialController.getAllDepartments);
router.get('/departments/:id', FinancialController.getByDepartment);

// Department summaries
router.get('/departments/:id/summary/year/:year', FinancialController.getDepartmentYearlySummary);
router.get('/departments/:id/summary/month/:year', FinancialController.getDepartmentMonthlySummary);
router.get('/departments/:id/summary/quarter/:year', FinancialController.getDepartmentQuarterlySummary);
router.get('/departments', FinancialController.getAllDepartments);

export default router;
