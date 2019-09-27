let name = 'Rick';

function greetMe() {
  console.log(`Hi ${name}!`);
}

name = 'Morty';

greetMe();
/*
1. What name will it print and why
It will print "Hi Morty" because the variable "name" 
has been overwrite from "Rick" to "Morty"  before the
greetMe() function it's called for execution.
*/