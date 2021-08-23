/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

export const getFish = () => {
    return fishCollection
}

export const getMostHolyFish = () => {
    const holyFishArray = []
    //3, 6, 9, 12, etc...fish
    for (const fishTaco of fishCollection) {
        if (fishTaco.length % 3 === 0) {
            holyFishArray.push(fishTaco);
        }

    }

    return holyFishArray;
}

export const getSoldierFish = () => {
    const soldierFishArray = [];
    //5, 10, 15, 20, etc...fish
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 === 0) {
            soldierFishArray.push(fishObj);
        }
    }

    return soldierFishArray;
}

export const getUnworthyFish = () => {
    const unworthyFishArray = [];
    // Any fish not a multiple of 3 or 5
    for (const fishGills of fishCollection) {
        if (fishGills.length % 5 !== 0 || fishGills.length % 3 !== 0) {
            unworthyFishArray.push(fishGills);
        }
    }
    return unworthyFishArray
}





const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        image: "bluefish.jpg",
        species: "Trigger",
        length: 7,
        waterType: "Salt",
        harvestLocation: "Costa Rica"
    },
    {
        name: "Mr Freeze",
        food: "Meal Worms",
        image: "cat.jpg",
        species: "Tang",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Florida"
    },
    {
        name: "Nemo",
        food: "Goldfish",
        image: "clownFish.jpg",
        species: "Clown",
        length: 17,
        waterType: "Salt-water",
        harvestLocation: "Florida"
    },
    {
        name: "Don Julio",
        food: "snails",
        image: "dopeyfish.jpg",
        species: "Stingray",
        length: 9,
        waterType: "Salt",
        harvestLocation: "Dominican Republic"
    },
    {
        name: "Karen",
        food: "Algae",
        image: "Gold.jpg",
        species: "Siamese algae eater",
        length: 5,
        waterType: "salt",
        harvestLocation: "Puerto Rico"
    },
    {
        name: "Robin Gilliams",
        food: "Bee Moths",
        image: "robinGilliams.jpg",
        species: "Clownfish",
        length: 2,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Bruce",
        food: "not fish",
        image: "bruce.jpg",
        species: "greatWhite",
        length: 130,
        waterType: "salt",
        harvestLocation: "Sydney"
    },
    {
        name: "Bloat",
        food: "shrimp",
        image: "ultraBlack.jpg",
        species: "Blow Fish",
        length: 11,
        waterType: "Salt",
        harvestLocation: "Mexico"
    },
    {
        name: "Gordon",
        food: "Krill",
        image: "puffer.jpg",
        species: "Blowfish",
        length: 3,
        waterType: "Salt",
        harvestLocation: "Asia"
    },
    {
        name: "Jack",
        food: "other fish",
        image: "stripedJellyfish.jpg",
        species: "Striped Jellyfish",
        length: 36,
        waterType: "Salt",
        harvestLocation: "Tennessee"
    },
    {
        name: "Jeremy",
        food: "crustacean",
        image: "Triggerfish.jpg",
        species: "Trigger",
        length: 13,
        waterType: "Salt",
        harvestLocation: "Hawaii"
    },
    {
        name: "Jeremy Bearimy",
        food: "Lucky Charms",
        image: "pinkfish.jpeg",
        species: "Something Bright",
        length: 15,
        waterType: "Fresh",
        harvestLocation: "Kentucky"
    }
]


