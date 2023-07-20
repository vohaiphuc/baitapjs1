/**
 * Bài 1:
 * 
 * input: Lương 1 ngày, số ngày
 * process: Lương 1 ngày * số ngày
 * output: Lương
 */
function tinhBai1() {
    const luong = document.getElementById("b1-luong-ngay").value*1
    const ngay = document.getElementById("b1-so-ngay").value*1
    document.getElementById("result1").innerHTML = `Tổng lương: ${luong * ngay}`
}

/**
 * Bài 2:
 * 
 * input: 5 số thực
 * process: tổng / 5
 * output: trung bình 5 số
 */
function tinhBai2() {
    const so1 = document.getElementById("b2-so-1").value*1
    const so2 = document.getElementById("b2-so-2").value*1
    const so3 = document.getElementById("b2-so-3").value*1
    const so4 = document.getElementById("b2-so-4").value*1
    const so5 = document.getElementById("b2-so-5").value*1
    document.getElementById("result2").innerHTML = "Trung bình 5 số: " + (so1 + so2 + so3 + so4 + so5) / 5
}

/**
 * Bài 3:
 * 
 * input: số tiền USD
 * process: đổi tiền USD sang VND theo công thức: VND = USD * 23500
 * output: VND
 */
function tinhBai3() {
    const soTien = document.getElementById("b3-tien").value*1
    document.getElementById("result3").innerHTML = `$${soTien} tương đương với ${(soTien*23500).toLocaleString()} VND`
}

/**
 * Bài 4:
 * 
 * input: chiều dài (d), chiều rộng (r)
 * process: diện tích = d x r, chu vi = (d + r) * 2
 * output: diện tích, chu vi
 */
function tinhBai4() {
    const dai = document.getElementById("b4-dai").value*1
    const rong = document.getElementById("b4-rong").value*1
    document.getElementById("result4").innerHTML = `Diện tích: ${dai*rong}; Chu vi: ${(dai+rong)*2}`
}

/**
 * Bài 5:
 * 
 * input: số 2 chữ số => n
 * process: 
 *          hàng đơn vị = n % 10
 *          hàng chục = round down n/10
 * output: tổng 2 chữ số
 */
function tinhBai5() {
    const n = document.getElementById("b5-so").value*1
    const hangDonVi = n%10
    const hangChuc = Math.floor(n/10)
    document.getElementById("result5").innerHTML = `Tổng 2 chữ số là: ${hangChuc + hangDonVi}`
}