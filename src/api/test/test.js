import http from "@/utils/http";
const api = {
  userList: `/getUserList`,
  userListId: `/getUserList/id`,
  add: `/addUser`,
  update: `updateUser`,
  delete: `deleteUser`
};

/**
 * 直接获取用户信息
 */
function getUserList() {
  return http
    .get(api.userList, {})
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
/**
 * 根据id获取用户信息
 * @param {object} params
 * @param {string} params.userid 用户id
 */
function getUserListId(argsParams = {}) {
  return http
    .get(api.userListId, {
      params: argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 更新用户信息
 * @param {object} params
 * @param {string} params.userid 用户id
 * @param {string} params.username 用户名
 */
function updateUser(argsParams = {}) {
  return http
    .get(api.update, {
      params: argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 删除用户
 * @param {object} params
 * @param {string} params.userid 用户id
 */
function deleteUser(argsParams = {}) {
  return http
    .get(api.delete, {
      params: argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

/**
 * 新增用户
 * @param {object} params
 * @param {string} params.username 用户名
 * @param {string} params.pwd 密码
 */
function addUser(argsParams = {}) {
  return http
    .get(api.add, {
      params: argsParams
    })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
}

export default { getUserList, getUserListId, addUser, deleteUser, updateUser };
