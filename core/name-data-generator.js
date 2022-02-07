const crypto = require('crypto');
const { RNG, shuffle } = require('./rng');

const md5 = content => {
    return crypto.createHash('md5').update(content).digest('hex');
};

const generateData = name => {
    // const baseKeywords      = ['T shirts', 'Hoodies', 'Sweatshirts', 'Tank Tops', 'Mugs'];
    const baseKeywords      = ['T-shirts'];
    const keywords          = shuffle(name, JSON.parse(JSON.stringify(baseKeywords)));
    const shortKeywords     = keywords.slice(0, 4);

    const baseKeywordsText  = baseKeywords.join(', ');
    const keywordsText      = keywords.join(', ');
    const shortKeywordsText = shortKeywords.join(', ');

    const siteDescription   = `Are you looking for a custom name shirt? We have various designs of custom name printed on ${baseKeywordsText}. Check it now and pick your favorites!`;
    const description       = `Are you looking for ${name} custom name shirt? We have various designs of custom name ${name} printed on ${keywordsText}. Check it now and pick your favorites!`;

    return {
        siteDescription, description,
        baseKeywordsText, keywordsText, shortKeywordsText
    }
};

module.exports = { generateData };

