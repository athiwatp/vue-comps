/*======================================================
************   Modals   ************
======================================================*/
require('./index.less');

var modalModule = {};

var _modalTemplateTempDiv = document.createElement('div');

modalModule.modal = function (params) {
    params = params || {};
    var modalHTML = '', buttonsHTML = '';
    if (params.buttons && params.buttons.length > 0) {
        for (var i = 0; i < params.buttons.length; i++) {
            buttonsHTML += '<span class="modal-m-button' + (params.buttons[i].bold ? ' modal-m-button-bold' : '') + '">' + params.buttons[i].text + '</span>';
        }
    }
    var titleHTML = params.title ? '<div class="modal-m-title">' + params.title + '</div>' : '';
    var textHTML = params.text ? '<div class="modal-m-text">' + params.text + '</div>' : '';
    var afterTextHTML = params.afterText ? params.afterText : '';
    var noButtons = !params.buttons || params.buttons.length === 0 ? 'modal-m-no-buttons' : '';
    var verticalButtons = params.verticalButtons ? 'modal-m-buttons-vertical': '';
    var modalButtonsHTML = params.buttons && params.buttons.length > 0 ? '<div class="modal-m-buttons modal-m-buttons-' + params.buttons.length + ' ' + verticalButtons + '">' + buttonsHTML + '</div>' : '';
    modalHTML = '<div class="modal-m ' + noButtons + ' ' + (params.cssClass || '') + '"><div class="modal-m-inner">' + (titleHTML + textHTML + afterTextHTML) + '</div>' + modalButtonsHTML + '</div>';

    _modalTemplateTempDiv.innerHTML = modalHTML;
    document.body.appendChild(_modalTemplateTempDiv.firstChild);

    // Add events on buttons
    var btns = document.body.querySelectorAll('.modal-m-button');
    for (var i = 0; i < btns.length; i++) {
        (function(index){
            btns[index].addEventListener('click', function (e) {
                if (params.buttons[index].close !== false) modalModule.closeModal();
                if (params.buttons[index].onClick) params.buttons[index].onClick();
            })
        })(i)
    }
    modalModule.openModal();
};
modalModule.alert = function (text, title, callbackOk) {
    if (typeof title === 'function') {
        callbackOk = arguments[1];
        title = undefined;
    }
    return modalModule.modal({
        text: text || '',
        title: typeof title === 'undefined' ? '提示' : title,
        buttons: [ {text: '确定', bold: true, onClick: callbackOk} ]
    });
};
modalModule.openModal = function () {
    var modal = document.querySelector('.modal-m');
    var _className = modal.className,
        isModal = false;
    if (_className.indexOf('modal-m') > -1) {
        isModal = true;
    }
    
    if (isModal) {
        modal.style.display = 'block';
        modal.style.marginTop = - Math.round(modal.offsetWidth / 2) + 'px';
    }

    var overlay = document.createElement('div');
        overlay.className = 'modal-m-overlay modal-m-overlay-visible';
    if (document.getElementsByClassName('modal-m-overlay').length === 0) {
        document.body.appendChild(overlay);
    } else {
        document.getElementsByClassName('modal-m-overlay')[0].className = 'modal-m-overlay modal-m-overlay-visible';
    }

    modal.className = _className.replace('modal-m-out', '') + 'modal-m-in';
};
modalModule.closeModal = function () {
    var modal = document.querySelector('.modal-m'),
        _className = modal.className;
    if (typeof modal !== 'undefined' && modal.length === 0) {
        return;
    }
    var overlay = document.querySelector('.modal-m-overlay');
    
    modal.className = _className.replace('modal-m-out', '').replace('modal-m-in', '');
    modal.addEventListener('webkitTransitionEnd, transitionend', function () {
        console.log('webkitTransitionEnd');
        modal.parentNode.removeChild(modal);
    }, false);

    overlay.className = 'modal-m-overlay';
};


module.exports = modalModule;