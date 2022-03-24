// 2.

const todos = document.querySelectorAll('ol li');

console.dir(todos);


// 3.
const completeAllBtn = document.getElementById('btn-complete-all');

const mainTitle = document.querySelector('.main-title');

let todaysDate = new Date();

mainTitle.textContent = `Things to do on date: ${todaysDate.getDate()}.${todaysDate.getMonth()+1}.${todaysDate.getFullYear()}.`;

completeAllBtn.textContent = 'Complete All';


// 4. i 5.

completeAllBtn.addEventListener('click', () => {
    for(let todo of todos) {
        todo.style.color = 'green';
        todo.innerHTML = `<del>${todo.textContent}</del>`;
    }
    mainTitle.style.color = 'green';
});


// 6. i 7.

const completeOneInput = document.getElementById('complete-one-input');

const completeOneBtn = document.getElementById('btn-complete-one');

completeOneBtn.textContent = 'Complete';

completeOneBtn.addEventListener('click', () => {
    if(completeOneInput.value) {
        const indexToComplete = completeOneInput.value-1;
        const selectedTodo = todos[indexToComplete];
        selectedTodo.style.color = 'red';
        selectedTodo.innerHTML = `<del>${selectedTodo.textContent}</del>`;
    } else {
        alert('No element has been selected!');
        return;
    }
});



// 8., 9. i 10.

const btnStartCompl = document.getElementById('btn-start-completing');

btnStartCompl.textContent = 'Start Completing';

const numbers = document.querySelectorAll('#list-of-numbers li');

console.dir(numbers);

let currentVal = 0;

btnStartCompl.addEventListener('click', () => {
    const myInterval = setInterval(() => {
        if(!numbers[currentVal]) {
            alert('All tasks completed!');
            clearInterval(myInterval);
            return;
        }
        const number = numbers[currentVal];
        number.style.color = '#dd3300';
        number.style.fontWeight = 'bold';
        number.innerHTML = `<del>${number.textContent}</del>`;
        currentVal++;
    }, 1000);
});