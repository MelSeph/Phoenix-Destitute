const CountAbbreviations = [ '', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Se', 'Sp' ];
function formatNumber(count, withAbbr = true, decimals = 1) {
    const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {
        result += `${CountAbbreviations[i]}`;
    }
    return result;
}