'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 注册
  router.post('/signIn', 'system.signIn');
  // 登录
  router.post('/login', 'system.login');
  // 重定向测试
  router.get('/redirect', 'system.redirectTest');
};
