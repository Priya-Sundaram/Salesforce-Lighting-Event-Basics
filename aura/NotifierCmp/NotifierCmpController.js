({
	handleEvent : function(cmp, event, helper) {
		//1.get reference - Get event by name
		var cEvt = cmp.getEvent("compEvt");
		//2.set attributes - set event parameters in JSON Format
        cEvt.setParams({"msg":"Your message is here "});
		//3.fire event	
		cEvt.fire();
	}
})