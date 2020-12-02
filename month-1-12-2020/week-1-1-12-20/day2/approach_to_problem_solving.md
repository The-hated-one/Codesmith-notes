# Approach to problem solving

                Define Success Conditions
Repeat Until    >  Define or Explore Key Phrases
All Key Phrases ^  Match Actions to Actionable Key Phrases
Are Actionable  |  Redefine Success Conditions
                Create Strategy From Actions

^ This indicates a loop from `redefine success conitions` to `Define or Explore Key Phrases`.

## Probelm: Greed is Good

Greedi s a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's => 600 points
Three 5's => 500 points
Three 4's => 400 points
Three 3's => 300 points
Three 2's => 200 points
One   1   => 100 points
One   5   => 50 points

A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

### Success Condition

*Your mission, should you choose to accept it, is to score a throw according to these rules.*

## Define or Explore Key Phrases

*You will always be given an array with five six-sided dice values.*

*A single die can only be counted once in each roll.*

## Match Actions to Actionable Key Phrases


## Does this new information change our success conditions?

- Our output should be a number representing the score for our throw

- Our best possible score can be calcualted by dealing with a triplet before any singles

## Redefine Success Conditions

## Create Strategy From Actions

### Step 1: Define Input and Output (What's give to you?)

- Input: dice rolls
- Output: the best possible score
- Additional Info: Scoring table, scoring rules

### Step 1: Define Input and Output (What's give to you?) -> translate to JS

- Input: dice rolls
  - Array of numbers
- Output: the best possible score
  - A number
- Additional Info: Scoring table, scoring rules
  - Object contains a map of the scores, an if statement

### Step 3: Consider the simplest examples! Play around for a while

greed([6, 6, 4, 4, 3]);
- Bad throw! What should we return? -> 0

greed([1, 5, 6, 4, 3]);
- Bad throw! What should we return? -> 150

greed([1, 3, 3, 3, 3]);
- Bad throw! What should we return? -> 400

### Step 4: Try describing your approach in english

- Use what's been given to set up boilerplate
- Inputs/outputs, scoring system etc.
- Loop through the input array keeping rack of count for die number and updating score according...

### Step 5: Pseudo-code

You can identify nouns with Javascript Data Types, verbs with functions and equivalence with assigment.

- Loop through ainput array keeping track of count for die number and updating score if a triplet is found.

Becomes...

- Create triplet score by reducing the input data and caching each die count until we hit a triplet and/or we complete the loop.
- Return the final total.

### Step 6: Write some code!

### Step 7: Test it!

### Step 8: Refactor

### Step 9: Test again

## Questions

How to run javascript tests in the console?

## To do

Message about veganism, going deep and memorisation/note taking.