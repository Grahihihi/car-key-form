const brandToModels = {
    "Abarth": ["124 Spider", "500 Series", "595", "695"],
    "Alfa Romeo": ["147", "156", "159", "166", "Brera", "GT", "Giulia", "Giulietta", "MiTo", "Spider", "Stelvio"],
    "Audi": ["A1", "A3", "A4", "A5", "A6", "A8", "Q2", "Q3", "Q5", "Q7", "TT"],
    "BMW": ["1 Series", "3 Series", "5 Series", "6 Series", "7 Series", "Early EWS Models", "X1", "X2", "X3", "X4", "X5", "X6", "X7"],
    "BYD": ["ATTO 3", "Dolphin", "E6", "Seal", "Sealion 6", "Shark 6", "T3"],
    "Chery": ["J1", "J3", "J11", "OMODA 5", "Tiggo 7 Pro"],
    "Chevrolet": ["Silverado", "Camaro", "Corvette"],
    "Chrysler": ["300 Series", "Crossfire", "Grand Voyager", "PT Cruiser", "Sebring", "Voyager"],
    "Citroen": ["Berlingo", "C2", "C3", "C4", "C5", "C6", "Dispatch", "DS3", "DS4", "DS5", "Xantia", "Xsara"],
    "Cupra": ["Ateca", "Born", "Formentor", "Leon"],
    "Daewoo": ["Cielo", "Kalos", "Lacetti", "Lanos", "Leganza", "Matiz", "Musso", "Nubira", "Tacuma"],
    "Daihatsu": ["Charade", "Copen", "Cuore", "Sirion", "Terios", "YRV"],
    "Dodge": ["Avenger", "Caliber", "Journey", "Nitro", "Ram (For 2013 -> See Make \"Ram\")"],
    "Fiat": ["500 Series", "Doblo", "Ducato", "Freemont", "Panda", "Punto", "Ritmo", "Scudo"],
    "Ford": ["Cougar", "Courier", "Ecosport", "Escape", "Endura", "Explorer", "Everest", "Falcon" ,"Fairmont" , "Fairlane", "Fiesta", "Focus", "Laser", "Kuga", "Mondeo", "Mustang", "Probe", "Ranger", "Taurus", "Territory", "Transit", "KA", "Puma", "F-150", "F-250", "F-350"],
    "Foton": ["Sauvana", "Tunland"],
    "Genesis": ["G70", "G80", "GV60", "GV70", "GV80"],
    "GM Holden": ["Adventura", "Acadia", "Astra", "Barina", "Calibra", "Caprice", "Captiva", "Cascada", "Colorado", "Combo", "Commodore / Calais", "Cruze", "Epica", "Equinox", "Frontera", "Jackaroo", "Malibu", "Monaro", "Rodeo", "Spark", "Tigra", "Trailblazer", "Trax", "Vectra", "Viva", "Volt", "Zafira"],
    "Great Wall": ["V200", "V240", "X200", "X240", "Steed"],
    "GWM": ["Haval", "Ora", "Steed", "Tank", "Ute Cannon"],
    "Haval": ["H2", "H6", "H8", "H9", "Jolion"],
    "Hino Trucks": ["300 - 500 Series"],
    "Honda": ["Accord", "Accord Euro", "City", "Civic", "CR-V", "CR-X", "CRZ", "HR-V", "Insight", "Integra", "Jazz", "Legend", "MDX", "NSX", "Odyssey", "Prelude", "S2000", "ZR-V"],
    "Hummer": ["H3"],
    "Hyundai": ["Accent", "Coupe'", "Elantra", "Genesis", "Getz", "Grandeur", "i20", "i30", "i40", "i45", "ix35", "iload", "iMax", "Kona", "Lavita", "Santa Fe", "Sonata", "Terracan", "Tiburon", "Trajet", "Tucson", "Veloster", "Venue", "Staria", "Ioniq", "Palisade"],
    "Ineos": ["Grenadier"],
    "Infiniti": ["FX", "G", "M", "Q", "QX"],
    "Isuzu": ["MU-X", "D-Max"],
    "Isuzu Trucks": ["N Series"],
    "Iveco": ["Daily"],
    "JAC": ["T9 Ute"],
    "Jaguar": ["XE", "XF", "XJ / XJR", "XK / XKR", "I-Pace", "E-Pace", "X-Type", "F-Type", "F-Pace", "S-Type"],
    "Jeep": ["Cherokee", "Commander", "Compass", "Grand Cherokee", "Patriot", "Wrangler", "Gladiator", "Renegade"],
    "Kia": ["Carnival", "Cerato", "Credos", "Grand Carnival", "Magentis", "Optima", "Picanto", "Rio", "Rondo", "Sorento", "Soul", "Spectra", "Sportage", "Stinger", "Pro_cee'd", "Niro", "Seltos", "Stonic", "EV6", "EV9", "EV5", "K4"],
    "Land Rover": ["Discovery", "Freelander", "Range Rover Sport", "Range Rover Vogue", "Range Rover Evoque", "Defender", "Range Rover Velar"],
    "LDV": ["D90", "G10", "MIFA", "T60", "V80", "Deliver 9"],
    "Lexus": ["GS", "IS", "LS", "LX", "RX", "SC", "ES", "CT", "LC", "NX", "RC", "RZ", "UX", "GX", "LBX", "LM"],
    "Mahindra": ["Genio", "PIK-UP", "Scorpio", "XUV500", "XUV700"],
    "Maserati": ["Ghibli", "Levante", "Quattroporte"],
    "Mazda": ["2", "3", "6", "BT-50", "CX-3", "CX-5", "CX-8", "CX-9", "Eunos 500", "Eunos 800", "MX-5", "Tribute", "323", "626", "Bravo", "CX-7", "CX-30", "MPV LW", "Premacy", "RX-8 FE", "MX-30", "CX-60", "CX-70", "CX-90"],
    "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "CL-Class", "CLA-Class", "CLK-Class", "CLS-Class", "E-Class", "G-Class / G-Wagon", "GL-Class", "GLA-Class", "M-Class", "R-Class", "S-Class", "SL-Class", "SLK-Class", "Vito", "SLS-Class", "Sprinter", "Viano", "Early FBS2 Models", "X-Class", "CLE-Class", "EQ", "GLB-Class", "GLC-Class", "GLE-Class", "GLS-Class", "SLC-Class", "V-Class", "CLC-Class"],
    "MG Motors": ["GS", "HS", "MG3", "MG4", "MG5", "MG6", "ZS"],
    "Mini Cooper": ["Cabrio / Convertible", "Clubman", "Cooper Hatch", "Countryman", "Coupe", "Paceman", "Roadster"],
    "Mitsubishi": ["380", "ASX", "Challenger", "Eclipse Cross", "Express", "Grandis", "Lancer", "Magna / Verada", "Mirage", "Nimbus", "Outlander", "Pajero", "Starwagon", "Triton", "Colt", "Delica", "Pajero Sport"],
    "Mitsubishi Trucks": ["Fuso / Canter"],
    "Nissan": ["Dualis", "Elgrand", "Juke", "Leaf", "Maxima", "Micra", "Murano", "Navara", "Pathfinder", "Patrol", "Pulsar", "Qashqai", "Tiida", "X-Trail", "200SX", "350Z", "370Z", "Almera", "Altima", "Cube", "GT-R"],
    "Opel": ["Astra J", "Insignia", "Corsa", "Zafira C"],
    "Peugeot": ["206", "2008", "208", "306", "307", "3008", "4007", "4008", "407", "5008", "508", "607", "Expert", "Partner", "RCZ", "207", "308", "Boxer"],
    "Polestar": ["2", "3", "4"],
    "Proton": ["Gen-2", "Jumbuck", "Persona", "Satria", "Savvy", "S16", "Exora", "Preve", "Suprima S"],
    "Ram": ["1500 / 2500 / 3500", "1500 Classic"],
    "Renault": ["Captur", "Clio", "Fluence", "Grand Scenic", "Kangoo", "Koleos", "Laguna", "Latitude", "Master", "Megane", "Scenic", "Trafic", "Kadjar", "Arkana"],
    "Saab": ["9-5", "9-3"],
    "Skoda": ["Fabia", "Octavia", "Rapid", "Roomster", "Superb", "Yeti", "Kamiq", "Karoq", "Kodiaq", "Scala"],
    "Smart": ["ForTwo", "ForFour", "Roadster"],
    "Ssangyong": ["Actyon", "Kyron", "Rexton", "Stavic", "Tivoli", "Korando", "Musso"],
    "Subaru": ["BRZ", "Forester", "Impreza", "Levorg", "Liberty", "Outback", "Tribeca", "WRX", "XV", "Crosstrek", "Solterra"],
    "Suzuki": ["Alto", "Baleno", "Celerio", "Grand Vitara", "Ignis", "Jimny", "Kizashi", "Liana", "Swift", "S-Cross", "SX4", "Vitara"],
    "Tesla": ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"],
    "Toyota": ["86", "Aurion", "Avalon", "Avensis", "Camry", "Celica", "CH-R", "Corolla", "Cressida", "Echo", "Estima", "Fortuner", "Hilux", "Kluger", "Land Cruiser", "MR2", "Paseo", "Prado", "Previa", "Prius", "RAV4", "Starlet", "Supra", "Tarago", "Townace", "Vienta", "Yaris", "HiAce", "GR86"],
    "Volkswagen": ["Amarok", "Arteon", "Beetle", "Bora", "Caddy", "Caravelle", "Crafter", "EOS", "Golf", "Jetta", "Passat", "Polo", "Scirocco", "T-Cross", "T-Roc", "Tiguan", "Touareg", "Transporter", "Up!"],
    "Volvo": ["C30", "C70", "S40", "S60", "S80", "V40", "V50", "V60", "V70", "XC40", "XC60", "XC70", "XC90"]
  };
  
