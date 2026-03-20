// Array of all pets
const pets = [
    {
        name: "Lobito",
        type: "dog",
        breed: "German Shepherd",
        age: "3 months",
        size: "large",
        gender: "male",
        img: "images/IMG_5946.jpg",
        key: "lobito"
    },
    {
        name: "Kiara",
        type: "dog",
        breed: "Pitbull",
        age: "6 months",
        size: "medium",
        gender: "female",
        img: "images/IMG_5085.jpg",
        key: "kiara"
    },
    {
        name: "Sia",
        type: "dog",
        breed: "Pitbull",
        age: "2 weeks",
        size: "small",
        gender: "female",
        img: "images/IMG_6186.JPG",
        key: "sia"
    },
    {
        name: "Max",
        type: "dog",
        breed: "Poodle mix",
        age: "3 years",
        size: "medium",
        gender: "male",
        img: "images/dog.jpeg",
        key: "max"
    },
    {
        name: "Butter",
        type: "cat",
        breed: "Domestic shorthair",
        age: "3 months old",
        size: "small",
        gender: "female",
        img: "https://www.pawlicy.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fub3bwfd53mwy%2F3e2qvEeDXw8LyeV6616BRn%2Fe05ec9671046d082bb1623c893482be5%2FOrange_cat_sleeping.png&w=1200&q=75",
        key: "butter"
    },
    {
        name: "Kira",
        type: "cat",
        breed: "Domestic shorthair",
        age: "6 months old",
        size: "small",
        gender: "female",
        img: "https://images.unsplash.com/photo-1602418013963-c1f017b3bb63?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fHww",
        key: "kira"
    },
    {
        name: "Susy",
        type: "cat",
        breed: "Domestic shorthair",
        age: "18 months",
        size: "small",
        gender: "female",
        img: "https://www.wondercide.com/cdn/shop/articles/Upside_down_gray_cat.png?v=1685551065",
        key: "susy"
    },
    {
        name: "Ken",
        type: "cat",
        breed: "Husky",
        age: "4 years old",
        size: "medium",
        gender: "female",
        img: "https://www.perfect-fit.co.uk/cdn-cgi/image/height=617,f=auto,quality=90/sites/g/files/fnmzdf6431/files/2024-10/selective-focus-closeup-shot-gray-furry-tabby-cat-sitting-wooden-chair_181624-8432_1686748977273.png",
        key: "ken"
    },
    {
        name: "Ellie",
        type: "guineapig",
        breed: "Teddy Guinea pigsky",
        age: "2 years old",
        size: "medium",
        gender: "female",
        img: "data:image/jpeg;base64,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",
        key: "ellie"
    }
];

// Function to render pets into the grid
function renderPets(petArray) {
    const grid = document.querySelector(".pet-grid");
    grid.innerHTML = ""; // Clear current content

    if (petArray.length === 0) {
        grid.innerHTML = "<p>No pets match the filter.</p>";
        return;
    }

    petArray.forEach(pet => {
        const card = document.createElement("div");
        card.classList.add("pet-card");

        card.innerHTML = `
            <img src="${pet.img}" alt="${pet.name}" width="200">
            <h3>${pet.name}</h3>
            <p><b>Breed:</b> ${pet.breed}</p>
            <p><b>Age:</b> ${pet.age}</p>
            <p><b>Size:</b> ${pet.size}</p>
            <p><b>Gender:</b> ${pet.gender}</p>
            <a href="petsProfile.html?type=${pet.type}&key=${pet.key}" class="adopt-btn">View Details</a>
        `;

        grid.appendChild(card);
    });
}

// Function to filter pets based on selected inputs
function filterPets() {
    const type = document.querySelector('input[name="type"]:checked')?.value;
    const size = document.querySelector('input[name="size"]:checked')?.value;

    let filtered = pets;

    if (type) filtered = filtered.filter(p => p.type === type);
    if (size) filtered = filtered.filter(p => p.size === size);

    renderPets(filtered);
}

// Event listeners for radio buttons
const filters = document.querySelectorAll('input[name="type"], input[name="size"]');
filters.forEach(input => input.addEventListener("change", filterPets));

// ----------- NEW PART: auto-filter based on URL ----------- //
const params = new URLSearchParams(window.location.search);
const typeFromURL = params.get("type"); // e.g., "dog" or "cat"

if (typeFromURL) {
    // Check the correct radio button if it exists
    const radio = document.querySelector(`input[name="type"][value="${typeFromURL}"]`);
    if (radio) radio.checked = true;

    // Filter pets automatically
    filterPets();
} else {
    // No type in URL? Show all pets
    renderPets(pets);
}