require('./nav.js')
require('../lib/canvas-nest/canvas-nest.js')
require('../lib/jquery-ui/themes/base/all.css')
require('../lib/jquery-ui/ui/widgets/datepicker.js')
require('../lib/jquery-ui/ui/i18n/datepicker-zh-CN.js')
require('../css/apply.scss')
$('#chooseTime').datepicker({dateFormat: "yy年mm月dd日",defaultDate:new Date()})
$('form').bind('submit',()=>{

if(!$('#contact').val().trim())
{
         $('#contactmsg').removeClass('hidden')
		console.log('1'>2)
			 console.log(new Date()-$('#chooseTime').datepicker("getDate"))
         if(new Date()-$('#chooseTime').datepicker("getDate")>=0
			 &&new Date().getMonth()==$('#chooseTime').datepicker("getDate").getMonth()
			 &&new Date().getFullYear()==$('#chooseTime').datepicker("getDate").getFullYear()
			 &&new Date().getDate()==$('#chooseTime').datepicker("getDate").getDate()
			 &&$('#hour').val()<new Date().getHours()
			 ||$('#hour').val()==new Date().getHours()
			 &&$('#minute').val()<new Date().getMinutes()
			 ||new Date()-$('#chooseTime').datepicker("getDate")>=0
			 &&!(new Date().getMonth()==$('#chooseTime').datepicker("getDate").getMonth()
			 &&new Date().getFullYear()==$('#chooseTime').datepicker("getDate").getFullYear()
			 &&new Date().getDate()==$('#chooseTime').datepicker("getDate").getDate())
		 )
			$('#timemsg').removeClass('hidden')&&$('#timemsg').text('所选时间应该在今天之后')
		 else
			 $('#timemsg').addClass('hidden')
		 if(!$('#chooseTime').datepicker("getDate")||!$('#hour').val().trim()||!$('#minute').val().trim())
			$('#timemsg').removeClass('hidden')&&$('#timemsg').text('时间不能为空')
		 else if(!(new Date()-$('#chooseTime').datepicker("getDate")>=0))
			 $('#timemsg').addClass('hidden')
         return false;
}
else
$('#contactmsg').addClass('hidden')
	if(!$('#chooseTime').datepicker("getDate")||!$('#hour').val().trim()||!$('#minute').val().trim())
			return $('#timemsg').removeClass('hidden')&&!$('#timemsg').text('时间不能为空')
		 else
			 $('#timemsg').addClass('hidden')
if(new Date()-$('#chooseTime').datepicker("getDate")>=0
			 &&new Date().getMonth==$('#chooseTime').datepicker("getDate").getMonth()
			 &&new Date().getFullYear()==$('#chooseTime').datepicker("getDate").getFullYear()
			 &&new Date().getDate()==$('#chooseTime').datepicker("getDate").getDate()
			 &&$('#hour').val()<new Date().getHours()
			 ||$('#hour').val()==new Date().getHours()
			 &&$('#minute').val()<new Date().getMinutes()
			 ||new Date()-$('#chooseTime').datepicker("getDate")>=0
			 &&!(new Date().getMonth()==$('#chooseTime').datepicker("getDate").getMonth()
			 &&new Date().getFullYear()==$('#chooseTime').datepicker("getDate").getFullYear()
			 &&new Date().getDate()==$('#chooseTime').datepicker("getDate").getDate()))
        return  $('#timemsg').removeClass('hidden')&&!$('#timemsg').text('所选时间应该在今天之后')
else
        $('#timemsg').addClass('hidden')
return true
})

$('#hour').bind('keyup keydown',function(){
let hour=$(this).val()
let a=hour>24&&$(this).val(hour.slice(0,-1))
a=(/\d$/).test(hour)||$(this).val(hour.slice(0,-1))
})

	$('#minute').bind('keyup keydown',function(){
let minute=$(this).val()
let a=minute>59&&$(this).val(minute.slice(0,-1))
a=(/\d$/).test(minute)||$(this).val(minute.slice(0,-1))
})