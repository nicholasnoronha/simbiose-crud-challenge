const db = require("../../db/config");

class UserController {
  static async getUsers(req, res) {
    const sql = `SELECT * FROM users`;

    try {
      db.query(sql, (error, result) => {
        if (error) throw error;
        res.send(result);
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;
    const sql = `SELECT * FROM users WHERE id = ${id}`;

    try {
      db.query(sql, (error, result) => {
        if (error) throw error;
        res.send(result);
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async postUser(req, res) {
    const { nome, email, data_nascimento } = req.body;
    const formated_date = data_nascimento.split("/").reverse().join("/");
    const sql = `INSERT INTO users ( nome, email, data_nascimento ) VALUES ( '${nome}', '${email}', '${formated_date}' )`;

    try {
      db.query(sql, (error, result) => {
        if (error) throw error;
        res.send(result);
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async updateUser(req, res) {
    const { nome, email, data_nascimento } = req.body;
    const { id } = req.params;
    const formated_date = data_nascimento.split("/").reverse().join("/");
    const sql = `UPDATE users SET nome = '${nome}', email = '${email}', data_nascimento = '${formated_date}'  WHERE id = ${id}`;

    try {
      db.query(sql, (error, result) => {
        if (error) throw error;
        res.send(result);
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM users WHERE id = ${id}`;

    try {
      db.query(sql, (error, result) => {
        if (error) throw error;
        res.send(result);
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = UserController;
