export default function handler(req, res) {
    const fs                = require('fs');
    const Feed              = require('feed').Feed;
    const nameDataGenerator = require('core/name-data-generator');

    const baseKeywordsText  = nameDataGenerator.generateData('').baseKeywordsText

    function generateFeed(names, page) {
        const siteURL = 'https://printinix.com';
        const author = {
            name: "Printinix",
            email: "support@printinix.com",
            link: siteURL
        };
        const date = new Date;
        const feed = new Feed({
            title: `Printinix product list #${page}`,
            description: `Are you looking for name shirt? We have various designs of name printed on ${baseKeywordsText}... Check it now and pick your favorites!`,
            id: siteURL,
            link: siteURL,
            image: `https://cms.printinix.com/uploads/t_shirt_mockup_50b0640f9c.jpg`,
            favicon: `${siteURL}/logo-512x.png`,
            copyright: `All rights reserved ${date.getFullYear()}, Printinix`,
            updated: date,
            generator: "Feed for Node.js",
            feedLinks: {
            rss2: `${siteURL}/rss-feed/page-${page}.xml`
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

        fs.writeFileSync(`./public/rss-feed/page-${page}.xml`, feed.rss2());
    }
    let names = fs.readFileSync('./data/names.txt').toString();
    names = names.split('\n').map(name => {
        return name.trim().replaceAll('https://printinix.com/', '').replaceAll(' ', '-')
    }).filter(name => !!name);
    let response = '';
    for(let page = 1; page <= Math.ceil(names.length / 60); ++page) {
        generateFeed(names.slice((page - 1) * 60, page * 60), page);
        response += `
            <a href="/rss-feed/page-${page}.xml">Printinix product list #${page}</a>
        `
    }
    res.send(response);
    // res.send('Stop it');
}


