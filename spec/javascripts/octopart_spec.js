(function() {

  describe('Part', function() {
    describe('#find', function() {
      return it('finds a part', function() {
        return window.octopart.find('39619421', function(response) {
          return expect(response.mpn).toEqual('H-46-6A');
        });
      });
    });
    return describe('#suggest', function() {
      return it('suggests a search term', function() {
        return window.octopart.suggest('sn728', function(terms) {
          return expect(terms.length).toEqual(5);
        });
      });
    });
  });

}).call(this);
