/**
 * @NApiVersion 2.x
 * @NScriptType ScheduledScript
 */
define(['N/record', 'N/search', 'N/log'], function(record, search, log) {

    function execute(context) {
        log.debug({
            title: 'Scheduled Script Execution',
            details: 'The script is running as scheduled.'
        });

        // Example: Retrieve all customers
        var searchResult = search.create({
            type: search.Type.CUSTOMER,
            columns: ['entityid']
        }).run().getRange({
            start: 0,
            end: 100
        });

        searchResult.forEach(function(result) {
            log.debug({
                title: 'Customer ID',
                details: result.getValue('entityid')
            });
        });
    }

    return {
        execute: execute
    };
});
