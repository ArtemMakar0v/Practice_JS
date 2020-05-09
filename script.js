let money = 1000;
let time = '2020 - 05 - 31';

appData = {
    budget: money,
    timeData: time,
    expenses: {
        apartmentRent: 550
    },
    optionalExpenses: '',
    income: [],
    saving: false

}

alert('бюджет на 1 день ' + money / 31 + ' PLN');
console.log(appData.budget + ' PLN');
console.log(appData.timeData + ' May');
console.log(appData.expenses.apartmentRent + ' PLN');