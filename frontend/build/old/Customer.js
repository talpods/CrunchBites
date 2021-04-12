class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';
  
    static validate(value, flag, validatorValue) {
      if (flag === this.REQUIRED) {
          return value.trim().length > 0;   
      }  
      if (flag === this.MIN_LENGTH) {
         return value.trim().length > validatorValue;
      }
    }    
  }
   
  
  class User {
      constructor(uName , uEmail , uPassword) {
          this.userName = uName;
          this.email= uEmail;
          this.password = uPassword; 
      }
      
  
      greet(){  
        console.log ("Hi, I am " + this.userName);  
  
      }
    }

      
          
      
        
      
   
    
    
  class UserInputForm{
      constructor() {
          this.form = document.getElementById('user-input');
          this.userNameInput = document.getElementById('username');
          this.emailInput= document.getElementById('email')
          this.passwordInput = document.getElementById('password');
  
          this.form.addEventListener('submit',this.signupHandler.bind(this));
      }
  
           signupHandler(event) {
           event.preventDefault();
           const enteredUserName = this.userNameInput.value;
           const enteredEmail = this.emailInput.value;
           const enteredPassword = this.passwordInput.value;
  
         if (
             !Validator.validate(enteredUserName, Validator.REQUIRED) ||
             !Validator.validate(enteredEmail, Validator.REQUIRED) ||
             !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
             ) {
              alert(
                  'Invalid input - username or passowrd is incorrect (password should be at least 6 characters)'
              ); } else {
                alert( "welcome "  + this.userNameInput.value);
            }

          
        
  
             const newUser = new User (enteredUserName, enteredEmail , enteredPassword);
             console.log(newUser);
             newUser.greet();
            
  
              }
          }
          
          
          new UserInputForm();


   
      
  
  
  