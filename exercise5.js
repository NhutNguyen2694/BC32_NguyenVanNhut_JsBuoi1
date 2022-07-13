/**
 * Mo hinh 3 khoi
 * Đầu vào
 *  - Tao so co 2 chu so n = 22
 *
 * Xử lý: 
 *  - a=n%10 lay hang don vi
 *  - b=n/10 lay hang chuc
 *  - tong =a + b
 *
 * Đầu ra
 *  - Thông báo tong cua so co 2 chu so
 */
// khai báo biến
var n = 88;
var a = 0;
var b = 0;
var tong = 0;
// lay so hang don vi
a = n % 10;
//  lay so hang chuc
b= n / 10;
// tong so co 2 chu so
tong = Math.floor(a + b) ;


// Đầu ra tong so co 2 chu so
console.log("Tong so co 2 chu so: "+tong);