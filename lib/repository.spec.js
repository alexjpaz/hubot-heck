const repository = require('./repository');

const expect = require('chai').expect;

describe('repository', () => {
  it('should get a doggo image', (done) => {
    repository.get().then((url) => {
      expect(url).to.match(/redditmedia.com/);
      done();
    });
  });
});
