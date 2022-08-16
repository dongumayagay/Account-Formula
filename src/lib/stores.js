import { writable } from "svelte/store";

// const storedFormulas = JSON.parse(localStorage.getItem("formulas")) || [1, 2];
// export const formulas = writable(storedFormulas);
// formulas.subscribe((value) => {
//     // localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
//     console.log("should store");
// });

// export const name = writable(localStorage.getItem("name") || "Don Gumayagay");
// name.subscribe((value) => localStorage.setItem("name", value));

// const storedFormulas = localStorage.getItem || [];
export const formulas = writable(getStoredItem("formulas", []));
formulas.subscribe((value) =>
    localStorage.setItem("formulas", JSON.stringify(value))
);

function getStoredItem(itemName = "", fallbackValue) {
    const item_string = localStorage.getItem(itemName);
    if (item_string === null) return fallbackValue;
    return JSON.parse(item_string);
}
