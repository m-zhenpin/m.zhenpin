(function(c,b){function a(d,h){var k=b('<span class="ui-holder"></span>'),l=b('<div class="ui-slideup-wrap">   <div class="ui-slideup">       <div class="header">           <span class="ok-btn">\u786e\u8ba4</span>           <span class="no-btn">\u53d6\u6d88</span>       </div>       <div class="frame"></div>   </div></div>'),f=b(".ui-slideup",l),g=b(".frame",f),i={refresh:function(m){l.css({top:window.pageYOffset+"px",height:window.innerHeight+"px"});f.animate({translateY:"-"+f.height()+"px",translateZ:"0"},400,"ease-out",function(){m&&m.call(i)});return i},close:function(n){var m=a.count=a.count-1;l.off("click.slideup"+e);f.animate({translateY:"0",translateZ:"0"},200,"ease-out",function(){n&&n();k.replaceWith(d);l.remove();m===0&&b(document).off("touchmove.slideup")}).find(".ok-btn, .no-btn").highlight();return i}},e=a.id=(a.id>>>0)+1,j;g.append(d.replaceWith(k));j=a.count=(a.count>>>0)+1;j===1&&b(document).on("touchmove.slideup",function(m){m.preventDefault()});l.on("click.slideup"+e,".ok-btn, .no-btn",function(){h.call(i,b(this).is(".ok-btn"))!==false&&i.close()}).appendTo(document.body).find(".ok-btn, .no-btn").highlight("ui-state-hover");i.refresh();return i}c.Calendar.register("picker",{_create:function(){var d=this.$el;if(!d){throw new Error("\u8bf7\u6307\u5b9a\u65e5\u671f\u9009\u62e9\u5668\u7684\u8d4b\u503c\u5bf9\u8c61")}},_init:function(){var d=this.$el,e=this._options;this._container=b("<div></div>");e.date||(e.date=d[d.is("select, input")?"val":"text"]());b(window).on("ortchange",b.proxy(this._eventHandler,this));this.on("commit",function(g,f){var h=b.calendar.formatDate(f);d[d.is("select, input")?"val":"text"](h)});this.on("destroy",function(){b(window).off("ortchange",this._eventHandler);this._frame&&this._frame.close()})},_eventHandler:function(d){if(d.type==="ortchange"){this._frame&&this._frame.refresh()}else{this.origin(d)}},show:function(){var e=this,d;if(this._visible){return this}d=this._container;this._visible=true;this.refresh();this._frame=a(d,function(g){var f;if(g){f=e._option("selectedDate");e.trigger("commit",f,b.calendar.formatDate(f),e);e._option("date",f)}else{e._option("selectedDate",e._option("date"))}e.hide();return false});return this.trigger("show",this)},hide:function(){var e=this,d;if(!this._visible){return this}d=new c.Event("beforehide");this.trigger(d,this);if(d.isDefaultPrevented()){return this}this._visible=false;this._frame.close(function(){e.trigger&&e.trigger("hide")});this._frame=null;return this},})})(gmu,gmu.$);