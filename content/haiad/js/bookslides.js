// SVG Interactive Diagram Kit - version 5.1.0
//Last updated Feb 8, 2021 - removed excess code

//global variables
var curslideindex=0; //set global variable for current slide index; stands for current slide index, meaning you start at slide 0 index
var svgOrigWidth=800; //for resizing IE svgs when screen is resized
var svgCurrentWidth=0; //for resizing IE svgs when screen is resized


function setfocus(location){
    var doc = window.parent.document;
	doc.getElementById(location).focus();
}

function drilldown(newslide) { 
	//set focus on Home button
	setfocus("Home");
	createBreadcrumb(newslide);
	jumpToSlide(newslide);
}

function nextSlide(value) {
	//get current slide number to determine curslideindex value
	//var doc = window.parent.document.getElementById('IAD').contentWindow.document;
	var doc = document;
	var a = doc.getElementById("SlideNum").innerHTML.split(" ")[1];
	var curslideindex = a-1;
	
	//determine the new filename based on the next or previous curslideindex value
	if (value==0) {
		curslideindex=0;
	    } else {
	    curslideindex=curslideindex + value;
		
	    }
	var newslide = $("#SlideList li").eq(curslideindex).attr("data-filename"); //get filename of new slide
	//Dreamweaver and browsers don't like this:
	//var b = doc.querySelectorAll("#SlideList li");
	//var c = b[curslideindex].getAttribute("data-filename");
	//alert(c);
	
			
	//clear out current breadcrumbs
	var breadcrumblist=doc.getElementById('Breadcrumbs');
	breadcrumblist.innerHTML=''; 
	
	//add a new top breadcrumb
	createBreadcrumb(newslide);
	
	//populate slide, notes, and slidenum sections
	jumpToSlide(newslide);
}


function showSlide(newslide) {
	var doc = window.parent.document.getElementById('IAD').contentWindow.document;
	
	//clear out current breadcrumbs
	var breadcrumblist=doc.getElementById('Breadcrumbs');
	breadcrumblist.innerHTML=''; 
	
	//add a new top breadcrumb
	createBreadcrumb(newslide);
	
	//populate slide, notes, and slidenum sections
	jumpToSlide(newslide);
}

function repeatSlide(newslide) {
	var doc = window.parent.document.getElementById('IAD').contentWindow.document;
	//populate slide, notes, and slidenum sections
	jumpToSlide(newslide);
}

         
function jumpToSlide(newslide) {
	
	var doc = window.parent.document;
	//determine #SlideList li index value
	getslideindex(newslide);
	
	//Configure slideshow buttons
	confSlideShowButtons(curslideindex);
	
	//populate slide number and slide count
	var slideli = doc.getElementById("SlideList").getElementsByTagName("li"); 
	var x = slideli.length;
	var slidecount = " of " + x;
	var y = parseInt(curslideindex)+1;
	doc.getElementById("SlideNum").innerHTML = "Slide " + y + slidecount;
		
	//define content for new slide
	var newcontent = '<p></p><object id="SVGGraphic" type="image/svg+xml" src="images/' + newslide + '" data="images/' + newslide + '" onload="refresh();" style="max-width:100%" aria-label="Slide">This slide is described in the notes below.</object>';
	
	//Filter notes to proper div
	filterNotes(newslide);
	
	//populate svg graphic
	doc.getElementById("SlideContainer").innerHTML = newcontent;	
}


function filterNotes(newslide){
	
	var doc = window.parent.document;
	var a = newslide.split('.',1)[0];
	var newnotes= a+"_notes";
	var noteselements = doc.getElementsByClassName("notes");
	var notescount = noteselements.length;
	
	//if (notescount != 0) {//if statement needed for first svg
	  var i;
	  for (i = 0; i<noteselements.length; i++)
	    {
		  noteselements[i].classList.add("hideme");
	    }
	  doc.getElementById(newnotes).classList.remove("hideme");
	//}
}


function confSlideShowButtons(value) {
	var doc = window.parent.document;
	var slideli = doc.getElementById("SlideList").getElementsByTagName("li");
	var totalslides=slideli.length; //total number of slides
		
	if (value==0) { //if reach beginning of slides
	       doc.getElementById('Previous').classList.add('disabled');
		   doc.getElementById('Previous').setAttribute('aria-disabled','true');
	       doc.getElementById('Next').classList.remove('disabled');
		   doc.getElementById('Next').setAttribute('aria-disabled','false');
		   doc.getElementById('Home').classList.add('disabled');
		   doc.getElementById('Home').setAttribute('aria-disabled','true');
	       } 
	   
	   else if (value==(totalslides-1)) { //if reach end of slides
		   doc.getElementById('Previous').classList.remove('disabled');	
		   doc.getElementById('Previous').setAttribute('aria-disabled','false');
	       doc.getElementById('Next').classList.add('disabled');
		   doc.getElementById('Next').setAttribute('aria-disabled','true');
		   doc.getElementById('Home').classList.remove('disabled');
		   doc.getElementById('Home').setAttribute('aria-disabled','false');
	       }
		   
	   else { //if in between slide 1 and end of slides
	         doc.getElementById('Previous').classList.remove('disabled');
			 doc.getElementById('Previous').setAttribute('aria-disabled','false');	
	         doc.getElementById('Next').classList.remove('disabled');
			 doc.getElementById('Next').setAttribute('aria-disabled','false');
			 doc.getElementById('Home').classList.remove('disabled');
			 doc.getElementById('Home').setAttribute('aria-disabled','false');
	         }
}


