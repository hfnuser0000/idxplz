export default async function handler(req, res) {
    const fs                = require('fs');
    const Feed              = require('feed').Feed;
    const knexClient        = require('core/api/knex');
    const nameDB            = knexClient.connect('../name-db/names.db');
    const nameDataGenerator = require('core/name-data-generator');
    const { RNG, shuffle }  = require('core/rng');

    const baseKeywordsText  = nameDataGenerator.generateData('').baseKeywordsText;
    const nameCount = 27306287;

    const randomNames = [];

    while(randomNames.length < 60) {
        const randomID = 1 + Math.floor(Math.random() * nameCount);
        const randomName = (await nameDB('name').select().where({id: randomID}))[0].name;
        if(randomName.match(/^[A-Za-z]+$/g) && !randomNames.includes(randomName)) {
            randomNames.push(randomName);
        }
    }

    function generateFeed(names) {
        const siteURL = 'https://printinix.com';
        const author = {
            name: "Printinix",
            email: "support@printinix.com",
            link: siteURL
        };
        const date = new Date;
        const feed = new Feed({
            title: `Printinix random products`,
            description: `Are you looking for name shirt? We have various designs of name printed on ${baseKeywordsText}... Check it now and pick your favorites!`,
            id: siteURL,
            link: siteURL,
            image: `https://cms.printinix.com/uploads/t_shirt_mockup_50b0640f9c.jpg`,
            favicon: `${siteURL}/logo-512x.png`,
            copyright: `All rights reserved ${date.getFullYear()}, Printinix`,
            updated: date,
            generator: "Feed for Node.js",
            feedLinks: {
            rss2: `${siteURL}/api/rss/random.xml`
            },
            author,
        });

        names.forEach(name => {
            const url               = `${siteURL}/${name}`;
            const fullName          = name.replaceAll('_', ' ').replaceAll('-', ' ').replaceAll('/', '');

            const nameData          = nameDataGenerator.generateData(fullName);

            const description = nameData.description

            feed.addItem({
                title: `${fullName} name ${nameData.keywordsText} - Printinix Custom Name Apparel`,
                id: url,
                link: url,
                description: description,
                content: description,
                author: [author],
                contributor: [author],
                date: new Date,
            });
        });

        return feed.rss2();
    }
    res.send(generateFeed(randomNames));
}


