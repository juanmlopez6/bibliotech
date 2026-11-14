/**
 * @file category_controller.js
 * @brief Controlador para la consulta de categorías documentales.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Noviembre 2026
 */

const categoryRepository = require('../repositories/category_repository');

/**
 * @class CategoryController
 * @brief Gestiona las peticiones HTTP asociadas a las categorías de libros.
 */
class CategoryController
{
    /**
     * @brief Devuelve todas las categorías ordenadas para poblar los selectores del frontend.
     * @details Cualquier error no controlado se delega al global_error_middleware mediante next(error).
     * @param {Object} req - Petición HTTP.
     * @param {Object} res - Respuesta HTTP.
     * @param {Function} next - Función de delegación de errores.
     */
    async getAllCategories(req, res, next)
    {
        try
        {
            const categories = await categoryRepository.findAll();
            res.json(categories);
        }
        catch (error)
        {
            next(error);
        }
    }
}

module.exports = new CategoryController();
