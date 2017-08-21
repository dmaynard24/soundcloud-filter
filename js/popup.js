$(function() {
    function init() {
        // create an observer instance
        var bodyObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(function(element) {
                        if (element.classList && element.classList.contains('soundList__item')) {
                            filterOne($(element));
                        }
                    });
                }
            });
        });

        // config for observer
        var bodyConfig = { childList: true, subtree: true };

        // pass in the target node, as well as the observer options
        bodyObserver.observe(document.body, bodyConfig);
    }

    init();

    function filterAll() {
        var sounds = $('.soundList__item');
        sounds.each(function() {
            filterOne($(this));
        });
    }

    function filterOne(element) {
        var promoted = false;
        var reposted = false;

        var contextLine = element.find('.soundContext__line');
        var ministats = contextLine.find('.sc-ministats');
        if (ministats && ministats.hasClass('soundContext__repost')) {
            reposted = true;
        }
        if (contextLine.hasClass('sc-promoted-icon')) {
            promoted = true;
        }
        
        if (reposted || promoted) {
            element.remove();
        }
    }
});