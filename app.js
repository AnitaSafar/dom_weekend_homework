document.addEventListener('DOMContentLoaded', () => {
    const newAnimal = document.querySelector("#form");
    newAnimal.addEventListener('submit', handleNewAnimal);

});


const handleNewAnimal = function(animal) {
    animal.preventDefault();
    console.log(animal.target.name.value);

    const animalList = document.querySelector("#animal-list");

    animalList.textContent = `Animal1: ${animal.target.name.value} ${animal.target.select.value} 
    ${animal.target.population.value} ${animal.target.population.value}`
};

