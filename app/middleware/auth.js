'use strict';

/**
 * 中间件
 * @param {Object} options - 配置对象
 * @param {Object} app - app对象
 */
module.exports = (options, app) => {
  /**
   * API 访问权限控制，/login 路径会被忽略
   * @param  {Object} ctx - 上下文对象
   * @param  {Function} next - 执行下一个中间件
   */
  return async function auth(ctx, next) {
    console.log('fucker');
    await next();
  };
};
