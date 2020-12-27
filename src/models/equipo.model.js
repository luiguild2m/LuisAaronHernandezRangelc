module.exports = (sequelize, DataTypes) => {
    const equipoSchema = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Jane Doe'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      }
    }
  
    const equipoOps = {
      timestamps: true,
      tableName: 'equipos',
    }
  
    const Equipo = sequelize.define('Equipo', equipoSchema, equipoOps)
  
    // Equipo.associate = db => {
    //   db.Equipo.hasOne(db.Product)
    //   // db.User.hasMany(db.Product)
    //   // db.User.belongToMany(db.Product, { through: 'UserProduct' })
    //   // db.User.hasMany(db.Posts)
    //   // db.User.hasOne(db.Profile)
    // }
  
    return Equipo
  }