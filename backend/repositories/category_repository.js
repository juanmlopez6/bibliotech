/**
 * @file category_repository.js
 * @brief Repositorio para la capa de acceso a datos de categorías documentales.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Noviembre 2026
 */

const db = require('../config/db');

/**
 * @class CategoryRepository
 * @brief Encapsula las llamadas a Stored Procedures relacionadas con categorías.
 */
class CategoryRepository
{
    /**
     * @brief Obtiene el listado completo de categorías disponibles.
     * @details Delega la consulta al Stored Procedure sp_get_all_categories para evitar
     * SQL inline y mantener el principio de menor privilegio.
     * @returns {Promise<Array>} Lista de categorías con id y name.
     */
    async findAll()
    {
        const [rows] = await db.execute('CALL sp_get_all_categories()');
        return rows[0];
    }
}

module.exports = new CategoryRepository();
