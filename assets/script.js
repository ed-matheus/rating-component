// Selecting DOM Elements
const mainContainer = document.querySelector('.container')
const content = document.querySelector('.content')
const finalContent = document.querySelector('.final_container')
const ratingNumbers = document.querySelectorAll('ul li')
const btn = document.querySelector('button')
const ratingResult = document.querySelector('.rating_result')

let submitClicked = false;

// Submit Function
function submit() {
    if(document.querySelector('.ratingClicked')) {
        const id = document.querySelector('.ratingClicked').id
        content.classList.add('hide')
        finalContent.classList.remove('hide')

        ratingResult.innerHTML = `You selected ${id} out of 5`
    } else {
        alert('Escolha um número para avaliar e continuar!')
    }
}

// Rating Event
function numberEvent() {
    // Creating an Array of rating numbers
    const numbersArray = ratingNumbers

    // Adding an event for each 'li' element
    numbersArray.forEach(li => {
        li.addEventListener('click', () => {
            numbersArray.forEach(element => {
                element.style = ''
                element.style.color = ''
            })

            li.style = 'background-color: hsl(25, 97%, 53%); color: #fff;'

            console.log(li.id)

            li.classList.add('ratingClicked');
        });
    });
}

// This command allows the 'numberEvent' function to be called on the first page load
document.addEventListener('DOMContentLoaded', numberEvent)
