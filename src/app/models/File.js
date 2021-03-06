import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        content: Sequelize.TEXT,
        dt_ini: Sequelize.DATE,
        dt_fim: Sequelize.DATE,
        midia: Sequelize.STRING,
        bgcolor: Sequelize.STRING,
        tipo_letra: Sequelize.STRING,
        tamanho_letra: Sequelize.STRING,
        cor_letra: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.File, { foreignKey: 'user_id' });
  }
}

export default File;
