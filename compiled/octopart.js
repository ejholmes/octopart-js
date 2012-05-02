(function() {
  var API_BASE, Octopart;

  API_BASE = 'http://octopart.com/api/v2/';

  Octopart = (function() {

    Octopart.name = 'Octopart';

    function Octopart() {}

    Octopart.get = function(path, params, fn) {
      var key, url, val;
      url = "" + API_BASE + path + "?";
      for (key in params) {
        val = params[key];
        url += "" + key + "=" + val;
      }
      return $.ajax({
        url: url,
        dataType: 'jsonp',
        method: 'GET',
        success: fn
      });
    };

    Octopart.find = function(uid, fn) {
      return this.get('parts/get', {
        uid: uid
      }, fn);
    };

    Octopart.search = function(query, fn) {
      return this.get('parts/search', {
        q: query
      }, fn);
    };

    Octopart.suggest = function(term, fn) {
      return this.get('parts/suggest', {
        q: term
      }, function(response) {
        return fn(response['results']);
      });
    };

    return Octopart;

  })();

  window.octopart = Octopart;

}).call(this);
