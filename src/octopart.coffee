API_BASE = 'http://octopart.com/api/v2/'

class Octopart

  # Internal
  @get: (path, params, fn) ->
    url = "#{API_BASE}#{path}?"
    for key, val of params
      url += "#{key}=#{val}"
    $.ajax
      url: url
      dataType: 'jsonp'
      method: 'GET'
      success: fn


  # Public: Finds a part for a given uid and returns an Octopart::Part or
  # an Array of Octopart::Part if multiple UIDs are given.
  #
  # uid - Either a single Octopart UID, or any Array of UID's
  @find: (uid, fn) ->
    @get 'parts/get', { uid: uid }, fn


  # Public: Search for parts that match the given query and returns an Array of 
  # Octopart::Part
  #
  # query   - A search term
  @search: (query, fn) ->
    @get 'parts/search', { q: query }, fn


  # Public: Suggest a search term. Can be used for autocomplete
  #
  # term    - A term to make suggestions for
  @suggest: (term, fn) ->
    @get 'parts/suggest', { q: term }, (response) ->
      fn(response['results'])

window.octopart = Octopart
