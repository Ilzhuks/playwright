# Task 1 (Based on requirements create 3 manual test cases)
## Test case 1 - "Successful User Registration" 
**Description** - Verify that user can successfully registrate when are provided valid input data for fields: username, email, password and confirm password.  

**Preconditions** - User opens https://auth-home-task.vercel.app/ and press button **Go to registration**. Registration Form is opened.  

**Related documents** - Registration Page Requirements  

**Test data:**
- username: Test
- email: test@test.com
- password: Test1234
- confirm password: Test1234
  
**Steps to execute:**  
	1. In the field username add value: Test  
  	2. In the field email add value: test@test.com  
     	3. In the field password add value: Test1234  
       	4. In the field confirm password add value: Test1234  
	
**Expected result:** User is registraded successfully is displayed message "You have registrated successfully!".  

## Test case 2 - "Validate username field input data"  
**Description** - Verify **username** field input data based on requirements that username must be between 3 and 20 characters and in this field is allowed alphanumeric characters (letters and numbers).  

**Preconditions** - User opens https://auth-home-task.vercel.app/ and press button **Go to registration**. Registration Form is opened.  

**Related documents** - Registration Page Requirements  

**Instruction how to perform test steps** - Add value to **username** field and press buttom "Register". Ignor error messages that are displayed for other input fields if you don't want to see other input field error messages add valid data (for example email: test@test.com  password: Test1234  confirm password: Test1234 ).  

|**Test Step**                                                     | **Test Data**                   | **Expected Result**                                                                                      |   
|------------------------------------------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
|Add value to username field.<br> Username less than 3 char. <br>Press button Register. | username: Te   |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.".   |
|Add value to username field.<br> Username more than 20 char. <br>Press button Register.| username: Test1testTestTestTest |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.".   |
|Add value to username field.<br> Username contains symbols that are not numbers or letters. <br>Press button Register. | username: test&*  |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.".   |
|Add value to username field.<br> Username contains emoji. <br>Press button Register. | username: test😀  |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.". |
|Leave username fiels **empty** <br>Press button Register.     |                        | Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.". |

## Test case 3 - "Validate Error message if invalid input data are added in the input fields"
**Description** - Validate displayed error messages below the input fields when are added invalid input values.  

**Preconditions** - User opens https://auth-home-task.vercel.app/ and press button **Go to registration**. Registration Form is opened.  

**Related documents** - Registration Page Requirements  

**Instruction how to perform test steps** - Add invalid input values to Registration form infput fields and check displayed error message.  

|**Test Step**                                                     | **Test Data**                   | **Expected Result**                                                                                      |   
|------------------------------------------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
|Add invalid values to username, email, password, confirm password fields.<br>Press button Register. | username: Te<br> email:test@test<br> password:Test12<br> confirm password: Test123   |Displayed error messages:<br> username - "Username must be 3-20 alphanumeric characters."<br> email - "Invalid email format."<br> password - "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."<br> confirm password - "Passwords do not match."   |
|Add invalid values to email, password, confirm password fields and valid value to username.<br>Press button Register. | username: Test<br> email:test@test<br> password:Test12<br> confirm password: Test123   |Displayed error messages:<br> email - "Invalid email format."<br> password - "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."<br> confirm password - "Passwords do not match."   |
|Add invalid values to password, confirm password fields and valid values to username and email.<br>Press button Register. | username: Test<br> email:test@test.com<br> password:Test12<br> confirm password: Test123   |Displayed error messages:<br> password - "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."<br> confirm password - "Passwords do not match."   |
|Add invalid value to confirm password field and valid values to username, email and password.<br>Press button Register. | username: Test<br> email:test@test.com<br> password:Test1234<br> confirm password: Test123   |Displayed error message:<br> confirm password - "Passwords do not match."   |  

# Task 2 (Report at least 1 Bug You have found during testing)
## Bug 1 "Fields with errors are not highlighted" 
**Description**: In the requirements is mentioned that fields that has error needs to be highlighted and show error message. The error message is shown but fields are not highlighted.  

**Steps to reproduce**  
1. Open Registration Form (https://auth-home-task.vercel.app/register)
2. In the field username add: Te
3. In the field email add: test@test
4. In the field password add: Test12
5. In the field confirm password add: Test123
6. Press button **Register**

**Actual result**: Fields with errors are **not** highlighted.
**Expected result**: Fields with errors are highlighted.
**Affected version**: Chrome Version 134.0.6998.36
**Criticality**: Low (not affecting functionality error messages are displayed and users can understan where is the problem)

## Bug 2 "Submit button"
**Description**: In the requirements is written **Submit** button but in the application is displayed **Register** buttom.  

**Sterps to reproduce**  
1. Opem Registration Form (https://auth-home-task.vercel.app/register)
2. In the bottom of Registration Form is visible button **Register**

**Actual result**: Button in the Registration From application is called **Register**
**Expected result**: Button in the Registration From application is called **Submit** 
**Affected version**: Chrome Version 134.0.6998.36
**Criticality**: Low (in this case user can easy understand what button need to press as there are only one option available)  

# Task 3 (Based on requirements automate 1 test case using playwright)
Link to automated test "Successful Registration" - https://github.com/Ilzhuks/playwright/blob/master/tests/registrationSuccessful.spec.ts  

# Task 4 (Add points to improve from's UI/UX)
-For email field could be added "shadow text" as an example for correct email format that will disappear when user will make a click on email input field.  








