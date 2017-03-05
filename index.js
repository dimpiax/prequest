'use strict';

const request = require('request');

const promiseWrapper = () => new Promise(function(resolve, reject) {
    console.log('promiseWrapper inited')
})

module.exports = {
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
