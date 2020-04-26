module.exports = {
  dialect: 'postgres',
  host: 'localhost', // mevizya.ddns.net // IP do postgres entre containers é o nome do container
  username: 'postgres',
  password: 'docker',
  database: 'base',
  define: {
    timestamps: true,
    underscored: true, // para usar padrão underscore para nome de tabelas e colunas
    underscoredAll: true,
  },
};
