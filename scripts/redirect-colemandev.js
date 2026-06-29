(function () {
  var host = window.location.hostname.toLowerCase();
  var isColemanDev = host === "colemandev.com" || host.endsWith(".colemandev.com");
  var isPriority1 = host === "priority1.colemandev.com";

  if (isColemanDev && !isPriority1) {
    window.location.replace("https://knockoutpromos.com/");
  }
})();
