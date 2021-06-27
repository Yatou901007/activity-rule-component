/**
 * @description 格式化金额
 * @param number：要格式化的数字
 * @param decimals：保留几位小数 默认0位
 * @param decPoint：小数点符号 默认.
 * @param thousandsSep：千分位符号 默认为,
 */
export const formatMoney = (number, decimals = 2, decPoint = '.', thousandsSep = ',') => {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    const n = !isFinite(+number) ? 0 : +number;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
    const dec = typeof decPoint === 'undefined' ? '.' : decPoint;
    const toFixedFix = function (n, prec) {
        const k = Math.pow(10, prec);
        return '' + Math.ceil(n * k) / k;
    };
    let s;
    // eslint-disable-next-line prefer-const
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, '$1' + sep + '$2');
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
};
//# sourceMappingURL=formatMoney.js.map