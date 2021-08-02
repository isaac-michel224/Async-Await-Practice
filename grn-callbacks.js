
//Write an asynchronous function and call it with async/await

async function getRandomNumber() {
    
    let promise = new Promise(( resolve, reject) => {
        setTimeout( () => resolve("done!"), 500)
    });

    let result= 721;

    alert(result);
}

getRandomNumber();

console.log(721);