const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('./deps/chromedriver').build();
chrome.setDefaultService(service);

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

describe('Lawencon Card Shop', () => {
  let driver;

  before(() => {
    driver = new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:9515').build();
  });
  
  after(() => {
    //return driver.quit();
  })

  beforeEach(() => {
	// soal nomor 1
	return driver.get('http://localhost:8000');
  });

  /* soal nomor 2
  it('Testing Title Buy', async () => {
   driver.getTitle().then(function(title) {
	if(title === 'Buy') {
		console.log('Test passed');
	} else {
		console.log('Test failed');
	}
   });
  });
  */
   
  /* soal nomor 3
  it('Testing Title Help', async () => {
    driver.findElement(By.xpath("//a[text()='Help']")).click();
    driver.sleep(2000).then(function() {   
     driver.getTitle().then(function(title) {
	  if(title === 'Help') {
		console.log('Test passed');
	  } else {
		console.log('Test failed');
	  }
     });  
    });
  });
   */
   
   /* soal nomor 5 
   it('Testing Pilih Kartu', async () => {
	driver.findElement(By.xpath("//img[@src='assets/images/02.png']")).click();
	driver.findElement(By.xpath("//img[@src='assets/images/03.png']")).click();
	driver.findElement(By.xpath("//img[@src='assets/images/04.png']")).click();
	driver.findElement(By.xpath("//img[@src='assets/images/05.png']")).click();
   });
   */
   
  it('Testing Automation', async () => {
	  
  });
  
});
