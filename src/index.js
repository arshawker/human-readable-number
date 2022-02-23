module.exports = function toReadable (number) {
    let strNum = number.toString();
    let  strNumLeng = strNum.length;
    
    const roundNum = [ '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const zeroNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenNineteen = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number < 10) {
        return zeroNine[number];
    }
    if (strNumLeng === 2) {
        if(10 < number && number < 20) {
            return tenNineteen[strNum[1]];
        } else if (9 < number && number < 91 && strNum[1] === '0') {
            return roundNum[strNum[0]];
        } return `${roundNum[strNum[0]]} ${zeroNine[strNum[1]]}`;
    } else if (strNumLeng === 3) {
        if (strNum[1] === '0' && strNum[2] === '0') {
            return `${zeroNine[strNum[0]]} hundred`;
        } else if (strNum[1] === '0') {
            return `${zeroNine[strNum[0]]} hundred ${zeroNine[strNum[2]]}`;
        } else if (strNum[2] === '0') {
            return `${zeroNine[strNum[0]]} hundred ${roundNum[strNum[1]]}`;
        } else if (strNum[1] === '1' && strNum[2] > 0) {
            return `${zeroNine[strNum[0]]} hundred ${tenNineteen[strNum[2]]}`;
        }
        return `${zeroNine[strNum[0]]} hundred ${roundNum[strNum[1]]} ${zeroNine[strNum[2]]}`;
    }
};
