/**
 * *************************************************************************************
 * Sl.No    Ver.     Script Name         Date            Description
 * *************************************************************************************
 */
/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log'], function(record, log) {

    function beforeLoad(context) {
        log.debug({
            title: 'Before Load',
            details: 'User Event Script - Before Load phase'
        });
    }

    function beforeSubmit(context) {
        log.debug({
            title: 'Before Submit',
            details: 'User Event Script - Before Submit phase'
        });
    }

    function afterSubmit(context) {
        log.debug({
            title: 'After Submit',
            details: 'User Event Script - After Submit phase'
        });
    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };
});
