# Largest Rectangle in Histogram problem
https://leetcode.com/problems/largest-rectangle-in-histogram/

## Brute force solution

```JavaScript
var largestRectangleArea = function(heights) {
    let maxArea = -Infinity
    for (let start = 0; start < heights.length; start++) {
        let height = heights[start];
        for (let end = start; end < heights.length; end++) {
            const newHeight = heights[end]
            const width = end - start + 1
            height = Math.min(height, newHeight)
            const newArea = height * width
            maxArea = Math.max(newArea, maxArea)
        }
    }
    return maxArea;
};
```



```JavaScript
/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//     let maxArea = -Infinity
//     for (let start = 0; start < heights.length; start++) {
//         let height = heights[start];
//         for (let end = start; end < heights.length; end++) {
//             const newHeight = heights[end]
//             const width = end - start + 1
//             height = Math.min(height, newHeight)
//             const newArea = height * width
//             maxArea = Math.max(newArea, maxArea)
//         }
//     }
//     return maxArea;
// };
var largestRectangleArea = function(heights) {
    let max = {
        h: heights[0],
        w: 0,
        a: heights[0]
    };

    for (let i = 0; i < heights.length; i++) {
        console.log('inside loop: ', i);
        const barHeight = heights[i];
        const newBar = {
            h: barHeight,
            w: 1,
            a: barHeight
        };
        console.log('newBar', newBar);
        const newHeight = Math.min(barHeight, max.h);
        console.log('newHeight', newHeight)
        const newWidth = max.w + 1;
        console.log('newWidth', newWidth);
        const combineBars = {
            h: newHeight,
            w: newWidth,
            a: newHeight * newWidth
        }
        console.log('combineBars', combineBars)
        if (newBar.a >= combineBars.a) {
            if (newBar.a >= max.a) max = newBar;
        } else {
            if (combineBars.a > max.a) max = combineBars;
        }
        console.log('new max', max);
    }
    return max.a;
};


```