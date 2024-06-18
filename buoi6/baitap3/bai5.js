const EXCHANGE_RATE = 23000;

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if (isNaN(amount) || amount <= 0) {
        showResult("Vui lòng nhập một số tiền hợp lệ.");
        return;
    }

    // Kiểm tra số tiền tối thiểu để chuyển đổi
    if ((fromCurrency === 'USD' && amount < 1) || (fromCurrency === 'VND' && amount < EXCHANGE_RATE)) {
        showResult(`Số tiền tối thiểu để chuyển đổi là 1 USD hoặc ${EXCHANGE_RATE} VND.`);
        return;
    }

    let result;
    if (fromCurrency === 'USD' && toCurrency === 'VND') {
        result = amount * EXCHANGE_RATE;
    } else if (fromCurrency === 'VND' && toCurrency === 'USD') {
        result = amount / EXCHANGE_RATE;
    } else {
        showResult("Chuyển đổi tiền tệ này không được hỗ trợ.");
        return;
    }

    result = result.toFixed(2); // Hiển thị kết quả với hai chữ số thập phân
    showResult(`${amount} ${fromCurrency} = ${result} ${toCurrency}<br>Số tiền được quy đổi: ${result} ${toCurrency}<br>Tỷ giá hối đoái: 1 ${fromCurrency} = ${EXCHANGE_RATE} ${toCurrency}`);
}

function swapCurrencies() {
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
}

function showResult(message) {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = message;
    resultElement.classList.add("show");
}