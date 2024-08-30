/**
 * *************************************************************************************
 * Sl.No    Ver.     Script Name         Date            Description
 * *************************************************************************************
 */
/**
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
 */
define(['N/record', 'N/search', 'N/log'], function(record, search, log) {

    function getInputData() {
        return search.create({
            type: search.Type.SALES_ORDER,
            columns: ['internalid']
        });
    }

    function map(context) {
        var searchResult = JSON.parse(context.value);
        var internalId = searchResult.id;
        context.write({
            key: internalId,
            value: internalId
        });
    }

    function reduce(context) {
        log.debug({
            title: 'Processing Internal ID',
            details: context.key
        });

        // Perform operations based on the internal ID
        record.submitFields({
            type: record.Type.SALES_ORDER,
            id: context.key,
            values: {
                custbody_custom_field: 'Processed'
            }
        });
    }

    function summarize(summary) {
        log.audit({
            title: 'Map/Reduce Summary',
            details: 'Processed ' + summary.inputSummary.totalKeys + ' records.'
        });
    }

    return {
        getInputData: getInputData,
        map: map,
        reduce: reduce,
        summarize: summarize
    };
});
