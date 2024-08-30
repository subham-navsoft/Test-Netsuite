/**
 * *************************************************************************************
 * Sl.No    Ver.     Script Name         Date            Description
 * *************************************************************************************
 */
/**
 * @NApiVersion 2.x
 * @NScriptType Restlet
 */
define(['N/record', 'N/log'], function(record, log) {

    function doGet(request) {
        log.debug({
            title: 'GET Request',
            details: 'Handling GET request'
        });
        
        // Example: Retrieve a record
        var result = record.load({
            type: record.Type.CUSTOMER,
            id: request.id
        });
        
        return result;
    }

    function doPost(request) {
        log.debug({
            title: 'POST Request',
            details: 'Handling POST request'
        });

        // Example: Create a new record
        var newRecord = record.create({
            type: record.Type.CUSTOMER
        });

        newRecord.setValue({
            fieldId: 'companyname',
            value: request.companyName
        });

        var id = newRecord.save();
        return { id: id };
    }

    function doPut(request) {
        log.debug({
            title: 'PUT Request',
            details: 'Handling PUT request'
        });

        // Example: Update a record
        var updatedRecord = record.load({
            type: record.Type.CUSTOMER,
            id: request.id
        });

        updatedRecord.setValue({
            fieldId: 'companyname',
            value: request.companyName
        });

        updatedRecord.save();
        return { status: 'Record updated' };
    }

    function doDelete(request) {
        log.debug({
            title: 'DELETE Request',
            details: 'Handling DELETE request'
        });

        // Example: Delete a record
        record.delete({
            type: record.Type.CUSTOMER,
            id: request.id
        });

        return { status: 'Record deleted' };
    }

    return {
        get: doGet,
        post: doPost,
        put: doPut,
        delete: doDelete
    };
});
