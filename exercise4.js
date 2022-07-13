/**
 * Mo hinh 3 khoi
 * Đầu vào
 *  - Tao 2 bien chieu dai va chieu rong hinh chu nhat
 *  -cd= 4
 *  - cr = 5
 * Xử lý: 
 *  - chieu dai * chieu rong
 *  - (chieu dai + chieu rong)*2
 *
 * Đầu ra
 *  - Thông báo chu vi va dien tich hinh chu nhat
 */
// khai báo biến
var cd, cr;
cd = 4;
cr = 5;
var chuvi = 0;
var dientich = 0;
// chu vi hinh chu nhat
chuvi = (cd + cr)*2;
// dien tich hinh chu nhat
dientich = cd * cr;
// Đầu ra thong bao chieu dai va chieu rong hinh chu nhat
console.log("Chu vi hinh chu nhat: "+chuvi);
console.log("Dien tich hinh chu nhat: "+dientich);