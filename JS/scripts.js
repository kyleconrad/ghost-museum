;(function(){
  var Socializer = {
    init: function(){
      this.page_url = window.location.href;
      this.page_title = "\""+ $('.js-title').html()+"\"" ;
      this.blog_logo = $('.js-blog-logo').attr('src');
      this.twitter();
      this.facebook();
      this.googleplus();
      this.pinterest();
    },
    twitter:function(){
      this.message = encodeURIComponent(this.page_title+" "+this.page_url);
      this.intent_url = "https://twitter.com/intent/tweet?text="+this.message;
      $('.js-twitter').attr({'href':this.intent_url});
    },
    facebook:function(){
      this.message = encodeURIComponent(this.page_url);
      this.intent_url = "https://www.facebook.com/sharer/sharer.php?u="+this.message;
      $('.js-facebook').attr({'href':this.intent_url});
    },
    googleplus:function(){
      this.message = encodeURIComponent(this.page_url);
      this.intent_url = "https://plus.google.com/share?url="+this.message;
      $('.js-googleplus').attr({'href':this.intent_url});
    },
    pinterest:function(){
      this.page_url = encodeURIComponent(this.page_url);
      this.blog_logo = encodeURIComponent(this.blog_logo);
      this.page_title = encodeURIComponent(this.page_title);
      this.intent_url = "http://pinterest.com/pin/create/button/?url="+this.page_url+"&media="+this.blog_logo+"&description="+this.page_title;
      $('.js-pinterest').attr({'href':this.intent_url});
    }
  }
  Socializer.init();
})();
