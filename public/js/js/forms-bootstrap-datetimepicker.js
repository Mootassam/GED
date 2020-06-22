$(document).ready(function() {
	'use strict';

	/* ===== Bootstrap Date/Time Picker ==== */
	/* Ref: https://gijgo.com/datepicker/example/bootstrap */

	$('#datepicker1').datepicker({
            uiLibrary: 'bootstrap4',
            value: '01/01/2020'
     });
     
     $('#timepicker1').timepicker({
            uiLibrary: 'bootstrap4'
     });
     
     $('#datetimepicker1').datetimepicker({ uiLibrary: 'bootstrap4', footer: true, modal: true });
;

});
