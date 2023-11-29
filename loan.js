function calculateLoan() {
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value / 100 / 12;
    var loanTerm = document.getElementById('loanTerm').value * 12;

    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    var formattedMonthlyPayment = monthlyPayment.toFixed(2);

    document.getElementById('result').innerHTML = 'Monthly Payment: $' + formattedMonthlyPayment;
}