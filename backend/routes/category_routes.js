/**
 * @file category_routes.js
 * @brief Rutas de la API para la consulta dinámica de categorías.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Noviembre 2026
 */

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category_controller');
const { verifyToken } = require('../middleware/auth_middleware');

/**
 * @brief Protege el endpoint requiriendo sesión autenticada, en línea con /api/books.
 */
router.use(verifyToken);

/**
 * @route GET /api/categories
 * @brief Lista todas las categorías disponibles en la base de datos.
 */
router.get('/', categoryController.getAllCategories);

module.exports = router;