// Spare-only car list (no prices, just matching conditions)
const spareOnlyList = [
    { make: "GM Holden", model: "Barina", years: [2005, 2012] },
    { make: "GM HOLDEN", model: "COLORADO", years: [2008, 2013] },
    { make: "Honda", model: "Accord", years: [2009, 2009] },
    { make: "Hyundai", model: "ACCENT", years: [2007, 2007] },
    { make: "LDV", model: "G10", years: [2021, 2021] },
    { make: "Nissan", model: "Dualis", years: [2012, 2012] },
    { make: "Subaru", model: "Forester", years: [2012, 2018] }
  ];

// Flip Key + Spare Key Models List (only conditions, price based on year ranges)
const flipKeyModels = [
    { make: "Dodge", model: "Journey" },
    { make: "Dodge", model: "Nitro" },
    { make: "Ford", model: "Ecosport" },
    { make: "Ford", model: "Escape" },
    { make: "Ford", model: "Falcon" },
    { make: "Ford", model: "Fiesta" },
    { make: "Ford", model: "Focus" },
    { make: "Ford", model: "Mondeo" },
    { make: "Ford", model: "Ranger" },
    { make: "Ford", model: "Ranger pj" },
    { make: "Ford", model: "Terrioty"},
    { make: "Ford", model: "Territory" },
    { make: "Ford", model: "Transit" },
    { make: "Ford", model: "Transit custom" },
    { make: "Holden", model: "Astra" },
    { make: "Holden", model: "Barina" },
    { make: "Holden", model: "Barina spark" },
    { make: "Holden", model: "Captiva" },
    { make: "Holden", model: "Colorado" },
    { make: "Holden", model: "Cruze" },
    { make: "Holden", model: "Trax" },
    { make: "Holden", model: "Ve commodore" },
    { make: "Holden", model: "Vf (non prox)" },
    { make: "Holden", model: "Vf (prox)" },
    { make: "Honda", model: "Accord" },
    { make: "Honda", model: "Accord euro" },
    { make: "Honda", model: "City" },
    { make: "Honda", model: "Civic" },
    { make: "Honda", model: "Cr-v" },
    { make: "Honda", model: "Crv" },
    { make: "Honda", model: "Interga" },
    { make: "Honda", model: "Jazz" },
    { make: "Honda", model: "Odyssey" },
    { make: "Hyundai", model: "Accent" },
    { make: "Hyundai", model: "Elantra" },
    { make: "Hyundai", model: "Getz" },
    { make: "Hyundai", model: "I max"},
    { make: "Hyundai", model: "I20" },
    { make: "Hyundai", model: "I30" },
    { make: "Hyundai", model: "I40" },
    { make: "Hyundai", model: "I45" },
    { make: "Hyundai", model: "Iload" },
    { make: "Hyundai", model: "Imax" },
    { make: "Hyundai", model: "Ix35" },
    { make: "Hyundai", model: "Kona" },
    { make: "Hyundai", model: "Santa fe" },
    { make: "Hyundai", model: "Sportage" },
    { make: "Hyundai", model: "Trajet" },
    { make: "Isuzu", model: "Mu-x" },
    { make: "Jeep", model: "Compass" },
    { make: "Jeep", model: "Grand cherokee" },
    { make: "Jeep", model: "Wrangler" },
    { make: "Kia", model: "Carnival" },
    { make: "Kia", model: "Cerato" },
    { make: "Kia", model: "Optima" },
    { make: "Kia", model: "Rio" },
    { make: "Kia", model: "Sorento" },
    { make: "Kia", model: "Soul" },
    { make: "Kia", model: "Sportage" },
    { make: "Kia", model: "Stonic" },
    { make: "Landrover", model: "Discovery 3" },
    { make: "Landrover", model: "Rroversport" },
    { make: "Lexus", model: "Rx330" },
    { make: "Mazda", model: "2" },
    { make: "Mazda", model: "3" },
    { make: "Mazda", model: "6" },
    { make: "Mazda", model: "Cx8" },
    { make: "Mazda", model: "Cx9" },
    { make: "Mg", model: "Mg3" },
    { make: "Mitsubishi", model: "380" },
    { make: "Mitsubishi", model: "Asx" },
    { make: "Mitsubishi", model: "Colt" },
    { make: "Mitsubishi", model: "Evo 8" },
    { make: "Mitsubishi", model: "Lancer" },
    { make: "Mitsubishi", model: "Magna" },
    { make: "Mitsubishi", model: "Mirage" },
    { make: "Mitsubishi", model: "Outlander" },
    { make: "Mitsubishi", model: "Pajero" },
    { make: "Mitsubishi", model: "Triton" },
    { make: "Nissan", model: "Almera" },
    { make: "Nissan", model: "Dualis" },
    { make: "Nissan", model: "Juke" },
    { make: "Nissan", model: "Micra" },
    { make: "Nissan", model: "Navara d22 np300" },
    { make: "Nissan", model: "Navara d40" },
    { make: "Nissan", model: "Navara/np300" },
    { make: "Nissan", model: "Patrol" },
    { make: "Nissan", model: "Pulsar" },
    { make: "Nissan", model: "Tiida" },
    { make: "Opal", model: "Astra j" },
    { make: "Peugeot", model: "308" },
    { make: "Renault", model: "Kangoo ii" },
    { make: "Skoda", model: "Fabia" },
    { make: "Subaru", model: "Forester" },
    { make: "Subaru", model: "Impreza" },
    { make: "Subaru", model: "Liberty" },
    { make: "Suzuki", model: "Alto" },
    { make: "Suzuki", model: "Baleno" },
    { make: "Suzuki", model: "Celerio" },
    { make: "Suzuki", model: "Grand vitara" },
    { make: "Suzuki", model: "Swift" },
    { make: "Suzuki", model: "Vitara" },
    { make: "Toyota", model: "Aurion" },
    { make: "Toyota", model: "Camry" },
    { make: "Toyota", model: "Celicia" },
    { make: "Toyota", model: "Corolla" },
    { make: "Toyota", model: "Echo" },
    { make: "Toyota", model: "Estima" },
    { make: "Toyota", model: "Hiace" },
    { make: "Toyota", model: "Hiace dx (import)" },
    { make: "Toyota", model: "Hiace import japan" },
    { make: "Toyota", model: "Hilux" },
    { make: "Toyota", model: "Kluger" },
    { make: "Toyota", model: "Prado" },
    { make: "Toyota", model: "Rav4" },
    { make: "Toyota", model: "Tarago" },
    { make: "Toyota", model: "Yaris" },
    { make: "Volkswagen", model: "Bora" },
    { make: "Volkswagen", model: "Eos" },
    { make: "Volkswagen", model: "Golf" },
    { make: "Volkswagen", model: "Golf 5" },
    { make: "Volkswagen", model: "Golf 6" },
    { make: "Volkswagen", model: "Polo" },
    { make: "Volkswagen", model: "Tiguan" }
  ];
  
  
  
  // ========== PRICING FUNCTIONS ==========
