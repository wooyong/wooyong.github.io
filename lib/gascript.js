//
// Google Analytics code in separate file
//
// Insert:
// <script async src="gascript.js"></script>
//
// Original header insert code:
//
// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119557626-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'UA-119557626-1');
// </script>
//

function loadGoogleAnalytics() {
    var ga = document.createElement("script");
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=UA-119557626-1";

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
}

loadGoogleAnalytics();

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-119557626-1');