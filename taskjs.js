let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Пожалуйста, введите дату в формате YYYY-MM-DD');

let reqExpense;
let expenseAmount;

let expenses = {
    "reqExpense": reqExpense,
    "expenseAmount": expenseAmount
};

let optionalExpenses = {

};

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": calcExpenses(),
    "optionalExpenses": optionalExpenses,
    "extraIncome": [],
    "savings": false
};
console.log(appData);

function calcExpenses() {
    let ex;
    let arr = [];
    for (i=0; i<2; i++) {
        ex = {
            reqExpense: prompt('Обязательные расходы в этом месяце?'),
            expenseAmount: +prompt('Во что обойдется?')
        };
        arr.push(ex);
    }
    console.log(arr);
    return arr;
}

alert('Ежедневный бюджет: ' + appData.budget/30);