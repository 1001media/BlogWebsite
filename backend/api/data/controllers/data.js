'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

 const { sanitizeEntity } = require('strapi-utils');

module.exports = {
    async nameEmail(ctx) {
        const { name, email } = ctx.request.body
        

        var data = await strapi.services.data.create({
            name,  email
        })

        data = sanitizeEntity(data , { model : strapi.models.data})


        ctx.send({ data } , 200)
    }
};
