
function poiInfo(tags) {
  r = '';

  if (tags.hasOwnProperty('name')) {
    r += tags['name'];
  }

  if (tags.hasOwnProperty('addr:city')) {
    r += ' - ' + tags['addr:city'];
  }

  if (tags.hasOwnProperty('website')) {
    r += ' - <a href="' + tags['website'] + '">' + tags['website'] + '</a>'
  }

  return $('<div>').append(r).html();
};


L.OverPassLayer = L.FeatureGroup.extend({
  options: {
    query: "",
    map: "",
    oms: "",

    callback: function(data) {

      for(i=0;i<data.elements.length;i++) {
        e = data.elements[i];

        var loc = new L.LatLng(e.lat, e.lon);
        var marker = new L.Marker(loc);
        marker.desc = poiInfo(e.tags);
        this.map.addLayer(marker);
        this.oms.addMarker(marker); 
      }
    }
  },

  initialize: function (options) {
    L.Util.setOptions(this, options);
    this._layers = {};
    this._ids = {};
    this.map = options.map;
    this.oms = options.oms;
    this.onMoveEnd();
    if (this.options.query.indexOf("(BBOX)") != -1) {
      this.map.on('moveend', this.onMoveEnd, this);
    }
  },

  _poiInfo: function(tags) {
    var r = $('<table>');
    for (key in tags)
      r.append($('<tr>').append($('<th>').text(key)).append($('<td>').text(tags[key])));
    return $('<div>').append(r).html();
  },

  onMoveEnd: function () {

    $.ajax({
      url: this.options.query,
      context: this,
      crossDomain: true,
      dataType: "json",
      data: {},
      success: this.options.callback
    });
  },

});
