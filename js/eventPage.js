chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo == "applyFilters") {
        var options = request.options;
        var sounds = $('.soundList__item');
        sounds.each(function() {
            var reposted = false;
            var ministats = $(this).find('.soundContext__line .sc-ministats');
            if (ministats && ministats.hasClass('soundContext__repost')) {
                reposted = true;
            }
            
            if (reposted) {
                $(this).hide();
            }
        });
    }
});