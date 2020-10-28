---
title: Array slice v/s splice once and for all!
description: You know there exists a slice as well as a splice method on the Array prototype but still, open google, type javascript array slice, then javascript array splice, compare them and then make your decision, every single time!
thumbnail: https://ik.imagekit.io/iyansr/iyansr-content/8d0r07xdvrs91zd486xb_455d29850b__Jx-8qvwF?1740871.4800000016
keyword: "array, javascript js array, array splice, js array scplice, javascript array slice, array slice"
date: "2020-06-28"
tags: ["javascript"]
---

Hey There! 👋🏽

If you are like me and have spent most of your recent years coding in Javascript you definitely have come across this conundrum: There is this array and you want to do an operation on it to get a transformed version. You know there exists a slice as well as a splice method on the Array prototype but still, open google, type javascript array slice, then javascript array splice, compare them and then make your decision, every single time!

Do you wish to break this loop and become a JS array ninja who just knows which one of the two is to be used in which case? Then follow along.

## Backdrop

To the uninitiated, Javascript provides us with two methods on the Array prototype which look ever so similar but function worlds apart. There is

### Array.prototype.slice
> Returns a section of the original string without changing the original string

```javascript
let str = [1,2,3,4,5,6,7];
console.log(str.slice(4)); // [5, 6, 7]
console.log(str) // [1,2,3,4,5,6,7];
```

### Array.prototype.splice
> Changes the contents of the array by removing/replacing existing items

```javascript
let str = [1,2,3,4,5,6,7];
console.log(str.splice(4)); // [5, 6, 7]
console.log(str) // [1,2,3,4];
```
 

Here is a __mnemonic__ technique that you can use so that there is no need for another Google search in your entire life while working on JS arrays.

### Slice v/s Splice
Notice that splice has an extra p in the method name. Because of that, it pulls the items out of the original array and hence modifies it, and thus, slice does not pull items out of the original array.
Also, because it pulls items, it can also push items into the array.

So let's sort this out:

#### slice(startIndex, endIndex)
It takes a start index and an end index (excluded) and slices those array items and gives back to you.

```javascript
let str = [1,2,3,4,5,6,7];
console.log(str.slice(2, 4)); // [3, 4]
console.log(str) // [1,2,3,4,5,6,7]; // not modified
```

#### splice(startIndex, number, items)
It takes a start index too, but, also pulls the items out of the original array (the number of items can be specified in the number argument) and all the other arguments after than will be pushed into the array!

```javascript
let str = [1,2,3,4,5,6,7];
console.log(str.splice(2,4,8,9)); // [3, 4, 5, 6]
console.log(str) // [1, 2, 8, 9, 7];
```

Here's a graphic to cement that understanding

![8d0r07xdvrs91zd486xb](https://res.cloudinary.com/practicaldev/image/fetch/s--fNviLWIj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/8d0r07xdvrs91zd486xb.png)

If you liked that, feel free to follow me on twitter where I post my other JS related sketchnotes frequently.

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Today&#39;s <a href="https://twitter.com/hashtag/sketchnotes?src=hash&amp;ref_src=twsrc%5Etfw">#sketchnotes</a> are about <a href="https://twitter.com/hashtag/let?src=hash&amp;ref_src=twsrc%5Etfw">#let</a> vs <a href="https://twitter.com/hashtag/var?src=hash&amp;ref_src=twsrc%5Etfw">#var</a> in <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a><br><br>I&#39;m creating my own <a href="https://twitter.com/hashtag/sketchnotes?src=hash&amp;ref_src=twsrc%5Etfw">#sketchnotes</a> for <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> concepts from the book: &#39;You don&#39;t know JS(<a href="https://twitter.com/YDKJS?ref_src=twsrc%5Etfw">@YDKJS</a>)&#39; by <a href="https://twitter.com/getify?ref_src=twsrc%5Etfw">@getify</a> using <a href="https://twitter.com/excalidraw?ref_src=twsrc%5Etfw">@excalidraw</a> by <a href="https://twitter.com/Vjeux?ref_src=twsrc%5Etfw">@vjeux</a><a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">#webdev</a> <a href="https://twitter.com/hashtag/webdevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#webdevelopment</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> <a href="https://t.co/ReVwo7tr7M">pic.twitter.com/ReVwo7tr7M</a></p>&mdash; Comscience Simplified (@Kokaneka) <a href="https://twitter.com/Kokaneka/status/1276471152517341184?ref_src=twsrc%5Etfw">June 26, 2020</a></blockquote> 


> Original : [Array slice v/s splice once and for all!](https://dev.to/comscience/string-slice-v-s-splice-once-and-for-all-159l "Array slice v/s splice once and for all!")