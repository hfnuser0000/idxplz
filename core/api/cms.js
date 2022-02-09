const axios = require('axios');
const qs    = require('qs');

const token = `a1390b452023bd9bc46fd0678bdda54c2d9bc3cdea7c995113808bde28e8314f108460f2ee4f000cf67bf5be401464b19014a9f030adc9a0e35aa54bc8bac022e7fe0f60d46cbf3112e801536f81d130967aa3b2014a6dc67ee2ea3923b9a266e8cab255c21a4a8d13fd32f4808159ce1db6ec1865e355f0e9971943a6d95a49`;


const endpoint = (parts, ...values) => {
    /*
    two major ways to use this function:
        1. endpoint`/posts?page=${page}`
        2. endpoint('/post', {page: page})
    */
    if(typeof parts == 'object') {
        return 'https://cms.indexplz.com/api' + parts.map((part, idx) => idx == 0 ? part : values[idx - 1] + part).join('');
    }
    let path = parts;
    let query = values[0];
    if(query) {
        query = qs.stringify(query, {
            encodeValuesOnly: true,
        });
        return 'https://cms.indexplz.com/api' + path + '?' + query;
    }
    return 'https://cms.indexplz.com/api' + path;
}

const config = {
    headers: {
        'authority': 'cms.indexplz.com',
        'pragma': 'no-cache',
        'cache-control': 'no-cache',
        'accept': 'application/json',
        'authorization': `Bearer ${token}`, 
    }
};

const client = axios.create(config);

module.exports = {
    posts: {
        async get({page=1, pageSize=12, populate, fields, filters={}}) {
            return await client.get(endpoint('/posts', {
                pagination: {
                    page,
                    pageSize
                },
                populate,
                fields,
                filters: {
                    host_site: {
                        name: {
                            $eq: 'IndexPlz'
                        }
                    },
                    ...filters
                }
            }));
        }
    }
};
