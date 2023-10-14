

class Movie {
    constructor(title, stdio, rating) {
        this.title = title;
      this.stdio = stdio;
     this.rating = rating;
   }

    displayInfo() {
        console.log(`Movie Info`);
        console.log(`----------`);
        console.log(`Title: ${this.title}`);
       console.log(`Stdio: ${this.stdio}`);
       console.log(`Rating: ${this.rating}`);
   }
}

let Movie1 = new Movie('Casino Royale', 'Eon Productions', 'PG13');

 Movie1.displayInfo();