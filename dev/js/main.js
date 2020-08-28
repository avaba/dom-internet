/* frameworks */
//=include ../../dist/bower_components/jquery/dist/jquery.js

/* libs */
//=include lib/modernizr-custom.js
//=include lib/ion.rangeSlider.min.js
//=include lib/bootstrap-select.js
//=include lib/sticky-kit.min.js

/* plugins */
//=include ../../dist/bower_components/bootstrap/js/dist/util.js
//=include ../../dist/bower_components/popper.js/dist/umd/popper.min.js
//=include ../../dist/bower_components/bootstrap/js/dist/dropdown.js
//=include ../../dist/bower_components/bootstrap/js/dist/collapse.js
//=include ../../dist/bower_components/bootstrap/js/dist/modal.js
//=include ../../dist/bower_components/jquery-validation/dist/jquery.validate.min.js
//=include ../../dist/bower_components/svg4everybody/dist/svg4everybody.min.js

/* separate */
//=include helpers/object-fit.js
//=include helpers/valid.js
//=include separate/global.js
//=include helpers/bs_modal_fix.js
//=include helpers/bsModalCenter.js

/* components */
//=include components/header.js
//=include components/collapse.js
//=include components/filters.js
//=include components/yandex-map.js
//=include components/form-components.js
//=include components/modal-window-fix.js
//=include components/comparison-table.js
//=include components/sticky-block.js


$(document).ready(function() {
	// make svg icons visible in IE
	svg4everybody();
});