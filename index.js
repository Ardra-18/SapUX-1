sap.ui.define(["sap/m/MessageBox","sap/ui/core/format/DateFormat"],function(MessageBox, DateFormat){
    return{
        showDateTime: function(date){
            var dte = DateFormat.getDateInstance();
            var fDate = dte.format(date);
            MessageBox.show(fDate, {
                title: "Message"
            });

        }
    }
})