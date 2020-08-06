/**
 * 小驼峰法和下划线之间转换
 * Note: 专门用于http请求
 *
 */

/**
 * 字符串下划线转驼峰
 * @param {string} s 要转换的字符串
 * @note hello_world => helloWorld
 */
function underline2Hump(s) {
  return s.replace(/_(\w)/g, function(all, letter) {
    return letter.toUpperCase();
  });
}

/**
 * 字符串的驼峰格式转下划线
 * @param {string} s 要转换的字符串
 * @note helloWorld => hello_world
 */
function hump2Underline(s) {
  return s.replace(/([A-Z])/g, "_$1").toLowerCase();
}

/**
 * JSON对象的key值转换为驼峰式
 * @param {object} obj json对象
 */
function jsonToHump(obj) {
  const transform = function(obj) {
    if (obj instanceof Array) {
      obj.forEach(function(v) {
        transform(v);
      });
    } else if (obj instanceof Object) {
      Object.keys(obj).forEach(function(key) {
        var newKey = underline2Hump(key);
        if (newKey !== key) {
          obj[newKey] = obj[key];
          delete obj[key];
        }
        transform(obj[newKey]);
      });
    }
  };

  let rawObj = JSON.parse(JSON.stringify(obj));
  transform(rawObj);
  return rawObj;
}

/**
 * JSON对象的key值转换为下划线格式
 * @param {object} obj json对象
 */
function jsonToUnderline(obj) {
  const transform = function(obj) {
    if (obj instanceof Array) {
      obj.forEach(function(v) {
        transform(v);
      });
    } else if (obj instanceof Object) {
      Object.keys(obj).forEach(function(key) {
        var newKey = hump2Underline(key);
        if (newKey !== key) {
          obj[newKey] = obj[key];
          delete obj[key];
        }
        transform(obj[newKey]);
      });
    }
  };
  let rawObj = JSON.parse(JSON.stringify(obj));
  transform(rawObj);
  return rawObj;
}

export { jsonToHump, jsonToUnderline };
