$(document).ready(function() {



	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	$(window).resize(function(){
		wResize();
	});

	$(".top_phone .wrapper .tab_item").not(':first').hide();
	$(".top_phone .wrapper .tab").on('click',function(){
		$(".top_phone .wrapper .tab").removeClass('active').eq($(this).index()).addClass('active');
		$(".top_phone .wrapper .tab_item").hide().eq($(this).index()).fadeIn();
	});

	$(".bottom_phone .wrapper .tab_item").not(':first').hide();
	$(".bottom_phone .wrapper .tab").on('click',function(){
		$(".bottom_phone .wrapper .tab").removeClass('active').eq($(this).index()).addClass('active');
		$(".bottom_phone .wrapper .tab_item").hide().eq($(this).index()).fadeIn();
	});

	$(".tabs_header .wrapper .tab_item").not(':first').hide();
	$(".tabs_header .wrapper .tab").on('click',function(){
		$(".tabs_header .wrapper .tab").removeClass('active').eq($(this).index()).addClass('active');
		$(".tabs_header .wrapper .tab_item").hide().eq($(this).index()).fadeIn();
	});
	$(".s_contacts .wrapper .tab_item").not(':first').hide();
	$(".s_contacts .tab").on('click',function(){
		$(".s_contacts .tab").removeClass('active').eq($(this).index()).addClass('active');
		$(".s_contacts .wrapper .tab_item").hide().eq($(this).index()).fadeIn();
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	

});


$(window).load(function(){
	$(".top_header h1").animated("fadeInDown","fadeOut");
	$(".top_header h2").animated("fadeInUp","fadeOut");
	$(".tabs_header .wrapper").animated("flipInY","fadeOut");
	$(".s_profi .profi_item").animated("fadeInRight","fadeOut");
	$(".s_profi form").animated("zoomIn","fadeOut");
	$(".s_back h3").animated("fadeInUp","fadeOut");
	$("footer").animated("fadeIn","fadeOut");
});

$(window).on('load', function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

