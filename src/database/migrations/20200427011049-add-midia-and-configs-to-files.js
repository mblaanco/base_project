module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('files', 'midia', {
        type: Sequelize.STRING,
        allowNull: true,
      })
      .then(function() {
        queryInterface.addColumn('files', 'bgcolor', {
          type: Sequelize.STRING,
          allowNull: true,
        });
      })
      .then(function() {
        queryInterface.addColumn('files', 'tipo_letra', {
          type: Sequelize.STRING,
          allowNull: true,
        });
      })
      .then(function() {
        queryInterface.addColumn('files', 'cor_letra', {
          type: Sequelize.STRING,
          allowNull: true,
        });
      })
      .then(function() {
        queryInterface.addColumn('files', 'tamanho_letra', {
          type: Sequelize.STRING,
          allowNull: true,
        });
      });
  },

  down: queryInterface => {
    return queryInterface
      .removeColumn('files', 'bgcolor')
      .then(function() {
        queryInterface.removeColumn('files', 'tipo_letra');
      })
      .then(function() {
        queryInterface.removeColumn('files', 'cor_letra');
      })
      .then(function() {
        queryInterface.removeColumn('files', 'tamanho_letra');
      })
      .then(function() {
        queryInterface.removeColumn('files', 'midia');
      });
  },
};
