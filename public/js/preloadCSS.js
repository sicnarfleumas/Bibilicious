// Preload CSS utility
// This script helps to load CSS asynchronously to improve page performance
// Based on the loadCSS utility by Filament Group

(function(w) {
  // Define loadCSS function
  w.loadCSS = function(href, before, media) {
    // Create link element
    var ss = w.document.createElement("link");
    var ref = before || w.document.getElementsByTagName("head")[0];
    var sheets = w.document.styleSheets;
    
    // Set attributes
    ss.rel = "stylesheet";
    ss.href = href;
    ss.media = "only x"; // Set to invalid media type to avoid blocking
    
    // Insert link element
    ref.parentNode.insertBefore(ss, (before ? ref : ref.nextSibling));
    
    // Toggle media once loaded
    function toggleMedia() {
      var defined;
      for (var i = 0; i < sheets.length; i++) {
        if (sheets[i].href && sheets[i].href.indexOf(href) > -1) {
          defined = true;
        }
      }
      
      if (defined) {
        ss.media = media || "all";
      } else {
        setTimeout(toggleMedia);
      }
    }
    
    toggleMedia();
    return ss;
  };
  
  // Auto-load CSS files with data-preload attribute
  w.addEventListener('DOMContentLoaded', function() {
    var preloadLinks = w.document.querySelectorAll('link[data-preload]');
    for (var i = 0; i < preloadLinks.length; i++) {
      var link = preloadLinks[i];
      w.loadCSS(link.href);
    }
  });
})(window); 