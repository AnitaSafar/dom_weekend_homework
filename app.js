document.addEventListener('DOMContentLoaded', () => {
    const newAnimal = document.querySelector("#form");
    newAnimal.addEventListener('submit', handleNewAnimal);

});


const handleNewAnimal = function(animal) {
    animal.preventDefault();
    // console.log(animal.target.name.value);
    const animalInList = addAnimalToList(animal.target);
    const animalsList = document.querySelector("#animal-list");
    animalsList.appendChild(animalInList);
};

const addAnimalToList = function(form) {
    const animalInList = document.createElement('li');
    animalInList.classList.add("animal-in-list");

    const name = document.createElement("h2");
    name.textContent = form.name.value;
    animalInList.appendChild(name);

    const status = document.createElement("h3");
    status.textContent = form.status.value;
    animalInList.appendChild(status);

    return animalInList;
}