({
	handleEvent : function(component, event, helper) {
		//Get Event Params
		var message = event.getParam("msg");
        //Take actions
        alert('message is '+message);	
	}
})