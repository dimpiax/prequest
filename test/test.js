'use strict';

const expect = require('chai').expect,
      prequest = require('../index')

describe('#prequest', function() {
    it('should be promised', function() {
        const result = prequest.promiseWrapper()
        expect(result instanceof Promise).to.equal(true)
    });

    it('should be promised2', function() {
        const result = prequest.promiseWrapper()
        expect(result instanceof Promise).to.equal(true)
    });
});
