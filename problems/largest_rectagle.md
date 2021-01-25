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


```JavaScript
// var largestRectangleArea = function(heights) {
//     let rectangles = {
//         [heights[0]]: 1
//     };
//     let maxArea = heights[0];
//     let prevHeight = heights[0];
//     for (let i = 1; i < heights.length; i++) {
//         const barHeight = heights[i];
        
//         rectangles[barHeight] = rectangles[barHeight] || 0;
//         Object.keys(rectangles).forEach((height, i) => {
            
//             if (height <= barHeight) {
//                  rectangles[height] += 1;
//             }
//             const rectangleArea = height * rectangles[height];
//             maxArea = Math.max(maxArea, rectangleArea);

//             if (rectangleArea < maxArea && barHeight < height) {
//                 delete rectangles[height];
//             }
//         });

            
            
//         // for each iteration, update newMaxArea
//         if (barHeight >= prevHeight) {
//             // Iterate through the rectangles
//             // Add width 1 to each of them that is === || smaller than curr height
//             // Add this bar to the rectangles object with width 1
//             Object.keys(rectangles).forEach((height, i) => {
//                 if (height <= barHeight) {
//                     rectangles[height] += 1;
//                 }
//                 const rectangleArea = height * rectangles[height];
//                 newMaxArea = Math.max(newMaxArea, rectangleArea);
//                 if (rectangleArea < new)
//             });
//             rectangles[barHeight] = rectangles[barHeight] || 1;
//         } else if (barHeight === prevHeight) {
//            // Iterate through the rectangles
//             // Add width 1 to each of them
//             Object.keys(rectangles).forEach((height, i) => {
//                 rectangles[height] += 1;
//                 const rectangleArea = height * rectangles[height];
//                 newMaxArea = Math.max(newMaxArea, rectangleArea);
//             });
//         } else if (barHeight < prevHeight) {
//             //Iterate through the rectangles
//             // if height <= barHeight
//             // increment width by 1
//             // if height > barHeight && less than max area
//             // delete the bar
//             // if no bars have exactly this height
//             // add this bar to the chart
//         }
//         prevHeight = barHeight
//         maxArea = Math.max(maxArea, newMaxArea)

//     }
//     return maxArea;
// };
```