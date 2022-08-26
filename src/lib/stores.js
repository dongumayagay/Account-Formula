import { writable } from "svelte/store";

// export const formulas = writable(getStoredItem("formulas", []));
export const formulas = writable(getStoredItem("formulas", []));
formulas.subscribe((value) =>
    localStorage.setItem("formulas", JSON.stringify(value))
);

function getStoredItem(itemName = "", fallbackValue) {
    const item_string = localStorage.getItem(itemName);
    if (item_string === null) return fallbackValue;
    return JSON.parse(item_string);
}

export const selectedFormula = writable();
