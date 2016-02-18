# xpath-has-class
 - functions that help you to create xpaths, more specifically shortcuts 
 for writing `contains(concat(' ', normalize-space(@class), ' '), ' "+className+" ')` and similar

# API 
```javascript

hasClass = require('xpath-has-class');

hasClass.one("foo");
//returns "contains(concat(' ', normalize-space(@class), ' '), ' foo ')"

hasClass.notOne("foo");
//would be the same as 
hasClass.not( hasClass.one("foo") );
//returns "not(contains(concat(' ', normalize-space(@class), ' '), ' foo '))"

hasClass.all(["bar","bar-foo"]);
//returns "contains(concat(' ', normalize-space(@class), ' '), ' bar ') and contains(concat(' ', normalize-space(@class), ' '), ' bar-foo ')";"

```

To sum up, there are methods:
- `not`
- `one`
- `notOne`

And a few, where you need to pass an array:
- `all`
- `some`
- `notAny`
   