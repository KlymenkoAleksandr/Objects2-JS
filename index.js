// Задание 1:

// Реализуйте функцию-конструктор Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), 
// который будет выводить зарплату работника. Зарплата - это произведение (умножение)
//  ставки rate на количество отработанных дней days.

function Worker (name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function() {
        console.log(this.rate * this.days);
    }
    
}

let ivan = new Worker('Ivan', 'Ivanov', 200, 22);

console.log(ivan);
ivan.getSalary();

// Задача 2:

// Создайте функцию-конструктор Calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

function Calculator(name) {
    this.name = name;
    this.read = function() {
        this.numb1 = +prompt('Введите число');
        this.numb2 = +prompt('Введите число');
    }
    this.sum = function () {
        console.log(this.numb1 + this.numb2);
    }
    this.mul = function () {
        console.log(this.numb1 * this.numb2);
    }
}

let calc1 = new Calculator('calc1');

calc1.read();
calc1.sum();
calc1.mul();