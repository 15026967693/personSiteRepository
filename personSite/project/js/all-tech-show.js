require('./nav.js')
require('../lib/jquery-ui/themes/base/all.css')
require('../css/all-tech-show.scss')
require('../lib/jquery-ui/ui/widgets/accordion.js')
  $( function() {
    $( "#accordion" ).accordion();
  } );