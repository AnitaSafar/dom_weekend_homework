document.addEventListener('DOMContentLoaded', () => {
    const newAnimal = document.querySelector("#form");
    newAnimal.addEventListener('submit', handleNewAnimal);

});


const handleNewAnimal = function(animal) {
    animal.preventDefault();
    // console.log(animal.target.name.value);
    const animalInList = addAnimalToList(animal.target);
    const animalList = document.querySelector("#animal-list");
    animalList.appendChild(animalInList);
};

const addAnimalToList = function() {
    const animalInList = document.createElement('li');
    animalInList.classList.add("animal-in-list");

    return animalInList;
}