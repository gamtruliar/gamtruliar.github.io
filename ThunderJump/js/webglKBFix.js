function KBFix(unityIns) {
	function FixInputOnSubmit() {
		document.getElementById("fixInput").blur();
		event.preventDefault();
	}
	function FixInput_oninput() {
		unityIns.SendMessage('_WebGLKeyboard', 'ReceiveInputChange', document.getElementById("fixInput").value);
	}
	function FixInput_onblur() {
		unityIns.SendMessage('_WebGLKeyboard', 'LoseFocus');
	}
	$("#fixInput").on('input', function() {
		FixInput_oninput();
	});
	$("#fixInput").on('blur', function() {
		FixInput_onblur();
	});
	$("#fixkbForm").on('submit', function() {
		FixInputOnSubmit();
	});
}

$( document ).ready(function() {
	var pstr="";
pstr += "<div>\n";
pstr+= "<form id='fixkbForm' autocomplete=\"off\" style=\"width: 0px; height: 0px; position: absolute; top: -9999px;\">\n";
pstr += "<input type=\"text\" id=\"fixInput\"  style=\"font-size: 42px;\">\n";		
pstr += "</form>\n";
pstr+= "</div>\n";
$("#kbfixuse").html(pstr);

});