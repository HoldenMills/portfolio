'use strict';

var api = {

url: 'http://localhost:3000',
// url: 'http://stormy-caverns-8878.herokuapp.com',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

}
