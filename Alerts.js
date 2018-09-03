describe('Alerts Tutorial',function(){
	
	it('alerts',function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("http://www.qaclickacademy.com/practice.php");
		element(by.id("confirmbtn")).click();
		browser.sleep(3000);
		
		browser.switchTo().alert().accept().then(function(){
			
			browser.sleep(3000);
		});
		
	
	})	
})