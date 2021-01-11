// Saves options to chrome.storage
function save_options() {
  /*
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;
  */
  var xuser = document.getElementById('xuser').value;
  var xpassword = document.getElementById('xpassword').value;
  var s1 = document.getElementById('s1').value;
  var s2 = document.getElementById('s2').value;
  var s3 = document.getElementById('s3').value;
  var s4 = document.getElementById('s4').value;
  var s5 = document.getElementById('s5').value;
  var s6 = document.getElementById('s6').value;
  var s7 = document.getElementById('s7').value;
  var s8 = document.getElementById('s8').value;
  var s9 = document.getElementById('s9').value;
  //var x91 = document.getElementById('x91').value;
  //var x92 = document.getElementById('x92').value;
  //var x93 = document.getElementById('x93').value;
  var x1button = document.getElementById('x1button').value;
  var x1link1 = document.getElementById('x1link1').value;
  var x1link2 = document.getElementById('x1link2').value;
  var x1link3 = document.getElementById('x1link3').value;
  var x2button = document.getElementById('x2button').value;
  var x2link1 = document.getElementById('x2link1').value;
  var x2link2 = document.getElementById('x2link2').value;
  var x2link3 = document.getElementById('x2link3').value;
  var x3button = document.getElementById('x3button').value;
  var x3link1 = document.getElementById('x3link1').value;
  var x3link2 = document.getElementById('x3link2').value;
  var x3link3 = document.getElementById('x3link3').value;
  var x4button = document.getElementById('x4button').value;
  var x4link1 = document.getElementById('x4link1').value;
  var x4link2 = document.getElementById('x4link2').value;
  var x4link3 = document.getElementById('x4link3').value;
  var x5button = document.getElementById('x5button').value;
  var x5link1 = document.getElementById('x5link1').value;
  var x5link2 = document.getElementById('x5link2').value;
  var x5link3 = document.getElementById('x5link3').value;
  var x6button = document.getElementById('x6button').value;
  var x6link1 = document.getElementById('x6link1').value;
  var x6link2 = document.getElementById('x6link2').value;
  var x6link3 = document.getElementById('x6link3').value;
  var x7button = document.getElementById('x7button').value;
  var x7link1 = document.getElementById('x7link1').value;
  var x7link2 = document.getElementById('x7link2').value;
  var x7link3 = document.getElementById('x7link3').value;
  var x8button = document.getElementById('x8button').value;
  var x8link1 = document.getElementById('x8link1').value;
  var x8link2 = document.getElementById('x8link2').value;
  var x8link3 = document.getElementById('x8link3').value;
  var x9button = document.getElementById('x9button').value;
  var x9link1 = document.getElementById('x9link1').value;
  var x9link2 = document.getElementById('x9link2').value;
  var x9link3 = document.getElementById('x9link3').value;
  
  s1 = s1 + ";" + x1button + ";" + x1link1 + ";" + x1link2 + ";" + x1link3;
  s2 = s2 + ";" + x2button + ";" + x2link1 + ";" + x2link2 + ";" + x2link3;
  s3 = s3 + ";" + x3button + ";" + x3link1 + ";" + x3link2 + ";" + x3link3;
  s4 = s4 + ";" + x4button + ";" + x4link1 + ";" + x4link2 + ";" + x4link3;
  s5 = s5 + ";" + x5button + ";" + x5link1 + ";" + x5link2 + ";" + x5link3;
  s6 = s6 + ";" + x6button + ";" + x6link1 + ";" + x6link2 + ";" + x6link3;
  s7 = s7 + ";" + x7button + ";" + x7link1 + ";" + x7link2 + ";" + x7link3;
  s8 = s8 + ";" + x8button + ";" + x8link1 + ";" + x8link2 + ";" + x8link3;
  s9 = s9 + ";" + x9button + ";" + x9link1 + ";" + x9link2 + ";" + x9link3;
  
  chrome.storage.sync.set({
    //favoriteColor: color,
    //likesColor: likesColor,
	s1: s1,
	s2: s2,
	s3: s3,
	s4: s4,
	s5: s5,
	s6: s6,
	s7: s7,
	s8: s8,
	s9: s9,
	xuser: xuser,
	xpassword: xpassword
	//x91: x91,
	//x92: x92,
	//x93: x93,
/*
	x1button: x1button,
	x1link1: x1link1,
	x1link2: x1link2,
	x1link3: x1link3,
	x2button: x2button,
	x2link1: x2link1,
	x2link2: x2link2,
	x2link3: x2link3,
	x3button: x3button,
	x3link1: x3link1,
	x3link2: x3link2,
	x3link3: x3link3,
	x4button: x4button,
	x4link1: x4link1,
	x4link2: x4link2,
	x4link3: x4link3,
	x5button: x5button,
	x5link1: x5link1,
	x5link2: x5link2,
	x5link3: x5link3,
	x6button: x6button,
	x6link1: x6link1,
	x6link2: x6link2,
	x6link3: x6link3,
	x7button: x7button,
	x7link1: x7link1,
	x7link2: x7link2,
	x7link3: x7link3,
	x8button: x8button,
	x8link1: x8link1,
	x8link2: x8link2,
	x8link3: x8link3,
	x9button: x9button,
	x9link1: x9link1,
	x9link2: x9link2,
	x9link3: x9link3
*/
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    //favoriteColor: 'red',
    //likesColor: true,
	s1: '',
	s2: '',
	s3: '',
	s4: '',
	s5: '',
	s6: '',
	s7: '',
	s8: '',
	s9: '',
	xuser: '',
	xpassword: ''
	//x91:'',
	//x92:'',
	//x93:'',
/*
	x1button:'',
	x1link1:'',
	x1link2:'',
	x1link3:'',
	x2button:'',
	x2link1:'',
	x2link2:'',
	x2link3:'',
	x3button:'',
	x3link1:'',
	x3link2:'',
	x3link3:'',
	x4button:'',
	x4link1:'',
	x4link2:'',
	x4link3:'',
	x5button:'',
	x5link1:'',
	x5link2:'',
	x5link3:'',
	x6button:'',
	x6link1:'',
	x6link2:'',
	x6link3:'',
	x7button:'',
	x7link1:'',
	x7link2:'',
	x7link3:'',
	x8button:'',
	x8link1:'',
	x8link2:'',
	x8link3:'',
	x9button:'',
	x9link1:'',
	x9link2:'',
	x9link3:''
*/
  }, function(items) {
	/*
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
	*/

	document.getElementById('xuser').value = items.xuser;
	document.getElementById('xpassword').value = items.xpassword;
	
	document.getElementById('s1').value = items.s1.split(';')[0];
	document.getElementById('s2').value = items.s2.split(';')[0];
	document.getElementById('s3').value = items.s3.split(';')[0];
	document.getElementById('s4').value = items.s4.split(';')[0];
	document.getElementById('s5').value = items.s5.split(';')[0];
	document.getElementById('s6').value = items.s6.split(';')[0];
	document.getElementById('s7').value = items.s7.split(';')[0];
	document.getElementById('s8').value = items.s8.split(';')[0];
	document.getElementById('s9').value = items.s9.split(';')[0];
	//document.getElementById('x91').value = items.x91;
	//document.getElementById('x92').value = items.x92;
	//document.getElementById('x93').value = items.x93;
	if (typeof items.s1.split(';')[1] !== "undefined")  document.getElementById('x1button').value = items.s1.split(';')[1];
	if (typeof items.s1.split(';')[2] !== "undefined")   document.getElementById('x1link1').value = items.s1.split(';')[2];
	if (typeof items.s1.split(';')[3] !== "undefined")   document.getElementById('x1link2').value = items.s1.split(';')[3];
	if (typeof items.s1.split(';')[4] !== "undefined")   document.getElementById('x1link3').value = items.s1.split(';')[4];
	if (typeof items.s2.split(';')[1] !== "undefined")  document.getElementById('x2button').value = items.s2.split(';')[1];
	if (typeof items.s2.split(';')[2] !== "undefined")   document.getElementById('x2link1').value = items.s2.split(';')[2];
	if (typeof items.s2.split(';')[3] !== "undefined")   document.getElementById('x2link2').value = items.s2.split(';')[3];
	if (typeof items.s2.split(';')[4] !== "undefined")   document.getElementById('x2link3').value = items.s2.split(';')[4];
	if (typeof items.s3.split(';')[1] !== "undefined")  document.getElementById('x3button').value = items.s3.split(';')[1];
	if (typeof items.s3.split(';')[2] !== "undefined")   document.getElementById('x3link1').value = items.s3.split(';')[2];
	if (typeof items.s3.split(';')[3] !== "undefined")   document.getElementById('x3link2').value = items.s3.split(';')[3];
	if (typeof items.s3.split(';')[4] !== "undefined")   document.getElementById('x3link3').value = items.s3.split(';')[4];
	if (typeof items.s4.split(';')[1] !== "undefined")  document.getElementById('x4button').value = items.s4.split(';')[1];
	if (typeof items.s4.split(';')[2] !== "undefined")   document.getElementById('x4link1').value = items.s4.split(';')[2];
	if (typeof items.s4.split(';')[3] !== "undefined")   document.getElementById('x4link2').value = items.s4.split(';')[3];
	if (typeof items.s4.split(';')[4] !== "undefined")   document.getElementById('x4link3').value = items.s4.split(';')[4];
	if (typeof items.s5.split(';')[1] !== "undefined")  document.getElementById('x5button').value = items.s5.split(';')[1];
	if (typeof items.s5.split(';')[2] !== "undefined")   document.getElementById('x5link1').value = items.s5.split(';')[2];
	if (typeof items.s5.split(';')[3] !== "undefined")   document.getElementById('x5link2').value = items.s5.split(';')[3];
	if (typeof items.s5.split(';')[4] !== "undefined")   document.getElementById('x5link3').value = items.s5.split(';')[4];
	if (typeof items.s6.split(';')[1] !== "undefined")  document.getElementById('x6button').value = items.s6.split(';')[1];
	if (typeof items.s6.split(';')[2] !== "undefined")   document.getElementById('x6link1').value = items.s6.split(';')[2];
	if (typeof items.s6.split(';')[3] !== "undefined")   document.getElementById('x6link2').value = items.s6.split(';')[3];
	if (typeof items.s6.split(';')[4] !== "undefined")   document.getElementById('x6link3').value = items.s6.split(';')[4];
	if (typeof items.s7.split(';')[1] !== "undefined")  document.getElementById('x7button').value = items.s7.split(';')[1];
	if (typeof items.s7.split(';')[2] !== "undefined")   document.getElementById('x7link1').value = items.s7.split(';')[2];
	if (typeof items.s7.split(';')[3] !== "undefined")   document.getElementById('x7link2').value = items.s7.split(';')[3];
	if (typeof items.s7.split(';')[4] !== "undefined")   document.getElementById('x7link3').value = items.s7.split(';')[4];
	if (typeof items.s8.split(';')[1] !== "undefined")  document.getElementById('x8button').value = items.s8.split(';')[1];
	if (typeof items.s8.split(';')[2] !== "undefined")   document.getElementById('x8link1').value = items.s8.split(';')[2];
	if (typeof items.s8.split(';')[3] !== "undefined")   document.getElementById('x8link2').value = items.s8.split(';')[3];
	if (typeof items.s8.split(';')[4] !== "undefined")   document.getElementById('x8link3').value = items.s8.split(';')[4];
	if (typeof items.s9.split(';')[1] !== "undefined")  document.getElementById('x9button').value = items.s9.split(';')[1];
	if (typeof items.s9.split(';')[2] !== "undefined")   document.getElementById('x9link1').value = items.s9.split(';')[2];
	if (typeof items.s9.split(';')[3] !== "undefined")   document.getElementById('x9link2').value = items.s9.split(';')[3];
	if (typeof items.s9.split(';')[4] !== "undefined")   document.getElementById('x9link3').value = items.s9.split(';')[4];

/* backup
document.getElementById('x1button').value = items.x1button;
	document.getElementById('x1link1').value = items.x1link1;
	document.getElementById('x1link2').value = items.x1link2;
	document.getElementById('x1link3').value = items.x1link3;
	document.getElementById('x2button').value = items.x2button;
	document.getElementById('x2link1').value = items.x2link1;
	document.getElementById('x2link2').value = items.x2link2;
	document.getElementById('x2link3').value = items.x2link3;
	document.getElementById('x3button').value = items.x3button;
	document.getElementById('x3link1').value = items.x3link1;
	document.getElementById('x3link2').value = items.x3link2;
	document.getElementById('x3link3').value = items.x3link3;
	document.getElementById('x4button').value = items.x4button;
	document.getElementById('x4link1').value = items.x4link1;
	document.getElementById('x4link2').value = items.x4link2;
	document.getElementById('x4link3').value = items.x4link3;
	document.getElementById('x5button').value = items.x5button;
	document.getElementById('x5link1').value = items.x5link1;
	document.getElementById('x5link2').value = items.x5link2;
	document.getElementById('x5link3').value = items.x5link3;
	document.getElementById('x6button').value = items.x6button;
	document.getElementById('x6link1').value = items.x6link1;
	document.getElementById('x6link2').value = items.x6link2;
	document.getElementById('x6link3').value = items.x6link3;
	document.getElementById('x7button').value = items.x7button;
	document.getElementById('x7link1').value = items.x7link1;
	document.getElementById('x7link2').value = items.x7link2;
	document.getElementById('x7link3').value = items.x7link3;
	document.getElementById('x8button').value = items.x8button;
	document.getElementById('x8link1').value = items.x8link1;
	document.getElementById('x8link2').value = items.x8link2;
	document.getElementById('x8link3').value = items.x8link3;
	document.getElementById('x9button').value = items.x9button;
	document.getElementById('x9link1').value = items.x9link1;
	document.getElementById('x9link2').value = items.x9link2;
	document.getElementById('x9link3').value = items.x9link3;
*/

	/*
	//if (document.getElementById('s9').options[document.getElementById('s9').selectedIndex].value.startsWith('x91') || document.getElementById('s9').options[document.getElementById('s9').selectedIndex].value.startsWith('x92')) {
		
		document.getElementById('x9button').style.visibility = 'visible';
		document.getElementById('x9link1').style.visibility = 'visible';	
		document.getElementById('x9link2').style.visibility = 'visible';	
		//document.getElementById('x9link3').style.visibility = 'visible';	
	//}
	*/

for (var i = 1; i < 10; i++) {
		document.getElementById('x' + i + 'button').style.visibility = 'hidden';
		document.getElementById('x' + i + 'link1').style.visibility = 'hidden';	
		document.getElementById('x' + i + 'link2').style.visibility = 'hidden';	
		document.getElementById('x' + i + 'link3').style.visibility = 'hidden';	
}


for (var i = 1; i < 10; i++) {
	if (typeof(document.getElementById('s' + i).options[document.getElementById('s' + i).selectedIndex]) != 'undefined' && document.getElementById('s' + i).options[document.getElementById('s' + i).selectedIndex] != null &&
			  (document.getElementById('s' + i).options[document.getElementById('s' + i).selectedIndex].value.startsWith('x' + i + '1') 
			|| document.getElementById('s' + i).options[document.getElementById('s' + i).selectedIndex].value.startsWith('x' + i + '2')
			|| document.getElementById('s' + i).options[document.getElementById('s' + i).selectedIndex].value.startsWith('x' + i + '3'))) {		
		document.getElementById('x' + i +'button').style.visibility = 'visible';
		document.getElementById('x' + i +'link1').style.visibility = 'visible';	
		document.getElementById('x' + i +'link2').style.visibility = 'visible';	
		//document.getElementById('x9link3').style.visibility = 'visible';	
	}
}
	
  });
  

	var a1 = document.getElementById('s1');
	a1.addEventListener('change', function() {
	  if (a1.options[a1.selectedIndex].value == 'x11' || a1.options[a1.selectedIndex].value == 'x12' || a1.options[a1.selectedIndex].value == 'x13') {
		document.getElementById('x1button').style.visibility = 'visible';
		document.getElementById('x1link1').style.visibility = 'visible';	
		document.getElementById('x1link2').style.visibility = 'visible';	
		//document.getElementById('x1link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x1button').style.visibility = 'hidden';
			  document.getElementById('x1link1').style.visibility = 'hidden';	
			  document.getElementById('x1link2').style.visibility = 'hidden';	
			//document.getElementById('x1link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
	
	var a2 = document.getElementById('s2');
	a2.addEventListener('change', function() {
	  if (a2.options[a2.selectedIndex].value == 'x21' || a2.options[a2.selectedIndex].value == 'x22' || a2.options[a2.selectedIndex].value == 'x23') {
		document.getElementById('x2button').style.visibility = 'visible';
		document.getElementById('x2link1').style.visibility = 'visible';	
		document.getElementById('x2link2').style.visibility = 'visible';	
		//document.getElementById('x2link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x2button').style.visibility = 'hidden';
			  document.getElementById('x2link1').style.visibility = 'hidden';	
			  document.getElementById('x2link2').style.visibility = 'hidden';	
			//document.getElementById('x2link3').style.visibility = 'hidden';	
		  
	  }
	}, false);

	var a3 = document.getElementById('s3');
	a3.addEventListener('change', function() {
	  if (a3.options[a3.selectedIndex].value == 'x31' || a3.options[a3.selectedIndex].value == 'x32' || a3.options[a3.selectedIndex].value == 'x33') {
		document.getElementById('x3button').style.visibility = 'visible';
		document.getElementById('x3link1').style.visibility = 'visible';	
		document.getElementById('x3link2').style.visibility = 'visible';	
		//document.getElementById('x3link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x3button').style.visibility = 'hidden';
			  document.getElementById('x3link1').style.visibility = 'hidden';	
			  document.getElementById('x3link2').style.visibility = 'hidden';	
			//document.getElementById('x3link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
	var a4 = document.getElementById('s4');
	a4.addEventListener('change', function() {
	  if (a4.options[a4.selectedIndex].value == 'x41' || a4.options[a4.selectedIndex].value == 'x42' || a4.options[a4.selectedIndex].value == 'x43') {
		document.getElementById('x4button').style.visibility = 'visible';
		document.getElementById('x4link1').style.visibility = 'visible';	
		document.getElementById('x4link2').style.visibility = 'visible';	
		//document.getElementById('x4link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x4button').style.visibility = 'hidden';
			  document.getElementById('x4link1').style.visibility = 'hidden';	
			  document.getElementById('x4link2').style.visibility = 'hidden';	
			//document.getElementById('x4link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
	var a5 = document.getElementById('s5');
	a5.addEventListener('change', function() {
	  if (a5.options[a5.selectedIndex].value == 'x51' || a5.options[a5.selectedIndex].value == 'x52' || a5.options[a5.selectedIndex].value == 'x53') {
		document.getElementById('x5button').style.visibility = 'visible';
		document.getElementById('x5link1').style.visibility = 'visible';	
		document.getElementById('x5link2').style.visibility = 'visible';	
		//document.getElementById('x5link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x5button').style.visibility = 'hidden';
			  document.getElementById('x5link1').style.visibility = 'hidden';	
			  document.getElementById('x5link2').style.visibility = 'hidden';	
			//document.getElementById('x5link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
	var a6 = document.getElementById('s6');
	a6.addEventListener('change', function() {
	  if (a6.options[a6.selectedIndex].value == 'x61' || a6.options[a6.selectedIndex].value == 'x62' || a6.options[a6.selectedIndex].value == 'x63') {
		document.getElementById('x6button').style.visibility = 'visible';
		document.getElementById('x6link1').style.visibility = 'visible';	
		document.getElementById('x6link2').style.visibility = 'visible';	
		//document.getElementById('x6link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x6button').style.visibility = 'hidden';
			  document.getElementById('x6link1').style.visibility = 'hidden';	
			  document.getElementById('x6link2').style.visibility = 'hidden';	
			//document.getElementById('x6link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
	var a7 = document.getElementById('s7');
	a7.addEventListener('change', function() {
	  if (a7.options[a7.selectedIndex].value == 'x71' || a7.options[a7.selectedIndex].value == 'x72' || a7.options[a7.selectedIndex].value == 'x73') {
		document.getElementById('x7button').style.visibility = 'visible';
		document.getElementById('x7link1').style.visibility = 'visible';	
		document.getElementById('x7link2').style.visibility = 'visible';	
		//document.getElementById('x7link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x7button').style.visibility = 'hidden';
			  document.getElementById('x7link1').style.visibility = 'hidden';	
			  document.getElementById('x7link2').style.visibility = 'hidden';	
			//document.getElementById('x7link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
	var a8 = document.getElementById('s8');
	a8.addEventListener('change', function() {
	  if (a8.options[a8.selectedIndex].value == 'x81' || a8.options[a8.selectedIndex].value == 'x82' || a8.options[a8.selectedIndex].value == 'x83') {
		document.getElementById('x8button').style.visibility = 'visible';
		document.getElementById('x8link1').style.visibility = 'visible';	
		document.getElementById('x8link2').style.visibility = 'visible';	
		//document.getElementById('x8link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x8button').style.visibility = 'hidden';
			  document.getElementById('x8link1').style.visibility = 'hidden';	
			  document.getElementById('x8link2').style.visibility = 'hidden';	
			//document.getElementById('x8link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
	var a9 = document.getElementById('s9');
	a9.addEventListener('change', function() {
	  if (a9.options[a9.selectedIndex].value == 'x91' || a9.options[a9.selectedIndex].value == 'x92' || a9.options[a9.selectedIndex].value == 'x93') {
		document.getElementById('x9button').style.visibility = 'visible';
		document.getElementById('x9link1').style.visibility = 'visible';	
		document.getElementById('x9link2').style.visibility = 'visible';	
		//document.getElementById('x9link3').style.visibility = 'visible';	
	  } else {
			  document.getElementById('x9button').style.visibility = 'hidden';
			  document.getElementById('x9link1').style.visibility = 'hidden';	
			  document.getElementById('x9link2').style.visibility = 'hidden';	
			//document.getElementById('x9link3').style.visibility = 'hidden';	
		  
	  }
	}, false);
	
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);