exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ElementBasics.js'],
  
  onPrepare:function(){
		browser.manage().window().maximize();
		
		
		
		  
	  }
};