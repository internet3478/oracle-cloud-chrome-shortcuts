/* Cookie Fuction Helpers */
var cookieTime = 30;
function setCookie(name,value) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (cookieTime * 1000)); // Cookie expire in 30 seconds
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function deleteCookie(name) {   
    document.cookie = name+'= ; Path=/; expires = Thu, 01 Jan 1970 00:00:00 GMT';  
}

/* Automation Function Helpers */
var defaultTimeout = 500;
var defaultRetry = 20;
function clickAndWait(type, query, callback) {
	console.log("Start function clickAndWait: Type=" + type + " Query=" + query);
	count = 0;
	var checkExist = setInterval(function() {
		if (type == 'query') {
			if (typeof(document.querySelector(query)) != 'undefined' && document.querySelector(query) != null) {
				console.log("- function clickAndWait: Type=" + type + " Query=" + query + " query found.");
				document.querySelector(query).click();
				clearInterval(checkExist);
				callback(true);
				return;
			}
		} else if (type == 'xpath') {
			if (typeof(document.evaluate(query , document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue) != 'undefined' 
			&& document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue != null) {
				document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.click();
				console.log("- function clickAndWait: Type=" + type + " XPath=" + query + " query found.");
				clearInterval(checkExist);
				callback(true);
				return;
			}
		}
		
		console.log("- function clickAndWait: Type=" + type + " Query=" + query + " Count=" + count);
		if (++count == defaultRetry) {
			console.log("- function clickAndWait: Type=" + type + " Query=" + query + " count ended. Exiting.");
			clearInterval(checkExist);
			callback(false);
			return;
		}
	}, defaultTimeout);
	console.log("Out Async function clickAndWait: Type=" + type + " Query=" + query);
}

function input(type, query, x, callback) {
	console.log("Start function input: Type=" + type + " Query=" + query + " Input=" + x);
	count = 0;
	var checkExist = setInterval(function() {
		if (type == 'query') {
			if (typeof(document.querySelector(query)) != 'undefined' && document.querySelector(query) != null){
				document.querySelector(query).value = x;
					clearInterval(checkExist);
					callback(true);
					return;
				}
		} else if (type == 'xpath') {
			if (typeof(document.evaluate(query , document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue) != 'undefined' 
			&& document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue != null) {
				document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.value = x;
				console.log("- function input: Type=" + type + " XPath=" + query + " query found.");
				clearInterval(checkExist);
				callback(true);
				return;
			}
		}

		console.log("- function input: Type=" + type + " Query=" + query + " Count=" + count);
		if (++count == defaultRetry) {
			clearInterval(checkExist);
			callback(false);
			return;
		}
	}, defaultTimeout);
	console.log("Out Async function input: Type=" + type + " Query=" + query + " Input=" + x);
}

function wait(type, query, callback) {
	console.log("Start function wait: Type=" + type + " Query=" + query);
	count = 0;
	var checkExist = setInterval(function() {
		if (type == 'query') {
			if (typeof(document.querySelector(query)) != 'undefined' && document.querySelector(query) != null) {
				console.log("- function wait: Type=" + type + " Query=" + query + " query found.");
				clearInterval(checkExist);
				callback(true);
				return;
			}
		} else if (type == 'xpath') {
			if (typeof(document.evaluate(query , document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue) != 'undefined' 
			&& document.evaluate(query, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue != null) {
				console.log("- function wait: Type=" + type + " XPath=" + query + " query found.");
				clearInterval(checkExist);
				callback(true);
				return;
			}
		}
		
		console.log("- function wait: Type=" + type + " Query=" + query + " Count=" + count);
		if (++count == defaultRetry) {
			console.log("- function wait: Type=" + type + " Query=" + query + " count ended. Exiting.");
			clearInterval(checkExist);
			callback(false);
			return;
		}
	}, defaultTimeout);
	console.log("Out Async function wait: Type=" + type + " Query=" + query);
}

/* Extra functions */
/* Close View Person Modal Dialog box */
function vpclose(id) {
	document.getElementById('id' + id).remove();
}

function ed() {
	setCookie('xf', 'ed');
	document.getElementById("spinner").style.visibility = "visible";
	window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_workforce_management_data_exchange&pageParams=fndGlobalItemNodeId%3DitemNode_workforce_management_data_exchange';
} 

function pm() {
	setCookie('xf', 'pm');
	setCookie('x1', document.getElementById("pm").value);
	document.getElementById("spinner").style.visibility = "visible";
	window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_workforce_management_person_management&pageParams=fndGlobalItemNodeId%3DitemNode_workforce_management_person_management';
} 

function ue() {
	setCookie('xf', 'ue');
	document.getElementById("spinner").style.visibility = "visible";
	window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_workforce_management_data_exchange&pageParams=fndGlobalItemNodeId%3DitemNode_workforce_management_data_exchange';
}

function cl() {
	window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_payroll_payroll_checklists&pageParams=fndGlobalItemNodeId%3DitemNode_payroll_payroll_checklists';
}

function sc() {
	setCookie('xf', 'sc');
	setCookie('x1', document.getElementById("sc").value);
	document.getElementById("spinner").style.visibility = "visible";
	window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=ASE_FUSE_SECURITY_CONSOLE';
}

function as() {
	chrome.storage.sync.get({xuser:'', xpassword:''}, function(items){
		document.getElementById("spinner").style.visibility = "visible";
		console.log("Assignment 1: Invoking REST API");
		var Http = new XMLHttpRequest();
		var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("as").value + '&fields=PersonId';
		Http.open("GET", url, true);
		Http.setRequestHeader("Content-type", "application/json");
		Http.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
		Http.send();
		
		Http.onreadystatechange = function() {
			if(Http.readyState == 4 && Http.status == 200) {
			   //console.log(Http.responseText);
			   var emp = JSON.parse(Http.responseText);
			   
				if (emp.count != 0) {
					console.log("Assignment 2: Invoking REST API");
					var Http2 = new XMLHttpRequest();
					var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("as").value;
					Http2.open("GET", emp.items[0].links.find(function(e){return e.name == 'assignments'}).href + '?fields=AssignmentId', true);
					Http2.setRequestHeader("Content-type", "application/json");
					Http2.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
					Http2.send();
				
					Http2.onreadystatechange = function() {
						if(Http2.readyState == 4 && Http2.status == 200) {	
							var asg = JSON.parse(Http2.responseText);
							window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_workforce_management_person_management&fnd=%252FWEB-INF%252Foracle%252Fapps%252Fhcm%252Femployment%252Fmanage%252Fui%252Fflow%252FManageEmploymentTF.xml%2523ManageEmploymentTF%3BassignmentId%253D' + asg.items[0].AssignmentId + '%253BeffectiveDate%253D' + document.getElementById("asdate").value + '%3B%3BEmployment%3Bfalse%3B256%3B%3B%3B&hcm_ext=as&hcm_param=' + document.getElementById("as").value + '&hcm_date=' + document.getElementById("asdate").value;
						}
					}
				} else {
					document.getElementById("as").value = "Not_Found";
					document.getElementById("spinner").style.visibility = "hidden";
				}
			}
		}
	});
}

function vp() {
	console.log("View Person 1:");
	chrome.storage.sync.get({xuser:'', xpassword:''}, function(items){
			document.getElementById("spinner").style.visibility = "visible";
			var Http = new XMLHttpRequest();
			var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("vp").value;
			console.log('View Person 2: Invoking REST ' + url);
			Http.open("GET", url, true);
			Http.setRequestHeader("Content-type", "application/json");
			Http.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
			Http.send();
			
			Http.onreadystatechange = function() {
				if(Http.readyState == 4 && Http.status == 200) {
				   //console.log(Http.responseText);
				   var emp = JSON.parse(Http.responseText);
				   //alert(JSON.stringify(emp));
				   
				   var id = new Date().getTime();
					var modal = document.createElement("div");	// Use a div so it will always stay at top
					modal.setAttribute("id", "id" + id);
					modal.className = 'modal';
					modal.style.backgroundColor = 'white';
					modal.style.position = 'fixed';				// Position is fixed for fixing the shortcuts, always on top and the top
					modal.style.top = '20px';						// Position is fixed starting point 0
					modal.style.left = '20px';					// Marging starting from left at 15%
					modal.style.width = '1200px';				// Total width
					modal.style.height = '800px';
					modal.style.zIndex = '99999';				// High value for zIndex to stay on top of other layers
					modal.style.fontFamily = 'Calibri';			// Use of a nice font
					//modal.style.lineHeight = '0';	
					modal.style.padding = '15px';
					//node.style.verticalAlign = 'bottom';
					modal.style.fontSize = '12px';
					modal.style.overflow = 'scroll';
					modal.style.border = '1px solid black';
					
					// The X for closing the modal
					
					var x = document.createElement('table');
					x.style.width = '100%';
					x.style.textAlign = 'right';
					x.insertRow(0).insertCell(0).innerHTML = '<b><span id="span' + id + '" style="background-color: lightgray;">&nbsp;&nbsp;X&nbsp;&nbsp;</span></b>';
					x.insertRow(0).insertCell(0).style.textAlign = 'right';
					
					modal.appendChild(x);
					
					var t = document.createElement('table');
					var r = t.insertRow(0); 
					var c = r.insertCell(0);
					var casg = r.insertCell(1);
					var cwr = r.insertCell(2);
					c.style.verticalAlign = "top";
					
					for (var i = 0; i < emp.items.length; i++) {
						c.innerHTML += '<b style="font-size:20px;">Person Information ' + (i + 1) + '</b><br />';
						Object.keys(emp.items[0]).forEach(function(key) {
							if (key != 'links') {
								//var output = document.createElement("p");	// Use a div so it will always stay at top
								//output.textContent = key + ": " + emp.items[0][key];
								//var newLine = document.createElement("br");
								//modal.appendChild(output);
								//modal.appendChild(newLine);
								//console.table('Key : ' + key + ', Value : ' + emp.items[i][key])
								
								c.innerHTML += key + ": " + emp.items[i][key] + '<br />';
							}
						});
						
						/*
						console.log("Assignment 11: Invoking REST API");
						var Http11 = new XMLHttpRequest();
						//var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("as").value;
						Http11.open("GET", emp.items[i].links.find(function(e){return e.name == 'personDFF'}).href, true);
						Http11.setRequestHeader("Content-type", "application/json");
						Http11.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
						Http11.send();
					
						Http11.onreadystatechange = function() {
							if(Http11.readyState == 4 && Http11.status == 200) {	
								var pei = JSON.parse(Http11.responseText);
								//window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_workforce_management_person_management&fnd=%252FWEB-INF%252Foracle%252Fapps%252Fhcm%252Femployment%252Fmanage%252Fui%252Fflow%252FManageEmploymentTF.xml%2523ManageEmploymentTF%3BassignmentId%253D' + asg.items[0].AssignmentId + '%253BeffectiveDate%253D' + document.getElementById("asdate").value + '%3B%3BEmployment%3Bfalse%3B256%3B%3B%3B&hcm_ext=as&hcm_param=' + document.getElementById("as").value + '&hcm_date=' + document.getElementById("asdate").value;
								
								//var c = r.insertCell(2);
								//c.style.verticalAlign = "top";
								for (var k = 0; k < pei.items.length; k++) {
									c.innerHTML += '<b style="font-size:20px;">Person Extra Information</b><br />';
									Object.keys(pei.items[k]).forEach(function(key) {
										if (key != 'links') {
											c.innerHTML += key + ": " + pei.items[k][key] + '<br />';
										}
									});
								}
							}
						}	
						*/
						
					}
					
					
					if (emp.count != 0) {
						console.log("Assignment 3: Invoking REST API");
						var Http3 = new XMLHttpRequest();
						var indexOfEmps = emp.items[0].links.find(function(e){return e.rel == 'self'}).href.indexOf('emps');
						var url3 = 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/workers/' + emp.items[0].links.find(function(e){return e.rel == 'self'}).href.substring(indexOfEmps + 5) + '/child/workRelationships';
						Http3.open("GET", url3, true);
						Http3.setRequestHeader("Content-type", "application/json");
						Http3.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
						Http3.send();
					
						Http3.onreadystatechange = function() {
							if(Http3.readyState == 4 && Http3.status == 200) {	
								var wr = JSON.parse(Http3.responseText);
								cwr.style.verticalAlign = "top";
								for (var j = 0; j < wr.items.length; j++) {
									cwr.innerHTML += '<b style="font-size:20px;">Work Relationship ' + (j + 1) + '</b><br />';
									Object.keys(wr.items[j]).forEach(function(key) {
										if (key != 'links') {
											cwr.innerHTML += key + ": " + wr.items[j][key] + '<br />';
										}
									});
									
									
									console.log("Assignment 31: Invoking REST API");
									var Http31 = new XMLHttpRequest();
									Http31.open("GET", wr.items[j].links.find(function(e){return e.name == 'workRelationshipsDFF'}).href, true);
									Http31.setRequestHeader("Content-type", "application/json");
									Http31.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
									Http31.send();
								
									Http31.onreadystatechange = function() {
										if(Http31.readyState == 4 && Http31.status == 200) {	
											var dff = JSON.parse(Http31.responseText);
											for (var k = 0; k < dff.items.length; k++) {
												cwr.innerHTML += '<b style="font-size:20px;">Flex Fields</b><br />';
												Object.keys(dff.items[k]).forEach(function(key) {
													if (key != 'links') {
														cwr.innerHTML += key + ": " + dff.items[k][key] + '<br />';
													}
												});
											}
										}
									}	
								}
							}
						}
						
						console.log("Assignment 2: Invoking REST API");
						var Http2 = new XMLHttpRequest();
						//var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("as").value;
						Http2.open("GET", emp.items[0].links.find(function(e){return e.name == 'assignments'}).href, true);
						Http2.setRequestHeader("Content-type", "application/json");
						Http2.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
						Http2.send();
					
						Http2.onreadystatechange = function() {
							if(Http2.readyState == 4 && Http2.status == 200) {	
								var asg = JSON.parse(Http2.responseText);
								//window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_workforce_management_person_management&fnd=%252FWEB-INF%252Foracle%252Fapps%252Fhcm%252Femployment%252Fmanage%252Fui%252Fflow%252FManageEmploymentTF.xml%2523ManageEmploymentTF%3BassignmentId%253D' + asg.items[0].AssignmentId + '%253BeffectiveDate%253D' + document.getElementById("asdate").value + '%3B%3BEmployment%3Bfalse%3B256%3B%3B%3B&hcm_ext=as&hcm_param=' + document.getElementById("as").value + '&hcm_date=' + document.getElementById("asdate").value;
								
								//var c = r.insertCell(2);
								casg.style.verticalAlign = "top";
								for (var j = 0; j < asg.items.length; j++) {
									casg.innerHTML += '<b style="font-size:20px;">Assignment ' + (j + 1) + '</b><br />';
									Object.keys(asg.items[j]).forEach(function(key) {
										if (key != 'links') {
											casg.innerHTML += key + ": " + asg.items[j][key] + '<br />';
										}
									});
									
									console.log("Assignment 21: Invoking REST API");
									var Http21 = new XMLHttpRequest();
									//var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("as").value;
									Http21.open("GET", asg.items[j].links.find(function(e){return e.name == 'peopleGroupKeyFlexfield'}).href, true);
									Http21.setRequestHeader("Content-type", "application/json");
									Http21.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
									Http21.send();
								
									Http21.onreadystatechange = function() {
										if(Http21.readyState == 4 && Http21.status == 200) {	
											var ppg = JSON.parse(Http21.responseText);
											for (var k = 0; k < ppg.items.length; k++) {
												casg.innerHTML += '<b style="font-size:20px;">People Group</b><br />';
												Object.keys(ppg.items[k]).forEach(function(key) {
													if (key != 'links') {
														casg.innerHTML += key + ": " + ppg.items[k][key] + '<br />';
													}
												});
											}
										}
									}	
									
									console.log("Assignment 22: Invoking REST API");
									var Http22 = new XMLHttpRequest();
									//var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("as").value;
									Http22.open("GET", asg.items[j].links.find(function(e){return e.name == 'assignmentDFF'}).href, true);
									Http22.setRequestHeader("Content-type", "application/json");
									Http22.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
									Http22.send();
								
									Http22.onreadystatechange = function() {
										if(Http22.readyState == 4 && Http22.status == 200) {	
											var aei = JSON.parse(Http22.responseText);
											for (var k = 0; k < aei.items.length; k++) {
												casg.innerHTML += '<b style="font-size:20px;">Extra Information</b><br />';
												Object.keys(aei.items[k]).forEach(function(key) {
													if (key != 'links') {
														casg.innerHTML += key + ": " + aei.items[k][key] + '<br />';
													}
												});
											}
										}
									}	
									
								}
							}
						}
						
						
					} else {
						document.getElementById("as").value = "Not_Found";
						document.getElementById("spinner").style.visibility = "hidden";
					}
					

					modal.appendChild(t);
					
					document.documentElement.appendChild(modal);
					
					document.getElementById('span' + id).addEventListener('click', function(){
						vpclose(id);
					});
					
					/*
					if (emp.count != 0) {
						var Http2 = new XMLHttpRequest();
						var url= 'https://' + window.location.hostname + '/hcmRestApi/resources/latest/emps?q=PersonNumber=' + document.getElementById("as").value;
						Http2.open("GET", emp.items[0].links.find(function(e){return e.name == 'assignments'}).href + '?fields=AssignmentId', true);
						Http2.setRequestHeader("Content-type", "application/json");
						Http2.setRequestHeader("Authorization", "Basic " + btoa(items.xuser + ":" + items.xpassword));
						Http2.send();
					
						Http2.onreadystatechange = function() {
							if(Http2.readyState == 4 && Http2.status == 200) {	
								var asg = JSON.parse(Http2.responseText);
								window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FndOverview?fndGlobalItemNodeId=itemNode_workforce_management_person_management&fnd=%252FWEB-INF%252Foracle%252Fapps%252Fhcm%252Femployment%252Fmanage%252Fui%252Fflow%252FManageEmploymentTF.xml%2523ManageEmploymentTF%3BassignmentId%253D' + asg.items[0].AssignmentId + '%253BeffectiveDate%253D' + document.getElementById("asdate").value + '%3B%3BEmployment%3Bfalse%3B256%3B%3B%3B&hcm_ext=as&hcm_param=' + document.getElementById("as").value + '&hcm_date=' + document.getElementById("asdate").value;
							}
						}
					} else {
						document.getElementById("as").value = "Not_Found";
						document.getElementById("spinner").style.visibility = "hidden";
					}
					*/
					
					document.getElementById("spinner").style.visibility = "hidden";
				} else {
					document.getElementById("spinner").style.visibility = "hidden";
				}
			}
		});
}

/* Main */
// Cosmetic look
document.body.style.borderTop = "24px solid white";

// Create a space at the top to allocate the shortcuts
var node = document.createElement("div");	// Use a div so it will always stay at top
//node.setAttribute("id", "shortcuts");
//node.style.border = '1px solid red';		// Border is red
node.style.position = 'fixed';				// Position is fixed for fixing the shortcuts, always on top and the top
node.style.top = '0';						// Position is fixed starting point 0
node.style.left = '15%';					// Marging starting from left at 15%
node.style.width = '1400px';				// Total width 
node.style.zIndex = '99999';				// High value for zIndex to stay on top of other layers
node.style.fontFamily = 'Calibri';			// Use of a nice font
node.style.lineHeight = '0';	
//node.style.verticalAlign = 'bottom';
node.style.fontSize = '12px';
//node.style.backgroundColor = "red";			// Background color

// Create the loading icon
var img = document.createElement('img'); 
img.src = chrome.runtime.getURL("spinner.gif"); 
img.style.width = "22px";
img.style.height = "22px";
img.style.verticalAlign = 'top';
img.setAttribute("id", "spinner");
img.style.visibility = "hidden";
node.appendChild(img); 

// Create the following buttons and append them to the div above
//var b = document.createElement('button');
//var t = document.createElement('input');

chrome.storage.sync.get({s1: '', s2: '', s3: '', s4: '', s5: '', s6: '', s7: '', s8: '', s9:''}, function(items){
	var mapping = {
		ed: 'Extract Definitions', 
		cl: 'Checklist', 
		pm: 'Person Management',
		as: 'Assignment',
		bip: 'BIP',
		sc: 'Security Console Users',
		ue: 'User Entities',
		vp: 'View Person'
	};

	// key = s1 -> (value is a concatenated texts x11;C1;Data Exchange;Extract Definitions)
	// key = s8 -> x83;...
	// Use of let instead of var
	for (let key in items) {
		if (items[key].split(';')[0] != '') {
			
			// Add a input text in front of the button
			if (items[key].split(';')[0] == 'pm' || items[key].split(';')[0] == 'as' || items[key].split(';')[0] == 'sc' || items[key].split(';')[0] == 'vp') {
				var t = document.createElement('input');
				t = document.createElement('input');
				t.setAttribute("id", items[key].split(';')[0]); //key=s2, items[key]=pm
				t.type = "text";
				t.size = "8";
				t.style.fontFamily = 'Calibri';
				t.style.fontSize = '12px';
				t.style.boxSizing = 'border-box';
				t.style.height = '20px';
				t.addEventListener("keyup", function(event) {
					event.preventDefault();
					if (event.keyCode === 13) {
						// One line does not working for firefox
						//window[document.activeElement.id](); // This will trigger function pm(), as(), etc
						
						// Have to least all if/else for firefox to work
						if (items[key].split(';')[0] == 'ed') {
							ed();
						} else if (items[key].split(';')[0] == 'pm') {
							pm()
						} else if (items[key].split(';')[0] == 'ue') {
							ue();
						} else if (items[key].split(';')[0] == 'cl') {
							cl();
						} else if (items[key].split(';')[0] == 'sc') {	
							sc();
						} else if (items[key].split(';')[0] == 'as') {
							as();
						} else if(items[key].split(';')[0] == 'vp') {
							vp();
						}
					}
				});
				node.appendChild(t);
			}
			
			// Add a second object in front of the button
			// In this case, it is a calendar popup
			if (items[key].split(';')[0] == 'as') {
				var t = document.createElement('input');
				t = document.createElement('input');
				t.setAttribute("id", items[key].split(';')[0] + "date"); //key=s2, items[key]=as -> asdate
				t.type = "date";
				t.size = "8";
				t.style.width = '120px';			
				t.style.fontFamily = 'Calibri';
				t.style.fontSize = '12px';
				t.style.boxSizing = 'border-box';
				t.style.height = '20px';
				t.valueAsDate  = new Date();
				t.addEventListener("keyup", function(event) {
					event.preventDefault();
					if (event.keyCode === 13) {
						window[document.activeElement.id.substring(0,2)](); //asdate -> as This will trigger function as()
					}
				});
				node.appendChild(t);
			}
			
			// Create a button, check if it is a custom x button
			if (items[key].split(';')[0].startsWith("x")) {
				// Custom x1 = Navigator Menu
				if(items[key].split(';')[0].substring(0, 1) + items[key].split(';')[0].substring(2,3) == 'x1') {
					var b = document.createElement('button'); 
					b.innerHTML = items[key].split(';')[1];
					b.addEventListener('click', function(){
						// This function scope only gets the last for loop variable
						// so the for loop use let instead of var and the function is written here instead of invoking function via windows[]
						
						// Get the custom values
						x1=items[key].split(';')[2];
						x2=items[key].split(';')[3];
						x3=items[key].split(';')[4];
						
						// Start the spinner
						document.getElementById("spinner").style.visibility = "visible";
						
						// Click on navigator
						clickAndWait('query', 'a[id*="pt1:_UISmmLink"]', function(click){
							if (click == true) {
								// Click on x1
								clickAndWait('query', 'a[title="' + x1 + '"]', function(click){ 
									if (click == true) {
										document.getElementById("spinner").style.visibility = "hidden";
									}
								});
							}
						});
					});
					b.style.marginRight = "3px";
					b.style.fontFamily = 'Calibri';
					b.style.fontSize = '12px';
					b.style.height = '20px';
					node.appendChild(b);
				}
				
				// Custom x2 = Global Search
				else if(items[key].split(';')[0].substring(0, 1) + items[key].split(';')[0].substring(2,3) == 'x2') {
					var b = document.createElement('button');
					b.innerHTML = items[key].split(';')[1];
					b.addEventListener('click', function(){
						setCookie('xf', 'x2');
						setCookie('x1', items[key].split(';')[2]);
						setCookie('x2', items[key].split(';')[3]);
						setCookie('x3', items[key].split(';')[4]);
						document.getElementById("spinner").style.visibility = "visible";
						window.location = 'https://' + window.location.hostname + '/fscmUI/faces/FuseTaskListManagerTop';
					});
					b.style.marginRight = "3px";
					b.style.fontFamily = 'Calibri';
					b.style.fontSize = '12px';
					b.style.height = '20px';
					node.appendChild(b);
				}
				
				// Custom x3 = Quick Actions
				else if(items[key].split(';')[0].substring(0, 1) + items[key].split(';')[0].substring(2,3) == 'x3') {
					var b = document.createElement('button'); 
					b.innerHTML = items[key].split(';')[1];
					b.addEventListener('click', function(){
						document.getElementById("spinner").style.visibility = "visible";						
						if (!(typeof(document.getElementById("clusters_container")) != 'undefined' && document.getElementById("clusters_container") != null)) {
							setCookie('xf', 'x3');
							setCookie('x1', items[key].split(';')[2]);
							setCookie('x2', items[key].split(';')[3]);
							setCookie('x3', items[key].split(';')[4]);
							window.location = 'https://' + window.location.hostname + '/hcmUI/faces/FuseWelcome';
							return;
						}
						
						Array.from(document.querySelectorAll('a[class="flat-tabs-text"]')).forEach(button=>button.click());
						clickAndWait('xpath', '//a[text()="About Me"]', function(click) { } );
						x1=items[key].split(';')[2];
						x2=items[key].split(';')[3];
						x3=items[key].split(';')[4];
							
						clickAndWait('xpath', '//a[contains(text(),"' + x1 + '")]', function(click) {
							document.getElementById("spinner").style.visibility = "hidden";
						});
						
						/*
						var count1 = 0;
						var checkExist1 = setInterval(function() {
							if (typeof(document.evaluate( '//a[contains(text(),"' + x1 + '")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue) != 'undefined' && document.evaluate( '//a[contains(text(),"' + x1 + '")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue != null){
								document.evaluate( '//a[contains(text(),"' + x1 + '")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.click();
								
								if (typeof(document.evaluate( '//a[contains(text(),"' + x2 + '")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue) != 'undefined' && document.evaluate( '//a[contains(text(),"' + x2 + '")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue != null){
									document.evaluate( '//a[contains(text(),"' + x2 + '")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.click();
								}
								document.getElementById("spinner").style.visibility = "hidden";
								clearInterval(checkExist1);
							}
							
							console.log(count1);
							if (count1 == 10) {
								console.log("off");
								document.getElementById("spinner").style.visibility = "hidden";
								clearInterval(checkExist1);
							}
							count1 += 1;
						}, 500);							
						*/
					});
					b.style.marginRight = "3px";
					b.style.fontFamily = 'Calibri';
					b.style.fontSize = '12px';
					b.style.height = '20px';
					node.appendChild(b);
				}
			}
			else {
				var b = document.createElement('button'); 
				b.innerHTML = mapping[items[key].split(';')[0]]; // button name by mapping
				console.log('functions: ' + items[key].split(';')[0]);
				
				// Not working in FireFox window[]
				//b.addEventListener('click', window[items[key].split(';')[0]]);
				
				// Replace by
				b.addEventListener('click', function() {

					if (items[key].split(';')[0] == 'ed') {
						ed();
					} else if (items[key].split(';')[0] == 'pm') {
						pm()
					} else if (items[key].split(';')[0] == 'ue') {
						ue();
					} else if (items[key].split(';')[0] == 'cl') {
						cl();
					} else if (items[key].split(';')[0] == 'sc') {	
						sc();
					} else if (items[key].split(';')[0] == 'as') {
						as();
					} else if(items[key].split(';')[0] == 'vp') {
						vp();
					}
				});
				b.style.marginRight = "3px";
				b.style.fontFamily = 'Calibri';
				b.style.fontSize = '12px';
				b.style.height = '20px';
				node.appendChild(b);
			}
		}
	}
});



if (window.location.href.indexOf("login") < 0) {
	document.documentElement.appendChild(node);
}

/* After page is reloaded */
// Get url parameters
const urlParams = new URLSearchParams(window.location.search);

// If page reloads after click a shortcut from the navigator, continue from link2
var cookiexf = getCookie('xf');
var cookiex1 = getCookie('x1');
var cookiex2 = getCookie('x2');
var cookiex3 = getCookie('x3');

// Load after page is loaded if needed
document.addEventListener('readystatechange', event => { 

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..

    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
		
		// Extract Definitions
		if (cookiexf != null && cookiexf === 'ed') {
			// After Data Exchange screen do
			// 1. click on Extract Definitions
			// 2. click on Show More link
			// 3. Add optional settings (TODO)
			// 3.1. Add Name
			// 3.2. Add Category
			// 3.3. Add LDG
			// 3.4. Click on Search

			console.log("Automating ed (Extract Definitions)");
			var xf = cookiexf; // Link function
			var x1 = cookiex1; // Link 1
			var x2 = cookiex2; // Link 2
			var x3 = cookiex3; // Link 3
			console.log("xf=" + xf + " x1=" + x1 + " x2=" + x2 + " x3=" + x3);
			deleteCookie('xf');
			
			document.getElementById("spinner").style.visibility = "visible";
			console.log("Extract Definitions 1: click on link");
			clickAndWait('query', 'div > div > a[title*="Extract Definitions"', function(click) {
				if (click == true) {
					console.log("Extract Definitions 2: click on Show Filters");
					clickAndWait('xpath', '//a[text()="Show Filters"]', function(click) {
						if (click == true) {
							// TODO: Check to search by LDG, Category, etc...
							document.getElementById("spinner").style.visibility = "hidden";
						} else {
							document.getElementById("spinner").style.visibility = "hidden";
							console.log("Extract Definitions 2: No Show Filters");
						}
					});
				} else {
					document.getElementById("spinner").style.visibility = "hidden";
					console.log("Extract Definitions 1: No link");
				}
			});
		}	

		// User Entities
		else if (cookiexf != null && cookiexf === 'ue') {
			// After Data Exchange screen do
			// 1. click on View User Entity Details
			// 2. Focus on name
			// 3. Add press 'Enter' to search
			
			console.log("Automating ue (User Entities)");
			var xf = cookiexf; // Link function
			var x1 = cookiex1; // Link 1
			var x2 = cookiex2; // Link 2
			var x3 = cookiex3; // Link 3
			console.log("xf=" + xf + " x1=" + x1 + " x2=" + x2 + " x3=" + x3);
			deleteCookie('xf');
			
			console.log("User Entities 1: click on View User Entity Details");
			clickAndWait('query', 'div > div > a[title="View User Entity Details"', function(click) {
				if (click == true) {
					var count = 0;
					var checkExist = setInterval(function() {
						if (typeof(document.getElementById('_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:SP2:it6::content')) != 'undefined' && document.getElementById('_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:SP2:it6::content') != null) {
							document.getElementById('_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:SP2:it6::content').focus();
							/* The enter click only works one time
							document.getElementById('_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:SP2:it6::content').addEventListener("keyup", function(event) {
								if (event.keyCode === 13) {
									document.getElementById('_FOpt1:_FOr1:0:_FONSr2:0:MAnt2:1:SP2:cb1').click();
								}
								event.preventDefault();
							});
							*/
							clearInterval(checkExist);
							return;
						}
						
						if (++count == defaultRetry) {
							console.log("- User Entities count ended. Exiting.");
							document.getElementById("spinner").style.visibility = "hidden";
							clearInterval(checkExist);
							return;
						}	
					}, defaultTimeout);
				} else {
					console.log("User Entities 1: No click on View User Entity Details");
				}
			});
		}
		
		// Person Management
		else if (cookiexf != null && cookiexf === 'pm') {
			// After Person Management screen do
			// 1. wait for input fields to be available
			// 2. fill in input fields
			// 3. check the checkbox terminated employee
			// 4. click search
			
			console.log("Automating pm (Person Management)");
			var xf = cookiexf; // Link function
			var x1 = cookiex1; // Link 1
			var x2 = cookiex2; // Link 2
			var x3 = cookiex3; // Link 3
			console.log("xf=" + xf + " x1=" + x1 + " x2=" + x2 + " x3=" + x3);
			deleteCookie('xf');
			deleteCookie('x1');
			
			document.getElementById("spinner").style.visibility = "visible";
			var count = 0;
			var checkExist = setInterval(function() {
				// Wait until all labels load and one of them is Person Number
				if (typeof(Array.prototype.slice.call(document.querySelectorAll('label')).filter(function (el) {return el.textContent === 'Person Number'})[0]) != 'undefined' && Array.prototype.slice.call(document.querySelectorAll('label')).filter(function (el) {return el.textContent === 'Person Number'})[0] != null){
					
					// Fill either person number or name. No wait
					if (!isNaN(x1)) {
						document.evaluate( '//span[label[contains(text(),"Person Number")]]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.value = x1;
					} else {
						document.evaluate( '//span[label[contains(text(),"Name")]]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.value = x1;
					}

					// Check the box
					document.evaluate('//span[label[contains(text(),"Include terminated work relationships")]]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.checked = true;
					
					// Click Search if there is any input
					if (x1.length > 0) {
						document.getElementById("pm").value = x1;
						document.evaluate( '//button[text()="Search"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue.click();
					}
					document.getElementById("spinner").style.visibility = "hidden";
					clearInterval(checkExist);
					return;
				}
				
				if (++count == defaultRetry) {
					console.log("- Person Management count ended. Exiting.");
					document.getElementById("spinner").style.visibility = "hidden";
					clearInterval(checkExist);
					return;
				}				
			}, defaultTimeout);
		}
		
		else if (cookiexf != null && cookiexf === 'sc') {
			// After Security Console screen do
			// 1. wait if the warning message appears, and click OK
			// 2. click on user
			// 3. fill user input text
			// 4. click search
			
			console.log("Automating sc (Security Console)");
			var xf = cookiexf; // Link function
			var x1 = cookiex1; // Link 1
			var x2 = cookiex2; // Link 2
			var x3 = cookiex3; // Link 3
			console.log("xf=" + xf + " x1=" + x1 + " x2=" + x2 + " x3=" + x3);
			deleteCookie('xf');
			deleteCookie('x1');
			
			clickAndWait('query', 'button[id="_FOd1::msgDlg::cancel"]', function(click) {
				clickAndWait('query', 'a[id="_FOpt1:_FOr1:0:_FONSr2:0:_FOTsdiASE_FUSE_UM_WORKAREA::disAcr"', function(click) {	
					if (click == true) {
						wait('query', 'button[title="Add User Account"]', function(click) {
							if (click == true) {
								if (x1.length > 0) {
									input('query', 'input[placeholder="Enter 3 or more characters to search"]', x1, function(click) {
										if (click == true) {
											document.querySelector('a[title="Search"]:not([aria-disabled="true"]) > img').parentNode.click();
											document.getElementById("spinner").style.visibility = "hidden";
											//clickAndWait('query', 'a[id="_FOpt1:_FOr1:0:_FONSr2:0:_FOTr1:1:pt1:f1:cil1"]', function(click) {
												//document.getElementById("spinner").style.visibility = "hidden";
											//});
										} else {
											document.getElementById("spinner").style.visibility = "hidden";
											console.log('Security Console 2: No input input[placeholder="Enter 3 or more characters to search"]');
										}
									});								
								}
								document.getElementById("spinner").style.visibility = "hidden";
							} else {
								document.getElementById("spinner").style.visibility = "hidden";
								console.log('Security Console 1: No clickAndWait a[id="_FOpt1:_FOr1:0:_FONSr2:0:_FOTsdiASE_FUSE_UM_WORKAREA::disAcr"');
							}
						});
					} else {
						document.getElementById("spinner").style.visibility = "hidden";
						console.log('Security Console 1: No wait button[title="Add User Account"]');
					}
				});
			});
			
			document.getElementById("spinner").style.visibility = "visible";
			
		}
	
        // Custom x2 requires page load before clicking on taskpane
		else if (cookiexf != null && cookiexf === 'x2') {
			console.log("Automating x2");
			var xf = cookiexf; // Link function
			var x1 = cookiex1; // Link 1
			var x2 = cookiex2; // Link 2
			var x3 = cookiex3; // Link 3
			console.log("xf=" + xf + " x1=" + x1 + " x2=" + x2 + " x3=" + x3);
			
			deleteCookie('xf');
			deleteCookie('x1');
			deleteCookie('x2');
			deleteCookie('x3');
			
			document.getElementById("spinner").style.visibility = "visible";

			// Click on TaskPane
			console.log("Global Search 1: Click on TaskPage");
			clickAndWait('query', 'a > img[title="Tasks"]', function(click) {
				if (click == true) {
					// Click on Search
					console.log("Global Search 2: Click on TaskPage > Search");
					clickAndWait('query', 'li > a[title*="Search"]', function(click) {
						if (click == true) { 
							// Input text x1
							console.log("Global Search 3: Input " + x1);
							input('query', "[id='pt1:r1:0:r0:1:AP1:s9:it1::content']", x1, function(input) {						
								if (input == true) {
									// Click on Search Icon
									console.log("Global Search 4: Click on Input > Search");
									document.querySelector('div[id="pt1:r1:0:r0:1:AP1:s9:ctb1"] > a').click();
									
									// Click on the result
									console.log("Global Search 5: Wait for results");
									clickAndWait('xpath', '//a[text()="' + x1 + '"]', function(click) {
										if (click == true) {
											if (x2 != '' && x2 != null) {
												console.log("Global Search 6: Click on " + x2);
												clickAndWait('xpath', '//a[text()="' + x2 + '"]', function(click){
													if (click == true) {
														document.getElementById("spinner").style.visibility = "hidden";
													} else {
														document.getElementById("spinner").style.visibility = "hidden";
														console.log("Global Search 6: No x2 '//a[text()=\"'" + x2 + "'\"]'");
													}
												});
											} else {
												document.getElementById("spinner").style.visibility = "hidden";
												console.log("Global Search 6: No x2");
											}
										} else {
											document.getElementById("spinner").style.visibility = "hidden";
											console.log("Global Search 5: No '//a[text()=\"'" + x1 + "'\"]'");
										}
									});
								} else {
									document.getElementById("spinner").style.visibility = "hidden";
									console.log("Global Search 3: No Input [id='pt1:r1:0:r0:1:AP1:s9:it1::content']");
								}
							});
						}
						else {
							document.getElementById("spinner").style.visibility = "hidden";
							console.log("Global Search 2: No clickOnQuery 'li > a[title*=\"Search\"]'");
						}
					});
				} else {
					document.getElementById("spinner").style.visibility = "hidden";
					console.log("Global Search 1: No clickOnTaskPane");
				}
			});
		}
		
		// 
		else if (cookiexf != null && cookiexf === 'x3') {
			console.log("Automating x3");
			var xf = cookiexf; // Link function
			var x1 = cookiex1; // Link 1
			var x2 = cookiex2; // Link 2
			var x3 = cookiex3; // Link 3
			console.log("xf=" + xf + " x1=" + x1 + " x2=" + x2 + " x3=" + x3);
			
			deleteCookie('xf');
			deleteCookie('x1');
			deleteCookie('x2');
			deleteCookie('x3');
			
			document.getElementById("spinner").style.visibility = "visible";
			
			Array.from(document.querySelectorAll('a[class="flat-tabs-text"]')).forEach(button=>button.click());
			clickAndWait('xpath', '//a[text()="About Me"]', function(click) { } );
			clickAndWait('xpath', '//a[contains(text(),"' + x1 + '")]', function(click) {
				document.getElementById("spinner").style.visibility = "hidden";
			});
		}
    }
});