// ! 22. cas (05.04.2022.)

// ! AJAX -> asynchronous JavaScript and XML

// ! Sinhroni nacin izvrsavanja operacija

// console.log('Good morning!');

// const dailyRoutine = () => {
//     console.log('Going to work!');
//     console.log('Going to gym!');
//     console.log('Lunch time!');
// }

// dailyRoutine();

// console.log('Good night!');



// ! Asinhroni nacin izvrsavanja operacija

// console.log('Good morning!');

// setTimeout(() => {
//     console.log('Doing my daily routine!');
// }, 3000);

// console.log('Good night!');


console.log('1');

setTimeout(() => {
    console.log('CALL NOW!');
}, 0);

console.log('2');





// ! NIJE SVAKA FUNKCIJA KOJA KORISTI NEKU CALLBACK FUNKCIJU ASINHRONA!

// * primer za tvrdnju iznad: ForEach, Map, Filter, itd.

console.log('Started testing not-async functions with callbacks');

const numbers = [1,2,3,4,5];

numbers.forEach(num => console.log(num));

console.log('Ended testing not-async functions with callbacks');





// Primer

console.log('Started logging a user in');

const loginUser = (email, password) => {
    setTimeout(() => {
        // const user = {
        //     email,
        //     password
        // }
        // return user;
        return {
            email,
            password
        }
    }, 2000);
}

const user = loginUser('marko@gmail.com', 'sifra12345');

console.log(user); // ! undefined

console.log('Fnished logging a user in');



// ! NACINI RESAVANJA PROBLEMA:

// * 1. CALL BACK funkcije:

const loginUserCallback = (email, password, callback) => {
    setTimeout(() => {
        callback({
            email,
            password
        });
    }, 3000);
}

const userCallback = loginUserCallback('petar@gmail.com', '999111', (user) => {
    console.log(user);
});


const getPostsByUser = (email, callback) => {
    setTimeout(() => {
        callback(
            ['post_number1', 'post_number2']
        )
    }, 2000);
}



const userWithPosts = loginUserCallback('marko@gmail.com', 'sifra12345', (user) => {
    getPostsByUser(user.email, (posts) => {
        console.log(posts);
    });
});




// ! CALLBACK HELL primer:

// const userWithPosts = loginUserCallback('marko@gmail.com', 'sifra12345', (user) => {
//     getPostsByUser(user.email, (posts) => {
//         getPostsByUser(user.email, (posts) => {
//             getPostsByUser(user.email, (posts) => {
//                 getPostsByUser(user.email, (posts) => {
//                     getPostsByUser(user.email, (posts) => {
//                         getPostsByUser(user.email, (posts) => {
//                             console.log(posts);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });




// * 2. PROMISE -> objekat koji ili vraca rezultat uspesno izvrsene asinhrone operacije ili rezultat neuspesne operacije.

// PROMISE moze biti u 3 stanja:

// 1. PENDING (stanje cekanja)
// 2. RESOLVED (uspesno razresen)
// 3. REJECTED (odbaceno stanje)


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: 'marko.markovic',
            fullName: 'Marko Markovic'
        });
        reject(new Error('This user is not logged in!'));
    }, 4000);
});


promise
    .then(user => console.log(user))
    .catch(error => console.log(error));
    // .finally()


const logUserAirbnb = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === 'sifra12345') {
                console.log(`Succesfully logged in user with email: ${email}`);
                resolve({
                    email,
                    password
                })
                return;
            }
            reject(new Error('Login failed!'));
        }, 7000);
    });
}

const getRecensionsForUser = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [5,4,5,3,2,1]
            );
            reject(new Error(`Failed while getting recensions for user ${email}`));
        }, 500);
    })
}

logUserAirbnb('sara@gmail.com', 'sifra12345')
    .then(user => {
        console.log(user);
        getRecensionsForUser(user.email)
            .then(recensions => {
                console.log(`Recensions for ${user.email}`, recensions);
            })
            .catch(error => console.log(error.message));
    })
    .catch(error => console.log(error.message));





// * 3. ASYNC - AWAIT

// * Ove kljucne reci (rezervisane reci) se koriste u kontekstu pisanja asinhronog koda "na sinhroni nacin" .


const getItem = (itemID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                itemName: 'Samsung Galaxy S20',
                color: 'black',
                memory: '128gb'
            });
            reject(new Error('Error while getting data about item!'));
        }, 10000);
    });
}

const getItemDescription = (item) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                itemDescription: 'Smart Phone by Samsung Company'
            });
            reject(new Error('Error while getting description about item!'));
        }, 500);
    });
}

async function showItem() {
    const item = await getItem('SMSNGS20');
    const itemDescription = await getItemDescription(item);
    console.log(`Item with name ${item.itemName} has description: ${itemDescription.itemDescription}`);
}

showItem();
