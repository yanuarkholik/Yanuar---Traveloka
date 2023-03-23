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

        const nama_agama = 'Konghuchu';
        var ele = driver.wait(until.elementLocated(By.css('.bg-green-600')));
        await ele.click();
        var ele = driver.wait(until.elementLocated(By.name('agama')));
        await ele.sendKeys(nama_agama);
        await driver.findElement(By.css('button[data-btn="save"]')).click();
        await driver.findElements(By.xpath('//p[contains(text(), "Data berhasil disimpan")]'));

    }) 
})