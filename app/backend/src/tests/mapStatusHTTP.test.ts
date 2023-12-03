import * as chai from 'chai';

import mapStatusHTTP from '../utils/mapStatusHTTP';

const { expect } = chai;

describe('Tests in util MapStatusHTTP', function() {
  it('To return status 400', function() {
    const result = mapStatusHTTP('BAD_REQUEST');

    expect(result).to.be.equal(400)
  })

  it('To return status 409', function() {
    const result = mapStatusHTTP('CONFLICT');

    expect(result).to.be.equal(409)
  })

  it('To return status 500', function() {
    const result = mapStatusHTTP('WRONG');

    expect(result).to.be.equal(500)
  })

  it('To return status 201', function() {
    const result = mapStatusHTTP('CREATED');

    expect(result).to.be.equal(201)
  })

  it('To return status 204', function() {
    const result = mapStatusHTTP('NO_CONTENT');

    expect(result).to.be.equal(204)
  })
})