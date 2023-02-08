const page = require('./page');

const email_input =`//android.widget.EditText[@content-desc="input-email"]`;
const password_input = `//android.widget.EditText[@content-desc="input-password"]`;
const confirm_password_input = `//android.widget.EditText[@content-desc="input-repeat-password"]`;
const submit_button = `//android.view.ViewGroup[@content-desc="button-SIGN UP"]`;

const valid_email = "testmail1@gmail.com";
const valid_pass = "Good_Pass12";

const success_signup = `/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView`;
const ok_button = `/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button`

class SignUpPage{   

    async clickOKButton(){
        await page.click(ok_button);
    }
  
    async isSuccessMessageVisible(){
        await (expect(page.isdisplayed(success_signup)));
    }

    async isEmailFieldVisible(){
        await (expect(page.isdisplayed(email_input)));
    }
  
    async isPasswordFieldVisible(){
        await (expect(page.isdisplayed(password_input)));
    }

    async isConfirmPasswordFieldVisible(){
        await (expect(page.isdisplayed(confirm_password_input)));
    }

    async setEmailInput(){
        await page.setvalue(email_input,valid_email);
    }

    async setPasswordInput(){
        await page.setvalue(password_input,valid_pass);
    }

    async setConfirmPasswordInput(){
        await page.setvalue(confirm_password_input,valid_pass);
    }

    async clickSubmitButton(){
        await page.click(submit_button);
    }

    

}

module.exports = new SignUpPage();