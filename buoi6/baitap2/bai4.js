function tinhDiem() {
    let vatLy = parseFloat(document.getElementById("vatLy").value);
    let hoaHoc = parseFloat(document.getElementById("hoaHoc").value);
    let sinhHoc = parseFloat(document.getElementById("sinhHoc").value);

    let tongDiem = vatLy + hoaHoc + sinhHoc;
    let diemTrungBinh = tongDiem / 3;

    document.getElementById("tongDiem").innerHTML = "Điểm tổng: " + tongDiem;
    document.getElementById("diemTrungBinh").innerHTML = "Điểm trung bình: " + diemTrungBinh.toFixed(2);
}

function chuyenDoi() {
    let doC = parseFloat(document.getElementById("doC").value);
    let doF = (doC * 9 / 5) + 32;
    document.getElementById("doF").innerHTML = "Giá trị độ F tương ứng: " + doF;
}

function tinhDienTich() {
    let banKinh = parseFloat(document.getElementById("banKinh1").value);
    let dienTich = Math.PI * Math.pow(banKinh, 2);
    document.getElementById("dienTich").innerHTML = "Diện tích hình tròn: " + dienTich.toFixed(2);
}

function tinhChuVi() {
    let banKinh = parseFloat(document.getElementById("banKinh2").value);
    let chuVi = 2 * Math.PI * banKinh;
    document.getElementById("chuVi").innerHTML = "Chu vi hình tròn: " + chuVi.toFixed(2);
}