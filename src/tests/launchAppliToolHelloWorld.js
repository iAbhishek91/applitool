import { Builder, By } from 'selenium-webdriver';
import { Eyes } from 'eyes.selenium';

let driver = new Builder()
              .forBrowser('chrome')
              .build();
let eyes = new Eyes();
try{

driver.manage().deleteAllCookies();
eyes.setApiKey('HPbSAsr0vZQ3W6iMwpGfPj4jnyX4ySCvn100I1023YBblw4110');
eyes.open(driver,'applitool demo app', 'first visual testing',{width: 800, height: 600});

driver.get("https://applitools.com/helloworld");
eyes.checkWindow('default load');

driver.findElement(By.xpath("//button[contains(text(),'Click')]")).click();
eyes.checkWindow('after click');

eyes.close();
}
finally{
  driver.quit();
  eyes.abortIfNotClosed();
}