/**
 * @typedef Party
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} date
 * @property {string} location
 */

// === Constants ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/";
const COHORT = "2412-FTB-ET-WEB-AM";
const RESOURCE = "/events"
const API = BASE + COHORT + RESOURCE;

// === State ===
let events = [];
let selectedEvent;

/** Updates state with all events from the API */
async function getEvents{
    try {
        const response = await fetch(API);
        const result = response.json();
        events = result.data;
        render();
    } catch (error) {
        console.error(error);
    }
}

/** Updates state with a single artist from the API */
async function getEvent(id) {
    try {
        
    }
}