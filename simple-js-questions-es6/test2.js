let name = 'Rick';

function greetMe(name) {
  console.log(`Hi ${this.name}!`);
}

greetMe('George');

/*
 1. What name will it print and why

 It will print "Hi undefined!" because we are using "this.name" (which is undefined)
 instead of just the input variable "name".

 */