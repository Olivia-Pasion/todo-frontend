import { 
    redirectIfLoggedIn, 
    //signInUser, 
    signupUser 
} from '../utils.js';

// const signInForm = document.getElementById('signin-form');
// const signInEmail = document.getElementById('signin-email');
// const signInPassword = document.getElementById('signin-password');

const signUpForm = document.getElementById('signup-form');
const [signupEmail, signupPassword] = signUpForm.querySelectorAll('input');

redirectIfLoggedIn();

signUpForm.addEventListener('submit', async(event) => {
    event.preventDefault();
    console.log('clicking');
    const user = await signupUser(signupEmail.value, signupPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

