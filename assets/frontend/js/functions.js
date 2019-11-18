var INSPIRO= {}

,
$=jQuery.noConflict();
!function(t) {
	"use strict";
	var a=t(window),
	e=t("body"),
	i=t("#wrapper"),
	n=t("section"),
	s=(t("#page-content"), t("#page-title")),
	o=t("#topbar"),
	r=t("#header"),
	l=r.attr("class"),
	d=t("#logo").find(".logo"),
	c=d.find("img").attr("src"),
	u=d.attr("data-dark-logo"),
	m=t("#mainMenu"),
	p=(m.find("li.dropdown > a"), m.find("li.dropdown-submenu > a, li.dropdown-submenu > span"), t("#dotsMenu")),
	g=p.find("ul > li > a"),
	f=t(".page-menu"),
	h=t("#side-panel"),
	v=t("#panel-logo").find(".logo"),
	b=(v.find("img").attr("src"), v.attr("data-dark-logo"), t("#footer"), t(".footer-sticky")),
	I=(t("#fullscreen-panel"), t("#top-search")),
	y=t("[data-parallax-image]"),
	C=t(".text-rotator"),
	k=t(".fullscreen")||t(".section-fullscreen"),
	x=t(".halfscreen"),
	S=(t("#slider"), t(".carousel")),
	P=['<i class="fa fa-angle-left"></i>',
	'<i class="fa fa-angle-right"></i>'],
	N=t(".carousell"),
	w=t(".equalize"),
	O=t(".grid-layout"),
	R=t(".grid-filter"),
	T=t("[data-animation]"),
	z=t(".counter:not(.counter-instant)"),
	M=t(".countdown"),
	j=t(".progress-bar"),
	D=t(".pie-chart"),
	L=t(".map"),
	B="accordion",
	H="toggle",
	F="ac-item",
	A="ac-active",
	q="ac-title",
	Y="ac-content",
	V=t('[data-lightbox="gallery"]'),
	U=t('[data-lightbox="image"]'),
	_=t('[data-lightbox="iframe"]'),
	E=t('[data-lightbox="ajax"]'),
	W=t('[data-lightbox="inline"]'),
	G=t(".widget-tweeter")||t(".widget-twitter"),
	Q=t(".flickr-widget"),
	X=t(".youtube-background"),
	$=t(".pinOnScroll"),
	J=t(".widget-contact-form"),
	K=t(".widget-subscribe-form"),
	Z=t("#goToTop"),
	tt=".";
	if(r.length>0)var at=r.offset().top;
	INSPIRO.core= {
		functions:function() {
			INSPIRO.core.pageLoader(),
			INSPIRO.core.responsiveClasses(),
			INSPIRO.core.goToTop(),
			INSPIRO.core.screenSizeControl(),
			INSPIRO.core.rtlStatus(),
			INSPIRO.core.customHeight(),
			INSPIRO.core.equalize(),
			INSPIRO.core.stickyFooter()
		}
		,
		responsiveClasses:function() {
			if("undefined"==typeof jRespond)return console.log("responsiveClasses: jRespond plugin is missing."),
			!0;
			var t=jRespond([ {
				label: "smallest", enter:0, exit:479
			}
			, {
				label: "handheld", enter:480, exit:767
			}
			, {
				label: "tablet", enter:768, exit:991
			}
			, {
				label: "laptop", enter:992, exit:1199
			}
			, {
				label: "desktop", enter:1200, exit:1e4
			}
			]);
			t.addFunc([ {
				breakpoint:"desktop", enter:function() {
					e.addClass("device-lg")
				}
				, exit:function() {
					e.removeClass("device-lg")
				}
			}
			, {
				breakpoint:"laptop", enter:function() {
					e.addClass("device-md")
				}
				, exit:function() {
					e.removeClass("device-md")
				}
			}
			, {
				breakpoint:"tablet", enter:function() {
					e.addClass("device-sm")
				}
				, exit:function() {
					e.removeClass("device-sm")
				}
			}
			, {
				breakpoint:"handheld", enter:function() {
					e.addClass("device-xs")
				}
				, exit:function() {
					e.removeClass("device-xs")
				}
			}
			, {
				breakpoint:"smallest", enter:function() {
					e.addClass("device-xxs")
				}
				, exit:function() {
					e.removeClass("device-xxs")
				}
			}
			])
		}
		,
		goToTop:function() {
			if(Z.length>0) {
				var i=e.attr("data-offset")||800;
				a.scrollTop()>i?Z.css( {
					bottom: "26px", opacity:1
				}
				):Z.css( {
					bottom: "16px", opacity:0
				}
				),
				Z.click(function() {
					return t("body,html").stop(!0).animate( {
						scrollTop: 0
					}
					, 1500, "easeInOutExpo"), !1
				}
				)
			}
		}
		,
		pageLoader:function() {
			if(!t().animsition)return console.log("pageLoader: animsition plugin is missing."),
			!0;
			if(!e.hasClass("no-page-loader")) {
				var a=e.attr("data-animation-in")||"fadeIn",
				i=e.attr("data-animation-out")||"fadeOut",
				n=e.attr("data-icon")||10,
				s=e.attr("data-icon-color")||null,
				o=e.attr("data-speed-in")||1500,
				r=e.attr("data-speed-out")||800,
				l="",
				d="";
				switch(Number(n)) {
					case 1:d='<div class="material-icon"><div class="spinner"><div class="right-side"><div class="bar"></div></div><div class="left-side"><div class="bar"></div></div></div></div>',
					l=".spinner .bar {border-color: "+s+";} .spinner .bar:after {background: "+s+";}";
					break;
					case 2:d='<div class="loader-inner ball-grid-pulse"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
					l=".ball-grid-pulse > div {background: "+s+"!important;}";
					break;
					case 3:d='<div class="loader01"></div>',
					l=".loader01 {border-color: "+s+" transparent "+s+" "+s+";} .loader01::after {background: "+s+";}";
					break;
					case 4:d='<div class="loader-inner square-spin"><div></div></div>',
					l=".square-spin > div {background: "+s+" !important;}";
					break;
					case 5:d='<div class="loader04"></div>',
					l=".loader04:after {background: "+s+" !important;}";
					break;
					case 6:d='<div class="loader-inner ball-rotate"><div></div></div>',
					l=".ball-rotate > div, .ball-rotate > div:after, .ball-rotate > div:before {background: "+s+" !important;}";
					break;
					case 7:d='<div class="loader-inner cube-transition"><div></div><div></div></div>',
					l=".cube-transition > div {background: "+s+" !important;}";
					break;
					case 8:d='<div class="loader-inner ball-zig-zag"><div></div><div></div></div>',
					l=".ball-zig-zag > div {background: "+s+" !important;}";
					break;
					case 9:d='<div class="loader-inner ball-triangle-path"><div></div><div></div><div></div></div>',
					l=".ball-triangle-path > div {background: "+s+" !important;}";
					break;
					case 10:d='<div class="loader-inner line-scale"><div></div><div></div><div></div><div></div><div></div></div>',
					l=".line-scale > div {background: "+s+" !important;}";
					break;
					case 11:d='<div class="loader-inner ball-scale-multiple"><div></div><div></div><div></div></div>',
					l=".ball-scale-multiple > div {background: "+s+" !important;}";
					break;
					case 12:d='<div class="loader-inner ball-pulse-sync"><div></div><div></div><div></div></div>',
					l=".ball-pulse-sync > div {background: "+s+" !important;}";
					break;
					case 13:d='<div class="loader-inner ball-beat"><div></div><div></div><div></div></div>',
					l=".ball-beat > div {background: "+s+" !important;}";
					break;
					case 14:d='<div class="loader-inner line-scale-pulse-out-rapid"><div></div><div></div><div></div><div></div><div></div></div>',
					l=".line-scale-pulse-out-rapid > div {background: "+s+" !important;}";
					break;
					case 15:d='<div class="loader-inner ball-scale-ripple-multiple"><div></div><div></div><div></div></div>',
					l=".ball-scale-ripple-multiple > div {border-color: "+s+" !important;}";
					break;
					case 16:d='<div class="loader-inner ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
					l=".ball-spin-fade-loader > div {background: "+s+" !important;}";
					break;
					case 17:d='<div class="loader-inner line-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
					l=".line-spin-fade-loader > div {background: "+s+" !important;}";
					break;
					case 18:d='<div class="loader-inner pacman"><div></div><div></div><div></div><div></div><div></div></div>',
					l=".pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6)  {background: "+s+" !important;} .pacman > div:first-of-type, .pacman > div:nth-child(2) {border-color: "+s+" transparent "+s+" "+s+"}";
					break;
					case 19:d='<div class="loader-inner ball-grid-beat"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
					l=".ball-grid-beat > div {background: "+s+" !important;}";
					break;
					case 20:d='<div class="single9"></div>',
					l=".single9:before {background-color: "+s+" !important;}";
					break;
					default:d='<div class="material-icon"><div class="spinner"><div class="right-side"><div class="bar"></div></div><div class="left-side"><div class="bar"></div></div></div></div>',
					l=".spinner .bar {border-color: "+s+";} .spinner .bar:after {background: "+s+";}"
				}
				s&&t("head").append('<style type="text/css">'+l+"</style>"),
				t("#wrapper").animsition( {
					inClass: a, outClass:i, inDuration:o, outDuration:r, loading:!0, loadingParentElement:"body", loadingClass:"animsition-loading", loadingInner:'<div class="loader">'+d+"</div>", linkElement:'#mainMenu a:not([target="_blank"]):not([href^=#]), .animsition-link'
				}
				),
				setTimeout(function() {
					t(".animsition-loading").length&&(e.addClass("no-page-loader"), t(".animsition-loading").hide())
				}
				, 1e4)
			}
		}
		,
		screenSizeControl:function() {
			k.length>0&&k.each(function() {
				var i=t(this), n=a.height();
				if(e.hasClass("device-lg")||e.hasClass("device-md"))i.css("height", n);
				else {
					var s=i.find(".text-middle").height()+100;
					i.css( {
						height: s, padding:"60px 15px 120px"
					}
					)
				}
			}
			),
			x.length>0&&x.each(function() {
				var e=t(this), i=a.height();
				e.css("height", i/1.5)
			}
			)
		}
		,
		rtlStatus:function() {
			var a=t("html").attr("dir"),
			e=!1;
			"rtl"==a?(t("head").append('<link rel="stylesheet" type="text/css" href="css/rtl.css">'), e=!0): e=!1
		}
		,
		customHeight:function() {
			var a=t("[data-height-xxs]"),
			i=t("[data-height-xs]"),
			n=t("[data-height-sm]"),
			s=t("[data-height-md]"),
			o=t("[data-height-lg]");
			a.length>0&&a.each(function() {
				var a=t(this), i=a.attr("data-height-xxs");
				e.hasClass("device-xxs")&&""!==i&&a.css("height", i)
			}
			),
			i.length>0&&i.each(function() {
				var a=t(this), i=a.attr("data-height-xs");
				e.hasClass("device-xs")&&""!==i&&a.css("height", i)
			}
			),
			n.length>0&&n.each(function() {
				var a=t(this), i=a.attr("data-height-sm");
				e.hasClass("device-sm")&&""!==i&&a.css("height", i)
			}
			),
			s.length>0&&s.each(function() {
				var a=t(this), i=a.attr("data-height-md");
				e.hasClass("device-md")&&""!==i&&a.css("height", i)
			}
			),
			o.length>0&&o.each(function() {
				var a=t(this), i=a.attr("data-height-lg");
				e.hasClass("device-lg")&&""!==i&&a.css("height", i)
			}
			)
		}
		,
		equalize:function() {
			w.length>0&&w.each(function() {
				var a=t(this), e=a.find(a.attr("data-equalize-item"))||"> div", i=0;
				e.each(function() {
					t(this).height()>i&&(i=t(this).height())
				}
				), e.height(i)
			}
			)
		}
		,
		stickyFooter:function() {
			if(b.length>0)if(e.hasClass("device-lg")||e.hasClass("device-md")) {
				var t=b.outerHeight();
				setTimeout(function() {
					b.addClass("footer-sticky-active")
				}
				, 1e3),
				i.css( {
					"margin-bottom": t, "z-index":1
				}
				)
			}
			else i.css( {
				"margin-bottom": 0
			}
			),
			b.removeClass("footer-sticky-active")
		}
	}
	,
	INSPIRO.header= {
		functions:function() {
			INSPIRO.header.logoStatus(),
			INSPIRO.header.stickyHeader(),
			INSPIRO.header.topBar(),
			INSPIRO.header.topSearch(),
			INSPIRO.header.mainMenu(),
			INSPIRO.header.pageTitle(),
			INSPIRO.header.pageMenu(),
			INSPIRO.header.sidePanel(),
			INSPIRO.header.dotsMenu(),
			INSPIRO.header.onepageMenu()
		}
		,
		logoStatus:function() {
			!e.is(".device-lg, .device-md, .menu-overlay-active")&&r.is(".dark.header-transparent, .dark.header-colored-transparent, .dark.header-colored")?d.find("img").attr("src", c): r.hasClass("dark")&&u?d.find("img").attr("src", u):d.find("img").attr("src", c)
		}
		,
		stickyHeader:function() {
			var i=t(this),
			n=i.attr("data-shrink")||0,
			s=i.attr("data-sticky-active")||200,
			o=a.scrollTop();
			r.hasClass("header-modern")&&(n=300),
			r.is(".header-no-sticky, .header-static")||(r.hasClass("header-sticky-resposnive")||e.is(".device-lg, .device-md"))&&(o>at+n?(t("#header").addClass("header-sticky"), o>at+s&&(!e.is(".overlay-menu")&&r.is(".header-transparent:not(.header-modern), .header-colored, .header-colored-transparent")?r.addClass("sticky-active").removeClass("dark"): r.addClass("sticky-active"))):(r.removeClass().addClass(l), INSPIRO.header.logoStatus()))
		}
		,
		topBar:function() {
			o.length>0&&t("#topbar .topbar-dropdown .topbar-form").each(function(e, i) {
				a.width()-(t(i).width()+t(i).offset().left)<0&&t(i).addClass("dropdown-invert")
			}
			)
		}
		,
		topSearch:function() {
			t("#top-search-trigger").on("click", function() {
				return e.toggleClass("top-search-active"), I.find("input").focus(), !1
			}
			)
		}
		,
		mainMenu:function() {
			m.length>0&&(e.is(".device-lg, .device-md")?t("#mainMenu.menu-onclick nav > ul > li.dropdown > a, .dropdown-submenu > a, .dropdown-submenu > span").on("click", function() {
				return t(this).parent("li").siblings().removeClass("hover-active"), t(this).parent("li").toggleClass("hover-active"), !1
			}
			):t("#mainMenu nav > ul > li.dropdown > a, .dropdown-submenu > a, .dropdown-submenu > span").on("click", function() {
				return t(this).parent("li").siblings().removeClass("hover-active"), t(this).parent("li").toggleClass("hover-active"), !1
			}
			), t("#mainMenu-trigger button").click(function() {
				return e.toggleClass("mainMenu-open"), t(this).toggleClass("toggle-active"), e.hasClass("mainMenu-open")?r.find("#mainMenu").css("max-height", a.height()-r.height()): r.find("#mainMenu").css("max-height", 0), !1
			}
			), e.is(".device-lg, .device-md")&&t(".dropdown:not(.mega-menu-item) ul ul").each(function(e, i) {
				a.width()-(t(i).width()+t(i).offset().left)<0&&t(i).addClass("menu-invert")
			}
			))
		}
		,
		pageTitle:function() {
			s.length>0
		}
		,
		pageMenu:function() {
			f.length>0&&f.each(function() {
				f.hasClass("slide-menu")?(f.addClass("slide-menu-version"), t("#menu-responsive-icon").on("click", function() {
					f.toggleClass("page-menu-active"), f.toggleClass("items-visible")
				}
				)):t("#menu-responsive-icon").on("click", function() {
					f.toggleClass("page-menu-active"), f.toggleClass("items-visible")
				}
				)
			}
			)
		}
		,
		sidePanel:function() {
			h.length>0&&(t("#wrapper, #close-panel").on("click", function() {
				e.removeClass("side-panel-active"), t("#side-panel-trigger").removeClass("toggle-active")
			}
			), setTimeout(function() {
				INSPIRO.elements.gridLayoutRefresh()
			}
			, 1e3))
		}
		,
		dotsMenu:function() {
			p.length>0&&(g.on("click", function() {
				return g.parent("li").removeClass("current"), t(this).parent("li").addClass("current"), !1
			}
			), g.parents("li").removeClass("current"), p.find('a[href="#'+INSPIRO.header.currentSection()+'"]').parent("li").addClass("current"))
		}
		,
		onepageMenu:function() {
			m.hasClass("menu-one-page")&&(m.find("nav > ul > li > a").parents("li").removeClass("current"), m.find('nav > ul > li > a[href="#'+INSPIRO.header.currentSection()+'"]').parent("li").addClass("current"))
		}
		,
		currentSection:function() {
			var e="body";
			return n.each(function() {
				var i=t(this), n=i.attr("id");
				i.offset().top-a.height()/3<a.scrollTop()&&i.offset().top+i.height()-a.height()/3>a.scrollTop()&&(e=n)
			}
			),
			e
		}
	}
	,
	INSPIRO.slider= {
		functions:function() {
			INSPIRO.slider.sliderScreenSizeControl(),
			INSPIRO.slider.inspiroSlider(),
			INSPIRO.slider.carousel()
		}
		,
		sliderScreenSizeControl:function() {
			if(t(".inspiro-slider").length>0) {
				var i=r.height(),
				n=o.height(),
				s=a.height(),
				l=i+n,
				d=t("#slider").hasClass("slider-fullscreen"),
				c=t("#slider").hasClass("slider-fullscreen")?1: 1.28, u=r.hasClass("header-transparent")||r.hasClass("header-light-transparent")||r.hasClass("header-dark-transparent")||r.hasClass("header-colored-transparent")||r.hasClass("header-modern"), m=t(".inspiro-slider, .inspiro-slider .owl-stage-outer, .inspiro-slider .owl-stage, .inspiro-slider .slide"), p=t(".inspiro-slider").data("height"), g=t(".inspiro-slider").data("height-xs")||300;
				e.hasClass("device-lg")||e.hasClass("device-md")||e.hasClass("device-sm")?u?d?m.css("height", s+"px"): (r.hasClass(".header-transparent")||t(".inspiro-slider .slide").css("padding-top", l+"px"), p?m.css("height", p+"px"):m.css("height", s/c+"px")):(d?m.css("height", s-l+"px"):m.css("height", s/c-l+"px"), p&&m.css("height", p+"px")):m.css("height", g+"px")
			}
		}
		,
		inspiroSlider:function() {
			return t().owlCarousel?void(t(".inspiro-slider").length>0&&t(".inspiro-slider").each(function() {
				var e=t(this), i=e.attr("data-arrows"), n=e.attr("data-dots")||!0, s=e.attr("data-autoplay")||!1, o=e.attr("data-autoplay-timeout")||5e3, r=e.attr("data-animate-in")||!1, l=e.attr("data-animate-out")||!1, d=e.attr("data-loop")||!0, c=e.attr("data-margin")||0, u=e.attr("data-video")||!0, m=e.attr("data-items")||4, p=e.attr("data-smart-speed")||1300, g=e.attr("data-items-lg")||Number(m), f=e.attr("data-items-md")||Number(g), h=e.attr("data-items-sm")||Number(f), v=e.attr("data-items-xs")||Number(h);
				e.attr("data-items-xxs")||Number(v);
				if(i="false"!=i, n="false"!=n, e.find(".slide").each(function() {
					if(t(this).hasClass("kenburns")) {
						var a=t(this), e=a.css("background-image").replace(/.*\s?url\([\'\"]?/,"").replace(/[\'\"]?\).*/,"");a.prepend('<div class="kenburns-bg" style="background-image:url('+e+')"></div>')}}),e.find(".slide").length>1){setTimeout(function(){e.owlCarousel({nav:i,dots:n,navText:P,autoplay:s,autoplayTimeout:o,autoplayHoverPause:!0,loop:d,margin:Number(c),smartSpeed:Number(p),video:u,animateIn:r,animateOut:l,rtl:INSPIRO.core.rtlStatus(),items:1,callbacks:!0,onInitialize:function(){setTimeout(function(){e.find(".owl-item:not(.active) .slide > video").each(function(){this.pause()}),e.find(".owl-item.active .slide .kenburns-bg").addClass("kenburns-bg-animate"),e.addClass("slider-loaded")},100)}});var m=e.find(".slide-captions > *");m.each(function(){var a=t(this),e="600ms";t(this).data("animation-duration")&&(e=t(this).data("animation-duration")+"ms"),t(this).css("animation-duration",e),a.addClass("slide-caption-hide")}),m.each(function(a){var e=t(this),i=e.data("caption-delay")||80*a,n=e.data("caption-animation")||"fadeInUp";setTimeout(function(){e.removeClass("slide-caption-hide").addClass(n)},i)}),e.on("changed.owl.carousel",function(e){var i=e.item.index,n=t(e.target).find(".owl-item").eq(i),s=n.find(".slide-captions > *"),o=(n.find(".slide").hasClass("slide-dark"),n.find(".slide").hasClass("kenburns"));o&&t(this).find(".kenburns-bg").addClass("kenburns-bg-animate"),s.each(function(a){var e=t(this),i=e.data("caption-delay")||350*a+1e3,n=e.data("caption-animation")||"fadeInUp";setTimeout(function(){e.removeClass("slide-caption-hide").addClass(n)},i)}),a.width()>992&&n.find("video").length>0&&setTimeout(function(){n.find(".slide video").get(0).play()},1e3)}),e.on("change.owl.carousel",function(a){var i=a.item.index,n=t(a.target).find(".owl-item").eq(i),s=t(a.target).find(".owl-item:not(.active)").find(".slide-captions > *"),o=n.find(".slide").hasClass("kenburns");s.each(function(){var a=t(this),e=a.data("caption-animation")||"fadeInUp";a.removeClass(e).addClass("slide-caption-hide")}),e.find(".slide video").each(function(){this.pause()}),o&&t(this).find(".kenburns-bg").removeClass("kenburns-bg-animate")})},0)}else e.addClass("slider-loaded"),setTimeout(function(){e.find(".slide").find(".kenburns-bg").addClass("kenburns-bg-animate")},200)})):(console.log("inspiroSlider: owlCarousel plugin is missing."),!0)},carouselAjax:function(){if(!t().owlCarousel)return console.log("carouselAjax: owlCarousel plugin is missing."),!0;var a=t(".carousel"),e=a.attr("data-arrows"),i=a.attr("data-dots")||!0,n=a.attr("data-autoplay")||!1,s=a.attr("data-autoplay-timeout")||5e3,o=a.attr("data-animate-in")||!1,r=a.attr("data-animate-out")||!1,l=a.attr("data-loop")||!1,d=a.attr("data-margin")||0,c=a.attr("data-video")||!0,u=a.attr("data-items")||4,m=a.attr("data-items-lg")||Number(u),p=a.attr("data-items-md")||Number(m),g=a.attr("data-items-sm")||Number(p),f=a.attr("data-items-xs")||Number(g),h=a.attr("data-items-xxs")||Number(f);e="false"!=e,i="false"!=i,a.owlCarousel({nav:e,dots:i,navText:P,autoplay:n,autoplayTimeout:s,autoplayHoverPause:!0,loop:l,margin:Number(d),smartSpeed:Number(1e3),video:c,animateIn:o,animateOut:r,rtl:INSPIRO.core.rtlStatus(),onInitialize:function(){a.addClass("carousel-loaded owl-carousel")},responsive:{0:{items:Number(h)},480:{items:Number(f)},768:{items:Number(g)},992:{items:Number(p)},1200:{items:Number(m)}}})},carousel:function(){return t().owlCarousel?void(S.length>0&&S.each(function(){var a=t(this),e=a.attr("data-arrows"),i=a.attr("data-dots")||!0,n=a.attr("data-autoplay")||!1,s=a.attr("data-autoplay-timeout")||5e3,o=a.attr("data-auto-width")||!1,r=a.attr("data-animate-in")||!1,l=a.attr("data-animate-out")||!1,d=a.attr("data-loop")||!1,c=a.attr("data-margin")||0,u=a.attr("data-video")||!1,m=a.attr("data-items")||4,p=a.attr("data-items-lg")||Number(m),g=a.attr("data-items-md")||Number(p),f=a.attr("data-items-sm")||Number(g),h=a.attr("data-items-xs")||Number(f),v=a.attr("data-items-xxs")||Number(h);if(g>=3)var f=a.attr("data-items-sm")||Number(2);if(f>=2)var h=a.attr("data-items-xs")||Number(2);if(h>=1)var v=a.attr("data-items-xxs")||Number(1);e="false"!=e,i="false"!=i;setTimeout(function(){a.owlCarousel({nav:e,dots:i,navText:P,autoplay:n,autoplayTimeout:s,autoplayHoverPause:!0,autoWidth:o,loop:d,margin:Number(c),smartSpeed:Number(1300),video:u,animateIn:r,animateOut:l,rtl:INSPIRO.core.rtlStatus(),onInitialize:function(){a.addClass("carousel-loaded owl-carousel")},responsive:{0:{items:Number(v)},480:{items:Number(h)},768:{items:Number(f)},992:{items:Number(g)},1200:{items:Number(p)}}})},100)})):(console.log("carousel: owlCarousel plugin is missing."),!0)},flickityCarousel:function(){return t().flickity?void(N.length>0&&N.each(function(){var a=t(this),e=a.attr("data-accessibility")||!1,i=a.attr("data-adaptiveHeight")||!1,n=a.attr("data-autoPlay")||!0,s=a.attr("data-cellAlign")||0,o=a.attr("data-cellSelector")||void 0,r=a.attr("data-contain")||!0,l=a.attr("data-draggable")||!0,d=a.attr("data-dragThreshold")||3,c=a.attr("data-freeScroll")||!1,u=a.attr("data-friction")||.2,m=a.attr("data-groupCells")||!1,p=a.attr("data-initialIndex")||0,g=a.attr("data-lazyLoad")||!0,f=a.attr("data-percentPosition")||!0,h=a.attr("data-prevNextButtons")||!0,v=a.attr("data- pageDots")||!0,b=a.attr("data-resize")||!0,I=a.attr("data-rightToLeft")||!1,y=a.attr("data-setGallerySize")||!0,C=a.attr("data-watchCSS")||!1,k=a.attr("data-wrapAround")||!1;setTimeout(function(){a.flickity({accessibility:e,adaptiveHeight:i,autoPlay:n,cellAlign:s,cellSelector:o,contain:r,draggable:l,dragThreshold:d,freeScroll:c,friction:u,groupCells:m,initialIndex:p,lazyLoad:g,percentPosition:f,prevNextButtons:h,pageDots:v,resize:b,rightToLeft:I,setGallerySize:y,watchCSS:C,wrapAround:k})},100)})):(console.log("flickityCarousel: flickity plugin is missing."),!0)}},INSPIRO.elements={functions:function(){INSPIRO.elements.naTo(),INSPIRO.elements.textRotator(),INSPIRO.elements.buttons(),INSPIRO.elements.accordion(),INSPIRO.elements.tabs(),INSPIRO.elements.animations(),INSPIRO.elements.parallax(),INSPIRO.elements.responsiveVideos(),INSPIRO.elements.counters(),INSPIRO.elements.countdownTimer(),INSPIRO.elements.progressBar(),INSPIRO.elements.pieChart(),INSPIRO.elements.maps(),INSPIRO.elements.gridLayout(),INSPIRO.elements.tooltip(),INSPIRO.elements.popover(),INSPIRO.elements.lightBoxInspiro(),INSPIRO.elements.youTubeBgPlayer(),INSPIRO.elements.modal(),INSPIRO.elements.pinOnScroll(),INSPIRO.elements.other()},other:function(){t(".toggle-item").length>0&&t(".toggle-item").each(function(){var a=t(this),e=a.attr("data-class"),i=a.attr("data-target");a.on("click",function(){return e&&(i?t(i).toggleClass(e):a.toggleClass(e)),INSPIRO.header.logoStatus(),a.toggleClass("toggle-active"),!1})}),t(".hover-3d").length>0&&t(".hover-3d").each(function(){var a=t(this),e=a.attr("data-selector")||".portfolio-item-wrap",i=a.attr("data-shine")||!1,n=a.attr("data-sensitivity")||16;a.hover3d({selector:e,shine:i,sensitivity:Number(n)})})},naTo:function(){t("a.scroll-to, #dotsMenu > ul > li > a, .menu-one-page nav > ul > li > a").on("click",function(){var a=t(this);return t("html, body").stop(!0,!1).animate({scrollTop:t(a.attr("href")).offset().top},1500,"easeInOutExpo"),!1})},textRotator:function(){return t().Morphext?void(C.length>0&&C.each(function(){var a=t(this),e=a.attr("data-rotate-separator")||",",i=a.attr("data-rotate-effect")||"flipInX",n=a.attr("data-rotate-speed")||2e3;a.Morphext({animation:i,separator:e,speed:Number(n)})})):(console.log("textRotator: Morphext plugin is missing."),!0)},buttons:function(){t(".btn-slide[data-width]")&&t(".btn.btn-slide[data-width]").each(function(){var a,e=t(this),i=e.attr("data-width");switch(!0){case e.hasClass("btn-lg"):a="60";break;case e.hasClass("btn-sm"):a="36";break;case e.hasClass("btn-xs"):a="28";break;default:a="48"}e.hover(function(){t(this).css("width",i+"px")},function(){t(this).css("width",a+"px")})})},accordion:function(){var a=t(tt+F);a.length&&(a.each(function(){var a=t(this);a.hasClass(A)?a.addClass(A):a.find(tt+Y).hide()}),t(tt+q).on("click",function(a){var e=t(this),i=e.parents(tt+F),n=i.parents(tt+B);return i.hasClass(A)?n.hasClass(H)?(i.removeClass(A),e.next(tt+Y).slideUp("fast")):(n.find(tt+F).removeClass(A),n.find(tt+Y).slideUp("fast")):(n.hasClass(H)||(n.find(tt+F).removeClass(A),n.find(tt+Y).slideUp("fast")),i.addClass(A),e.next(tt+Y).slideToggle("fast")),a.preventDefault(),!1}))},tabs:function(){var a=t(".tabs-navigation a");a.length>0&&a.on("click",function(a){return t(this).tab("show"),a.preventDefault(),!1})},animations:function(){(T.length>0&&e.hasClass("device-lg")||e.hasClass("device-md"))&&T.each(function(){t(this).addClass("animated");var a=t(this),e=a.attr("data-animation")||"fadeIn",i=a.attr("data-animation-delay")||200,n=~e.indexOf("Out")?"back":"forward";"forward"==n?a.appear(function(){setTimeout(function(){a.addClass(e+" visible")},i)},{accX:0,accY:-120},"easeInCubic"):(a.addClass("visible"),a.on("click",function(){return a.addClass(e),!1})),a.parents(".demo-play-animations").length&&a.on("click",function(){return a.removeClass(e),setTimeout(function(){a.addClass(e)},50),!1})})},parallax:function(){return t().scrolly?void(y.length>0&&y.each(function(){var a=t(this),i=a.attr("data-parallax-image"),n=a.attr("data-velocity")||"-.090";a.prepend('<div class="parallax-container" data-velocity="'+n+'" style="background: url('+i+')"></div>'),e.hasClass("device-lg")||e.hasClass("device-md")?a.find(".parallax-container").scrolly({bgParallax:!0}):a.find(".parallax-container").addClass("parallax-responsive")})):(console.log("parallax: scrolly plugin is missing."),!0)},responsiveVideos:function(){return t().fitVids?void t("section, .content, .post-content, .video-js, .post-video, .video-wrap, .ajax-quick-view,#slider:not(.revslider-wrap)").fitVids():(console.log("responsiveVideos: fitVids plugin is missing."),!0)},counters:function(){return t().countTo?void(z.length>0&&z.each(function(){var a=t(this);if(e.hasClass("device-lg")||e.hasClass("device-md"))a.appear(function(){a.find("span").countTo()});else{var i=a.find("span").attr("data-to");a.find("span").html(i)}})):(console.log("counters: countTo plugin is missing."),!0)},countdownTimer:function(){return t().countdown?void(M.length>0&&setTimeout(function(){t("[data-countdown]").each(function(){var a=t(this),e=t(this).data("countdown");a.countdown(e,function(t){a.html(t.strftime('<div class="countdown-container"><div class="countdown-box"><div class="number">%-D</div><span>Day%!d</span></div><div class="countdown-box"><div class="number">%H</div><span>Hours</span></div><div class="countdown-box"><div class="number">%M</div><span>Minutes</span></div><div class="countdown-box"><div class="number">%S</div><span>Seconds</span></div></div>'))})})},300)):(console.log("countdownTimer: countdown plugin is missing."),!0)},progressBar:function(){j.length>0&&j.each(function(a,i){var n=t(this),s=n.attr("data-percent")||"100",o=n.attr("data-delay")||"60",r=n.attr("data-type")||"%";n.hasClass("progress-animated")||n.css({width:"0%"});var l=function(){n.animate({width:s+"%"},"easeInOutCirc").addClass("progress-animated"),n.delay(o).append('<span class="progress-type">'+r+'</span><span class="progress-number animated fadeIn">'+s+"</span>")};e.hasClass("device-lg")||e.hasClass("device-md")?t(i).appear(function(){setTimeout(function(){l()},o)}):l()})},pieChart:function(){return t().easyPieChart?void(D.length>0&&D.each(function(){var a=t(this),e=a.attr("data-size")||"160",i=a.attr("data-animate")||"2000",n=a.attr("data-width")||"6",s=a.attr("data-color")||"$base-color",o=a.attr("data-trackcolor")||"rgba(0,0,0,0.10)";a.find("span, i").css({width:e+"px",height:e+"px","line-height":e+"px"}),a.appear(function(){a.easyPieChart({size:Number(e),animate:Number(i),trackColor:o,lineWidth:Number(n),barColor:s,scaleColor:!1,lineCap:"square",onStep:function(t,e,i){a.find("span.percent").text(Math.round(i))}})})})):(console.log("pieChart: easyPieChart plugin is missing."),!0)},maps:function(){return t().gMap?void(L.length>0&&L.each(function(){var a=t(this),e=a.attr("data-map-address")?a.attr("data-map-address"):"Melbourne, Australia",i=a.attr("data-map-type")?a.attr("data-map-type"):"ROADMAP",n=a.attr("data-map-zoom")?a.attr("data-map-zoom"):"14",s=a.attr("data-map-icon")?a.attr("data-map-icon"):"images/markers/marker2.png",o=[{address:e,html:e,icon:{image:s,iconsize:[40,63],iconanchor:[18,60]}}];a.gMap({address:e,maptype:i,markers:o,zoom:Number(n),doubleclickzoom:!0,controls:{panControl:!0,zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,overviewMapControl:!0},styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]})})):(console.log("maps: gMap plugin is missing."),!0)},gridLayout:function(){return t().isotope?void(O.length>0&&(O.each(function(){var e=t(this),i=e.attr("data-item")||"portfolio-item",n=e.attr("data-layout")||"masonry",s=e.attr("data-stagger")||10,o=e.attr("data-margin")||20,r=e.attr("data-transition")||"0.55s";if("fitRows"==n)var l=o+2;else var l=o,l=o;e.css("margin","0 -"+l+"px -"+o+"px 0"),e.find("."+i).css("padding","0 "+o+"px "+o+"px 0"),a.on("load",function(){setTimeout(function(){e.isotope({layoutMode:n,transitionDuration:r,stagger:Number(s),itemSelector:"."+i,autoHeight:!0,hiddenStyle:{opacity:0,transform:"translate3d(0px, 60px, 0px)"},visibleStyle:{opacity:1,transform:"translate3d(0px, 0px, 0px)"},masonry:{columnWidth:e.find("."+i+":not(.large-width)")[0]}}),O.addClass("grid-loaded");var t=e.data("isotope");e.isotope("reveal",t.items)},100)}),e.next().hasClass("infinite-scroll")&&INSPIRO.elements.gridLayoutInfinite(e,i,o)}),R.length>0&&R.each(function(){var a=t(this),e=a.attr("data-layout"),i=a.attr("data-active-class")||"active";a.find("a").click(function(){return a.find("li").removeClass(i),t(this).parent("li").addClass(i),t(e).isotope({filter:t(this).attr("data-category")}),t(".grid-active-title").length>0&&t(".grid-active-title").empty().append(t(this).text()),!1})}))):(console.log("gridLayout: isotope plugin is missing."),!0)},gridLayoutRefresh:function(){O.length>0&&O.each(function(){var a=t(this);setTimeout(function(){a.isotope("layout")},300)})},gridLayoutInfinite:function(e,i,n){if(!t().infinitescroll)return console.log("gridLayoutInfinite: infinitescroll plugin is missing."),!0;var s=e,o=i,r=n,l="#pagination",d=t("#showMore"),c=t("#showMore a.btn"),u=t("#showMore a.btn").text(),m=t('<div class="infinite-scroll-message"><p class="animated visible fadeIn">No more posts to show</p></div>');a.on("load",function(){s.infinitescroll({itemSelector:"."+o,navSelector:l,nextSelector:l+" a:not(.btn)",state:{isDone:!1},extraScrollPx:10,errorCallback:function(){d.addClass("animated visible fadeOut"),setTimeout(function(){d.hide(),s.after(m)},500),setTimeout(function(){t(".infinite-scroll-message").addClass("animated visible fadeOut")},3800)}},function(t){c.text(u),s.css("margin","0 -"+r+"px -"+r+"px 0"),s.find("."+o).css("padding","0 "+r+"px "+r+"px 0"),INSPIRO.slider.carouselAjax(),s.isotope("appended",t),INSPIRO.elements.gridLayoutRefresh()})}),d.length>0&&(a.unbind(".infscr"),c.click(function(){return c.text("Loading..."),s.infinitescroll("retrieve"),!1}))},tooltip:function(){if(!t().tooltip)return console.log("tooltip: tooltip plugin is missing."),!0;var a=t('[data-toggle="tooltip"]');a.length>0&&t('[data-toggle="tooltip"]').tooltip()},popover:function(){if(!t().popover)return console.log("popover: popover plugin is missing."),!0;var a=t('[data-toggle="popover"]');a.length>0&&t('[data-toggle="popover"]').popover({container:"body",html:!0})},lightBoxInspiro:function(){return t().magnificPopup?(U.length>0&&U.magnificPopup({type:"image",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-out"}}}),V.length>0&&V.each(function(){t(this).magnificPopup({delegate:'a[data-lightbox="gallery-item"], a[data-lightbox="gallery-image"]',type:"image",image:{verticalFit:!0},gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-out"}}})}),_.length>0&&_.each(function(){t(this).magnificPopup({type:"iframe",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-out"}}})}),E.length>0&&E.each(function(){t(this).magnificPopup({type:"ajax",removalDelay:500,callbacks:{ajaxContentAdded:function(){INSPIRO.slider.carouselAjax(),INSPIRO.elements.responsiveVideos(),INSPIRO.elements.buttons()}}})}),void(W.length>0&&W.magnificPopup({type:"inline",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-out";

					}
				}
				, closeBtnInside:!1, fixedContentPos:!0, overflowY:"scroll"
			}
			))):(console.log("lightBoxInspiro: magnificPopup plugin is missing."), !0)
		}
		, youTubeBgPlayer:function() {
			return t().mb_YTPlayer?void(X.length>0&&X.each(function() {
				var e=t(this), i=e.attr("data-youtube-url")||null, n=e.attr("data-youtube-mute")||!1, s=e.attr("data-youtube-ratio")||"16/9", o=e.attr("data-youtube-quality")||"hd720", r=e.attr("data-youtube-opacity")||1, l=e.attr("data-youtube-container")||"self", d=e.attr("data-youtube-optimize")||!0, c=e.attr("data-youtube-loop")||!0, u=e.attr("data-youtube-volume")||70, m=e.attr("data-youtube-start")||0, p=e.attr("data-youtube-stop")||0, g=e.attr("data-youtube-autoplay")||!1, f=e.attr("data-youtube-fullscreen")||!0, h=e.attr("data-youtube-controls")||!1, v=e.attr("data-youtube-logo")||!1, b=e.attr("data-youtube-autopause")||!1;
				e.mb_YTPlayer( {
					videoURL: i, mute:n, ratio:s, quality:o, opacity:r, containment:l, optimizeDisplay:d, loop:c, vol:u, startAt:m, stopAt:p, autoPlay:g, realfullscreen:f, showYTLogo:v, showControls:h
				}
				), g||e.find("#youtube-background-controls").addClass("video-is-playing"), e.on("YTPReady", function() {
					t("#youtube-background-controls").on("click", function() {
						return t(this).hasClass("video-is-playing")?(t(this).removeClass("video-is-playing"), X.YTPPlay()): (t(this).addClass("video-is-playing"), X.YTPPause()), !1
					}
					);
					var i=e.height();
					b&&a.on("scroll", function() {
						a.scrollTop()>i&&(t("#youtube-background-controls").addClass("video-is-playing"), X.YTPPause())
					}
					)
				}
				)
			}
			)):(console.log("youTubeBgPlayer: mb_YTPlayer plugin is missing."), !0)
		}
		, modal:function() {
			if(!t().magnificPopup)return console.log("lightBoxInspiro: magnificPopup plugin is missing."), !0;
			var a=t(".modal"), e=t(".modal-strip"), i=t(".btn-modal"), n="modal-auto-open", s="modal-active", o=t(".modal-close"), r=t(".cookie-notify"), l=r.find(".modal-confirm"), d=r.attr("data-expire")||365, c=r.attr("data-name")||"websiteCookies";
			a.length>0&&a.each(function() {
				var a=t(this), e=a.attr("data-delay")||3e3;
				if(a.hasClass(n)) {
					setTimeout(function() {
						t.magnificPopup.open( {
							items: {
								src: a
							}
							, type:"inline", closeBtnInside:!0, removalDelay:500, callbacks: {
								beforeOpen:function() {
									this.st.image.markup=this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass="mfp-zoom-out"
								}
								, open:function() {
									a.find("video").length>0&&a.find("video").get(0).play()
								}
							}
						}
						, 0)
					}
					, e)
				}
				a.find(o).click(function() {
					return t.magnificPopup.close(), !1
				}
				)
			}
			), e.length>0&&e.each(function() {
				var a=t(this), i=a.attr("data-delay")||3e3;
				if(a.hasClass(n)) {
					var u=t(this);
					setTimeout(function() {
						u.addClass(s)
					}
					, i)
				}
				a.find(o).click(function() {
					return a.removeClass(s), !1
				}
				), e.hasClass("cookie-notify")&&(setTimeout(function() {
					"confirfmed"!=t.cookie(c)&&r.addClass(s)
				}
				, i), l.click(function() {
					return t.cookie(c, "confirfmed", {
						expires: Number(d)
					}
					), r.removeClass(s), !1
				}
				))
			}
			), i.length>0&&i.each(function() {
				var a=t(this), e=a.attr("data-modal");
				a.click(function() {
					return t(e).toggleClass(s, 1e3), !1
				}
				)
			}
			)
		}
		, pinOnScroll:function() {
			($.length>0&&e.hasClass("device-lg")||e.hasClass("device-md"))&&$.each(function() {
				var a=t(this), e=a.attr("data-offset-top")||a.offset().top, i=a.attr("data-offset-bottom")||t("#footer").height()+160, n=a.parent().width(), o=a.parent().height();
				a.width(n).height(o), s.length>0&&(e-=s.innerHeight()-r.height()+40, a.on("affix.bs.affix", function() {
					a.css( {
						position: "fixed", top:"100px"
					}
					)
				}
				), a.on("affix-top.bs.affix", function() {
					a.css( {
						position: "inherit", top:"auto"
					}
					)
				}
				)), a.affix( {
					offset: {
						top: e, bottom:i
					}
				}
				)
			}
			)
		}
	}
	, INSPIRO.widgets= {
		functions:function() {
			// INSPIRO.widgets.twitter(),
      INSPIRO.widgets.flickr(),
      INSPIRO.widgets.contactForm(),
      INSPIRO.widgets.subscribeForm()
		}
		, twitter:function() {
			return t().twittie?void setTimeout(function() {
				G.length>0&&G.each(function() {
					var a=t(this), e=a.attr("data-username")||"ardianmusliu", i=a.attr("data-limit")||2, n=a.attr("data-format")||"%b/%d/%Y", s=a.attr("data-loading-text")||"Loading...", o=a.attr("data-loader")||"include/twitter/tweet.php", r=a.attr("data-avatar")||!1;
					r="true"==r?"{{avatar}}":"", a.append('<div id="twitter-cnt"></div>'), a.find("#twitter-cnt").twittie( {
						username:e, count:i, dateFormat:n, template:r+"{{tweet}}<small>{{date}}</small>", apiPath: o, loadingText:s
					}
					)
				}
				)
			}
			, 2e3):(console.log("twitter: twittie plugin is missing."), !0)
		}
		, flickr:function() {
			return t().jflickrfeed?void(Q.length>0&&Q.each(function() {
				var a=t(this), e=a.attr("data-flickr-id")||"52617155@N08", i=a.attr("data-flickr-images")||"9";
				Q.jflickrfeed( {
					limit:i, qstrings: {
						id: e
					}
					, itemTemplate:'<a href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" /></a>'
				}
				, function() {
					a.magnificPopup( {
						delegate:"a", type:"image", gallery: {
							enabled: !0
						}
					}
					)
				}
				)
			}
			)):(console.log("flickr: jflickrfeed plugin is missing."), !0)
		}
		, contactForm:function() {
			return t().validate?t().ajaxSubmit?t.notify?void(J.length>0&&J.each(function() {
				var a=t(this), e=a.attr("data-success-message")||"We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.";
				a.validate( {
					submitHandler:function(i) {
						var n=t(i).find("button#form-submit"), s=n.html();
						n.html('<i class="fa fa-refresh fa-spin"></i> Sending...'), t(i).ajaxSubmit( {
							success:function(o) {
								"success"==o.response?(t.notify( {
									message: e
								}
								, {
									type: "success"
								}
								), t(i).find(".g-recaptcha").children("div").length>0&&grecaptcha.reset(), t(i)[0].reset(), n.html(s)):(t.notify( {
									message: a.attr("data-error-message")||o.message
								}
								, {
									type: "danger"
								}
								), setTimeout(function() {
									n.html(s)
								}
								, 1e3))
							}
						}
						)
					}
				}
				)
			}
			)):(console.log("contactForm: notify plugin is missing."), !0):(console.log("contactForm: ajaxSubmit plugin is missing."), !0):(console.log("contactForm: validate plugin is missing."), !0)
		}
		, subscribeForm:function() {
			return t().validate?t().ajaxSubmit?t.notify?void(K.length>0&&K.each(function() {
				var a=t(this), e=a.attr("success-message")||"You have successfully subscribed to our mailing list.";
				a.validate( {
					submitHandler:function(i) {
						var n=a.find(".input-group-addon"), s=n.html();
						n.html('<i class="fa fa-refresh fa-spin"></i>'), t(i).ajaxSubmit( {
							dataType:"json", success:function(a) {
								"success"==a.response?(t.notify( {
									message: e
								}
								, {
									type: "success"
								}
								), t(i)[0].reset(), n.html(s)):(t.notify( {
									message: a.message
								}
								, {
									type: "warning"
								}
								), n.html(s))
							}
						}
						)
					}
				}
				)
			}
			)):(console.log("subscribeForm: notify plugin is missing."), !0):(console.log("subscribeForm: ajaxSubmit plugin is missing."), !0):(console.log("subscribeForm: validate plugin is missing."), !0)
		}
	}
	, INSPIRO.documentOnResize= {
		functions:function() {
			INSPIRO.header.logoStatus(), INSPIRO.header.stickyHeader(), INSPIRO.core.screenSizeControl(), INSPIRO.slider.sliderScreenSizeControl(), INSPIRO.core.customHeight(), INSPIRO.core.stickyFooter()
		}
	}
	, a.on("resize", INSPIRO.documentOnResize.functions), INSPIRO.documentReady= {
		functions:function() {
			INSPIRO.core.pageLoader(), INSPIRO.slider.sliderScreenSizeControl(), INSPIRO.core.functions(), INSPIRO.header.functions(), INSPIRO.slider.functions(), INSPIRO.elements.functions(), INSPIRO.widgets.functions()
		}
	}
	, t(document).ready(INSPIRO.documentReady.functions), INSPIRO.documentOnLoad= {
		functions:function() {}
	}
	, t(window).on("load", INSPIRO.documentOnLoad.functions), INSPIRO.documentScroll= {
		functions:function() {
			INSPIRO.header.logoStatus(), INSPIRO.header.stickyHeader(), INSPIRO.core.goToTop(), INSPIRO.header.dotsMenu(), INSPIRO.header.onepageMenu()
		}
	}
	, a.on("scroll", INSPIRO.documentScroll.functions), INSPIRO.lightBoxInspiro=function() {
		U.length>0&&U.magnificPopup( {
			type:"image", removalDelay:500, callbacks: {
				beforeOpen:function() {
					this.st.image.markup=this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass="mfp-zoom-out"
				}
			}
		}
		), V.length>0&&V.each(function() {
			t(this).magnificPopup( {
				delegate:'a[data-lightbox="gallery-item"]', type:"image", image: {
					verticalFit: !0
				}
				, gallery: {
					enabled: !0, navigateByImgClick:!0, preload:[0, 1]
				}
				, removalDelay:500, callbacks: {
					beforeOpen:function() {
						this.st.image.markup=this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass="mfp-zoom-out"
					}
				}
			}
			)
		}
		), _.length>0&&_.each(function() {
			t(this).magnificPopup( {
				type:"iframe", removalDelay:500, callbacks: {
					beforeOpen:function() {
						this.st.image.markup=this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass="mfp-zoom-out"
					}
				}
			}
			)
		}
		), E.length>0&&E.each(function() {
			t(this).magnificPopup( {
				type:"ajax", removalDelay:500, callbacks: {
					ajaxContentAdded:function() {
						INSPIRO.lightBoxInspiro(), INSPIRO.slider.carouselAjax(), INSPIRO.elements.responsiveVideos(), INSPIRO.elements.accordion()
					}
				}
			}
			)
		}
		), W.length>0&&W.magnificPopup( {
			type:"inline", removalDelay:500, callbacks: {
				beforeOpen:function() {
					this.st.image.markup=this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass="mfp-zoom-out"
				}
			}
			, closeBtnInside:!1, fixedContentPos:!0, overflowY:"scroll"
		}
		)
	}
}

(jQuery);
