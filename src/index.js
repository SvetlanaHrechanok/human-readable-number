module.exports = function toReadable (number) {

    arr = number.toString().split('');

    mapBeforNineteen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    mapTens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let str = '';

    console.log(number);
    if (number < 20) {
        str = mapBeforNineteen[number];
    }

    if (number >= 20 && arr.length == 2) {
        if(number % 10 == 0) str = mapTens[Math.floor(number / 10 )];
        else str = mapTens[Math.floor(number / 10 )] + ' ' + mapBeforNineteen[number % 10];
    }

    if (number > 20 && arr.length == 3) {
        if(number % 100 == 0) str = mapBeforNineteen[Math.floor(number / 100 )] + ' hundred';
        else if(number % 100 > 0  && number % 100 < 20) str = mapBeforNineteen[Math.floor(number / 100 )] + ' hundred ' +  mapBeforNineteen[number % 100];
        else {
            if(number % 100 % 10 == 0) str =  mapBeforNineteen[Math.floor(number / 100 )] + ' hundred ' +  mapTens[Math.floor(number % 100 / 10 )]
            else str = mapBeforNineteen[Math.floor(number / 100 )] + ' hundred ' +  mapTens[Math.floor(number % 100 / 10 )] + ' ' + mapBeforNineteen[number %10];
        }
    }

    console.log(str);
    return str;
}
