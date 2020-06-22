$(document).ready(function() {
	'use strict';

	/* ===== jsTree ==== */
	/* Ref: http://www.jstree.com/ */

	// Bootstrap icons
	$('#jstree-1').jstree({
		'core' : {
			'check_callback' : true
		},
		'plugins' : [ 'types', 'dnd' ],
		'types' : {
			'default' : {
				'icon' : 'far fa-folder'
			},
			'image' : {
				'icon' : 'far fa-file-image'
			},
			'unkown' : {
				'icon' : 'far fa-file'
			},
			'text' : {
				'icon' : 'far fa-file-text'
			},
			'pdf' : {
				'icon' : 'far fa-file-pdf'
			},
			'word' : {
				'icon' : 'far fa-file-word'
			},
			'ppt' : {
				'icon' : 'far fa-file-powerpoint'
			},
			'excel' : {
				'icon' : 'far fa-file-excel'
			},
			'video' : {
				'icon' : 'far fa-file-video'
			},
			'audio' : {
				'icon' : 'far fa-file-audio'
			},
			'code' : {
				'icon' : 'far fa-file-code'
			},
			'screenshot' : {
				'icon' : 'far fa-file-picture'
			},
			'css' : {
				'icon' : 'far fa-file-code'
			},
			'zip' : {
				'icon' : 'far fa-file-archive'
			}
		}
	});

	$("#jstree-2").jstree({
		'core' : {
			'check_callback' : true
		},
		'plugins' : [ 'types', 'dnd' ],
		"types" : {

			"file" : {
				"icon" : "fas fa-file",
				"valid_children" : []
			}
		}
	});
});
