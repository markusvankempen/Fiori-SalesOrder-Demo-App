jQuery.sap.declare("sap.ui.demo.myFiori.util.Grouper");

sap.ui.demo.myFiori.util.Grouper = {
	
	BillingStatus : function (oContext) {
		var status = oContext.getProperty("BillingStatus");
		return {
			key: status,
			text: status
		};
	},
	
	GrossAmount : function (oContext) {
		var price = oContext.getProperty("GrossAmount");
		var currency = oContext.getProperty("CurrencyCode");
		var key, text;
		if (price <= 5000) {
			key = "A-LE10";
			text = "< 5000 " + currency;
		} else if (price <= 10000) {
			key = "B-LE100";
			text = "< 10.000  " + currency;
		} else {
			key = "C-GT100";
			text = "> 10.000 " + currency;
		}
		return {
			key: key,
			text: text
		};
	}
};