
class Page {  

   async swipe(x1,x2,y1,y2){
    await browser.touchAction([
        { action: 'press', x: x1, y: y1 },
        { action: "wait",  ms: 1000 },
        { action: 'moveTo', x: x2, y: y2 },
        'release'
      ]);
   }

    async click(locator){
        await $(locator).click();
    }

    async setvalue(locator,text){
        await ((await $(locator)).setValue(text));
    }

    async getText(locator){
        await ((await $(locator)).getText());
    }

    async isdisplayed(locator){
        const elem = await $(locator)
        await expect(elem).toBeDisplayed()
    }
    

    async waitForDisplayed(locator){
        await ((await $(locator)).waitForDisplayed());
    }

}
module.exports = new Page()