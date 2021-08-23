import {tip} from "./Tip.js"
import {getTips} from "./TipData.js"

export const tipsList = () => {
const contentElement = document.querySelector(".tipsList")

const justTips = getTips()

let tipsHTML = "";

for (const oneTip of justTips){
    tipsHTML += tip(oneTip);
}

contentElement.innerHTML += `${tipsHTML}`
}