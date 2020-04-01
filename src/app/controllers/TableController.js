import File from '../models/File';
import User from '../models/User';

class TableController {
  async index(req, res) {
    return res.json('ok');
  }

  async delete(req, res) {
    File.destroy({
      where: {},
    });

    User.destroy({
      where: {},
    });

    return res.json({ success: 'All data are destroyed.' });
  }
}

export default new TableController();
