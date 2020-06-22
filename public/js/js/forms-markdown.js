$(document).ready(function() {
	
	'use strict';
	
	
	// Ref: https://github.com/cblanquera/bootstrap-markdown-editor
	$('#bs4-markdown-editor').markdownEditor({
        preview: true,
        onPreview: function (content, callback) {
            callback( marked(content) );
        }
    });

});