function createBreadcrumb(newslide) {
	getslideindex(newslide);
	var doc = window.parent.document;
	var ul = doc.getElementById("Breadcrumbs");
	
	//check for existing breadcrumb and reuse if possible
	var slideli = doc.getElementById("SlideList").getElementsByTagName("li");
	var textforbc = slideli[curslideindex].textContent;
	var alreadyinbc = 0; //flag to test if item is in breadcrumb
	var occurindex = 0; //set in case it doesn't get set later
	var bcelements= ul.getElementsByTagName("a");
	var countbc= bcelements.length;
		var i;
		for (i=0; i<countbc; i++) {
			if (bcelements[i].textContent == textforbc) //if item is same as a breadcrumb item
			   {
				alreadyinbc = alreadyinbc + 1; //set a flag
			    occurindex = i; //record the index of the breadcrumb item at which the item matches
				bcelements[i].setAttribute("class","last-item"); //format the last breadcrumb item
				}
		    } 	
	     if (alreadyinbc > 0) {
			 var z;
			  for (z=countbc-1; z>occurindex; z--) 
			 	{
				 var elem=ul.getElementsByTagName("li")[z];
				 elem.parentNode.removeChild(elem);
				 } 
		 }		 
	
	if (alreadyinbc == 0) { //if there isn't a breadcrumb item
	 	//build the new breadcrumb item
		var li = doc.createElement("li");
		var a = doc.createElement("a");
		a.setAttribute("href", "#");
		a.setAttribute("class","last-item");
		var onclicklink = "jumpToBreadcrumb('" + newslide + "');";
		a.setAttribute('onclick' , onclicklink );
		//var slideli = doc.getElementById("SlideList").getElementsByTagName("li"); - put back if problrem
		a.textContent = slideli[curslideindex].textContent;
	
		//add the new breadcrumb item
		li.appendChild(a);
		ul.appendChild(li);
	
		//remove the last-item class from the previous last breadcrumb
		var countbc_again= bcelements.length; 
		var k;
		for (k=0; k<countbc_again-1; k++) {
			bcelements[k].classList.remove("last-item");
		    } 
		}
}


function jumpToBreadcrumb(newslide) {
	$("#Breadcrumbs li").click(function( event ) {
		var target = $(this);
		var anchor = this.querySelector("a");
		$(anchor).addClass("last-item");
		$(target).nextAll("li").remove();
	});
	jumpToSlide(newslide);
}


function getslideindex(newslide) {
	//find li index in #SlideList for given filename
	var doc = window.parent.document;
	var slideli = doc.getElementById("SlideList").getElementsByTagName("li");
	var totalslides=slideli.length; //total number of slides
	var i; 
	for (i=0; i < totalslides; i++) {
		var attr = slideli[i].getAttribute("data-filename");
		if (attr==newslide) {
			curslideindex=i;
			break;
	       }
	    } //end for loop
	return curslideindex;
}


function refresh() { //run this function after an SVG graphic loads
	//var doc = window.parent.document.getElementById('IAD').contentWindow.document;
	var doc = document;
	var a = doc.getElementById("SVGGraphic");
    var svgDoc = a.contentDocument;
    var svgItem = svgDoc.getElementsByClassName('clickable');
	
	//Disable default context menu in SVG graphic for all browsers
	svgDoc.addEventListener('contextmenu', function(evt) {evt.preventDefault();}, false); 
	
	if (navigator.userAgent.indexOf("Firefox")>0) { //firefox help with documentation access
	    // handles right-click on svg element
	    $(svgItem).mouseover(function(){ 
		    var x=this.getAttribute("oncontextmenu");
	        var strx=x.split(/['']/)[1]; 
	        var svgID = $(this).attr("id");
		    var svgelement = svgDoc.getElementById(svgID);
			svgelement.oncontextmenu = function() {getdoc(strx);}; 
		  }); //end mouse over
		
		  //handles tab and menu key on svg element for accessibility
		  $(svgItem).focus(function() {
		    var x=this.getAttribute("oncontextmenu");
	        var strx=x.split(/['']/)[1]; 
	        var svgID = $(this).attr("id");
			var svgelement = svgDoc.getElementById(svgID);	
		    svgelement.oncontextmenu = function() {getdoc(strx);}; 
		   }); //end focus on 
    }//end if
	
	//check window sizing for IE
	if (!!navigator.userAgent.match(/Trident\/7\./)) //code for IE only
	 {
		var doc = document;
		var a = doc.getElementById("SVGGraphic");			
		var svgDoc = a.contentDocument;
		var svgElement = svgDoc.documentElement;
		svgOrigWidth = svgElement.getAttribute("width");
		a.setAttribute("width",svgOrigWidth);
		//alert("Original SVG Width: " + svgOrigWidth);
		var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		//alert("Original Window Width: " + windowWidth);
		
		if (windowWidth <= svgOrigWidth) {
			reduceSVG(windowWidth, svgOrigWidth);
		}
	 }
} //end refresh()
	
	
function getdoc(url){ 
	//if (url.startsWith("http")) //case where url is an https request; startWith function doesn't work in IE
	
	  if (url.lastIndexOf("http", 0) === 0)
		{ 
		window.open(url);
		}
	else //case where url is a relative path
		{
		
		var x = location.pathname;
		
		//if (x.endsWith("svg")) //case where url path contains "images/" which needs to be corrected; .endsWith function doesn't work in IE
		
		if (x.substring(x.length - 3, x.length) == "svg")
			{
			var lastslash = x.lastIndexOf("images/");
			var newx = x.substring(0,lastslash);
			var newurl = newx + url;
			window.open(newurl);
			}
		else
			{
			window.open(url);
			}
		}
}

