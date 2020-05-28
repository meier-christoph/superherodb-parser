'use strict';

const BASE_URL = 'http://www.superherodb.com';
const SEARCH_URL = `${BASE_URL}/search_query.php?q=`;
const CHARACTERS_URL = `${BASE_URL}/characters/`;
const BIO_URL = `${BASE_URL}{{HERO_PATH}}`;
const POWERS_URL = `${BASE_URL}{{HERO_PATH}}powers/`;
const HISTORY_URL = `${BASE_URL}{{HERO_PATH}}history/`;

module.exports = {
  BASE_URL: BASE_URL,
  URLS: {
    bio: BIO_URL,
    powers: POWERS_URL,
    search: SEARCH_URL,
    characters: CHARACTERS_URL,
    history: HISTORY_URL,
  }
};
