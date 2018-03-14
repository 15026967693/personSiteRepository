require('../lib/jquery-ui/themes/base/all.css')
require('../lib/jquery-ui/ui/i18n/datepicker-zh-CN.js')
$(function(){$('#datepicker').datepicker(new Date())
$('#datepicker').datepicker( "option", "dateFormat", "yy年mm月dd日" );
$('#datepicker').datepicker( "option", "altFormat", "yy" );
})