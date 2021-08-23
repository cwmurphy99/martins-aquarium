/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish, getSoldierFish, getUnworthyFish } from "./FishData.js";
import { Fish } from "./Fish.js";
import { getMostHolyFish } from "./FishData.js";


export const FishList = () => {
    const holyFishes = getMostHolyFish();
    addFishToDom(holyFishes);
    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish);
    const unworthyFish = getUnworthyFish();
    addFishToDom(unworthyFish);
}

const addFishToDom = (arrayOfFish) => {
    const contentElement = document.querySelector(".fishList");
    let fishHTMLRepresentation = "";

    for (const oneFishObject of arrayOfFish) {
        fishHTMLRepresentation += Fish(oneFishObject);
    }
    contentElement.innerHTML += fishHTMLRepresentation
}