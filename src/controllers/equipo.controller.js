const { Equipo } = require('../models')

module.exports = {
  async create(req, res) {
    try {
      const { body } = req

      const equipo = await Equipo.create(body)

      res.status(201).json(equipo)
    } catch(err) {
      res.status(400).json({ message: err.message })
    }
  },
  async list(req, res) {
    const equipos = await Equipo.findAll()

    res.status(200).json(equipos)
  },
  async show(req, res) {
    const { id } = req.params
    const equipo = await Equipo.findByPk(id)

    res.status(200).json(equipo)
  },
  async update(req, res) {
    const { body, params: { id } } = req

    let equipo = await Equipo.findByPk(id)
    equipo = await equipo.update(body)
    // const user = await Equipo.update(body, {
    //   where: {
    //     id
    //   }
    // })

    res.status(200).json(equipo)
  },
  async destroy(req, res) {
    const { id } = req.params

    // const user = await User.findByPk(id)
    // await user.destroy()
    const equipo = await Equipo.destroy({
      where: {
        id
      }
    })

    res.status(200).json(equipo)
  }
}