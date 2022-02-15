
const calculateAQI = module.exports = function(pollutantConcentration) {
    const subIndex = calculateSubIndex(pollutantConcentration);
    const aqi = calculateSumOfSubIndexes(subIndex);

    return aqi;
}

function calculateSubIndex(pollutantConcentration) {
    const BH = 100;
    const BL = 50;
    const IH = 100;
    const IL = 50;

    const subIndex = (((IH - IL) / (BH - BL)) * (pollutantConcentration - BL)) + IL;

    return subIndex;
}

function calculateSumOfSubIndexes(subIndex) {
    const I1 = 65;
    const w1 = 0.1;

    const I2 = 45;
    const w2 = 0.7;

    const wSubIndex = 0.2;

    return (I1 * w1) + (I2 * w2) + (subIndex * wSubIndex);
}

