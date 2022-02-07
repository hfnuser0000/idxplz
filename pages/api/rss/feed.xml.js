export default function handler(req, res) {
    const fs                = require('fs');
    const Feed              = require('feed').Feed;
    const knexClient        = require('core/api/knex');
    const nameDB            = knexClient.connect('../name-db/names.db');
    const nameDataGenerator = require('core/name-data-generator');
    const { RNG, shuffle }  = require('core/rng');

    const names = (`
        Marwa Alcock
        Elle-May Huynh
        Bernard Gaines
        Glenda Mcphee
        Zeynep Fenton
        Anam Piper
        Annie Johnston
        Bethany Gale
        Antonia Gross
        Iga Woods
        Rafe Silva
        August Sweet
    `).split('\n').map(name => {
        return name.trim().replaceAll(' ', '-')
    }).filter(name => !!name).map(name => name);
    const siteURL = 'https://9nick.com';
    const author = {
        name: "9nick",
        email: "support@9nick.com",
        link: siteURL
    };
    const date = new Date;
    const feed = new Feed({
        title: "9nick",
        description: "",
        id: siteURL,
        link: siteURL,
        image: `https://cms.printinix.com/uploads/t_shirt_mockup_50b0640f9c.jpg`,
        favicon: `${siteURL}/logo-512x.png`,
        copyright: `All rights reserved ${date.getFullYear()}, 9nick`,
        updated: date,
        generator: "Feed for Node.js",
        feedLinks: {
          rss2: `${siteURL}/rss/home.xml`
        },
        author,
    });

    names.forEach((name) => {
        const url = `${siteURL}/${name}`;
        const fullName = name.replaceAll('_', ' ').replaceAll('-', ' ').replaceAll('/', '');
    
        feed.addItem({
            title: fullName + ' shirts',
            id: url,
            link: url,
            description: `Products for ${fullName}`,
            content: `Products for ${fullName}`,
            author: [author],
            contributor: [author],
            date: new Date,
        });
    });

    res.send(feed.rss2());
}
