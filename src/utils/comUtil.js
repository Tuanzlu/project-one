/**
 * 生成唯一id
 */
function getUid() {
  const S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

/**
 *
 * @param {string} str 要检查的字符串
 */
const checkStrIsJson = str => {
  const _str = str.replace(/\r\n/g, "");
  try {
    var o = JSON.parse(_str);
    if (o && typeof o === "object") {
      return true;
    }
  } catch (e) {
    console.log("err", e);
  }
  return false;
};

/**
 *
 * @param {string} copyedStr 要复制的字符串
 */
function copyStr(copyedStr) {
  let oInput = document.createElement("input");
  oInput.value = copyedStr;
  document.body.appendChild(oInput);
  oInput.select();
  document.execCommand("Copy");
  oInput.className = "oInput";
  oInput.style.display = "none";
}

/**
 * 二维数组去重
 * @param {array} array 二维数组
 * @param {string} item 数组的属性
 */
function getUniqueArray(array, item) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    let flag = true;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (uniqueArray[j][item] === array[i][item]) {
        flag = false;
      }
    }
    if (flag) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

export { getUid, checkStrIsJson, copyStr, getUniqueArray };
