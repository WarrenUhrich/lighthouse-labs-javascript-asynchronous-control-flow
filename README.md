# Lighthouse Labs | Asynchronous Control Flow

* [X] Synchronous and Asynchronous Code
* [X] Blocking and Non-Blocking Code
* [X] `setTimeout` Function
    * Function helps us wait a certain amount of time before running some code.
* [X] Higher Order Functions
* [X] `setInterval` Function
* [X] Node and the Filesystem (`fs`)

## Synchronous JavaScript Code

Code that runs in-order from top-to-bottom. Line-by-line execution. This is considered blocking code, as one line must complete before the next can start.

* Run code and there is no wait, runs right away for us!
* All the code is run in the same file? Can be one or more files!

## Asynchronous JavaScript Code

Non-blocking! We can start/schedule an instruction in-flow, and have it complete at a later time (out of flow.)

* Multiple pieces of code can run at-once

Asynchronous Code usually occurs when we need to worry about the following:
* API calls to Remote Servers
* Database operations
* Timers
* Event-handling

## Higher Order Functions

What makes something a "Higher Order Function?"

At least one of the following MUST BE TRUE for a function to be "higher order:"
1) Takes a function/callback as an argument!
2) Returns a function.
