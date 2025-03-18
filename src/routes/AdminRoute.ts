import express from "express";
import AdminController from "../controllers/AdminController";
import AdminService from "../services/AdminService";
import AdminRepository from "../repositories/AdminRepository";
import adminAuth from "../middlewares/adminAuth";

const adminRepository = new AdminRepository();
const adminService = new AdminService(adminRepository);
const adminController = new AdminController(adminService);

const router = express.Router();

router.post("/login", adminController.adminLogin.bind(adminController));
router.get("/details", adminAuth, adminController.getAdminDetails.bind(adminController));
router.post("/logout", adminController.logoutAdmin.bind(adminController));

export default router;