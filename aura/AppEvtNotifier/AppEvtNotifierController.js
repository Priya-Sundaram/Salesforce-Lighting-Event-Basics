({
	handleEvent : function(component, event, helper) {
		//1.get reference by using $A.get
        var appevt = $A.get("e.c:AppEvent");
        //2.set attributes - set event parameters in JSON Format
        appevt.setParams({"msg":"Your message is here "});
		//3.fire event	
		appevt.fire();
	}
})