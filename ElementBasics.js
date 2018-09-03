describe('Protractor Element tutorials',function(){
	
	var obj=require("./Objectdemo.js");
	var d=require("./data.js");
	var using=require('jasmine-data-provider');
	
	beforeEach(function(){
		obj.getURL();
	});
	//data stores actual data , description stores sub object name , every iteration one data set is picked
	
		it('Calculator functionality',function(){
			
			//browser.waitForAngularenabled(false); //To work with non-angular websites
			
			//browser.get("http://google.com");
			//browser.manage().window().maximize();
			//browser.get("http://juliemr.github.io/protractor-demo/");
			
			obj.firstinput.sendKeys(d.datadrive.firstinput);
			obj.secondinput.sendKeys(d.datadrive.secondinput);

			//obj.firstinput.sendKeys("13");
			//obj.secondinput.sendKeys("14");
			obj.go.click();
			
			/*element(by.model("first")).sendKeys("13");
			element(by.model("second")).sendKeys("14");
			
			element(by.id("gobutton")).click();
			*/
			expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(d.datadrive.result);
			
			element(by.css("h2[class='ng-binding']")).getText().then(function(text){
				
				console.log(text);

				
			});
			
			//Output will be displayed only after resolving Promise
			
			
			
			
		})
		
		afterEach(function(){
			
			console.log("Test is completed")
		});
		
		
		
	})
	

	
	
	