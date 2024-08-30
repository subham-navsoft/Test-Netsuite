/**
 * *************************************************************************************
 * Sl.No    Ver.     Script Name         Date            Description
 * *************************************************************************************
 */
/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */
define(['N/ui/serverWidget', 'N/log'], function(serverWidget, log) {

    function onRequest(context) {
        if (context.request.method === 'GET') {
            var form = serverWidget.createForm({
                title: 'Custom Suitelet Form'
            });
            
            form.addField({
                id: 'custpage_textfield',
                type: serverWidget.FieldType.TEXT,
                label: 'Text Field'
            });
            
            form.addSubmitButton('Submit');
            context.response.writePage(form);
        } else if (context.request.method === 'POST') {
            var textFieldValue = context.request.parameters.custpage_textfield;
            log.debug({
                title: 'Submitted Value',
                details: textFieldValue
            });
            context.response.write('Form submitted successfully!');
        }
    }

    return {
        onRequest: onRequest
    };
});
