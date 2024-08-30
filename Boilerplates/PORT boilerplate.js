/**
 * *************************************************************************************
 * Sl.No    Ver.     Script Name         Date            Description
 * *************************************************************************************
 */
/**
 * @NApiVersion 2.x
 * @NScriptType Portlet
 */
define(['N/ui/serverWidget', 'N/log'], function(serverWidget, log) {

    /**
     * Function to handle the portlet's rendering.
     *
     * @param {Object} context - The context object containing information about the portlet rendering.
     * @param {Object} context.portlet - The portlet object that will be rendered.
     */
    function render(context) {
        try {
            // Get the portlet object
            var portlet = context.portlet;

            // Create the HTML content for the portlet
            var html = '<div style="padding: 10px;">';
            html += '<h3>Custom Portlet Title</h3>';
            html += '<p>This is a sample portlet. Customize this HTML to display relevant information.</p>';
            html += '<ul>';
            html += '<li>Item 1</li>';
            html += '<li>Item 2</li>';
            html += '<li>Item 3</li>';
            html += '</ul>';
            html += '</div>';

            // Set the HTML content of the portlet
            portlet.title = 'My Custom Portlet';
            portlet.html = html;

        } catch (e) {
            log.error({
                title: 'Error Rendering Portlet',
                details: e.message
            });
        }
    }

    return {
        render: render
    };
});
