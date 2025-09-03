
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:(a)getElementById:It finds one thing on the webpage by its unique id. And by id we know a special name that only one thing can have.It gets just that one item or nothing if it’s not there.
(b)getElementsByClassName:It finds all things on the webpage that have the same classand gets list of all matching items.
(c)querySelector:It finds the first thing on the webpage that matches a CSS selector and gets just one item or nothing if no items match.
(d)querySelectorAll: It finds all things on the webpage that match a CSS selector and gets list of items matched.

2. How do you **create and insert a new element into the DOM**?
Answer:Steps to create and insert a new element to DOM is given below:
we use document.createElement() to make a new element and appendChild() or append() to add it.
Example:
let x = document.createElement("x");
x.textContent = "Yay I know the answer!";
document.body.appendChild(x);

3. What is **Event Bubbling** and how does it work?
Answer:Event bubbling means when we click on a child element, the event goes up to its parent, then grandparent, and so on until the root.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:Event delegation means adding one event listener to a parent element instead of adding it to many child elements.It is useful because it saves memory and works even for new child elements added later.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:(a)preventDefault() stops the default action such as- stopping a link from opening.
(b)stopPropagation() stops the event from bubbling up to parent elements.

