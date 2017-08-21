$(function() {
    $(window).on('load', function() {
        applyFilters();

        // select the target node
        var target = document.querySelector('.stream .lazyLoadingList__list');

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    applyFilters();
                }
            });
        });

        var config = { childList: true };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);
    });

    function applyFilters() {
        var sounds = $('.soundList__item');
        sounds.each(function() {
            var promoted = false;
            var reposted = false;

            var contextLine = $(this).find('.soundContext__line');
            var ministats = contextLine.find('.sc-ministats');
            if (ministats && ministats.hasClass('soundContext__repost')) {
                reposted = true;
            }
            if (contextLine.hasClass('sc-promoted-icon')) {
                promoted = true;
            }
            
            if (reposted || promoted) {
                $(this).remove();
            }
        });
    }
});