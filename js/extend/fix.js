(function(a,b){a.extend(a.fn,{fix:function(e){var d=this;if(d.attr("isFixed")){return d}d.css(e).css("position","fixed").attr("isFixed",true);var h=a('<div style="position:fixed;top:10px;"></div>').appendTo("body"),f=h[0].getBoundingClientRect().top,c=function(){if(window.pageYOffset>0){if(h[0].getBoundingClientRect().top!==f){d.css("position","absolute");g();a(window).on("scrollStop",g);a(window).on("ortchange",g)}a(window).off("scrollStop",c);h.remove()}},g=function(){d.css({top:window.pageYOffset+(e.bottom!==b?window.innerHeight-d.height()-e.bottom:(e.top||0)),left:e.right!==b?document.body.offsetWidth-d.width()-e.right:(e.left||0)});e.width=="100%"&&d.css("width",document.body.offsetWidth)};a(window).on("scrollStop",c);return d}})}(Zepto));