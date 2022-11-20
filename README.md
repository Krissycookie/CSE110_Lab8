# CSE110 Lab 8

1. Within a Github action that runs whenever code is pushed because tests can prevent people from pushing bad/buggy code to the repo.
   
2. No because E2E testing is looking at user actions from start to finish, not just one function.
   
3. No because the message feature most likely requires multiple functions to send a message and unit tests cannot test how these components interact with eachother.
   
4. Yes because it is a small function in our code and can be tested easily using a unit test(we don't need to test the entire app to ensure this function works).