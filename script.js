let animalData = [
    {
        name: "Kookaburra",
        class: "Bird",
        region: "Australia and New Guinea",
        diet: "Carnivore (insects, lizards, snakes)",
        shapeSize: "Medium-sized kingfisher bird",
        misc: "My distinctive call sounds a lot like laughter.",
    },
    {
        name: "Axolotl",
        class: "Amphibian",
        region: "Mexico (Lake Xochimilco)",
        diet: "Carnivore (worms, insects, small fish)",
        shapeSize: "Small salamander",
        misc: "I can regenerate limbs and parts of my organs!",
    },
    {
        name: "Giraffe",
        class: "Mammal",
        region: "Africa",
        diet: "Herbivore (leaves, acacia trees)",
        shapeSize: "Tallest land mammal",
        misc: "My tongue is long and prehensile to reach high branches.",
    },
    {
        name: "Mantis Shrimp",
        class: "Crustacean",
        region: "Tropical & subtropical marine waters",
        diet: "Carnivore (snails, crabs, fish)",
        shapeSize: "Small but mighty",
        misc: "I have incredibly powerful punches and the most complex eyes in the animal kingdom.",
    },
    {
        name: "Pangolin",
        class: "Mammal",
        region: "Asia and Africa",
        diet: "Insectivore (ants, termites)",
        shapeSize: "Small to medium-sized",
        misc: "I'm the only mammal covered in scales for protection.",
    },
    {
        name: "Narwhal",
        class: "Mammal",
        region: "Arctic Ocean",
        diet: "Carnivore (fish, squid)",
        shapeSize: "Medium-sized whale",
        misc: "My long tusk is actually a giant tooth!",
    },
    {
        name: "Okapi",
        class: "Mammal",
        region: "Central Africa",
        diet: "Herbivore (leaves, buds, fungi)",
        shapeSize: "Medium-sized, forest dweller",
        misc: "I'm the giraffe's closest relative, despite my zebra-like stripes.",
    },
    {
        name: "Aye-aye",
        class: "Mammal",
        region: "Madagascar",
        diet: "Omnivore (insects, larvae, fruit)",
        shapeSize: "Small lemur",
        misc: "I use my long, thin middle finger to tap on trees and extract grubs.",
    },
    {
        name: "Blobfish",
        class: "Fish",
        region: "Deep waters off Australia & New Zealand",
        diet: "Carnivore (crabs, sea pens)",
        shapeSize: "Gelatinous, blob-like",
        misc: "I look very different at the surface due to changes in pressure.",
    },
    {
        name: "Red Panda",
        class: "Mammal",
        region: "Himalayas, Southwest China",
        diet: "Mostly herbivore (bamboo), but also eats eggs & small animals",
        shapeSize: "Slightly larger than a house cat",
        misc: "I'm not closely related to the giant panda!",
    },
    {
        name: "Cassowary",
        class: "Bird",
        region: "Australia and New Guinea",
        diet: "Omnivore (mainly fruit)",
        shapeSize: "Large, flightless bird",
        misc: "I have a helmet-like casque on my head and powerful legs for defense.",
    },
    {
        name: "Platypus",
        class: "Mammal",
        region: "Eastern Australia",
        diet: "Carnivore (worms, insect larvae, crustaceans)",
        shapeSize: "Small, semi-aquatic",
        misc: "I lay eggs, have a duck bill, and can sense prey through electrolocation.",
    },
    {
        name: "Leafy Seadragon",
        class: "Fish",
        region: "Southern and Western Australia",
        diet: "Carnivore (plankton, small shrimp)",
        shapeSize: "Small, delicate",
        misc: "I use my leafy camouflage to blend in with seaweed.",
    },
    {
        name: "Capybara",
        class: "Mammal",
        region: "South America",
        diet: "Herbivore (grasses, aquatic plants)",
        shapeSize: "Largest rodent in the world",
        misc: "I'm a social animal and live in groups.",
    },
    {
        name: "Thorny Devil",
        class: "Reptile",
        region: "Australian deserts",
        diet: "Insectivore (ants)",
        shapeSize: "Small Lizard",
        misc: "My thorny spikes are for protection, and I can also 'drink' water through my skin. ",
    },
    {
        name: "Gerenuk",
        class: "Mammal",
        region: "Eastern Africa",
        diet: "Herbivore (leaves, shoots, flowers)",
        shapeSize: "Long-necked antelope",
        misc: "I can stand on my hind legs to reach high branches.",
    },
    {
        name: "Hercules Beetle",
        class: "Insect",
        region: "Central and South America",
        diet: "Herbivore (decaying fruit)",
        shapeSize: "One of the largest beetles",
        misc: "Males have large horns, and are incredibly strong for their size.",
    },
    {
        name: "Tarsier",
        class: "Mammal",
        region: "Southeast Asia",
        diet: "Insectivore",
        shapeSize: "Tiny primate",
        misc: "I have enormous eyes compared to my body size for nocturnal hunting.",
    },
    {
        name: "Fossa",
        class: "Mammal",
        region: "Madagascar",
        diet: "Carnivore (lemurs, reptiles, birds)",
        shapeSize: "Cat-like mongoose",
        misc: "I'm Madagascar's top predator.",
    },
    {
        name: "Fennec Fox",
        class: "Mammal",
        region: "Sahara Desert, North Africa",
        diet: "Omnivore (insects, rodents, plants)",
        shapeSize: "Small fox",
        misc: "My huge ears help radiate heat and listen for prey.",
    },
    {
        name: "Sea Angel",
        class: "Mollusk",
        region: "Cold ocean waters (Arctic, Antarctic)",
        diet: "Carnivore (sea butterflies – a type of plankton)",
        shapeSize: "Small, translucent slug",
        misc: "I swim by flapping my wing-like appendages.",
    },
    {
        name: "Slow Loris",
        class: "Mammal",
        region: "Southeast Asia",
        diet: "Omnivore (fruit, insects, tree gum)",
        shapeSize: "Small primate",
        misc: "I'm one of the few venomous mammals!",
    },
    {
        name: "Japanese Spider Crab",
        class: "Crustacean",
        region: "Deep waters off Japan",
        diet: "Scavenger (carcasses, shellfish)",
        shapeSize: "Largest arthropod by leg span",
        misc: "I can live for a very long time, potentially up to 100 years.",
    },
    {
        name: "Shoebill Stork",
        class: "Bird",
        region: "Eastern Africa",
        diet: "Carnivore (fish, frogs, reptiles)",
        shapeSize: "Large, imposing bird",
        misc: "My beak's shape is perfect for catching slippery prey.",
    },
    {
        name: "Hummingbird",
        class: "Bird",
        region: "The Americas",
        diet: "Nectarivore (flower nectar)",
        shapeSize: "Tiny, among the smallest birds",
        misc: "I can fly backwards and my wings beat incredibly fast!",
    },
    {
        name: "Alpaca",
        class: "Mammal",
        region: "South America (Andes mountains)",
        diet: "Herbivore (grasses)",
        shapeSize: "Smaller relative of the llama",
        misc: "I'm prized for my soft, luxurious fleece.",
    },
    {
        name: "Electric Eel",
        class: "Fish",
        region: "Amazon and Orinoco rivers, South America",
        diet: "Carnivore (fish, amphibians, small mammals)",
        shapeSize: "Long, slender fish",
        misc: "I'm not a true eel, and can generate powerful electric shocks.",
    },
    {
        name: "Komodo Dragon",
        class: "Reptile",
        region: "Indonesian islands",
        diet: "Carnivore (deer, carrion, occasionally humans)",
        shapeSize: "Largest lizard in the world",
        misc: "I have a venomous bite and a keen sense of smell.",
    },
    {
        name: "Goblin Shark",
        class: "Fish",
        region: "Deep ocean worldwide",
        diet: "Carnivore (fish, crustaceans)",
        shapeSize: "Flabby, pink shark",
        misc: "I have a bizarre, extendable jaw for snatching prey.",
    },
    {
        name: "Water Bear",
        class: "Microscopic Animal",
        region: "Worldwide, from moss to deep sea",
        diet: "Fluids from plants, algae, small invertebrates",
        shapeSize: "Tiny, segmented creatures",
        misc: "I'm an extremophile - I can survive almost anything!",
    },
    {
        name: "Kiwi",
        class: "Bird",
        region: "New Zealand",
        diet: "Omnivore (insects, worms, fruit)",
        shapeSize: "Small, flightless bird",
        misc: "I have nostrils at the end of my long beak.",
    },
    {
        name: "Sugar Glider",
        class: "Mammal",
        region: "Australia, Indonesia, New Guinea",
        diet: "Omnivore (sap, insects, small animals)",
        shapeSize: "Small, arboreal marsupial",
        misc: "I have flaps of skin to glide between trees.",
    },
    {
        name: "Mata Mata Turtle",
        class: "Reptile",
        region: "Amazon and Orinoco basins, South America",
        diet: "Carnivore (fish)",
        shapeSize: "Medium-sized",
        misc: "My shell and head look like leaves for camouflage.",
    },
    {
        name: "Mimic Octopus",
        class: "Mollusk",
        region: "Indo-Pacific Ocean",
        diet: "Carnivore (small fish, crabs, worms)",
        shapeSize: "Medium-sized",
        misc: "I can change color and shape to mimic other creatures!",
    },
    {
        name: "Echidna",
        class: "Mammal",
        region: "Australia and New Guinea",
        diet: "Insectivore (ants, termites)",
        shapeSize: "Spiny anteater",
        misc: "I'm a monotreme – a mammal that lays eggs.",
    },
    {
        name: "Naked Mole Rat",
        class: "Mammal",
        region: "Eastern Africa",
        diet: "Herbivore (tubers, roots)",
        shapeSize: "Small, burrowing rodent",
        misc: "I live in colonies like insects, and I'm almost hairless.",
    },
];

