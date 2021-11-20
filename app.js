document.addEventListener('DOMContentLoaded', () => {
    const newAnimal = document.querySelector("#form");
    newAnimal.addEventListener('submit', handleNewAnimal);

    const deleteButton = document.querySelector("#delete");
    deleteButton.addEventListener('click', handleDelete);
});


const handleNewAnimal = function(animal) {
    animal.preventDefault();
    // console.log(animal.target.name.value);
    const animalInList = addAnimalToList(animal.target);
    const animalsList = document.querySelector("#animals-list");
    animalsList.appendChild(animalInList);
};

const addAnimalToList = function(form) {
    const animalInList = document.createElement('li');
    animalInList.classList.add("animal-in-list");

    const name = document.createElement("h3");
    name.textContent = form.name.value;
    animalInList.appendChild(name);

    const status = document.createElement("p");
    status.textContent = form.status.value;
    animalInList.appendChild(status);

    const population = document.createElement("p");
    population.textContent = `Population: ${form.population.value}`;
    animalInList.appendChild(population);

    const habitat = document.createElement("p");
    habitat.textContent = `Habitat(s): ${form.habitat.value}`;
    animalInList.appendChild(habitat);

    return animalInList;
}

const handleDelete = function() {
    const animalsList = document.querySelector("#animals-list");
    animalsList.innerHTML = "";
}
