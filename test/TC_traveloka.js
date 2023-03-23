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
    it('Dapat menambahkan data Agama', async function(){
        await driver.get('https://www.traveloka.com/en-id/');
        await driver.manage().window().maximize();
        
        await driver.findElement(By.xpath('//div[contains(text(), "Bus & Shuttle")]')).click();
        var ele = driver.wait(until.elementLocated(By.css('input[value]')));
        await ele.sendKeys('jakarta');
        var ele = driver.wait(until.elementLocated(By.css('div[aria-label="Jakarta"]')));
        await ele.click();

        var ele = driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div[5]/div[2]/div[1]/div/div/div[3]/div/div[2]/div[3]/div[2]/div[1]/input')));
        await ele.sendKeys('bandung');
        var ele = driver.wait(until.elementLocated(By.css('div[aria-label="Bandung"]')));
        await ele.click();

        await driver.findElement(By.css('svg[data-id="IcSystemSearch"')).click();
    }) 
})