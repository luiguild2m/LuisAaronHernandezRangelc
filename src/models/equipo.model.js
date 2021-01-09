const { INTEGER } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const equipoSchema = {
      codigo:{
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue: "Volrod"     },
      columna1:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
      },
      nombrede:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue: "Volrod"
      },
      marca:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Volrod"
      },
      modelo:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Volrod"
      },
      numeros:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Volrod"
      },
      codigoIn:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Volrod"
      },
      fechadc:{
        type:DataTypes.DATEONLY,
        allowNull:true,

      },
      observacion: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Jane Doe'
      },
      prestadoa:{
        type:DataTypes.STRING,
        allowNull: false,
        defaultValue:"Volrod"
      },
      salida:{
        type:DataTypes.DATEONLY,
        allowNull:true,

      },
      ingreso:{
        type:DataTypes.DATEONLY,
        allowNull: true,

      },
      reportedd:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Volrod"
      },
      estadoe:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"Volrod"
      },
    //   email: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     validate: {
    //       isEmail: true
    //     }
    //   }
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