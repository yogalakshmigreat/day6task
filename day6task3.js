class Person {
    constructor(name, age, address, phone, email) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.education = [];
      this.experience = [];
      this.skills = [];
      this.languages = [];
      this.interests = [];
    }
  
    addEducation(degree, school, graduationYear) {
      this.education.push({ degree, school, graduationYear });
    }
  
    addExperience(position, company, startDate, endDate, responsibilities) {
      this.experience.push({ position, company, startDate, endDate, responsibilities });
    }
  
    addSkill(skill) {
      this.skills.push(skill);
    }
  
    addLanguage(language) {
      this.languages.push(language);
    }
  
    addInterest(interest) {
      this.interests.push(interest);
    }
  
    getSummary() {
      return `${this.name} is ${this.age} years old and lives at ${this.address}. You can contact them at ${this.email} or ${this.phone}.`;
    }
  }
 
  const johnDoe = new Person("John Doe", 30, "123 Main Street, Anytown, USA", "555-123-4567", "johndoe@email.com");
  
  johnDoe.addEducation("Bachelor of Science in Computer Science", "University of Technology", 2015);
  
  johnDoe.addExperience("Senior Software Engineer", "Tech Solutions Inc.", "January 2016", "Present", [
    "Led a team of developers in the design and implementation of a scalable e-commerce platform.",
    "Developed and maintained RESTful APIs for data retrieval and updates.",
    "Collaborated with UI/UX designers to create user-friendly interfaces."
  ]);
  
  johnDoe.addSkill("JavaScript");
  johnDoe.addSkill("Node.js");
  johnDoe.addSkill("React");
  
  johnDoe.addLanguage("English");
  johnDoe.addLanguage("Spanish");
  
  johnDoe.addInterest("Reading");
  johnDoe.addInterest("Hiking");
  
  console.log(johnDoe.getSummary());
  
  