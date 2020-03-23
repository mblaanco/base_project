import File from '../models/File';

class TableController {
  async index(req, res) {
    if (req.body.list_id !== undefined && req.body.list_id !== null) {
      const lista = await File.findByPk(req.body.list_id);
      if (lista !== null) {
        return res.json(lista);
      }
      return res.status(401).json({ error: 'Lista não encontrada.' });
    }
    const listas = await File.findAll({
      where: {
        user_id: req.userId,
      },
    });
    return res.json(listas);
  }
}

export default new TableController();
