describe 'Part', ->

  describe '#find', ->
    it 'finds a part', ->
      window.octopart.find '39619421', (response) ->
        expect(response.mpn).toEqual('H-46-6A')

  describe '#suggest', ->
    it 'suggests a search term', ->
      window.octopart.suggest 'sn728', (terms) ->
        expect(terms.length).toEqual(5)
