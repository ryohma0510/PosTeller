$(window).scroll(function() {
 console.log('========現在位置==========');
 browserHeight = document.documentElement.clientHeight;
 scrollPosition = $(window).scrollTop();
 siteHeight = Math.max.apply( null, [document.body.clientHeight , document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight] )　- browserHeight;
 console.log( Math.round((scrollPosition / siteHeight) * 100) + '%');
});
