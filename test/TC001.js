const {Builder, By, Key, until} = require('selenium-webdriver');
var  expect = require('chai').expect;

require('chromedriver')

describe('Sub menu Agama', function () {
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Dapat menampilkan data Agama berdasarkan kata kunci yang sesuai dan kata kunci yang tidak sesuai', async function(){
        await driver.get('https://simpatik-fe.merapi.javan.id/login');
        await driver.manage().window().maximize();
        
        await driver.findElement(By.id('username')).sendKeys('pemb001');
        await driver.findElement(By.id('password')).sendKeys('secret');
        await driver.findElement(By.id('remember-me')).click();
        await driver.findElement(By.css('button[type="submit"]')).click();
        
        var ele = driver.wait(until.elementLocated(By.linkText('Master Data')));
        await ele.click();
        var ele = driver.wait(until.elementLocated(By.linkText('Agama')));
        await ele.click();
        var ele = driver.wait(until.elementLocated(By.name('search')));
        await ele.sendKeys('Islam')
        var ele = driver.findElement(By.css('button[type="submit"]'));
        await ele.click();
        await driver.findElements(By.xpath('//td[contains(text(), "Islam")]'));
        var ele = driver.findElement(By.css('button[type="reset"]'));
        await ele.click();
        await ele.sendKeys('Tidak ada agama yang cocok');
        var ele = driver.findElement(By.css('button[type="submit"]'));
        await ele.click();
        await driver.findElements(By.xpath('//td[contains(text(), "Tidak ada data")]'));
        await driver.findElement(By.css('button[type="reset"]')).click();
    }) 
})