/* 
    How I would work through the classic FizzBuzz problem
*/



/* Step 1: READ THE PROBLEM

    Write a function that logs all of the numbers between 1 and 100. For numbers divisible by 3 replace the number with fizz. For numbers divisible by 5, replace the number with buzz. For numbers that are divisible by both 3 and 5, replace the number with fizzbuzz
*/

/* Step 2: ASK QUESTIONS

    Should I include 1 and 100?
    If a number is divisible by 3 should I print fizz and the number, or just fizz?
*/


/*  Step 3: WRITE SOME PSUEDOCODE

    iterate from 0 through 100
        check if the number is divisible by 3
            if it is, log fizz
        check if the number is divisible by 5
            if it is, log buzz
        check if the number is divisible by 3 and 5
            if it is, log fizzbuzz
        if none of those are true
            log the number
*/

/* STEP 4: ASK ABOUT YOUR PSEUDOCODE 

    Does this look okay to you?
    Is there anything I am missing?

    (It is okay to ask questions, your interview isn't a test, its a conversation)
*/

/* STEP 5: WRITE YOUR FIRST DRAFT CODE */

const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++){
        if (i % 3 == 0){
            console.log('fizz')
        } else if (i % 5 == 0){
            console.log('buzz')
        } else if (i % 15 == 0){
            console.log('fizzbuzz')
        } else {
            console.log(i);
        }
    }
}

/* STEP 7: TEST YOUR CODE

    If you don't have the ability to run your code, you need to step through it manually to try to find bugs
    If your function takes arguments, come up with sets of arguments that you think might break your code
    
    1:1
    2:2
    3:fizz
    4:4
    5:buzz
    6:fizz
    7:7
    8:8
    9:fizz
    10:buzz
    11:11
    12:fizz
    13:13
    14:14
    15:fizz  (Right here we find an error.  15 should print fizzbuzz but it prints buzz)
*/

/* STEP 8: ITERATE ON YOUR CODE 

    If you found bugs, try to fix them here.  Also, if you know there is a better complexity solution, now is the time to start talking about it
    Otherwise, ask your interviewer if there is anything you can do better, and start working on that
*/

// we identified that the bug was caused by checking for numbers divisible by 3 or 5 BEFORE 3 and 5, thus fizzbuzz would never be printed
// we solved this issue by moving the 3 and 5 conditional up before the individual conditionals
const fizzbuzz = () => {
    for (let i = 1; i <= 100; i++){
        if (i % 15 == 0){
            console.log('fizzbuzz')
        } else if (i % 3 == 0){
            console.log('fizz')
        } else if (i % 5 == 0){
            console.log('buzz')
        } else {
            console.log(i);
        }
    }
}

/* 
    STEP 9: ASK MORE QUESTIONS

    If you made it this far you have likely done well, now its time to start asking questions that demonstrate your understanding

    Ask about possible improvements, the context of the problem, or any other related topics that may propel you into a conversation with your interviewer
*/

