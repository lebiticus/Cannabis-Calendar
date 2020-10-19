var cHead = `<script>
  window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {
    googletag.defineSlot('/30582678/ADN/adn/alaska-marijuana', [[1, 1], [300, 250], [728, 90], [300, 1], [300, 600], [320, 50]], 'div-gpt-ad-1603130255810-0').setTargeting('adn-pos', ['12-DOC']).addService(googletag.pubads());
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setTargeting('adn-pos', ['12-DOC']);
    googletag.enableServices();
  });
</script>`;

$('head').append(cHead);
console.log(cHead);

$(document).ready(function(){

// AD SET UP ====================================


$('head').append('<script>console.log("hai")</script>');
$('head').append('<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>');


// AGE WALL =====================================
$("#age-yes").click(function(){
    $("#age-wall").fadeOut(500);
});

// VENDOR COVERS =========================================
var currentTime = (Date.now() - 28800000);
var sampleTime = Date.UTC(2020, 11, 4);
$("#info-bar").append('<span>' + "Simulated Current Time: " + new Date(sampleTime) + '</span>')

console.log("Current Time: " + new Date(currentTime));
console.log("Sample Time: " + new Date(sampleTime));
    // console.log("Sample date: " + Date.UTC(2020,11,12));
    // console.log("Sample date span: " + new Date(1449878400000));

// Create cover
$(".vendor").each(function(index) {
    $(this).append('<div class="vendor-cover"></div>');
});

// Set dates & statuses (change sampleTime to currentTime)
$(".vendor-cover").each(function(index) {
    $(this).attr("date", (index + 1));
    var vendorDate = Date.UTC(2020, 11, ($(this).attr("date")));
        // console.log(index + ": " + vendorDate);
    $(this).append('<span>' + $(this).attr("date") + '</span>');
    if(vendorDate < sampleTime) {
        $(this).attr("status", "dunlocked");
        console.log($(this).attr("status"));
    } else {
        $(this).attr("status", "dlocked");
    }
});

// Set status behaviors

// Locked
$("[status=dlocked]").each(function(){
    // $(this).append('<i class="fas fa-lock fa-4x"></i>');
    console.log("Lock added.")
    // On click
    $(this).click(function(){
        alert("This can't be opened yet. Come back on the " + $(this).attr("date") +"th!");
    });
});

// Unlocked
$("[status=dunlocked]").each(function(){

    // On click
    $(this).click(function(){
        $(this).fadeOut(500);
    });
});

// Load in ads
var adTest = `  <!-- /30582678/ADN/adn/alaska-marijuana -->
  <div id='div-gpt-ad-1603130255810-0'>
   <script>
     googletag.cmd.push(function() { googletag.display('div-gpt-ad-1603130255810-0'); });
   </script>
  </div>`;

$('#age-wall').prepend(adTest);






// End =========================
});
