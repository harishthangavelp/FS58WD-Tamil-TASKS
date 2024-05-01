--------------------------------------------------------------------------------------------------------------------------------------
                                               Write a class Person to hold all the details
--------------------------------------------------------------------------------------------------------------------------------------
//input
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
  }
  
  const person1 = new Person('Harish','Dinesh','Suresh');
  const person2 = new Person('Priya','Samas','Divya');
  
  person1.setScore = 265
  person1.setSkill = 'English'
  person1.setSkill = 'Tamil'
  person1.setSkill = 'Hindi'
  
  person2.setScore = 500
  person2.setSkill = 'Coding'
  person2.setSkill = 'Full Stack Development'
  person2.setSkill = 'Developer'
  
  console.log(person1.score);
  console.log(person2.score);
  
  console.log(person1.skills);
  console.log(person2.skills);
--------------------------------------------------------------------------------------------------------------------------------------
//output
265
500
['English', 'Tamil', 'Hindi']
['Coding', 'Full Stack Development', 'Developer']
--------------------------------------------------------------------------------------------------------------------------------------