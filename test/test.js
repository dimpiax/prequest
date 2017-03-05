'use strict';

const expect = require('chai').expect,
      prequest = require('../index')

describe('#prequest', function() {
    it('prequest is function', function() {
        const result = prequest.default
        expect(result instanceof Function).to.equal(true)
    });
});