let currentAnimal;
let guessesRemaining = 5;
let currentHintIndex = 0;
let hintCategories = ["class", "region", "diet", "shapeSize", "misc"];
let hintCategoriesNames = ["Class", "Region", "Diet", "Shape/Size", "Bonus"];

function startGame() {
    currentAnimal = getRandomAnimal();

    const hintsTable = document.querySelector("#hints-container table tbody");
    hintCategoriesNames.forEach((category) => {
        let row = hintsTable.insertRow();
        let categoryCell = row.insertCell();
        let hintCell = row.insertCell();

        categoryCell.textContent = category.slice(0) + ": ";
        hintCell.textContent = ""; // Initially hide the hint
    });
    document.getElementById("remaining-guesses").textContent =
        "Remaining guesses: " + guessesRemaining;

    provideHint();
}

function getRandomAnimal() {
    const randomIndex = Math.floor(Math.random() * animalData.length);
    return animalData[randomIndex];
}

document.getElementById("submit-guess").addEventListener("click", handleGuess);

function handleGuess() {
    let guess = document.getElementById("animal-guess").value.toLowerCase();
    guessesRemaining--;

    if (guess.toLowerCase() === currentAnimal.name.toLowerCase()) {
        document.getElementById("result").textContent = "You win!";
        document.getElementById("result").classList.add("win-message");
        document.getElementById("submit-guess").disabled = true;
    } else {
        if (guessesRemaining === 0) {
            document.getElementById("result").textContent =
                "Game over! The animal was " + currentAnimal.name;
            document.getElementById("result").classList.add("lose-message");
            document.getElementById("submit-guess").disabled = true;
        } else {
            provideHint();
        }
    }

    document.getElementById("animal-guess").value = "";
    document.getElementById("remaining-guesses").textContent =
        "Remaining guesses: " + guessesRemaining;
}

function provideHint() {
    let hints = document
        .getElementById("hints-container")
        .querySelectorAll("tbody tr td:nth-child(2)");
    hints[currentHintIndex].textContent =
        currentAnimal[hintCategories[currentHintIndex]];

    currentHintIndex++;
    if (currentHintIndex >= hintCategories.length) {
        currentHintIndex = 0;
    }
}

startGame();
