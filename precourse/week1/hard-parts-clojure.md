# Clojure and Execution Context

Sarah Powers. sarah@codesmith.io
Sara - Lead technical mentor at Codesmith for the New York program.
Went through Codesmith last year. Used to teach Yoga. Doesn’t have a degree.

Paul scotland

Garbage collect the execution context.
Pop function off the call stack.
Push a function onto the call stack.
Pair parameter with our argument in local memory.
Live store of data for that functions execution context.
Clojure gives us persisten/permanent memory. Persistent lexically scoped reference data. PLSRD.
Invoking a function.

What is the comp sci word for when functions can be returned from and passed into a function:
First-class functions - when functions in that language are treated like any other variable.

Evaluate a result.

Var variables are hoisted. Let variables are not hoisted.

The global namespace. We don't want to pollute the global namespace.

# Clojure

We have access the local memory of the local execution context 
The local variable environment (the local memory) in the context it was defined.

When the function was assigned it saved not only the function definition but also the local variable environemnt in the context it was defined.

The closed over variable environment. COVE. PLSRD. Persistent Lexically Scoped Reference Data. Clojure.

So this is how we have persistent memory across multiple execution contexts/function calls through a hidden property known as `[[scope]]`.

# Questions

Is a variable assigned to the invokation of a function first assigned to 'undefined' before the ouput of the invoked function is evaluated and assigned as the value of that variable?

-> unitialized.

Is a function popped off the callstack before its execution context is garbage collected, or does this happen simultaneously?

-> Simultaneously, but Sara is not sure.

Why use clojure instead of class?

# To do

Research the meaning of instantiate and initialize in computer science.