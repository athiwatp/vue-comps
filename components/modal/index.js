/*======================================================
************   Modals   ************
======================================================*/
var modalModule = {};

var _modalTemplateTempDiv = document.createElement('div');
modalModule.modalStack = [];
modalModule.modalStackClearQueue = function () {
    if (modalModule.modalStack.length) {
        (modalModule.modalStack.shift())();
    }
};
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

    var modal = $(_modalTemplateTempDiv).children();

    $('body').append(modal[0]);

    // Add events on buttons
    modal.find('.modal-button').each(function (index, el) {
        $(el).on('click', function (e) {
            if (params.buttons[index].close !== false) modalModule.closeModal(modal);
            if (params.buttons[index].onClick) params.buttons[index].onClick(modal, e);
            if (params.onClick) params.onClick(modal, index);
        });
    });
    modalModule.openModal(modal);
    return modal[0];
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
modalModule.openModal = function (modal) {
    modal = $(modal);
    var isModal = modal.hasClass('modal');
    if ($('.modal.modal-in:not(.modal-out)').length && modalModule.params.modalStack && isModal) {
        modalModule.modalStack.push(function () {
            modalModule.openModal(modal);
        });
        return;
    }
    // do nothing if this modal already shown
    if (true === modal.data('f7-modal-shown')) {
        return;
    }
    modal.data('f7-modal-shown', true);
    modal.once('close', function() {
       modal.removeData('f7-modal-shown');
    });
    
    if (isModal) {
        modal.show();
        modal.css({
            marginTop: - Math.round(modal.outerHeight() / 2) + 'px'
        });
    }

    // 需要手动加入
    var overlay;
    if ($('.modal-overlay').length === 0) {
        $('body').append('<div class="modal-overlay"></div>');
    }
    
    //Make sure that styles are applied, trigger relayout;
    var clientLeft = modal[0].clientLeft;

    // Trugger open event
    modal.trigger('open');

    // 要替换jq的操作
    modal.removeClass('modal-out').addClass('modal-in').transitionEnd(function (e) {
        if (modal.hasClass('modal-out')) modal.trigger('closed');
        else modal.trigger('opened');
    });
    return true;
};
modalModule.closeModal = function (modal) {
    modal = $(modal || '.modal-in');
    if (typeof modal !== 'undefined' && modal.length === 0) {
        return;
    }
    var overlay;
    
    modal.trigger('close');
    
    modal.removeClass('modal-in modal-out').trigger('closed').hide();
    if (removeOnClose) {
        modal.remove();
    }
    return true;
};


module.exports = modalModule;