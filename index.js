'use strict';

const request = require('request');

const promiseWrapper = (req) =>
    (data) => new Promise((resolve, reject) => {
        req(data, (error, response, body) => {
            if(error) reject(error);
            else resolve(body);
        });
    });

const prequest = promiseWrapper(request)

module.exports = {
    default: prequest,
    request,
    promiseWrapper
}

// const promiseWrapper = (r: request): ((data: any) => Promise<Object>) =>
//     (data: any): Promise<Object> => new Promise((resolve: any, reject: any) => {
//         r(data, (error: any, response: any, body: any) => {
//             if (error) reject(error)
//             else resolve(body)
//         })
//     })
//
//
// const prequest = promiseWrapper(request)
// export default prequest
//
// export {
//     request,
//     promiseWrapper
// }
