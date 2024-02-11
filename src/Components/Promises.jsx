const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      setTimeout(() => {
        const success = true;
  
        if (success) {
          resolve("Operation successful");
        } else {
          reject("Operation failed");
        }
      }, 1000);
    });
  };
  
  // Using the Promise
  myAsyncFunction()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Cleanup or finalization");
    });

export default myAsyncFunction();