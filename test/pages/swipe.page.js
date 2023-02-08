const page = require('./page');


const swipe_button = `//android.widget.Button[@content-desc="Swipe"]/android.widget.TextView[1]`;
const second_picture_swipepage = `(//android.view.ViewGroup[@content-desc="card"])[2]`;

class SwipePage{   

    async clickSwipeButton(){
        await page.click(swipe_button);
    }
    
    async swipeToPicture(){
        await page.swipe(580,180,1000,1000);
        /*browser.touchAction([
            { action: 'press', x: 580, y: 1000 },
            { action: "wait",  ms: 1000 },
            { action: 'moveTo', x: 180, y: 1000 },
            'release'
          ]);*/
    }   
    
    async isSecondPictureVisible(){
        await (expect(page.isdisplayed(second_picture_swipepage)));
    }

}

module.exports = new SwipePage();