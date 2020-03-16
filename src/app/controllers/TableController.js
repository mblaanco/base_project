import * as Yup from 'yup';
import fs from 'fs';
import { resolve } from 'path';

import File from '../models/File';
import User from '../models/User';

class TableController {
  async index(req, res) {
    if (req.body.list_id === 15) {
      const lista = await File.findByPk(req.body.list_id);

      fs.readFile(
        resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', lista.path),
        'utf-8',
        (err, data) => {
          if (err) throw err;
          return res.json(data); // do operation on data that generates say resultArray;
        }
      );
    }
    const listas = await File.findAll({
      where: {
        user_id: req.userId,
      },
    });
    return res.json(listas);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const user_id = user.id;
    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
      user_id,
    });

    return res.json(file);
  }
}

export default new TableController();
