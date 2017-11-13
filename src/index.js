import getData from './getData.js';
import { linkUnit, linkCurrency } from './links.js';
import createTree from './createTree.js';
import mainSizeCalc from './mainSizeCalc.js';

var currencyRateData;
let shiftBig = 50;
let shiftSmall = 40;

var init = function() {

    var currencyRate = getData(linkCurrency);
    var unitData = getData(linkUnit);

    currencyRate.then((data) => {
        currencyRateData = data;
    });

    unitData.then((data) => {
        createTree(data, '0main');
        contejnerDraw();
        document.getElementById('0mainchildren').classList.remove('invisible');
    });
}

function contejnerDraw() {
    let shift = (document.documentElement.clientWidth >= 767) ? shiftBig : shiftSmall;
    mainSizeCalc(shift);
}

window.onload = init();
window.onresize = contejnerDraw;
export { currencyRateData };