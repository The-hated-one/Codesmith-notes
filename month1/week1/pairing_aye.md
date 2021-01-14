# Paring with Aye

I liked that you asked me questions when you got stuck, and you really listened to my answers.

You gave me the opportunity to teach and I really appreciated that.

Bad styling, please use a style guide. -> no spacing.s
You made me laugh and smile.

We had lots of fun and the time flew by.

Put up with sleepy/tired me really well.

### Questions / to explore further

Still don't fully understand `.slice()` in JavaScript. Would be good to dive deeper on that so that I gain a fuller and deeper understanding.

Does the order of an object matter?

Should the driver or navigator do research? -> navigator does research

## Feedback

Really appreciate patience. Sharing knowledge. Skill is high. Refactor after finishing the problem.
Great technical communication skills.

Feedback -> refactor!
Work on your technical communication.
Learning -> we move on faster.


```JavaScript
function flattenDeep(array, result = [], i = 0) {
  if (!array[i]) return result;
  if (Array.isArray(array[i])) flattenDeep(array[i], result, 0);
  else result.push(array[i]);
  return flattenDeep(array, result, i + 1);
}
```
