/**
 * *************************************************************************************
 * Sl.No    Ver.     Script Name         Date            Description
 * *************************************************************************************
 */
/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(['N/ui/message', 'N/log'], function(message, log) {

    function pageInit(context) {
        message.create({
            title: 'Welcome',
            message: 'Welcome to the page!',
            type: message.Type.CONFIRMATION
        }).show();
    }

    function saveRecord(context) {
        log.debug({
            title: 'Save Record',
            details: 'Record is being saved.'
        });
        return true; // Return true to allow save, false to prevent it
    }

    function fieldChanged(context) {
        log.debug({
            title: 'Field Changed',
            details: 'Field changed: ' + context.fieldId
        });
    }

    function postSourcing(context) {
        log.debug({
            title: 'Post Sourcing',
            details: 'Field post sourcing: ' + context.fieldId
        });
    }

    function lineInit(context) {
        log.debug({
            title: 'Line Init',
            details: 'Line initialized: ' + context.sublistId
        });
    }

    function validateDelete(context) {
        log.debug({
            title: 'Validate Delete',
            details: 'Validating delete for sublist line.'
        });
        return true; // Return true to allow deletion, false to prevent it
    }

    return {
        pageInit: pageInit,
        saveRecord: saveRecord,
        fieldChanged: fieldChanged,
        postSourcing: postSourcing,
        lineInit: lineInit,
        validateDelete: validateDelete
    };
});
