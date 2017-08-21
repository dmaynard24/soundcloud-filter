$(function() {
    function applyFilters() {
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

    applyFilters();

    $(window).on('scroll resize', function() {
        applyFilters();
    });
});