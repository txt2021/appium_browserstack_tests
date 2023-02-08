const loginpage = require('../pages/login.page.js'); 
const signuppage = require('../pages/sign-up.page.js'); 
const swipepage = require('../pages/swipe.page.js');  

 describe('My First demo appp testing', () => {

    it('should open login form and check the required fields presense', async () => {
     await loginpage.clickLoginButton();
     await loginpage.isEmailFieldVisible();
     await loginpage.isPasswordFieldVisible();
     await browser.pause(1500);
    })

    it('should click on the sign up page and check the required fields presense', async () => {
        await loginpage.clickLoginButton();
        await loginpage.clickSignUpButton();
        await signuppage.isEmailFieldVisible();
        await signuppage.isPasswordFieldVisible();
        await signuppage.isConfirmPasswordFieldVisible();   
        await browser.pause(1500);
    })

    it('should sign up with valid credentials', async () => {
        await loginpage.clickLoginButton();
        await loginpage.clickSignUpButton();
        await signuppage.setEmailInput();
        await signuppage.setPasswordInput();
        await signuppage.setConfirmPasswordInput();
        await signuppage.clickSubmitButton();

        await signuppage.isSuccessMessageVisible();
        await signuppage.clickOKButton();
        await browser.pause(1500);
    })

    it('should sign in with valid credentials', async () => {
        await loginpage.clickLoginButtonOnLoginpage();
        await loginpage.setEmailInput();
        await loginpage.setPasswordInput();
        await loginpage.clickSubmitButton();

        await loginpage.isSuccessMessageVisible();
        await loginpage.clickOKButton();
        await browser.pause(1500);
    })

    it('should open the swipe page, swipe and check the picture presense', async () => {
        await swipepage.clickSwipeButton();
        await swipepage.swipeToPicture();
        await swipepage.isSecondPictureVisible();
   
        await browser.pause(500);
    })
})


