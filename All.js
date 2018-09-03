describe('All Locators tutorials',function(){
	
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element(by.id("gobutton")).click();
		
		
	}
	
	it('All Locators',function(){
		
		//browser.waitForAngularenabled(false); //To work with non-angular websites
		
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		//repeater , chain locators , css for identical tags
		
		Add(2,3);
		Add(5,9);
		Add(12,76);
		Add(54,23);
		


		
		
		
		
		element.all(by.repeater("result in memory")).count().then(function(text){
			console.log(text);
			
		})
		
		element.all(by.repeater("result in memory")).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})
		
	})
})