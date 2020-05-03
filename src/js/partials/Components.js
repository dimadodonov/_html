/**
 * Components.js
 *
 * @author Dima Dodonov <dimadodonov@icloud.com>
 */

App.define('Components');

App.Components = (function() {
    function _init() {
        console.log('Site Components Init');
        // _initInstaFeed();
        App.Components.Input.init();
    }

    // function _initInstaFeed() {
    //     _initInstaFeed();
    // }

    return {
        init: _init,
        // instaFeed: _initInstaFeed
    };
})();

App.define('Components.Input');
App.Components.Input = (function() {
    function _init() {
        console.log('Site Components Input Init');
        _initMask();
    }

    function _initMask() {
        //Masked inputmask https://github.com/RobinHerbots/Inputmask
        let phoneMask = new Inputmask('+7 (999) 999-99-99');
        let inputPhone = document.querySelector('.js-phone-mask');
        if (inputPhone) {
            phoneMask.mask(inputPhone);
        }
    }

    return {
        init: _init,
        initMask: _initMask,
    };
})();

// Убрать сплешь после знака равно
//=/include components/InstaFeed.js
