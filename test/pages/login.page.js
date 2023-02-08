const page = require('./page');


const login_button =`//android.widget.Button[@content-desc="Login"]/android.widget.TextView[1]`;
const login_button_on_loginpage = `//android.view.ViewGroup[@content-desc="button-login-container"]/android.view.ViewGroup/android.widget.TextView`
const email_input = `//android.widget.EditText[@content-desc="input-email"]`;
const password_input = `//android.widget.EditText[@content-desc="input-password"]`;
const submit_button = `//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup`;
const signup_button = `//android.view.ViewGroup[@content-desc="button-sign-up-container"]/android.view.ViewGroup/android.widget.TextView`;
const success_login = `/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout`;

const valid_email = "testmail1@gmail.com";
const valid_pass = "Good_Pass12";

const ok_button = `/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button`;

class LoginPage{  
 
  async clickOKButton(){
    await page.click(ok_button);
    }  

    async clickLoginButton(){
      await page.click(login_button);
    }

    async clickLoginButtonOnLoginpage(){
      await page.click(login_button_on_loginpage);
    }

    async isEmailFieldVisible(){
      await (expect(page.isdisplayed(email_input)));
    }

    async isPasswordFieldVisible(){
      await (expect(page.isdisplayed(password_input)));
    }

    async clickSignUpButton(){
      await page.click(signup_button)
    }

    async clickSubmitButton(){
      await page.click(submit_button)
    }

    async isSuccessMessageVisible(){
      await (expect(page.isdisplayed(success_login)));
    }

    async setEmailInput(){
      await page.setvalue(email_input,valid_email);
    }

    async setPasswordInput(){
      await page.setvalue(password_input,valid_pass);
    }

    async isSuccessMessageVisible(){
      await (expect(page.isdisplayed(success_login)));
  }

   
}

module.exports = new LoginPage();