class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate)
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    while(currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss
  }
}

//CEO
const ada = new Employee("Ada", "CEO", 300000.00);

// employees below Ada
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

const simone = new Employee("Simone", "Employee", 70000)
const ali = new Employee("Ali", "Employee", 70000)
const florida = new Employee("Florida", "Employee", 40000)
const david = new Employee("Davis", "Employee", 50000)
const brian = new Employee("Brian", "Employee", 40000)
const karla = new Employee("Karla", "Employee", 30000)

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

//Feature 1 - To get employees boss we just get the node of boss (employee.boss)

// console.log(craig.boss);
// console.log(craig.numberOfSubordinates);
console.log(craig.numberOfPeopleToCEO);
