console.log('-------------- 22. cas (21.02.2022.) ---------------');

// AJAX

// 1. Asinhroni JavaScript
// 2. XML

// Formati za razmenu podataka:

// 1. XML (https://www.w3schools.com/xml/simple.xml)
// 2. JSON (https://www.javatpoint.com/json-example)

// ! procitati clanak o SOAP vs REST web servisima (https://smartbear.com/blog/soap-vs-rest-whats-the-difference/)


// Sinhroni nacin izvrsavanja programa:

// const myDailyRoutine = () => {
//     console.log('Going to work');
//     console.log('Studying');
//     console.log('Going to gym');
// }

// console.log('Good morning!');

// myDailyRoutine();

// console.log('Good night!');


// Asinhroni nacin izvrsavanja programa:

console.log('Good morning!');

setTimeout(() => {
    console.log('My daily routine');
}, 3000);

console.log('Good night!');


console.log(1);

setTimeout(() => {
    console.log('NOW!');
}, 3000);

console.log(2);



// ! Nije svaka callback funkcija asinhrona!

// ForEach, Map, filter, itd.


console.log('Start looping');

const numbers = [1,2,3,4,5];

numbers.forEach(num => console.log(num));

console.log('End looping');



console.log('Started logging in process');

const loginUser = (email, password) => {
    setTimeout(() => {
        return {
            email,
            password
        }
    }, 3000);
}

const user = loginUser('marko@gmail.com', 'sifra12345');

console.log('User logged in', user); // ! undefined jer sinhrona operacija referencira vrednost koju vraca asinhrona operacija

console.log('Ended logging in process');



// ! nacini za resavanje gornjeg (undefined) problema:

// * 1. CALLBACK funkcije

console.log('Gmail auth process started');

const loginUserCallback = (email, password, callbackFunc) => {
    setTimeout(() => {
        callbackFunc({
            email,
            password
        })
    }, 5000);
}

const userCallback = loginUserCallback('marko@gmail.com', 'sifra12345', (user) => {
    console.log(user);
});

console.log('Gmail auth process ended');


const getRecensionsForUserCallback = (email, callbackFunc) => {
    setTimeout(() => {
        callbackFunc([
            10,5,7,8,9,3
        ])
    }, 500);
}

const recensionsForUserCallback = loginUserCallback('marko@gmail.com', 'sifra12345', (user) => {
    getRecensionsForUserCallback(user.email, (recensions) => {
        console.log(`Recensions for ${user.email}`, recensions);
    });
});

// ! Callback hell



// * 2. PROMISE -> je objekat koji ili vraca rezultat uspesno izvrsene asinhrone operacije ili rezultat neuspesne operacije

// ! Svaki Promise moze da bude u 3 stanja:

// 1. PENDING (na cekanju)
// 2. RESOLVED (razresen)
// 3. REJECTED (odbacen)


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: 'marko.markovic',
            email: 'marko@gmail.com'
        })
        reject(new Error('This user is not logged in.'))
    }, 7000);
});


promise
    .then(user => console.log(user))
    .catch(error => console.log(error.message));



// callback primer sa promise-om:

console.log('User logging in started:');

const logingUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === 'sifra12345') {
                console.log(`Succesfully logged in ${email}`);
                resolve({
                    name: 'Marko Petrovic',
                    email
                });
            }
            reject(new Error('Login failed. Please try again!'));
        }, 8000);
    })
}

const getRecensionsForUserPromise = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([10,9,7,5,6]);
            reject(new Error(`Failed while fetching recensions for ${email}`));
        }, 500);
    });
}

logingUserPromise('marko@gmail.com', 'nekasifra12345')
    .then(user => {
        getRecensionsForUserPromise(user.email)
            .then(recensions => console.log(`Recensions for user ${user.email} are:`, recensions))
            .catch(error => console.log(error.message));
    })
    .catch(error => console.log(error.message));

console.log('User logging in ended');

// ! Promise hell



// * 3. ASYNC - AWAIT

// Async - Await su kljucne reci koje se koriste u kontekstu pisanja asinhronog koda, najcesce se kaze da se uz pomocu tih reci
// asinhroni kod pise na sinhroni nacin.


const getItem = (itemID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                itemID,
                itemName: 'Samsung S20'
            })
            reject(new Error(`Error while fetching data for item: ${itemID}`));
        }, 10000);
    })
}

const getItemDescription = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                color: 'BLACK',
                dualSim: true,
                itemDescription: 'Smart Phone made by Samsung company'
            })
            reject(new Error(`Error while fetching data for ${item.itemName}`))
        }, 1000);
    })
}


async function showItem() {
    const item = await getItem(Math.ceil(Math.random() * 100));
    const itemDescription = await getItemDescription(item);
    console.log(`${item.itemName} has description: ${itemDescription.color} and ${itemDescription.itemDescription}`);
}

showItem();




