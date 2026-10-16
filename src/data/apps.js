// File: client/src/data/apps.js
// ---------------------------------------------------------------
// Project data for the Apps page. Keeping content in a plain
// data file (instead of hard-coding it in JSX) means adding a
// new project is just adding one object to this array.
// ---------------------------------------------------------------
const apps = [
  {
    id: 'civicid',                      // Unique key (also usable in URLs)
    title: 'CivicID',
    summary: 'Government identity management backend.',
    tech: ['Java', 'Spring Boot'],      // Shown as tags on the card
    image: null,                        // Screenshot path, added later
    github: '',                         // Repo link
    live: '',                           // Live demo link, if any
  },
  // Add more projects here...
]

export default apps
