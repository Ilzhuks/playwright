# Task 1 Based on requirements create 3 manual test cases
## Test case 1 - "Successful User Registration" 
**Description** - Verify that user can successfully registrate when are provided valid input data for fields: username, email, password and confirm password.  
**Preconditions** - User opens https://auth-home-task.vercel.app/ and press button **Go to registration**. Registration Form is opened.  

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
**Description** - Verify username field input data based on requirements that username mutst be between 3 and 20 characters and in this field is allowed alphanumeric characters (letters and numbers).  
**Preconditions** - User opens https://auth-home-task.vercel.app/ and press button **Go to registration**. Registration Form is opened.  

|**Test Step**                                                     | **Test Data**                   | **Expected Result**                                                                                      |   
|------------------------------------------------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------|
|Add value to username field <br>Press button Register             | username: Te                    |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.".   |
|Add value to username field <br>Press button Register             | username: Test1testTestTestTest |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.".   |
|Add value to username field <br>Press button Register             | username: test&*                |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.".   |
|Add value to username field <br>Press button Register             | username: test😀                |Below username input field is displeyed error message "Username must be 3-20 alphanumeric characters.".   |

