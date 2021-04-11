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
      constructor(rName , rLocation, rWebsite, oName, oEmail , oPassword) {
          this.restaurantName = rName;
          this.location = rLocation;
          this.Website = rWebsite
          this.ownerName = oName;
          this.email= oEmail;
          this.password = oPassword; 
      }
      
  
      greet(){  
        console.log ("Hi, I am " + this.ownerName);  
  
      }
    }

      
          
      
        
      
   
    
    
  class UserInputForm{
      constructor() {
          this.form = document.getElementById('user-input');
          this.restaurantNameInput = document.getElementById('restaurantname');
          this.locationInput = document.getElementById('location');  
          this.websiteInput = document.getElementById('website');
          this.ownerNameInput = document.getElementById('ownername');
          this.emailInput= document.getElementById('email');
          this.passwordInput = document.getElementById('password');
       
         
  
          this.form.addEventListener('submit',this.signupHandler.bind(this));
      }
  
           signupHandler(event) {
           event.preventDefault();
           const enteredRestaurantName = this.restaurantNameInput.value;
           const enteredLocation = this.locationInput.value;
           const enteredWebsite = this.websiteInput.value;
           const enteredOwnerName = this.ownerNameInput.value;
           const enteredEmail = this.emailInput.value;
           const enteredPassword = this.passwordInput.value;
  
         if (
             !Validator.validate(enteredRestaurantName, Validator.REQUIRED) ||
             !Validator.validate(enteredLocation, Validator.REQUIRED)  ||
             !Validator.validate(enteredWebsite, Validator.REQUIRED) ||
             !Validator.validate(enteredOwnerName, Validator.REQUIRED) ||
             !Validator.validate(enteredEmail, Validator.REQUIRED) ||
             !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
             ) {
              alert(
                  'Invalid input please fill all the fileds - (password should be at least 6 characters)'
              ); } else {
                alert( "welcome "  + this.ownerNameInput.value);
            }

          

  
             const newUser = new User (enteredRestaurantName, enteredLocation, enteredWebsite,enteredOwnerName, enteredEmail , enteredPassword);
             console.log(newUser);
             newUser.greet();
            


  
              }
          }
          
          
          new UserInputForm();


   
      
  
  
  

