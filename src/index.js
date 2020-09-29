module.exports = function toReadable(number) {
    let result = '';
    if (number === 0) {
        return 'zero';
    }
    if (number > 0 && number < 10) {
        return getFirstTen(number);
    }
    if (number >= 10 && number < 20) {
        return getFromTenToNineteen(number);
    }
    if (number >= 20 && number < 100) {
        return getDecimal(number);
    }
    if (number > 99 && number % 100 === 0) {
        return getFirstTen(number / 100) + ' hundred';
    }
    if (number / 100 >= 1) {
        return getFirstTen(Math.floor(number / 100)) + ' hundred ' + getDecimal(number % 100);
    }

    return result;
}

function getFirstTen(number) {
    switch (number) {
        case 0:
            return '';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
    }
}

function getTenth(number) {
    switch (number) {
        case 20:
            return 'twenty';
        case 30:
            return 'thirty';
        case 40:
            return 'forty';
        case 50:
            return 'fifty';
        case 60:
            return 'sixty';
        case 70:
            return 'seventy';
        case 80:
            return 'eighty';
        case 90:
            return 'ninety';

    }
}

function getDecimal(number) {
    if (number < 10) {
        return getFirstTen(number);
    }
    if (number >= 10 && number < 20) {
        return getFromTenToNineteen(number);
    }
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return getTenth(number);
        } else {
            return getTenth(Math.floor(number / 10) * 10) + ' ' + getFirstTen(number % 10);
        }
    }
}

function getFromTenToNineteen(number) {
    if (number >= 10 && number <= 20) {
        switch (number) {
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';

        }
    }
}
