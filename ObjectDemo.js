function car(){
	this.color="red";
	this.engine="turbo";
	this.brand="BMW";
	
	this.firstinput=element(by.model("first"));
	this.secondinput=element(by.model("second"));
	this.go=element(by.id("gobutton"));
	
	this.getURL=function(){
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		
	}
	
};

module.exports=new car();

