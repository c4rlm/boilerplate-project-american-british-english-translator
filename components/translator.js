const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
      constructor() {
    this.americanToBritishSpelling = americanToBritishSpelling;
    this.britishToAmericanSpelling = this.invertDictionary(americanToBritishSpelling);
    this.americanToBritishTitles = americanToBritishTitles;
    this.britishToAmericanTitles = this.invertDictionary(americanToBritishTitles);
    this.americanOnly = americanOnly;
    this.britishOnly = britishOnly;
  }

  invertDictionary(obj) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[obj[key]] = key;
      return acc;
    }, {});
  }

  translate(text, locale) {
    let translation = text;

    if (locale === 'american-to-british') {
      translation = this.translateToBritish(text);
    } else if (locale === 'british-to-american') {
      translation = this.translateToAmerican(text);
    }

    if (translation === text) {
      return 'Everything looks good to me!';
    }

    return translation;
  }

  translateToBritish(text) {
    let translation = text;

    // Translate American-only terms
    for (let term in this.americanOnly) {
      let regex = new RegExp(`\\b${term}\\b`, 'gi');
      translation = translation.replace(regex, `<span class="highlight">${this.americanOnly[term]}</span>`);
    }

    // Translate American spellings to British spellings
    for (let term in this.americanToBritishSpelling) {
      let regex = new RegExp(`\\b${term}\\b`, 'gi');
      translation = translation.replace(regex, `<span class="highlight">${this.americanToBritishSpelling[term]}</span>`);
    }

    // Translate American titles to British titles
    for (let term in this.americanToBritishTitles) {
      if (translation.toLowerCase().includes(term+' ')) {
        let regex = new RegExp(`\\b${term}`, 'gi');
        translation = translation.replace(regex, `<span class="highlight">${this.capitalizeFirstLetter(this.americanToBritishTitles[term])}</span>`);       
      }
    }
    // Translate American time format to British time format
    translation = translation.replace(/\b(\d{1,2}):(\d{2})\b/g, '<span class="highlight">$1.$2</span>');

    return translation;
  }

  translateToAmerican(text) {
    let translation = text;

    // Translate British-only terms
    for (let term in this.britishOnly) {
      let regex = new RegExp(`\\b${term}\\b`, 'gi');
      translation = translation.replace(regex, `<span class="highlight">${this.britishOnly[term]}</span>`);
    }

    // Translate British spellings to American spellings
    for (let term in this.britishToAmericanSpelling) {
      let regex = new RegExp(`\\b${term}\\b`, 'gi');
      translation = translation.replace(regex, `<span class="highlight">${this.britishToAmericanSpelling[term]}</span>`);
    }

    // Translate British titles to American titles
    for (let term in this.britishToAmericanTitles) {
      if (!translation.toLowerCase().includes(term+'.')) {
        let regex = new RegExp(`\\b${term}\\b`, 'gi');
        translation = translation.replace(regex, `<span class="highlight">${this.capitalizeFirstLetter(this.britishToAmericanTitles[term])}</span>`);
      }
    }

    // Translate British time format to American time format
    translation = translation.replace(/\b(\d{1,2})\.(\d{2})\b/g, '<span class="highlight">$1:$2</span>');


    return translation;
  }

  capitalizeFirstLetter(word) {
      return word[0].toUpperCase() + word.slice(1);
  }
}

module.exports = Translator;