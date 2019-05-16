'use strict';

module.exports = app => {
  /**
   * 用户数据库模型
   */
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    password: STRING(45),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
