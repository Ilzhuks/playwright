**Task 1: Based on requirements create 3 manual test cases **

	**Test Case 1**
		  "Successful User Registration" 
		  Description: Verify that user can successfully registrate when are provided valid data for fields: username, email, password and confirm password.
		  Preconditions: User opens https://auth-home-task.vercel.app/ and press button "Go to registration". "Registration Form" is opened.
		  Test Data: 
			  username: Test
			  email: test@test.com
			  password: Test6821
			  confirm password: Test6821
		  Steps to execute:
			  1) Open Registration Form page
			  2) In the field "Username" add - Test
			  3) In the field "Email" add - test@test.com
			  4) In the field "Password" add - Test6821
			  5) In the field "Confirm Password" add - Test6821
			  6) Press button "Register"
	  	Expected Result: Is displayed message "You have registered successfully!"


	**Test Case 2**
		"Validate username field input data"
		Description: Verify username field input data based on the requirements in the specification.
		Preconditions: User opens https://auth-home-task.vercel.app/ and press button "Go to registration". "Registration Form" is opened.

        Scenario 1
            Test Data: 
                username: Te
                email: test@test.com
                password: Test6821
			    confirm password: Test6821
		     Steps to execute:
                1) Open Registration Form page
                2) In the field "Username" add - Te
                3) In the field "Email" add - test@test.com
                4) In the field "Password" add - Test6821
                5) In the field "Confirm Password" add - Test6821
                6) Press button "Register"
		Expected Result: Below Username input field is displayed error message "Username must be 3-20 alphanumeric characters."


        Scenario 2
            Test Data: 
                username: Test1testTestTestTest
                email: test@test.com
                password: Test6821
			    confirm password: Test6821
		     Steps to execute:
                1) Open Registration Form page
                2) In the field "Username" add - Test1testTestTestTest
                3) In the field "Email" add - test@test.com
                4) In the field "Password" add - Test6821
                5) In the field "Confirm Password" add - Test6821
                6) Press button "Register"
		Expected Result: Below Username input field is displayed error message "Username must be 3-20 alphanumeric characters."

        Scenario 3
            Test Data: 
                username: test&*
                email: test@test.com
                password: Test6821
			    confirm password: Test6821
		     Steps to execute:
                1) Open Registration Form page
                2) In the field "Username" add - test&*
                3) In the field "Email" add - test@test.com
                4) In the field "Password" add - Test6821
                5) In the field "Confirm Password" add - Test6821
                6) Press button "Register"
		Expected Result: Below Username input field is displayed error message "Username must be 3-20 alphanumeric characters."

        Scenario 4
            Test Data: 
                username: test😀
                email: test@test.com
                password: Test6821
			    confirm password: Test6821
		     Steps to execute:
                1) Open Registration Form page
                2) In the field "Username" add - test😀
                3) In the field "Email" add - test@test.com
                4) In the field "Password" add - Test6821
                5) In the field "Confirm Password" add - Test6821
                6) Press button "Register"
		Expected Result: Below Username input field is displayed error message "Username must be 3-20 alphanumeric characters."

	**Test Case 3**
		"Validate Error message display if wrong data are added in the fields"
		Description: Validate erros messages displayed when in the fields are added wrong data.
		Preconditions: User opens https://auth-home-task.vercel.app/ and press button "Go to registration". "Registration Form" is opened.
	Scenario 1
		Test Data: 
			username: Te
			email: test@test
			password: Test68
			confirm password: Test6
		Steps to execute:
			1) Open Registration Form page
			2) In the field "Username" add - Te
			3) In the field "Email" add - test@test
			4) In the field "Password" add - Test68
			5) In the field "Confirm Password" add - Test6
			6) Press button "Register"
		Expected Results: For every field is displayed error message"
				Username field error message:
				Email field error message:
				Password field error message:
				Confirm password field error message:

		Steps to execute for each test scenario:
			1) Open Registration Form page
			2) Add "Username"
			3) Add "Email"
			4) Add "Password"
			5) Add "Confirm Password"
			6) Press button "Register"
   Scenario 1
   		Test input Data: 
			username: Te
			email: test@test
			password: Test68
			confirm password: Test6
		Expected Results: For every field is displayed error message"				
            Username field error message: "Username must be 3-20 alphanumeric characters."
			Email field error message: "Invalid email format."
			Password field error message: "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."
			Confirm password field error message: "Passwords do not match."

   Scenario 2
   		Test input Data: 
			username: Test
			email: test@test
			password: Test68
			confirm password: Test6
		Expected Results: For every field is displayed error message"				
			Email field error message: "Invalid email format."
			Password field error message: "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."
			Confirm password field error message: "Passwords do not match."   

   Scenario 3
   		Test input Data: 
			username: Test
			email: test@test.com
			password: Test68
			confirm password: Test6
		Expected Results: For every field is displayed error message"				
			Password field error message: "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number."
			Confirm password field error message: "Passwords do not match."

   Scenario 4
   		Test input Data: 
			username: Te
			email: test@test
			password: Test1234
			confirm password: Test6
		Expected Results: For every field is displayed error message"				
			Confirm password field error message: "Passwords do not match."

   Scenario 5
   		Test input Data: 
			username: Te
			email: test@test
			password: Test1234
			confirm password: Test1234
		Expected Results: For every field is displayed error message"				
            Username field error message: "Username must be 3-20 alphanumeric characters."
			Email field error message: "Invalid email format."



