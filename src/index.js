module.exports = function toReadable (number) {
    if(number === 0) return 'zero';
    
    let words = {
    1:'one', 2:'two', 3:'three',  4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
    10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
    20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety'
  }

    if (number <= 20) return words[number];
    if (number > 20 && number < 100) {
        let str = String(number);
        let arr = str.split("");
        arr[0] += "0";
        if (arr[1] == 0) return words[arr[0]];
        else return words[Number(arr[0])] + " " + words[arr[1]];
    }

    if (number >= 100) {
        let str = String(number);
        let arr = str.split("");
        if (arr[1] == 0 && arr[2] == 0) return words[arr[0]] + " hundred";
        if (((Number(arr[1] + arr[2])) > 0 && (Number(arr[1] + arr[2])) < 20) || arr[2] == 0) return words[arr[0]] + " hundred " + words[Number(arr[1] + arr[2])];
        else return words[arr[0]] + " hundred " + words[Number(arr[1]) + "0"] + " " + words[arr[2]];
    }

}
