const db = require("../../db/config");

class UserController {
  static async getUsers(req, res) {
    const sql = `SELECT * FROM users`;

    db.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  }

  static async getUser(req, res) {
    const { id } = req.params;
    const sql = `SELECT * FROM users WHERE id = ${id}`;

    db.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  }

  static async postUser(req, res) {
    const { nome, email, data_nascimento} = req.body
    const formated_date = data_nascimento.split('/').reverse().join('/')
    const sql = `INSERT INTO users ( nome, email, data_nascimento ) VALUES ( '${nome}', '${email}', '${formated_date}' )`;
    
    db.query(
      sql,
      (error, result) => {
        if (error) throw error;
        res.send(result);
      }
    );
  }
}

module.exports = UserController;