**Task 2: Report at least 1 Bug You have found during the testing **
	
	Bug 1 "Fields with errors are not Highlighted"
		Description: In the requirements is mentioned that field that has error need to be highlighted and show error message. Error message is displayed but fields with error is not highlighted.
		Steps to reproduce:
			1) Open Registration Form page
			2) In the field "Username" add - Te
			3) In the field "Email" add - test@test
			4) In the field "Password" add - Test
			5) In the field "Confirm Password" add - Test1
			6) Press button "Register"
		Actual result: Fields with erros are not highlighted
		Expected result: Fields with errors are highlighted
		Affected version:
		Criticality: low (not affecting functionality and error message is displayed so user can understand where is the problem)



	Bug 2 "Submit button"
		Description: In the requirements is written "Submit" button but in the application in the Registration Form is mentioned "Register" button not " Submit".
		Steps to reprodude:
			1) Open Registration Form page
			2) In the bottom of Registration form is visible button "Register".
		Actual result: Button is called "Register"
		Expected result: Button is called "Submit"
		Affected version:
		Criticality: Low (in this case user can easy understand what button need to press as there are only one option available)

**Task 3: Based on requirements automate 1 manual test case using playwright **

Link to automated test "Successful Registration" - https://github.com/Ilzhuks/playwright/blob/master/tests/registrationSuccessful.spec.ts


**Task 4: Add points to improve form's UI/UX **
    - For Email field could be added "shadow text" with email format example that disappears when user make a click on the email field.
    - With asteric (start) mark mandatory fields - so that user can in advance know what fields are mandatory 
    - Progress indicator for Password field (that is counted what required steps are done for password to be valid depending on requirements) or Indicator of message how strong is created Password (week, medium or strong with colour indicator red for week, yellow for medium and green for strong password) 
    - Possibility to log in using social media platforms (like Facebook, Google)
    - Possibility to see password (press on eye icon and user can see what data are entered in the Password field)



**Task 5: Anything You would improve/specify more in the existing requirements **
    - Does username and e-mail field values need to be unique or there can be cases when username are the same but with different emails or other way around
	- What happened when user try to registrate with data that already are registrated (is there a message that user already exists)
	- "Submit button" in the application is called "Register" would add the same button name in the Requirements and Application so that there are no misunderstandings.
	- In Requirements not mentioned specific symbol usage (like &, *, %, $, etc.) in "Password" field. The Password field allow to use these specific symbols.
	- Add what are the clear error message for each field that is expected to be shown.



**Task 6: What else can be tested? **
    - Security testing
    - Data duplicate testing
