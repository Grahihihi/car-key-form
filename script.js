// Car Model Data
const carModels = {
    honda: ["Civic", "Accord", "CR-V"],
    toyota: ["Corolla", "Camry", "RAV4"],
    ford: ["Focus", "Fusion", "Escape"]
};

// Car Year Data
const carYears = {
    Civic: [2020, 2019, 2018],
    Accord: [2020, 2019, 2018],
    CRV: [2020, 2019, 2018],
    Corolla: [2020, 2019, 2018],
    Camry: [2020, 2019, 2018],
    RAV4: [2020, 2019, 2018],
    Focus: [2020, 2019, 2018],
    Fusion: [2020, 2019, 2018],
    Escape: [2020, 2019, 2018]
};

// Repair Price Data
const repairPrices = {
    "2020": 120,
    "2019": 100,
    "2018": 80
};

// Key Type Prices
const keyPrices = {
    spare: 118,
    remote: 88,
    full: 218 // (118 + 100)
};

// Update Car Models based on Brand Selection
function updateModels() {
    let brand = document.getElementById("carBrand").value;
    let modelDropdown = document.getElementById("carModel");

    if (!brand) {
        document.getElementById("modelDiv").classList.add("hidden");
        document.getElementById("yearDiv").classList.add("hidden");
        document.getElementById("keyTypeDiv").classList.add("hidden");
        document.getElementById("priceOutput").classList.add("hidden");
        return;
    }

    modelDropdown.innerHTML = `<option value="">-- Select Model --</option>`;
    carModels[brand].forEach(model => {
        modelDropdown.innerHTML += `<option value="${model}">${model}</option>`;
    });

    document.getElementById("modelDiv").classList.remove("hidden");
    document.getElementById("yearDiv").classList.add("hidden");
    document.getElementById("keyTypeDiv").classList.add("hidden");
    document.getElementById("priceOutput").classList.add("hidden");
}

// Update Car Years based on Model Selection
function updateYears() {
    let model = document.getElementById("carModel").value;
    let yearDropdown = document.getElementById("carYear");

    if (!model) {
        document.getElementById("yearDiv").classList.add("hidden");
        document.getElementById("keyTypeDiv").classList.add("hidden");
        document.getElementById("priceOutput").classList.add("hidden");
        return;
    }

    yearDropdown.innerHTML = `<option value="">-- Select Year --</option>`;
    carYears[model].forEach(year => {
        yearDropdown.innerHTML += `<option value="${year}">${year}</option>`;
    });

    document.getElementById("yearDiv").classList.remove("hidden");
    document.getElementById("keyTypeDiv").classList.add("hidden");
    document.getElementById("priceOutput").classList.add("hidden");
}

// Show Key Type Selection
function updateKeyType() {
    let year = document.getElementById("carYear").value;

    if (!year) {
        document.getElementById("keyTypeDiv").classList.add("hidden");
        document.getElementById("priceOutput").classList.add("hidden");
        return;
    }

    document.getElementById("keyTypeDiv").classList.remove("hidden");
    document.getElementById("priceOutput").classList.add("hidden");
}

// Calculate Price based on Selection
function calculatePrice() {
    let year = document.getElementById("carYear").value;
    let keyType = document.getElementById("keyType").value;

    if (!year || !keyType) {
        document.getElementById("priceOutput").classList.add("hidden");
        return;
    }

    let yearPrice = repairPrices[year] || 0;
    let keyPrice = keyPrices[keyType] || 0;
    let totalPrice = yearPrice + keyPrice;

    document.getElementById("price").innerText = `$${totalPrice}`;
    document.getElementById("priceOutput").classList.remove("hidden");
}