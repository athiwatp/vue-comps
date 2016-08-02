/*======================================================
************   Modals   ************
======================================================*/
var modalModule = {};

var _modalTemplateTempDiv = document.createElement('div');

modalModule.modal = function (params) {
    params = params || {};
    var modalHTML = '', buttonsHTML = '';
    if (params.buttons && params.buttons.length > 0) {
        for (var i = 0; i < params.buttons.length; i++) {
            buttonsHTML += '<span class="modal-button' + (params.buttons[i].bold ? ' modal-button-bold' : '') + '">' + params.buttons[i].text + '</span>';
        }
    }
    var titleHTML = params.title ? '<div class="modal-title">' + params.title + '</div>' : '';
    var textHTML = params.text ? '<div class="modal-text">' + params.text + '</div>' : '';
    var afterTextHTML = params.afterText ? params.afterText : '';
    var noButtons = !params.buttons || params.buttons.length === 0 ? 'modal-no-buttons' : '';
    var verticalButtons = params.verticalButtons ? 'modal-buttons-vertical': '';
    var modalButtonsHTML = params.buttons && params.buttons.length > 0 ? '<div class="modal-buttons modal-buttons-' + params.buttons.length + ' ' + verticalButtons + '">' + buttonsHTML + '</div>' : '';
    modalHTML = '<div class="modal ' + noButtons + ' ' + (params.cssClass || '') + '"><div class="modal-inner">' + (titleHTML + textHTML + afterTextHTML) + '</div>' + modalButtonsHTML + '</div>';

    _modalTemplateTempDiv.innerHTML = modalHTML;
    document.body.appendChild(_modalTemplateTempDiv.firstChild);

    // Add events on buttons
    var btns = document.body.querySelectorAll('.modal-button');
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
    var modal = document.querySelector('.modal');
    var _className = modal.className,
        isModal = false;
    if (_className.indexOf('modal') > -1) {
        isModal = true;
    }
    
    if (isModal) {
        modal.style.display = 'block';
        modal.style.marginTop = - Math.round(modal.offsetWidth / 2) + 'px';
    }

    var overlay = document.createElement('div');
        overlay.className = 'modal-overlay modal-overlay-visible';
    if (document.getElementsByClassName('modal-overlay').length === 0) {
        document.body.appendChild(overlay);
    }

    modal.className = _className.replace('modal-out', '') + 'modal-in';
};
modalModule.closeModal = function () {
    var modal = document.querySelector('.modal'),
        _className = modal.className;
    if (typeof modal !== 'undefined' && modal.length === 0) {
        return;
    }
    var overlay = document.querySelector('.modal-overlay');
    
    overlay.className = 'modal-overlay';
    modal.className = _className.replace('modal-out', '').replace('modal-in', '');
};


module.exports = modalModule;