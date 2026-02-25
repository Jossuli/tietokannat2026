const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from arviointi where id_arviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (Päivämäärä,Arvosana,idOpintojakso,IdOpiskelija) values(?,?,?,?)',
      [arviointi.Päivämäärä, arviointi.Arvosana, arviointi.idOpintojakso, arviointi.idOpiskelija],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where id_arviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set Päivämäärä=?,Arvosana=?, idOpintojakso=?, idOpiskelija=? where id_arviointi=?',
      [arviointi.Päivämäärä, arviointi.Arvosana, arviointi.idOpintojakso, arviointi.idOpiskelija, id],
      callback
    );
  }
};
module.exports = arviointi;