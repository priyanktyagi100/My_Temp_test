
	function initMap(){
  
  var defance_garden = {lat: 28.946790, lng: 77.634060};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: defance_garden});
  
  var marker = new google.maps.Marker({position: defance_garden, map: map});

}

$(document).ready(function(){
	$('#menu_home').addClass("active");
	$('#menu_home_dropdown').addClass("active");
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    console.log("elementTop"+elementTop);
    var elementBottom = elementTop + $(this).outerHeight();
    console.log("elementBottom"+elementBottom);
    var viewportTop = $(window).scrollTop();
    console.log("viewportTop"+viewportTop);
    var viewportBottom = viewportTop + $(window).height();
    console.log("viewportBottom"+viewportBottom);
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).scroll(function(){
	if($("#home").isInViewport()){
	$('#menu_home').addClass("active");
	$('#menu_properties,#menu_features,#menu_agents,#menu_contact_us').removeClass("active");
}
else if($("#Properties").isInViewport()){
	$('#menu_properties').addClass("active");
	$('#menu_home,#menu_features,#menu_agents,#menu_contact_us').removeClass("active");
}
else if($("#Features").isInViewport()){
	$('#menu_features').addClass("active");
	$('#menu_home,#menu_properties,#menu_agents,#menu_contact_us').removeClass("active");
}
else if($("#Agents,#clients").isInViewport()){
	$('#menu_agents').addClass("active");
	$('#menu_home,#menu_features,#menu_properties,#menu_contact_us').removeClass("active");
}
else if($("#Contact_Us").isInViewport()){
	$('#menu_contact_us').addClass("active");
	$('#menu_home,#menu_features,#menu_agents,#menu_properties').removeClass("active");
}
});



  $('#menu_home').click(function(){
	$('#menu_home').addClass("active");
	$('#menu_properties,#menu_features,#menu_agents,#menu_contact_us').removeClass("active");
});
  $('#logo').click(function(){
	$('#menu_home').addClass("active");
	$('#menu_properties,#menu_features,#menu_agents,#menu_contact_us').removeClass("active");
});
  $('#menu_properties').click(function(){
	$('#menu_properties').addClass("active");
	$('#menu_home,#menu_features,#menu_agents,#menu_contact_us').removeClass("active");
});
  $('#menu_features').click(function(){
	$('#menu_features').addClass("active");
	$('#menu_home,#menu_properties,#menu_agents,#menu_contact_us').removeClass("active");
});
  $('#menu_agents').click(function(){
	$('#menu_agents').addClass("active");
	$('#menu_home,#menu_features,#menu_properties,#menu_contact_us').removeClass("active");
});
  $('#menu_contact_us').click(function(){
	$('#menu_contact_us').addClass("active");
	$('#menu_home,#menu_features,#menu_agents,#menu_properties').removeClass("active");
});
  /*Dropdown Menu*/
  $('#menu_home_dropdown').click(function(){
	$('#menu_home_dropdown').addClass("active");
	$('#menu_properties_dropdown,#menu_features_dropdown,#menu_agents_dropdown,#menu_contact_us_dropdown').removeClass("active");
});
  $('#logo').click(function(){
	$('#menu_home_dropdown').addClass("active");
	$('#menu_properties_dropdown,#menu_features_dropdown,#menu_agents_dropdown,#menu_contact_us_dropdown').removeClass("active");
});
  $('#menu_properties_dropdown').click(function(){
	$('#menu_properties_dropdown').addClass("active");
	$('#menu_home_dropdown,#menu_features_dropdown,#menu_agents_dropdown,#menu_contact_us_dropdown').removeClass("active");
});
  $('#menu_features_dropdown').click(function(){
	$('#menu_features_dropdown').addClass("active");
	$('#menu_home_dropdown,#menu_properties_dropdown,#menu_agents_dropdown,#menu_contact_us_dropdown').removeClass("active");
});
  $('#menu_agents_dropdown').click(function(){
	$('#menu_agents_dropdown').addClass("active");
	$('#menu_home_dropdown,#menu_features_dropdown,#menu_properties_dropdown,#menu_contact_us_dropdown').removeClass("active");
});
  $('#menu_contact_us_dropdown').click(function(){
	$('#menu_contact_us_dropdown').addClass("active");
	$('#menu_home_dropdown,#menu_features_dropdown,#menu_agents_dropdown,#menu_properties_dropdown').removeClass("active");
});
  /*Scrolling Item change*/

  
});