function showInstructions() {
	if ($("#Overview").hasClass("hideme")) {
		$("#Overview").removeClass("hideme");
		$("#ShowInstructions").hide();
		document.getElementById('IAD').contentWindow.document.getElementById("Overview").focus();
	} else  {
	 $("#Overview").addClass("hideme");
	 $("#ShowInstructions").show();
	 document.getElementById('IAD').contentWindow.document.getElementById("ShowInstructions").focus();
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function checkforquerystring() {
	//get querystring parameter value in case user is coming from another page
	var queryslide = getParameterByName('slide');
	
//	if (!!navigator.userAgent.match(/Trident\/7\./))//code for IE only
	     //  {
			//   getslideindex(queryslide);
			//  alert("Loading Slide");
		//   }
	if (queryslide !== null) {
		showSlide(queryslide);
		}
}

function adjustIE(){ //code need to correct the svg sizing in IE
	if (!!navigator.userAgent.match(/Trident\/7\./)) //code for IE only
	 {
		$(window).bind('resize', function(e){
			window.resizeEvt;
			$(window).resize(function(){
				clearTimeout(window.resizeEvt);
				window.resizeEvt = setTimeout(function(){
					//code to do after window is resized
					var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
					
					if (windowWidth <= svgOrigWidth) {
						reduceSVG(windowWidth,svgOrigWidth);
						}
					if (windowWidth >= svgOrigWidth )
						{
						var doc = document;
						var a = doc.getElementById("SVGGraphic");
						var restoresize = parseInt(svgOrigWidth);
						//alert(restoresize);
						a.setAttribute("style","max-width:none;");
						a.setAttribute("width",restoresize);
						}
					}, 250);
			});
		});
	}
}

function reduceSVG(x,y) { //function for IE only; called from other functions
	var doc = document;
	var a = doc.getElementById("SVGGraphic");
	var windowWidth = x;
	var svgWidth = y;
	svgCurrentWidth = (windowWidth - 100) + "px";				
	a.setAttribute("width",svgCurrentWidth);
	//alert("reduce: Current SVG Width: " + svgCurrentWidth);				
}



//------------------------------------------------------------------------------------------------
//                                          AT STARTUP
//-------------------------------------------------------------------------------------------------

function startup() {
   // var doc = window.parent.document.getElementById('IAD').contentWindow.document;
	var doc = document;
		
	var curslideindex = 0;
	
	//Dreamweaver and browsers don't like this:
	var b = doc.querySelector(".firstsvg").getAttribute("data-filename");
		
	//clear out current breadcrumbs	
	var breadcrumblist=doc.getElementById('Breadcrumbs');
	breadcrumblist.innerHTML=''; 
	
	//add a new top breadcrumb
	createBreadcrumb(b);
	
	//Configure slideshow buttons
	confSlideShowButtons(0);
	
		
	//define content for new slide
	var c = '<p></p><object id="SVGGraphic" type="image/svg+xml" src="images/' + b + '" data="images/' + b + '" onload="refresh();" style="max-width:100%" aria-label="Slide">This slide is described in the notes below.</object>';
	
	//populate svg graphic
	doc.getElementById("SlideContainer").innerHTML = c;	
	
	//Notes are filtered by default in the notes file
	
	//populate slide number and slide count
	var slideli = doc.getElementById("SlideList").getElementsByTagName("li"); 
	var x = slideli.length;
	var slidecount = " of " + x;
	doc.getElementById("SlideNum").innerHTML = "Slide " + (curslideindex+1) + slidecount;	
}

//------------------------------------------------------ 3rd party javascript -----------------------------------//
// From w3 library
/* code from W3.JS needed for IAD */
"use strict";
var w3 = {};

w3.includeHTML = function(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("w3-include-html");
          w3.includeHTML(cb);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};



	




 