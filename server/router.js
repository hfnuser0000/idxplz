const express = require("express");
const router = express.Router();
const fs = require("fs");
const { route } = require("next/dist/server/router");
const knexClient = require("../core/api/knex");

router.use(express.json());

router.get('/rss/recent-posts', async(req, res) => {
    const RSS = require('rss-generator');
    const cmsApi = require('../core/api/cms');
    const MarkdownIt = require('markdown-it');
    const md = new MarkdownIt();

    const siteDescription = `Recent posts - IndexPlz`;
    const siteURL = 'https://indexplz.com';
    const author = 'IndexPlz';
    const date = new Date();

    const posts = (await cmsApi.posts.get({page: 1, populate: '*'})).data.data.map(post => {
        return {
            title: post.attributes.Title,
            slug: post.attributes.Slug,
            description: post.attributes.Description ?? '',
            thumbnail: post.attributes.Thumbnail.data
                ? "https://cms.indexplz.com"+post.attributes.Thumbnail.data.attributes.url
                : null
        }
    });

    const feed = new RSS({
        title: `Recent posts - IndexPlz`,
        description: siteDescription,
        site_url: siteURL,
        feed_url: 'https://indexplz.com/rss/recent-posts/',
        image_url: 'https://indexplz.com/android-chrome-512x512.png',
        copyright: `All rights reserved ${date.getFullYear()}, IndexPlz`,
        pubDate: date,
        version: '2.0',
        custom_namespaces: {
            media: 'http://search.yahoo.com/mrss/',
        }
    });

    posts.forEach(post => {
        const url  = `${siteURL}/posts/${post.slug}`;
        const description = post.description.slice(0, 296) + ' ...';
        feed.item({
            title: `${post.title} — IndexPlz`,
            url: url,
            description: description,
            contributor: [author],
            date: date,
            custom_elements: [
                {
                    'media:content': {
                        _attr: {
                            medium: 'image',
                            url: post.thumbnail
                        }
                    }
                }
            ]
        });
    });
    res.set("Content-Type", "text/xml").send(feed.xml());
});

router.get("/rss/default/:rssname", async (req, res) => {
    const RSS = require('rss-generator');
    const nameDB = knexClient.connect("../name-db/names.db");
    const nameDataGenerator = require("../core/name-data-generator");

    const rssname = req.params.rssname;
    const isNameValid = !!rssname.match(/page-\d+\.xml/g);
    if (!isNameValid) {
        return res.send("invalid rssname");
    }

    function generateFeed(names) {
        const siteDescription =
            nameDataGenerator.generateData("").siteDescription;
        const siteURL = "https://printinix.com";
        const author = 'Printinix Custom Name Apparel';
        const date = new Date();

        const feed = new RSS({
            title: `Printinix product list #${pageNumber}`,
            description: siteDescription,
            site_url: siteURL,
            feed_url: `https://printinix.com/rss/default/page-${pageNumber}.xml`,
            image_url: `https://cms.printinix.com/uploads/t_shirt_mockup_50b0640f9c.jpg`,
            copyright: `All rights reserved ${date.getFullYear()}, Printinix`,
            pubDate: date,
            version: '2.0',
            custom_namespaces: {
                media: 'http://search.yahoo.com/mrss/',
            }
        });

        names.forEach((name) => {
            const nameSlug  = encodeURIComponent(name);
            const url       = `${siteURL}/${nameSlug}`;
            const fullName  = name;

            const nameData  = nameDataGenerator.generateData(fullName);
            const description   = nameData.description;

            feed.item({
                title: `${fullName} name ${nameData.keywordsText} - Printinix Custom Name Apparel`,
                url: url,
                description: description,
                contributor: [author],
                date: date,
                custom_elements: [
                    {
                        'media:content': {
                            _attr: {
                                medium: 'image',
                                url: `https://cdn.printinix.com/mockup-image/my-blood-type-is-custom-name-t-shirt---${nameSlug}.jpg?v=1&scale=0.4`
                            }
                        }
                    }
                ]
            });
        });

        return feed.xml();
    }

    const pageNumber = +rssname.match(/-\d+/g)[0].replaceAll("-", "");
    let names = await nameDB("name")
        .select()
        .offset(60 * (pageNumber - 1))
        .limit(60);
    names = names.map((name) => name.name);
    res.set("Content-Type", "text/xml").send(generateFeed(names));
});

module.exports = router;
