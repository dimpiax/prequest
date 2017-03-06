'use strict';

const request = require('request');

const promiseWrapper = (req) =>
    (data) => new Promise((resolve, reject) => {
        req(data, (error, response, body) => {
            if(error) reject(error);
            else resolve(body);
        });
    });

const prequest = promiseWrapper(request);

Object.defineProperty(exports, "__esModule", {
  value: true
});

Object.assign(exports, {
    default: prequest,
    request,
    promiseWrapper
});
