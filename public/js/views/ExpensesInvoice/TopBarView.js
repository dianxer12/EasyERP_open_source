define([
    'Underscore',
    'views/topBarViewBase',
    'text!templates/Invoices/TopBarTemplate.html',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = BaseView.extend({
        el         : '#top-bar',
        contentType: CONSTANTS.EXPENSESINVOICE,
        template   : _.template(ContentTopBarTemplate)
    });
    
    return TopBarView;
});