function getSpareKeyPrice(year) {
    if (year >= 2018 && year <= 2024) return 188.85;
    if (year >= 2015 && year <= 2017) return 158.85;
    if (year >= 2011 && year <= 2014) return 128.85;
    if (year >= 2007 && year <= 2010) return 118.85;
    if (year >= 1995 && year <= 2006) return 98.85;
    return null;
  }
  
  function getFlipKeyPrice(year) {
    if (year >= 2021 && year <= 2024) return 388.85;
    if (year >= 2018 && year <= 2020) return 328.85;
    if (year >= 2015 && year <= 2017) return 278.85;
    if (year >= 2011 && year <= 2014) return 228.85;
    if (year >= 2008 && year <= 2011) return 218.85;
    if (year >= 1995 && year <= 2007) return 198.85;
    return null;
  }
  
  // ========== DROPDOWN POPULATION ==========
  window.onload = function () {
    const brandDropdown = document.getElementById("carBrand");
    brandDropdown.innerHTML = '<option value="">-- Select Brand --</option>';
    Object.keys(brandToModels).sort().forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandDropdown.appendChild(option);
    });
  };
  
  function updateModels() {
    const brand = document.getElementById("carBrand").value;
    const modelDropdown = document.getElementById("carModel");
    modelDropdown.innerHTML = '<option value="">-- Select Model --</option>';
  
    if (brandToModels[brand]) {
      brandToModels[brand].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelDropdown.appendChild(option);
      });
  
      document.getElementById("modelDiv").classList.remove("hidden");
      document.getElementById("yearDiv").classList.add("hidden");
      hideAllOutputs();
    }
  }
  
  function populateYearDropdown() {
    const yearDropdown = document.getElementById("carYear");
    yearDropdown.innerHTML = '<option value="">-- Select Year --</option>';
    for (let y = 1995; y <= 2025; y++) {
      const option = document.createElement("option");
      option.value = y;
      option.textContent = y;
      yearDropdown.appendChild(option);
    }
  }
  
  function showYearInput() {
    populateYearDropdown();
    document.getElementById("yearDiv").classList.remove("hidden");
    hideAllOutputs();
  }
  
  // ========== PRICE CALCULATION ==========
  function calculatePrice() {
    const brand = document.getElementById("carBrand").value.trim();
    const model = document.getElementById("carModel").value.trim();
    const year = parseInt(document.getElementById("carYear").value);
  
    if (!brand || !model || !year) {
      hideAllOutputs();
      return;
    }
  
    const isSpareOnly = spareOnlyList.some(entry =>
      entry.make.toLowerCase() === brand.toLowerCase() &&
      entry.model.toLowerCase() === model.toLowerCase() &&
      year >= entry.years[0] && year <= entry.years[1]
    );
  
    const isFlipKeyEligible = flipKeyModels.some(entry =>
      entry.make.toLowerCase() === brand.toLowerCase() &&
      entry.model.toLowerCase() === model.toLowerCase()
    );
  
    const sparePrice = getSpareKeyPrice(year);
    const flipPrice = getFlipKeyPrice(year);
  
    hideAllOutputs();
  
    if (isSpareOnly && sparePrice !== null) {
      document.getElementById("priceSpareOnly").innerText = `$${sparePrice.toFixed(2)}`;
      document.getElementById("priceOutputSpareOnly").classList.remove("hidden");
    } else if (isFlipKeyEligible && sparePrice !== null && flipPrice !== null) {
      document.getElementById("priceSpare").innerText = `$${sparePrice.toFixed(2)}`;
      document.getElementById("priceFlip").innerText = `$${flipPrice.toFixed(2)}`;
      document.getElementById("priceOutputFlipKey").classList.remove("hidden");
    } else {
      document.getElementById("priceOutputNotAvailable").classList.remove("hidden");
    }
  }
  
  function hideAllOutputs() {
    document.getElementById("priceOutputSpareOnly").classList.add("hidden");
    document.getElementById("priceOutputFlipKey").classList.add("hidden");
    document.getElementById("priceOutputNotAvailable").classList.add("hidden");
  }
  
