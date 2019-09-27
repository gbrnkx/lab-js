const getSumAsync = async (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 3000);
  });
};

const getProdAsync = async (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 * num2);
    }, 2000);
  });
};


const start = async() => {

  const sum = await getSumAsync(3,5);

  const prod = await getProdAsync(3,5);

  console.log('The result was: ', sum | prod);

/*
We expect that sum will have the value 8, after 3 seconds, but what we see printed in the console is:
The sum was:  Promise {<pending>}
1. What did we do wrong? How can it be fixed?
   The error is two missing key words, "async" in the start method and "await" when we call the async function.
2. Create another async function, getProdAsync, which returns the multiplication result of the 2 numbers
   and returns the result in 2 seconds
3. Call both async functions and return the result of whichever function returns first  (optional)
*/
}


start();
