const router = require('express').Router()
const equipoController = require('../controllers/equipo.controller')

router.route('/').post(equipoController.create)
router.route('/').get(equipoController.list)
router.route('/:id').get(equipoController.show)
router.route('/:id').put(equipoController.update)
router.route('/:id').delete(equipoController.destroy)

module.exports = router