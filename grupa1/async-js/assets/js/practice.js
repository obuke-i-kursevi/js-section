console.log('----------  22. cas (21.02.2022.) -----------');

// AJAX

// Formati za razmenu podataka (najcesci danas):
// 1. JSON (https://www.javatpoint.com/json-example)
// 2. XML (https://www.w3schools.com/xml/simple.xml)

// * SOAP vs REST web servisi: https://smartbear.com/blog/soap-vs-rest-whats-the-difference/


// ! Sinhroni nacin izvrsavanja programa

// const myDailyRoutine = () => {
//     console.log('Going to work');
//     console.log('Studying');
//     console.log('Going to gym');
// }

// console.log('Good morning!');

// myDailyRoutine();

// console.log('Good night!');


// ! Asinhroni nacin izvrsavanja programa

console.log('Good morning!');

setTimeout(() => {
    console.log('My daily routine');
}, 3000);

console.log('Good night!');


// * O Event loop-u --> https://www.javascripttutorial.net/javascript-event-loop/#:~:text=The%20event%20loop%20is%20a,queue%20and%20the%20call%20stack.&text=The%20JavaScript%20engine%20places%20the%20following%20function%20call%20on%20the,executes%20it%20after%20the%20console.


console.log(1);

setTimeout(() => {
    console.log('NOW');
}, 0);

console.log(2);


// ! NAPOMENA: nije svaka funkcija koja koristi neku callback funkciju asinhrona!

// ForEach, Map, Filter, itd...

console.log('Start looping');

const numbers = [1,3,5,7,9];

numbers.forEach(num => console.log(num));

console.log('End looping');




console.log('Started logging in');

const loginUser = (email, password) => {
    setTimeout(() => {
        return {
            email,
            password
        }
    }, 1000);
}

const user = loginUser('marko@gmail.com', 'sifra12345');

console.log('User is: ', user); // undefined, jer u sinhronoj operaciji pokusavamo da ispisemo rezultat asinhrone operacije

console.log('Finished loggin in');



// ! NACINI RESAVANJA OVOG PROBLEMA:

// * 1. CALL BACK funkcije:

console.log('Start logging in Google user');

const loginUserCallback = (email, password, callbackFunc) => {
    setTimeout(() => {
        callbackFunc({
            email,
            password
        })
    }, 2000);
}

const userCb = loginUserCallback('marko@gmail.com', 'sifra12345', (user) => {
    console.log(user); // {email: 'marko@gmail.com', password: 'sifra12345'}
});

console.log('Finished logging in Google user');

const getRecensionsForUser = (email, callbackFunc) => {
    setTimeout(() => {
        callbackFunc([10, 9, 3, 10, 9, 8]);
    }, 500);
}

const getUserWithRecensions = loginUserCallback('marko@gmail.com', 'sifra12345', (user) => {
    getRecensionsForUser(user.email, (recensions) => {
        console.log(`Recensions for ${user.email}:`, recensions);
    })
});

// ! kada bismo sada npr dodali i komentare za svaku recenziju, pa npr za svaki komentar lajkove, itd dobili bismo CALLBACK HELL.



// * 2. PROMISE -> objekat koji ili vraca rezultat uspesno izvrsene asinhrone operacije ili rezultat neuspesne operacije

// ! Svaki Promise moze da bude u 3 stanja:

// 1. PENDING (stanje cekanja)
// 2. RESOLVED (razresen)
// 3. REJECTED (odbacen)


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: 'marko.markovic',
            email: 'marko99@gmail.com'
        })
        reject(new Error('Wrong credentials! Please try again.'))
    }, 4000);
});


promise
    .then(user => console.log(user))
    .catch(error => console.log(error));




// * refaktorisanje prethodnog primera sa loginovanjem korisnika i dobavljanjem recenzija:

const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === 'sifra12345') {
                console.log(`Logged in as: ${email}`);
                resolve({
                    name: 'Marko Markovic',
                    email
                })
            }
            reject(new Error('Login failed! Please try again.'))
        }, 7000);
    });
}  

const getRecensionsForUserPromise = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([10,8,7,9,5])
            reject(new Error(`Failed while fetching recensions for user ${email}`))
        }, 500);
    })
}

loginUserPromise('marko@gmail.com', 'sifra12345')
    .then(user => {
        console.log(user);
        getRecensionsForUserPromise(user.email)
            .then(recensions => console.log(`Here are the recensions for user ${user.email}`, recensions))
            .catch(error => console.log(error.message));
    })
    .catch(error => console.log(error.message))

// ovo bi se moglo nazvati PROMISE hell-om

const user1 = loginUserPromise('marko@gmail.com', 'sifra12345');

const recensions = getRecensionsForUserPromise(user1.email);



// * 3. ASYNC - AWAIT

// Async - Await su kljucne reci koje se koriste u kontekstu pisanja asinhronog koda, i vrlo se cesto kaze da uz pomocu tih reci
// asinhroni kod moze da se pise na sinhroni nacin


const getItem = (itemID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                itemID,
                itemName: 'Samsung S20'
            })
            reject(new Error('Error while fetching data'))
        }, 10000);
    })
}


const getItemDescription = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                itemDescription: 'Smart Phone by Samsung Company',
                color: 'red',
                dualSim: true
            })
            reject(new Error('Error while fetching description'))
        }, 500);
    })
}


async function showItem() {
    const item = await getItem(Math.ceil(Math.random() * 100));
    const itemDescription = await getItemDescription(item);
    console.log(`Description for item: ${item.itemName} is ${itemDescription.itemDescription}`);
}

showItem();