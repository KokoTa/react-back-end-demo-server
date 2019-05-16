'use strict';

const Controller = require('egg').Controller;

/**
 * 系统相关
 */
class SystemController extends Controller {
  // 用户注册
  async signIn() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;

    // 新建用户
    if (username && password) {
      try {
        const res = await ctx.model.User.create({
          username,
          password,
        });
        ctx.body = res;
      } catch (err) {
        ctx.body = err;
      }
    } else {
      ctx.status = 400;
      ctx.body = 'username or password is empty';
    }
  }
  // 用户登录
  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;

    // 获取用户数据
    if (username && password) {
      try {
        const user = await ctx.model.User.findAll({
          where: { username, password },
        });
        ctx.session.id = user[0].id; // 给一个用户 id，auth.js 中间件验证时会用到
        ctx.body = user;
      } catch (err) {
        ctx.body = err;
      }
    } else {
      ctx.status = 400;
      ctx.body = 'username or password is empty';
    }
  }
  // 简单请求可以重定向，非简单请求不可以
  async redirectTest() {
    const { ctx } = this;
    ctx.redirect('http://localhost:3000/');
  }
}

module.exports = SystemController;
