/**
 * 全局存储，主要依靠localStorage实现
 */

import { checkStrIsJson } from "@/utils/comUtil";

/**
 * 设置缓存
 * @param {string} item 缓存名称
 * @param {any} val 要存储的值
 */
function setStorage(item, val) {
  localStorage.setItem(item, JSON.stringify(val));
}

/**
 * 获取缓存
 * @param {string} item 缓存名称
 */
function getStorage(item) {
  const storageItem = localStorage.getItem(item);
  if (storageItem && storageItem !== "undefined" && storageItem.length > 0) {
    if (checkStrIsJson(storageItem)) {
      return JSON.parse(storageItem);
    } else {
      return storageItem.slice(1, storageItem.length - 1);
    }
  } else {
    return "";
  }
}

/***
 * 删除相应缓存
 */
function removeStorage(item) {
  localStorage.removeItem(item);
}

/**
 * 清除所有缓存
 */
function clearStorage() {
  localStorage.clear();
}

export default { setStorage, getStorage, clearStorage, removeStorage };
