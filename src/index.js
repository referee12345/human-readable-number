module.exports = function toReadable (number) {

    if ( number === 0 ) {

        return 'zero';

    }

    let units_arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens_arr = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    let hundreds = Math.floor(number / 100);
    let tens     = Math.floor( ( number - hundreds * 100 ) / 10 );
    let units    = number - hundreds * 100 - tens * 10;

    if (tens === 1) {
        tens = 0;
        units = number - hundreds * 100;
    }

    let hundredsString = hundreds ? units_arr[hundreds] + ' hundred ' : '';
    return (hundredsString + tens_arr[tens] + units_arr[units]).trim()

}
