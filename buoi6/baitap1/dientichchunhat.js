//khai báo biến đểnhận chiều cao và chiều rộng//
let inputWidth;
let inputHeight;
//sử dụng hàm prompt để nhập dữ  liệu//
inputWidth = prompt("nhập chiều cao");
inputHeight = prompt("nhập chiều rộng");
/*Sử dụng hàm parseInt() để chuyển kiểu dữ liệu từ chuỗi sang số nguyên*/
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
/*Tính diện tích của hình chữ nhật và hiển thị ra màn hình*/
let area = width * height;
document.getElementById("result").innerText = "Diện tích hình chữ nhật bằng: " + area;