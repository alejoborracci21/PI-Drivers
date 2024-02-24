const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.JSONB,
      allowNull: false,
      validate: {
        isObject(value) {
          if (typeof value !== 'object') {
            throw new Error('Name debe ser un objeto');
          }
        },
        hasForenameSurname(value) {
          if (!value.forename || !value.surname) {
            throw new Error('Le falta la propiedad forename o surname');
          }
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teams: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    hooks: {
      beforeValidate: (driver, options) => {
        if (!driver.image) {
          driver.image = 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg';
        }
      },
    },
  });
};
