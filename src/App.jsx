import { useState, useEffect, useCallback } from "react";

// ─── 500 QUESTIONS across 20 topics (25 each) ───────────────────────────────
const ALL_QUESTIONS = [
  // ════════════════════════════════════════════
  // TOPIC 1: HTML Tags & Attributes (25)
  // ════════════════════════════════════════════
  {
    id: 1,
    topic: "HTML Tags & Attributes",
    q: "Which HTML attribute merges multiple columns in a table?",
    opts: ["rowspan", "colspan", "cellspan", "merge"],
    ans: 1,
  },
  {
    id: 2,
    topic: "HTML Tags & Attributes",
    q: "What does the `rowspan` attribute do in a table?",
    opts: [
      "Merges columns",
      "Merges rows",
      "Sets row height",
      "Adds row border",
    ],
    ans: 1,
  },
  {
    id: 3,
    topic: "HTML Tags & Attributes",
    q: "Which tag defines the table header cell?",
    opts: ["<td>", "<th>", "<tr>", "<thead>"],
    ans: 1,
  },
  {
    id: 4,
    topic: "HTML Tags & Attributes",
    q: "What attribute sets spacing between table cells?",
    opts: ["cellpadding", "cellspacing", "border", "margin"],
    ans: 1,
  },
  {
    id: 5,
    topic: "HTML Tags & Attributes",
    q: "What does `cellpadding` define?",
    opts: [
      "Space between cells",
      "Space around cell data",
      "Cell border width",
      "Cell background",
    ],
    ans: 1,
  },
  {
    id: 6,
    topic: "HTML Tags & Attributes",
    q: "Which HTML tag creates a hyperlink?",
    opts: ["<link>", "<a>", "<href>", "<nav>"],
    ans: 1,
  },
  {
    id: 7,
    topic: "HTML Tags & Attributes",
    q: "What attribute of `<a>` specifies the destination URL?",
    opts: ["src", "link", "href", "url"],
    ans: 2,
  },
  {
    id: 8,
    topic: "HTML Tags & Attributes",
    q: "Which tag is used to embed an image?",
    opts: ["<image>", "<img>", "<picture>", "<photo>"],
    ans: 1,
  },
  {
    id: 9,
    topic: "HTML Tags & Attributes",
    q: "What does the `alt` attribute on `<img>` do?",
    opts: [
      "Sets image alignment",
      "Provides alternative text",
      "Sets image size",
      "Adds a caption",
    ],
    ans: 1,
  },
  {
    id: 10,
    topic: "HTML Tags & Attributes",
    q: "Which attribute makes an input field required?",
    opts: ["validate", "mandatory", "required", "must"],
    ans: 2,
  },
  {
    id: 11,
    topic: "HTML Tags & Attributes",
    q: "What does `placeholder` attribute do in an input?",
    opts: [
      "Sets default value",
      "Shows hint text",
      "Validates input",
      "Sets max length",
    ],
    ans: 1,
  },
  {
    id: 12,
    topic: "HTML Tags & Attributes",
    q: "Which input type shows a date picker?",
    opts: ["text", "calendar", "date", "datetime"],
    ans: 2,
  },
  {
    id: 13,
    topic: "HTML Tags & Attributes",
    q: "What does `autofocus` attribute do?",
    opts: [
      "Submits form automatically",
      "Focuses element on page load",
      "Enables autocomplete",
      "Validates on focus",
    ],
    ans: 1,
  },
  {
    id: 14,
    topic: "HTML Tags & Attributes",
    q: "Which HTML tag defines a section of navigation links?",
    opts: ["<section>", "<nav>", "<menu>", "<links>"],
    ans: 1,
  },
  {
    id: 15,
    topic: "HTML Tags & Attributes",
    q: "What is the purpose of the `<caption>` tag in a table?",
    opts: [
      "Defines table header",
      "Provides table title",
      "Defines table footer",
      "Adds row numbering",
    ],
    ans: 1,
  },
  {
    id: 16,
    topic: "HTML Tags & Attributes",
    q: "Which attribute specifies that `<a>` should open in a new tab?",
    opts: ['target="new"', 'target="blank"', 'target="_blank"', 'open="new"'],
    ans: 2,
  },
  {
    id: 17,
    topic: "HTML Tags & Attributes",
    q: "What does the `<meta charset='UTF-8'>` tag do?",
    opts: [
      "Sets page title",
      "Specifies character encoding",
      "Adds keywords",
      "Links stylesheet",
    ],
    ans: 1,
  },
  {
    id: 18,
    topic: "HTML Tags & Attributes",
    q: "Which HTML5 tag represents independent self-contained content?",
    opts: ["<section>", "<article>", "<aside>", "<div>"],
    ans: 1,
  },
  {
    id: 19,
    topic: "HTML Tags & Attributes",
    q: "What does `valign` attribute in a table cell control?",
    opts: [
      "Horizontal text alignment",
      "Vertical text alignment",
      "Cell border",
      "Cell width",
    ],
    ans: 1,
  },
  {
    id: 20,
    topic: "HTML Tags & Attributes",
    q: "Which tag is used for a multiline text input?",
    opts: [
      "<input type='multiline'>",
      "<input type='text'>",
      "<textarea>",
      "<textbox>",
    ],
    ans: 2,
  },
  {
    id: 21,
    topic: "HTML Tags & Attributes",
    q: "What does `<br>` do?",
    opts: [
      "Creates bold text",
      "Inserts a line break",
      "Creates a border",
      "Starts a new block",
    ],
    ans: 1,
  },
  {
    id: 22,
    topic: "HTML Tags & Attributes",
    q: "Which attribute in `<input>` limits maximum characters?",
    opts: ["max", "limit", "maxlength", "size"],
    ans: 2,
  },
  {
    id: 23,
    topic: "HTML Tags & Attributes",
    q: "What does `<strong>` do visually?",
    opts: ["Italic text", "Underlined text", "Bold text", "Colored text"],
    ans: 2,
  },
  {
    id: 24,
    topic: "HTML Tags & Attributes",
    q: "Which HTML element is used to group inline elements?",
    opts: ["<div>", "<span>", "<section>", "<p>"],
    ans: 1,
  },
  {
    id: 25,
    topic: "HTML Tags & Attributes",
    q: "What does the `<head>` section of HTML contain?",
    opts: [
      "Visible page content",
      "Metadata and links",
      "Navigation",
      "Footer content",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 2: HTML Forms (25)
  // ════════════════════════════════════════════
  {
    id: 26,
    topic: "HTML Forms",
    q: "Which `enctype` is required for file uploads in a form?",
    opts: [
      "application/json",
      "text/plain",
      "multipart/form-data",
      "application/x-www-form-urlencoded",
    ],
    ans: 2,
  },
  {
    id: 27,
    topic: "HTML Forms",
    q: "What HTTP method must be used for file upload forms?",
    opts: ["GET", "PUT", "DELETE", "POST"],
    ans: 3,
  },
  {
    id: 28,
    topic: "HTML Forms",
    q: "Which input type is used for file selection?",
    opts: ["type='upload'", "type='file'", "type='attach'", "type='document'"],
    ans: 1,
  },
  {
    id: 29,
    topic: "HTML Forms",
    q: "What does `autocomplete='off'` do on an input?",
    opts: [
      "Disables the input",
      "Prevents browser autocomplete suggestions",
      "Clears the field",
      "Validates on change",
    ],
    ans: 1,
  },
  {
    id: 30,
    topic: "HTML Forms",
    q: "Which attribute on `<form>` specifies where to send data?",
    opts: ["method", "src", "action", "target"],
    ans: 2,
  },
  {
    id: 31,
    topic: "HTML Forms",
    q: "What is the default method of an HTML form?",
    opts: ["POST", "PUT", "DELETE", "GET"],
    ans: 3,
  },
  {
    id: 32,
    topic: "HTML Forms",
    q: "Which input type creates a checkbox?",
    opts: [
      "type='toggle'",
      "type='check'",
      "type='boolean'",
      "type='checkbox'",
    ],
    ans: 3,
  },
  {
    id: 33,
    topic: "HTML Forms",
    q: "Which input type creates mutually exclusive options?",
    opts: ["checkbox", "select", "radio", "option"],
    ans: 2,
  },
  {
    id: 34,
    topic: "HTML Forms",
    q: "What does `<label>` do when linked to an input?",
    opts: [
      "Styles the input",
      "Makes clicking the label focus the input",
      "Validates the input",
      "Disables the input",
    ],
    ans: 1,
  },
  {
    id: 35,
    topic: "HTML Forms",
    q: "How do you link a `<label>` to an `<input>`?",
    opts: [
      "Using class",
      "Using name",
      "Using `for` matching input's `id`",
      "Using `link` attribute",
    ],
    ans: 2,
  },
  {
    id: 36,
    topic: "HTML Forms",
    q: "Which input type is used for passwords?",
    opts: [
      "type='secret'",
      "type='hidden'",
      "type='password'",
      "type='secure'",
    ],
    ans: 2,
  },
  {
    id: 37,
    topic: "HTML Forms",
    q: "What does `<input type='submit'>` do?",
    opts: [
      "Resets the form",
      "Validates the form",
      "Submits the form data",
      "Clears all fields",
    ],
    ans: 2,
  },
  {
    id: 38,
    topic: "HTML Forms",
    q: "Which input type shows a range slider?",
    opts: ["type='slider'", "type='range'", "type='scale'", "type='number'"],
    ans: 1,
  },
  {
    id: 39,
    topic: "HTML Forms",
    q: "What does `<input type='reset'>` do?",
    opts: [
      "Submits the form",
      "Refreshes the page",
      "Resets all form fields to default",
      "Clears only text fields",
    ],
    ans: 2,
  },
  {
    id: 40,
    topic: "HTML Forms",
    q: "Which HTML element creates a dropdown list?",
    opts: ["<dropdown>", "<list>", "<datalist>", "<select>"],
    ans: 3,
  },
  {
    id: 41,
    topic: "HTML Forms",
    q: "Which tag defines options inside a `<select>`?",
    opts: ["<item>", "<option>", "<li>", "<choice>"],
    ans: 1,
  },
  {
    id: 42,
    topic: "HTML Forms",
    q: "What does `minlength='3'` on an input enforce?",
    opts: [
      "Input must have at most 3 chars",
      "Input must have exactly 3 chars",
      "Input must have at least 3 chars",
      "Input only accepts numbers",
    ],
    ans: 2,
  },
  {
    id: 43,
    topic: "HTML Forms",
    q: "Which event fires when form input value changes?",
    opts: ["oninput", "ontype", "onenter", "onchange"],
    ans: 3,
  },
  {
    id: 44,
    topic: "HTML Forms",
    q: "What does `multiple` attribute on `<input type='file'>` allow?",
    opts: [
      "Only PDF files",
      "Multiple file selection",
      "Unlimited file size",
      "Hidden file upload",
    ],
    ans: 1,
  },
  {
    id: 45,
    topic: "HTML Forms",
    q: "Which input type validates email format by default?",
    opts: ["type='text'", "type='string'", "type='address'", "type='email'"],
    ans: 3,
  },
  {
    id: 46,
    topic: "HTML Forms",
    q: "What does `<fieldset>` do in a form?",
    opts: [
      "Adds form styling",
      "Groups related form elements",
      "Validates a group",
      "Creates a table in a form",
    ],
    ans: 1,
  },
  {
    id: 47,
    topic: "HTML Forms",
    q: "Which tag provides a caption for a `<fieldset>`?",
    opts: ["<title>", "<caption>", "<legend>", "<label>"],
    ans: 2,
  },
  {
    id: 48,
    topic: "HTML Forms",
    q: "What does `disabled` attribute do to an input?",
    opts: [
      "Hides the input",
      "Makes it read-only but submittable",
      "Prevents interaction and submission",
      "Changes input color",
    ],
    ans: 2,
  },
  {
    id: 49,
    topic: "HTML Forms",
    q: "Which input type is used for color picking?",
    opts: ["type='picker'", "type='rgb'", "type='palette'", "type='color'"],
    ans: 3,
  },
  {
    id: 50,
    topic: "HTML Forms",
    q: "What does `oninput` event on a form element do?",
    opts: [
      "Fires on form submit",
      "Fires when any key is pressed",
      "Fires synchronously as value changes",
      "Fires when element loses focus",
    ],
    ans: 2,
  },

  // ════════════════════════════════════════════
  // TOPIC 3: CSS Fundamentals (25)
  // ════════════════════════════════════════════
  {
    id: 51,
    topic: "CSS Fundamentals",
    q: "How do you add an external CSS file to HTML?",
    opts: [
      "<style src='file.css'>",
      "<css href='file.css'>",
      "<link rel='stylesheet' href='file.css'>",
      "<import 'file.css'>",
    ],
    ans: 2,
  },
  {
    id: 52,
    topic: "CSS Fundamentals",
    q: "Which CSS rule has the highest specificity?",
    opts: ["Class selector", "Element selector", "Inline style", "ID selector"],
    ans: 2,
  },
  {
    id: 53,
    topic: "CSS Fundamentals",
    q: "What does a group selector do? e.g., `h1, h2 { color: green }`",
    opts: [
      "Applies style only to h1 inside h2",
      "Applies same style to multiple selectors",
      "Creates a hierarchy",
      "Chains selectors conditionally",
    ],
    ans: 1,
  },
  {
    id: 54,
    topic: "CSS Fundamentals",
    q: "What is a descendant selector in CSS?",
    opts: [
      "Selects direct children only",
      "Selects elements that are anywhere inside another",
      "Selects siblings",
      "Selects pseudo-elements",
    ],
    ans: 1,
  },
  {
    id: 55,
    topic: "CSS Fundamentals",
    q: "Which CSS property changes text color?",
    opts: ["font-color", "background-color", "text-color", "color"],
    ans: 3,
  },
  {
    id: 56,
    topic: "CSS Fundamentals",
    q: "What does `margin` control?",
    opts: [
      "Space inside the element",
      "Space between border and content",
      "Space outside the element",
      "Padding inside element",
    ],
    ans: 2,
  },
  {
    id: 57,
    topic: "CSS Fundamentals",
    q: "What does `padding` control?",
    opts: [
      "Space outside the element",
      "Space between content and border",
      "Space between elements",
      "Font spacing",
    ],
    ans: 1,
  },
  {
    id: 58,
    topic: "CSS Fundamentals",
    q: "Which value of `position` takes an element out of normal flow and fixes it to viewport?",
    opts: ["relative", "absolute", "sticky", "fixed"],
    ans: 3,
  },
  {
    id: 59,
    topic: "CSS Fundamentals",
    q: "What does `position: sticky` do?",
    opts: [
      "Sticks to parent always",
      "Behaves like relative until scroll threshold, then fixed",
      "Removes from flow",
      "Overlaps other elements",
    ],
    ans: 1,
  },
  {
    id: 60,
    topic: "CSS Fundamentals",
    q: "Which CSS selector targets an element with a specific class?",
    opts: ["#classname", "@classname", ".classname", "*classname"],
    ans: 2,
  },
  {
    id: 61,
    topic: "CSS Fundamentals",
    q: "Which CSS selector targets an element by ID?",
    opts: [".id-name", "#id-name", "@id-name", "*id-name"],
    ans: 1,
  },
  {
    id: 62,
    topic: "CSS Fundamentals",
    q: "What does `display: none` do?",
    opts: [
      "Makes element invisible but keeps space",
      "Removes element from layout completely",
      "Reduces opacity to 0",
      "Hides overflow",
    ],
    ans: 1,
  },
  {
    id: 63,
    topic: "CSS Fundamentals",
    q: "What does `visibility: hidden` do?",
    opts: [
      "Removes element from layout",
      "Makes element invisible but keeps its space",
      "Sets opacity to 0.5",
      "Hides element from DOM",
    ],
    ans: 1,
  },
  {
    id: 64,
    topic: "CSS Fundamentals",
    q: "Which property controls stacking order of positioned elements?",
    opts: ["stack-order", "layer", "z-index", "depth"],
    ans: 2,
  },
  {
    id: 65,
    topic: "CSS Fundamentals",
    q: "What does `box-sizing: border-box` do?",
    opts: [
      "Excludes padding from width",
      "Includes padding and border in element's width",
      "Adds extra border",
      "Removes margin",
    ],
    ans: 1,
  },
  {
    id: 66,
    topic: "CSS Fundamentals",
    q: "What is a CSS pseudo-class?",
    opts: [
      "A class applied dynamically by JS",
      "A keyword for a special state e.g. :hover",
      "A class for print styles",
      "A nested class",
    ],
    ans: 1,
  },
  {
    id: 67,
    topic: "CSS Fundamentals",
    q: "Which CSS property makes text bold?",
    opts: ["text-style", "font-weight", "font-bold", "text-weight"],
    ans: 1,
  },
  {
    id: 68,
    topic: "CSS Fundamentals",
    q: "What does `float: left` do?",
    opts: [
      "Aligns text to left",
      "Moves element to the left with text wrapping around",
      "Removes from DOM",
      "Fixes position to left",
    ],
    ans: 1,
  },
  {
    id: 69,
    topic: "CSS Fundamentals",
    q: "What does `overflow: hidden` do?",
    opts: [
      "Hides the element",
      "Clips content that exceeds the element's box",
      "Prevents scrolling",
      "Removes margin",
    ],
    ans: 1,
  },
  {
    id: 70,
    topic: "CSS Fundamentals",
    q: "Which CSS unit is relative to the root font-size?",
    opts: ["em", "px", "%", "rem"],
    ans: 3,
  },
  {
    id: 71,
    topic: "CSS Fundamentals",
    q: "What does `text-align: center` do?",
    opts: [
      "Centers the element on page",
      "Centers text within the element",
      "Centers inline children",
      "Aligns block-level element",
    ],
    ans: 1,
  },
  {
    id: 72,
    topic: "CSS Fundamentals",
    q: "Which property sets the background image?",
    opts: ["background-img", "image", "background", "background-image"],
    ans: 3,
  },
  {
    id: 73,
    topic: "CSS Fundamentals",
    q: "What does `border-radius` do?",
    opts: [
      "Adds a border",
      "Rounds the corners of a box",
      "Sets border width",
      "Changes border style",
    ],
    ans: 1,
  },
  {
    id: 74,
    topic: "CSS Fundamentals",
    q: "Which CSS value for `display` makes an element a flex container?",
    opts: ["block", "inline-flex only", "grid", "flex"],
    ans: 3,
  },
  {
    id: 75,
    topic: "CSS Fundamentals",
    q: "What does `transition` property do in CSS?",
    opts: [
      "Animates element removal",
      "Smoothly animates CSS property changes over time",
      "Adds keyframe animation",
      "Changes display type",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 4: JavaScript Data Types & Variables (25)
  // ════════════════════════════════════════════
  {
    id: 76,
    topic: "JS Data Types & Variables",
    q: "Which keyword is block-scoped and cannot be redeclared?",
    opts: ["var", "const", "let", "function"],
    ans: 2,
  },
  {
    id: 77,
    topic: "JS Data Types & Variables",
    q: "What is the difference between `let` and `var`?",
    opts: [
      "let is function-scoped, var is block-scoped",
      "let is block-scoped, var is function/global-scoped",
      "Both are identical",
      "let cannot be reassigned",
    ],
    ans: 1,
  },
  {
    id: 78,
    topic: "JS Data Types & Variables",
    q: "What happens if you try to redeclare a `let` variable?",
    opts: [
      "It silently overwrites",
      "It throws a SyntaxError",
      "It creates a new scope",
      "It becomes undefined",
    ],
    ans: 1,
  },
  {
    id: 79,
    topic: "JS Data Types & Variables",
    q: "Which keyword declares a constant that cannot be reassigned?",
    opts: ["final", "let", "const", "static"],
    ans: 2,
  },
  {
    id: 80,
    topic: "JS Data Types & Variables",
    q: "What is the type of `null` in JavaScript?",
    opts: ["null", "undefined", "number", "object"],
    ans: 3,
  },
  {
    id: 81,
    topic: "JS Data Types & Variables",
    q: "What does `typeof undefined` return?",
    opts: ["'null'", "'undefined'", "'void'", "'unknown'"],
    ans: 1,
  },
  {
    id: 82,
    topic: "JS Data Types & Variables",
    q: "Which of these is NOT a primitive type in JavaScript?",
    opts: ["string", "boolean", "object", "number"],
    ans: 2,
  },
  {
    id: 83,
    topic: "JS Data Types & Variables",
    q: "What does `NaN` stand for?",
    opts: ["Null and None", "Not a Name", "Not a Number", "New and Null"],
    ans: 2,
  },
  {
    id: 84,
    topic: "JS Data Types & Variables",
    q: "What does `isNaN('hello')` return?",
    opts: ["false", "null", "undefined", "true"],
    ans: 3,
  },
  {
    id: 85,
    topic: "JS Data Types & Variables",
    q: "Which operator checks value AND type equality?",
    opts: ["==", "!=", "===", "="],
    ans: 2,
  },
  {
    id: 86,
    topic: "JS Data Types & Variables",
    q: "What is the result of `'5' == 5` in JavaScript?",
    opts: ["false", "undefined", "error", "true"],
    ans: 3,
  },
  {
    id: 87,
    topic: "JS Data Types & Variables",
    q: "What is the result of `'5' === 5` in JavaScript?",
    opts: ["true", "null", "undefined", "false"],
    ans: 3,
  },
  {
    id: 88,
    topic: "JS Data Types & Variables",
    q: "Which method converts a string to an integer?",
    opts: ["Number()", "toInt()", "parseInt()", "intValue()"],
    ans: 2,
  },
  {
    id: 89,
    topic: "JS Data Types & Variables",
    q: "What does `typeof []` return?",
    opts: ["'array'", "'list'", "'null'", "'object'"],
    ans: 3,
  },
  {
    id: 90,
    topic: "JS Data Types & Variables",
    q: "What is hoisting in JavaScript?",
    opts: [
      "Moving declarations to top of their scope before execution",
      "Removing unused variables",
      "Converting types automatically",
      "Lifting functions to global scope",
    ],
    ans: 0,
  },
  {
    id: 91,
    topic: "JS Data Types & Variables",
    q: "What value does an uninitialized `var` hold?",
    opts: ["null", "0", "false", "undefined"],
    ans: 3,
  },
  {
    id: 92,
    topic: "JS Data Types & Variables",
    q: "Which statement about `const` objects is true?",
    opts: [
      "The object and its properties cannot change",
      "The variable binding cannot be reassigned but properties can change",
      "const creates a deep freeze",
      "const objects are immutable",
    ],
    ans: 1,
  },
  {
    id: 93,
    topic: "JS Data Types & Variables",
    q: "What does the `+` operator do when used with a string and number?",
    opts: [
      "Adds numerically",
      "Throws an error",
      "Converts both to boolean",
      "Concatenates as string",
    ],
    ans: 3,
  },
  {
    id: 94,
    topic: "JS Data Types & Variables",
    q: "What is a template literal in JavaScript?",
    opts: [
      "A string using double quotes",
      "A multi-line string using backticks with embedded expressions",
      "A string template library",
      "An HTML template",
    ],
    ans: 1,
  },
  {
    id: 95,
    topic: "JS Data Types & Variables",
    q: "What does `Symbol()` create in JavaScript?",
    opts: [
      "A string identifier",
      "A unique and immutable primitive value",
      "A numeric constant",
      "An object key",
    ],
    ans: 1,
  },
  {
    id: 96,
    topic: "JS Data Types & Variables",
    q: "What is the `BigInt` type used for?",
    opts: [
      "Floating point numbers",
      "Integers larger than Number.MAX_SAFE_INTEGER",
      "Binary integers",
      "Negative large numbers only",
    ],
    ans: 1,
  },
  {
    id: 97,
    topic: "JS Data Types & Variables",
    q: "What does `Number.isInteger(4.0)` return?",
    opts: ["false", "undefined", "null", "true"],
    ans: 3,
  },
  {
    id: 98,
    topic: "JS Data Types & Variables",
    q: "Which escape character represents a new line in a string?",
    opts: ["\\t", "\\r", "\\b", "\\n"],
    ans: 3,
  },
  {
    id: 99,
    topic: "JS Data Types & Variables",
    q: "What does `'use strict'` do in JavaScript?",
    opts: [
      "Enables ES6 features",
      "Disables console logging",
      "Enables strict mode catching silent errors",
      "Forces use of semicolons",
    ],
    ans: 2,
  },
  {
    id: 100,
    topic: "JS Data Types & Variables",
    q: "What is the result of `typeof function(){}` ?",
    opts: ["'object'", "'class'", "'undefined'", "'function'"],
    ans: 3,
  },

  // ════════════════════════════════════════════
  // TOPIC 5: JS Functions (25)
  // ════════════════════════════════════════════
  {
    id: 101,
    topic: "JS Functions",
    q: "What is a rest parameter in JavaScript?",
    opts: [
      "The last required parameter",
      "A parameter that collects remaining arguments into an array",
      "A default parameter value",
      "An optional parameter",
    ],
    ans: 1,
  },
  {
    id: 102,
    topic: "JS Functions",
    q: "Where must the rest parameter be placed?",
    opts: [
      "First position",
      "Any position",
      "Middle position",
      "Last position",
    ],
    ans: 3,
  },
  {
    id: 103,
    topic: "JS Functions",
    q: "What is an arrow function?",
    opts: [
      "A function that returns objects",
      "A shorthand function syntax using =>",
      "A function stored in an array",
      "A recursive function",
    ],
    ans: 1,
  },
  {
    id: 104,
    topic: "JS Functions",
    q: "How does `this` behave in arrow functions?",
    opts: [
      "It refers to the function itself",
      "It always refers to window",
      "It is inherited from the enclosing lexical scope",
      "It is undefined",
    ],
    ans: 2,
  },
  {
    id: 105,
    topic: "JS Functions",
    q: "What is a default parameter in a function?",
    opts: [
      "A parameter that must always be passed",
      "A parameter with a fallback value if not provided",
      "A global variable",
      "The first parameter",
    ],
    ans: 1,
  },
  {
    id: 106,
    topic: "JS Functions",
    q: "What does an Immediately Invoked Function Expression (IIFE) do?",
    opts: [
      "Defines a function for later use",
      "Executes a function immediately after definition",
      "Creates a recursive function",
      "Exports a function",
    ],
    ans: 1,
  },
  {
    id: 107,
    topic: "JS Functions",
    q: "What is function hoisting?",
    opts: [
      "Functions are moved to end of scope",
      "Function declarations are moved to top of their scope",
      "Arrow functions are hoisted",
      "Functions are globally available",
    ],
    ans: 1,
  },
  {
    id: 108,
    topic: "JS Functions",
    q: "What is the spread operator `...` used for in function calls?",
    opts: [
      "Collects arguments",
      "Spreads array/iterable elements as individual arguments",
      "Defines rest params",
      "Clones a function",
    ],
    ans: 1,
  },
  {
    id: 109,
    topic: "JS Functions",
    q: "What is a pure function?",
    opts: [
      "A function with no parameters",
      "A function that always returns the same output for same inputs with no side effects",
      "A function inside a class",
      "An async function",
    ],
    ans: 1,
  },
  {
    id: 110,
    topic: "JS Functions",
    q: "What is a higher-order function?",
    opts: [
      "A function inside a class",
      "A function that takes or returns other functions",
      "An async function",
      "A recursive function",
    ],
    ans: 1,
  },
  {
    id: 111,
    topic: "JS Functions",
    q: "What does `Function.prototype.call()` do?",
    opts: [
      "Creates a new function",
      "Calls a function with a specified `this` and arguments",
      "Binds a function permanently",
      "Delays function execution",
    ],
    ans: 1,
  },
  {
    id: 112,
    topic: "JS Functions",
    q: "What is the difference between `.call()` and `.apply()`?",
    opts: [
      "No difference",
      "call takes array of args, apply takes individual args",
      "call takes individual args, apply takes array",
      "apply is for methods only",
    ],
    ans: 2,
  },
  {
    id: 113,
    topic: "JS Functions",
    q: "What does `.bind()` return?",
    opts: [
      "The function result",
      "A new function with `this` permanently bound",
      "A promise",
      "An array",
    ],
    ans: 1,
  },
  {
    id: 114,
    topic: "JS Functions",
    q: "What is a recursive function?",
    opts: [
      "A function that calls itself",
      "A function that returns undefined",
      "A function with no return value",
      "A function using loops",
    ],
    ans: 0,
  },
  {
    id: 115,
    topic: "JS Functions",
    q: "What is memoization?",
    opts: [
      "Storing DOM nodes",
      "Caching function results for the same inputs to avoid recalculation",
      "Deep copying objects",
      "Delaying function execution",
    ],
    ans: 1,
  },
  {
    id: 116,
    topic: "JS Functions",
    q: "What is the `arguments` object in a regular function?",
    opts: [
      "An array of all passed arguments",
      "An object containing named parameters only",
      "A special class",
      "A reserved keyword",
    ],
    ans: 0,
  },
  {
    id: 117,
    topic: "JS Functions",
    q: "Arrow functions have access to `arguments` object?",
    opts: [
      "Yes, always",
      "Only in strict mode",
      "No, they do not have their own arguments object",
      "Only with rest params",
    ],
    ans: 2,
  },
  {
    id: 118,
    topic: "JS Functions",
    q: "What does a generator function use to pause execution?",
    opts: ["return", "async", "yield", "pause"],
    ans: 2,
  },
  {
    id: 119,
    topic: "JS Functions",
    q: "What does `function*` syntax define?",
    opts: [
      "An async function",
      "A generator function",
      "A class method",
      "A static function",
    ],
    ans: 1,
  },
  {
    id: 120,
    topic: "JS Functions",
    q: "What does a callback function do?",
    opts: [
      "Returns a promise",
      "Is passed as an argument and called later",
      "Runs before the main function",
      "Creates a closure",
    ],
    ans: 1,
  },
  {
    id: 121,
    topic: "JS Functions",
    q: "What is function currying?",
    opts: [
      "Transforming a function to take multiple arguments into a sequence of functions each taking one argument",
      "Making function recursive",
      "Using default parameters",
      "Creating a closure",
    ],
    ans: 0,
  },
  {
    id: 122,
    topic: "JS Functions",
    q: "What is the difference between function declaration and function expression?",
    opts: [
      "No difference",
      "Declarations are hoisted, expressions are not",
      "Expressions are hoisted, declarations are not",
      "Declarations use const",
    ],
    ans: 1,
  },
  {
    id: 123,
    topic: "JS Functions",
    q: "What does `return` without a value return?",
    opts: ["null", "0", "false", "undefined"],
    ans: 3,
  },
  {
    id: 124,
    topic: "JS Functions",
    q: "Can a JavaScript function return another function?",
    opts: [
      "No, not allowed",
      "Yes, functions are first-class objects",
      "Only in classes",
      "Only with async",
    ],
    ans: 1,
  },
  {
    id: 125,
    topic: "JS Functions",
    q: "What is the purpose of the `new` keyword with a function?",
    opts: [
      "Calls function asynchronously",
      "Creates a new object using the function as constructor",
      "Copies the function",
      "Resets function scope",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 6: JS Closures (25)
  // ════════════════════════════════════════════
  {
    id: 126,
    topic: "JS Closures",
    q: "What is a closure in JavaScript?",
    opts: [
      "A function that has no return value",
      "A function bundled with its lexical scope, retaining access to outer variables",
      "A function that runs immediately",
      "A private class method",
    ],
    ans: 1,
  },
  {
    id: 127,
    topic: "JS Closures",
    q: "What is the main use case for closures?",
    opts: [
      "Avoiding loops",
      "Creating private variables and encapsulation",
      "Making code synchronous",
      "Preventing hoisting",
    ],
    ans: 1,
  },
  {
    id: 128,
    topic: "JS Closures",
    q: "In a closure, the inner function can access:",
    opts: [
      "Only its own variables",
      "Only global variables",
      "Outer function's variables even after outer function returns",
      "Only constants",
    ],
    ans: 2,
  },
  {
    id: 129,
    topic: "JS Closures",
    q: "What does the following return: `function add(){let c=0; return function(){return ++c;}}` called twice?",
    opts: [
      "Both return 1",
      "Returns 1 then 2",
      "Returns 0 then 1",
      "Both return 0",
    ],
    ans: 1,
  },
  {
    id: 130,
    topic: "JS Closures",
    q: "Why are closures useful for data privacy?",
    opts: [
      "They make functions async",
      "They prevent DOM access",
      "They keep variables inaccessible from outside the function",
      "They disable the global scope",
    ],
    ans: 2,
  },
  {
    id: 131,
    topic: "JS Closures",
    q: "Which problem do closures solve with `var` in loops?",
    opts: [
      "Type coercion",
      "All iterations sharing the same variable reference",
      "Memory leaks",
      "Infinite loops",
    ],
    ans: 1,
  },
  {
    id: 132,
    topic: "JS Closures",
    q: "What is a lexical scope?",
    opts: [
      "Scope determined at runtime",
      "Scope determined by where variables are written in code",
      "Scope of global variables",
      "Scope inside try blocks",
    ],
    ans: 1,
  },
  {
    id: 133,
    topic: "JS Closures",
    q: "A closure over a counter variable effectively creates what?",
    opts: [
      "A global variable",
      "A private static-like variable",
      "A constant",
      "A class instance",
    ],
    ans: 1,
  },
  {
    id: 134,
    topic: "JS Closures",
    q: "Do closures cause memory leaks?",
    opts: [
      "Never",
      "Always",
      "They can if references are not cleaned up",
      "Only in Node.js",
    ],
    ans: 2,
  },
  {
    id: 135,
    topic: "JS Closures",
    q: "What is a factory function using closures?",
    opts: [
      "A function that only runs once",
      "A function that returns new objects/functions with shared private state",
      "A constructor class",
      "A static method",
    ],
    ans: 1,
  },
  {
    id: 136,
    topic: "JS Closures",
    q: "Which of these correctly demonstrates a closure?",
    opts: [
      "function f(){} f()",
      "function outer(){let x=1; return function(){return x;}}",
      "const x = () => {}",
      "let f = new Function()",
    ],
    ans: 1,
  },
  {
    id: 137,
    topic: "JS Closures",
    q: "Does an inner function retain access to outer variables after outer function completes?",
    opts: [
      "No",
      "Only global ones",
      "Yes, via closure",
      "Only const variables",
    ],
    ans: 2,
  },
  {
    id: 138,
    topic: "JS Closures",
    q: "What happens to the outer variable in a closure when it is modified?",
    opts: [
      "Changes do not reflect inside closure",
      "Inner function sees the updated value",
      "Creates a copy",
      "Throws an error",
    ],
    ans: 1,
  },
  {
    id: 139,
    topic: "JS Closures",
    q: "Which technique uses closures to create module-like patterns?",
    opts: [
      "Prototype chain",
      "Module pattern with IIFE",
      "Class inheritance",
      "Async/await",
    ],
    ans: 1,
  },
  {
    id: 140,
    topic: "JS Closures",
    q: "What is 'partial application' related to closures?",
    opts: [
      "Running part of a function",
      "Pre-filling some arguments of a function returning a new function for remaining args",
      "Splitting a function",
      "Calling a function conditionally",
    ],
    ans: 1,
  },
  {
    id: 141,
    topic: "JS Closures",
    q: "What does `let` solve in closure-with-loop problems compared to `var`?",
    opts: [
      "let prevents loops",
      "let creates a new binding per iteration",
      "let makes variables global",
      "let avoids closures",
    ],
    ans: 1,
  },
  {
    id: 142,
    topic: "JS Closures",
    q: "Can closures access variables declared after their outer function's return?",
    opts: ["No", "Yes, always", "Only if declared with var", "Only const ones"],
    ans: 0,
  },
  {
    id: 143,
    topic: "JS Closures",
    q: "Where is the scope chain determined in JavaScript?",
    opts: [
      "At call time",
      "At runtime",
      "At lexical (write) time",
      "At parse time only",
    ],
    ans: 2,
  },
  {
    id: 144,
    topic: "JS Closures",
    q: "What is the scope of a variable declared inside a function?",
    opts: ["Global", "Block", "Local/function scope", "Module scope"],
    ans: 2,
  },
  {
    id: 145,
    topic: "JS Closures",
    q: "Can closures be created in arrow functions?",
    opts: [
      "No",
      "Only in Node.js",
      "Yes, arrow functions also form closures",
      "Only with let",
    ],
    ans: 2,
  },
  {
    id: 146,
    topic: "JS Closures",
    q: "What is 'stale closure'?",
    opts: [
      "A closure with no variables",
      "A closure capturing an outdated value of a variable",
      "A closure in strict mode",
      "A closure without return",
    ],
    ans: 1,
  },
  {
    id: 147,
    topic: "JS Closures",
    q: "What does the term 'free variable' mean in a closure?",
    opts: [
      "A global variable",
      "A variable used in a function but defined in its outer scope",
      "An uninitialized variable",
      "A variable without type",
    ],
    ans: 1,
  },
  {
    id: 148,
    topic: "JS Closures",
    q: "How can you avoid stale closures in React hooks?",
    opts: [
      "Use class components",
      "Use useCallback with correct dependencies",
      "Avoid closures entirely",
      "Use var instead of let",
    ],
    ans: 1,
  },
  {
    id: 149,
    topic: "JS Closures",
    q: "What is the relationship between closures and garbage collection?",
    opts: [
      "Closures prevent all GC",
      "References kept by closures prevent their variables from being garbage collected",
      "Closures trigger GC",
      "No relationship",
    ],
    ans: 1,
  },
  {
    id: 150,
    topic: "JS Closures",
    q: "Which built-in JS concept relies heavily on closures?",
    opts: [
      "Prototypes",
      "Event handlers and callbacks",
      "Type coercion",
      "DOM manipulation",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 7: JS Objects & Arrays (25)
  // ════════════════════════════════════════════
  {
    id: 151,
    topic: "JS Objects & Arrays",
    q: "What does `Object.assign(target, source)` do?",
    opts: [
      "Deep copies source to target",
      "Copies enumerable own properties from source to target (shallow)",
      "Merges prototypes",
      "Creates a new object",
    ],
    ans: 1,
  },
  {
    id: 152,
    topic: "JS Objects & Arrays",
    q: "What is destructuring in JavaScript?",
    opts: [
      "Deleting object properties",
      "Unpacking values from arrays or objects into variables",
      "Copying an object",
      "Freezing an object",
    ],
    ans: 1,
  },
  {
    id: 153,
    topic: "JS Objects & Arrays",
    q: "What does `Array.push()` do?",
    opts: [
      "Adds element to front",
      "Removes last element",
      "Adds element to end and returns new length",
      "Removes first element",
    ],
    ans: 2,
  },
  {
    id: 154,
    topic: "JS Objects & Arrays",
    q: "What does `Array.shift()` do?",
    opts: [
      "Removes last element",
      "Removes first element and returns it",
      "Adds to front",
      "Sorts the array",
    ],
    ans: 1,
  },
  {
    id: 155,
    topic: "JS Objects & Arrays",
    q: "What does `Array.unshift()` do?",
    opts: [
      "Removes first element",
      "Reverses the array",
      "Adds elements to the beginning",
      "Removes last element",
    ],
    ans: 2,
  },
  {
    id: 156,
    topic: "JS Objects & Arrays",
    q: "What does `Array.reverse()` do?",
    opts: [
      "Sorts array",
      "Reverses array in place",
      "Creates reversed copy",
      "Removes duplicates",
    ],
    ans: 1,
  },
  {
    id: 157,
    topic: "JS Objects & Arrays",
    q: "What does `Array.map()` return?",
    opts: [
      "Modified original array",
      "A new array with transformed elements",
      "An object",
      "A boolean",
    ],
    ans: 1,
  },
  {
    id: 158,
    topic: "JS Objects & Arrays",
    q: "What does `Array.filter()` return?",
    opts: [
      "First matching element",
      "Count of matching elements",
      "New array with elements passing the test",
      "Modified original",
    ],
    ans: 2,
  },
  {
    id: 159,
    topic: "JS Objects & Arrays",
    q: "What does `Array.reduce()` do?",
    opts: [
      "Removes elements",
      "Accumulates array values into a single value",
      "Maps values",
      "Filters values",
    ],
    ans: 1,
  },
  {
    id: 160,
    topic: "JS Objects & Arrays",
    q: "What does `Array.find()` return?",
    opts: [
      "Array of matches",
      "Index of first match",
      "First element satisfying the condition",
      "Boolean",
    ],
    ans: 2,
  },
  {
    id: 161,
    topic: "JS Objects & Arrays",
    q: "What does `Array.includes()` check?",
    opts: [
      "If array includes a subarray",
      "If a value exists in the array",
      "If array is non-empty",
      "If array is sorted",
    ],
    ans: 1,
  },
  {
    id: 162,
    topic: "JS Objects & Arrays",
    q: "What does `Array.splice()` do?",
    opts: [
      "Splits array in half",
      "Removes/replaces/adds elements at specified index",
      "Creates a shallow copy",
      "Sorts the array",
    ],
    ans: 1,
  },
  {
    id: 163,
    topic: "JS Objects & Arrays",
    q: "What does `Array.slice()` do?",
    opts: [
      "Modifies original array",
      "Sorts a portion",
      "Returns a shallow copy of a portion without modifying original",
      "Removes elements",
    ],
    ans: 2,
  },
  {
    id: 164,
    topic: "JS Objects & Arrays",
    q: "What does `Object.keys()` return?",
    opts: [
      "Array of values",
      "Array of [key, value] pairs",
      "Array of the object's own enumerable property names",
      "Count of properties",
    ],
    ans: 2,
  },
  {
    id: 165,
    topic: "JS Objects & Arrays",
    q: "What does `Object.values()` return?",
    opts: [
      "Array of keys",
      "Count of properties",
      "Array of own enumerable property values",
      "An iterator",
    ],
    ans: 2,
  },
  {
    id: 166,
    topic: "JS Objects & Arrays",
    q: "What does `Object.freeze()` do?",
    opts: [
      "Deletes all properties",
      "Makes object immutable",
      "Creates a deep copy",
      "Converts to array",
    ],
    ans: 1,
  },
  {
    id: 167,
    topic: "JS Objects & Arrays",
    q: "What is the prototype chain?",
    opts: [
      "A list of methods",
      "A chain of linked objects used for property lookup",
      "A type hierarchy",
      "An inheritance tree of classes",
    ],
    ans: 1,
  },
  {
    id: 168,
    topic: "JS Objects & Arrays",
    q: "What does `Array.flat()` do?",
    opts: [
      "Sorts nested arrays",
      "Removes duplicates",
      "Flattens nested arrays into a single array",
      "Splits arrays",
    ],
    ans: 2,
  },
  {
    id: 169,
    topic: "JS Objects & Arrays",
    q: "What does `Array.forEach()` return?",
    opts: ["A new array", "The modified array", "undefined", "A boolean"],
    ans: 2,
  },
  {
    id: 170,
    topic: "JS Objects & Arrays",
    q: "What is the spread operator used for with objects?",
    opts: [
      "Removes properties",
      "Deep clones",
      "Shallow-merges/copies object properties",
      "Sorts properties",
    ],
    ans: 2,
  },
  {
    id: 171,
    topic: "JS Objects & Arrays",
    q: "What does `JSON.stringify()` do?",
    opts: [
      "Parses JSON string",
      "Converts JS object to JSON string",
      "Validates JSON",
      "Deep copies object",
    ],
    ans: 1,
  },
  {
    id: 172,
    topic: "JS Objects & Arrays",
    q: "What does `JSON.parse()` do?",
    opts: [
      "Converts object to string",
      "Validates JSON",
      "Converts JSON string to JavaScript object",
      "Serializes a function",
    ],
    ans: 2,
  },
  {
    id: 173,
    topic: "JS Objects & Arrays",
    q: "What is array destructuring?",
    opts: [
      "Deleting array elements",
      "Unpacking array elements into variables",
      "Sorting an array",
      "Flattening array",
    ],
    ans: 1,
  },
  {
    id: 174,
    topic: "JS Objects & Arrays",
    q: "What does `String.split()` do with an array?",
    opts: [
      "Joins array to string",
      "Splits string into an array based on separator",
      "Converts array to string",
      "Sorts a string",
    ],
    ans: 1,
  },
  {
    id: 175,
    topic: "JS Objects & Arrays",
    q: "What does `Array.join()` do?",
    opts: [
      "Joins two arrays",
      "Creates nested array",
      "Converts array elements into a single string",
      "Merges object into array",
    ],
    ans: 2,
  },

  // ════════════════════════════════════════════
  // TOPIC 8: DOM Manipulation (25)
  // ════════════════════════════════════════════
  {
    id: 176,
    topic: "DOM Manipulation",
    q: "What does DOM stand for?",
    opts: [
      "Data Object Model",
      "Document Object Model",
      "Dynamic Object Mapping",
      "Display Output Model",
    ],
    ans: 1,
  },
  {
    id: 177,
    topic: "DOM Manipulation",
    q: "What type of node stores text content in HTML elements?",
    opts: ["Element node", "Comment node", "Text node", "Attribute node"],
    ans: 2,
  },
  {
    id: 178,
    topic: "DOM Manipulation",
    q: "Which method selects an element by its ID?",
    opts: [
      "querySelector",
      "getElementsByClassName",
      "getElementsByTagName",
      "getElementById",
    ],
    ans: 3,
  },
  {
    id: 179,
    topic: "DOM Manipulation",
    q: "Which method returns ALL elements matching a CSS selector?",
    opts: [
      "getElementById",
      "querySelector",
      "getElementsByName",
      "querySelectorAll",
    ],
    ans: 3,
  },
  {
    id: 180,
    topic: "DOM Manipulation",
    q: "What does `innerHTML` do?",
    opts: [
      "Gets/sets only text content",
      "Gets/sets HTML content including tags inside an element",
      "Removes an element",
      "Clones an element",
    ],
    ans: 1,
  },
  {
    id: 181,
    topic: "DOM Manipulation",
    q: "What does `textContent` return compared to `innerHTML`?",
    opts: [
      "Same as innerHTML",
      "Only text without HTML tags",
      "HTML with all attributes",
      "Styled text only",
    ],
    ans: 1,
  },
  {
    id: 182,
    topic: "DOM Manipulation",
    q: "Which method creates a new HTML element?",
    opts: [
      "newElement()",
      "createElement()",
      "makeElement()",
      "buildElement()",
    ],
    ans: 1,
  },
  {
    id: 183,
    topic: "DOM Manipulation",
    q: "Which method appends a child node to a parent?",
    opts: ["append()", "appendChild()", "addChild()", "insertChild()"],
    ans: 1,
  },
  {
    id: 184,
    topic: "DOM Manipulation",
    q: "Which method removes an element from the DOM?",
    opts: ["delete()", "destroy()", "remove()", "clear()"],
    ans: 2,
  },
  {
    id: 185,
    topic: "DOM Manipulation",
    q: "What does `parentNode` property return?",
    opts: ["First child", "Last child", "Parent element", "Sibling element"],
    ans: 2,
  },
  {
    id: 186,
    topic: "DOM Manipulation",
    q: "What does `childNodes` return?",
    opts: [
      "Only element children",
      "All child nodes including text and comment nodes",
      "Array of children",
      "Only direct elements",
    ],
    ans: 1,
  },
  {
    id: 187,
    topic: "DOM Manipulation",
    q: "Which method inserts an element before a reference node?",
    opts: ["insertBefore()", "prependChild()", "addBefore()", "insertFirst()"],
    ans: 0,
  },
  {
    id: 188,
    topic: "DOM Manipulation",
    q: "What does `classList.add()` do?",
    opts: [
      "Removes a class",
      "Toggles a class",
      "Adds a CSS class to an element",
      "Creates a new CSS class",
    ],
    ans: 2,
  },
  {
    id: 189,
    topic: "DOM Manipulation",
    q: "What does `classList.toggle()` do?",
    opts: [
      "Adds class permanently",
      "Removes class permanently",
      "Adds if absent, removes if present",
      "Replaces all classes",
    ],
    ans: 2,
  },
  {
    id: 190,
    topic: "DOM Manipulation",
    q: "Which property accesses an element's inline styles?",
    opts: [
      "element.css",
      "element.style",
      "element.className",
      "element.styles",
    ],
    ans: 1,
  },
  {
    id: 191,
    topic: "DOM Manipulation",
    q: "What does `getAttribute('href')` do?",
    opts: [
      "Sets href attribute",
      "Returns the value of the href attribute",
      "Removes the attribute",
      "Checks if attribute exists",
    ],
    ans: 1,
  },
  {
    id: 192,
    topic: "DOM Manipulation",
    q: "What does `setAttribute('class', 'active')` do?",
    opts: [
      "Removes a class",
      "Sets or updates the class attribute",
      "Adds to existing classes",
      "Creates a new element",
    ],
    ans: 1,
  },
  {
    id: 193,
    topic: "DOM Manipulation",
    q: "Which property gives the number of child elements (elements only, not text)?",
    opts: ["childNodes.length", "children.length", "childCount", "nodeCount"],
    ans: 1,
  },
  {
    id: 194,
    topic: "DOM Manipulation",
    q: "What does `closest()` method do?",
    opts: [
      "Finds nearest sibling",
      "Traverses up DOM to find nearest matching ancestor",
      "Finds first child",
      "Scrolls to element",
    ],
    ans: 1,
  },
  {
    id: 195,
    topic: "DOM Manipulation",
    q: "What does `document.body` refer to?",
    opts: [
      "HTML element",
      "Head element",
      "Body element of current document",
      "Form element",
    ],
    ans: 2,
  },
  {
    id: 196,
    topic: "DOM Manipulation",
    q: "What is event bubbling?",
    opts: [
      "Events fire from parent to child",
      "Events fire from child to parent up DOM tree",
      "Events that repeat",
      "Events on hover",
    ],
    ans: 1,
  },
  {
    id: 197,
    topic: "DOM Manipulation",
    q: "What does `event.stopPropagation()` do?",
    opts: [
      "Prevents default action",
      "Stops event from bubbling up",
      "Removes event listener",
      "Cancels the event",
    ],
    ans: 1,
  },
  {
    id: 198,
    topic: "DOM Manipulation",
    q: "What does `event.preventDefault()` do?",
    opts: [
      "Stops bubbling",
      "Stops default browser action (e.g., form submission)",
      "Removes element",
      "Fires event manually",
    ],
    ans: 1,
  },
  {
    id: 199,
    topic: "DOM Manipulation",
    q: "Which method adds an event listener to an element?",
    opts: ["on()", "listen()", "attachEvent()", "addEventListener()"],
    ans: 3,
  },
  {
    id: 200,
    topic: "DOM Manipulation",
    q: "What does `DOMContentLoaded` event indicate?",
    opts: [
      "All resources including images loaded",
      "HTML document parsed and DOM ready (before images)",
      "User clicked page",
      "DOM was modified",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 9: Promises, Async/Await & Fetch (25)
  // ════════════════════════════════════════════
  {
    id: 201,
    topic: "Promises, Async/Await & Fetch",
    q: "What are the three states of a Promise?",
    opts: [
      "Start, Running, Done",
      "Pending, Fulfilled, Rejected",
      "Active, Inactive, Complete",
      "Open, Processing, Closed",
    ],
    ans: 1,
  },
  {
    id: 202,
    topic: "Promises, Async/Await & Fetch",
    q: "What method handles a fulfilled promise?",
    opts: [".catch()", "finally()", "resolve()", "then()"],
    ans: 3,
  },
  {
    id: 203,
    topic: "Promises, Async/Await & Fetch",
    q: "What method handles a rejected promise?",
    opts: [".then()", "reject()", "catch()", "finally()"],
    ans: 2,
  },
  {
    id: 204,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `.finally()` do in a promise chain?",
    opts: [
      "Only runs on success",
      "Only runs on failure",
      "Always runs regardless of outcome",
      "Cancels other handlers",
    ],
    ans: 2,
  },
  {
    id: 205,
    topic: "Promises, Async/Await & Fetch",
    q: "What does an `async` function always return?",
    opts: ["A value", "A callback", "A promise", "An object"],
    ans: 2,
  },
  {
    id: 206,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `await` do inside an async function?",
    opts: [
      "Runs code in parallel",
      "Skips promise handling",
      "Pauses execution until promise resolves",
      "Creates a new promise",
    ],
    ans: 2,
  },
  {
    id: 207,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `Promise.all()` do?",
    opts: [
      "Runs promises sequentially",
      "Returns first resolved promise",
      "Waits for all promises and returns array of results; rejects if any fails",
      "Ignores rejections",
    ],
    ans: 2,
  },
  {
    id: 208,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `Promise.race()` return?",
    opts: [
      "Result of slowest promise",
      "Combined results",
      "Result/rejection of the first promise to settle",
      "Array of all results",
    ],
    ans: 2,
  },
  {
    id: 209,
    topic: "Promises, Async/Await & Fetch",
    q: "How do you make a GET request using Fetch API?",
    opts: [
      "fetch.get(url)",
      "fetch(url).then(r => r.json())",
      "http.get(url)",
      "request(url)",
    ],
    ans: 1,
  },
  {
    id: 210,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `response.json()` return?",
    opts: [
      "A JSON string",
      "A promise that resolves with parsed JSON",
      "An object directly",
      "A callback",
    ],
    ans: 1,
  },
  {
    id: 211,
    topic: "Promises, Async/Await & Fetch",
    q: "How do you make a POST request with Fetch?",
    opts: [
      "fetch(url, {type:'post'})",
      "fetch(url, {method:'POST', body: JSON.stringify(data)})",
      "fetch.post(url, data)",
      "http.post(url)",
    ],
    ans: 1,
  },
  {
    id: 212,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `Promise.resolve(value)` create?",
    opts: [
      "A pending promise",
      "A rejected promise",
      "An immediately resolved promise",
      "A deferred promise",
    ],
    ans: 2,
  },
  {
    id: 213,
    topic: "Promises, Async/Await & Fetch",
    q: "What is callback hell?",
    opts: [
      "Too many global callbacks",
      "Deeply nested callbacks making code hard to read",
      "Infinite callback loops",
      "Multiple async operations",
    ],
    ans: 1,
  },
  {
    id: 214,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `try...catch` do in async/await context?",
    opts: [
      "Handles synchronous errors only",
      "Handles errors from awaited rejections",
      "Prevents promise creation",
      "Retries failed requests",
    ],
    ans: 1,
  },
  {
    id: 215,
    topic: "Promises, Async/Await & Fetch",
    q: "What is the default HTTP method for `fetch(url)`?",
    opts: ["POST", "PUT", "DELETE", "GET"],
    ans: 3,
  },
  {
    id: 216,
    topic: "Promises, Async/Await & Fetch",
    q: "Which header is required when sending JSON in a POST request?",
    opts: [
      "'Accept': 'application/json'",
      "'Content-Type': 'application/json'",
      "'Data-Type': 'json'",
      "'Format': 'json'",
    ],
    ans: 1,
  },
  {
    id: 217,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `Promise.allSettled()` do differently from `Promise.all()`?",
    opts: [
      "Faster than Promise.all",
      "Rejects if any rejects",
      "Returns results of all promises regardless of rejection",
      "Only works with 2 promises",
    ],
    ans: 2,
  },
  {
    id: 218,
    topic: "Promises, Async/Await & Fetch",
    q: "Can `await` be used outside an `async` function?",
    opts: [
      "Yes, always",
      "No, only inside async functions (except top-level modules)",
      "Only in Node.js",
      "Only in classes",
    ],
    ans: 1,
  },
  {
    id: 219,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `fetch` return?",
    opts: [
      "The response data directly",
      "A promise that resolves to a Response object",
      "An XMLHttpRequest",
      "A callback",
    ],
    ans: 1,
  },
  {
    id: 220,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `response.ok` check?",
    opts: [
      "If response is JSON",
      "If response status is in 200–299 range",
      "If response is empty",
      "If request was cached",
    ],
    ans: 1,
  },
  {
    id: 221,
    topic: "Promises, Async/Await & Fetch",
    q: "What is the executor function in a Promise?",
    opts: [
      "The .then() callback",
      "The function passed to new Promise() that calls resolve/reject",
      "A microtask",
      "An event handler",
    ],
    ans: 1,
  },
  {
    id: 222,
    topic: "Promises, Async/Await & Fetch",
    q: "What queue do promise callbacks go into?",
    opts: [
      "Macro task queue",
      "Call stack",
      "Microtask queue (higher priority)",
      "Event queue",
    ],
    ans: 2,
  },
  {
    id: 223,
    topic: "Promises, Async/Await & Fetch",
    q: "What happens when you `throw` inside an async function?",
    opts: [
      "Program crashes",
      "The returned promise is rejected",
      "It is silently ignored",
      "It becomes a warning",
    ],
    ans: 1,
  },
  {
    id: 224,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `async function f(){ return 1 }` return when called?",
    opts: ["1", "undefined", "Promise.resolve(1)", "null"],
    ans: 2,
  },
  {
    id: 225,
    topic: "Promises, Async/Await & Fetch",
    q: "What does `fetch` need to send form data (not JSON)?",
    opts: [
      "JSON.stringify",
      "FormData object as body",
      "URLEncoded string only",
      "Buffer object",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 10: AJAX & Local Storage (25)
  // ════════════════════════════════════════════
  {
    id: 226,
    topic: "AJAX & Local Storage",
    q: "What does AJAX stand for?",
    opts: [
      "Asynchronous JavaScript and XML",
      "Advanced Java and XML",
      "Active JSON API Exchange",
      "Asynchronous Java and XQuery",
    ],
    ans: 0,
  },
  {
    id: 227,
    topic: "AJAX & Local Storage",
    q: "What object is used for AJAX in plain JavaScript?",
    opts: ["XHR", "XMLHttpRequest", "AjaxObject", "HttpRequest"],
    ans: 1,
  },
  {
    id: 228,
    topic: "AJAX & Local Storage",
    q: "What does `xhr.open()` do?",
    opts: [
      "Sends the request",
      "Opens a connection to the server",
      "Initializes the request configuration",
      "Parses the response",
    ],
    ans: 2,
  },
  {
    id: 229,
    topic: "AJAX & Local Storage",
    q: "What does `xhr.send()` do?",
    opts: [
      "Configures request",
      "Opens connection",
      "Cancels request",
      "Sends the request to server",
    ],
    ans: 3,
  },
  {
    id: 230,
    topic: "AJAX & Local Storage",
    q: "What event fires when XMLHttpRequest state changes?",
    opts: ["onload", "onchange", "onreadystatechange", "onstatechange"],
    ans: 2,
  },
  {
    id: 231,
    topic: "AJAX & Local Storage",
    q: "What does `readyState == 4` mean in XHR?",
    opts: [
      "Request started",
      "Request opened",
      "Response loading",
      "Request complete, response received",
    ],
    ans: 3,
  },
  {
    id: 232,
    topic: "AJAX & Local Storage",
    q: "What HTTP status code indicates success?",
    opts: ["404", "500", "201", "200"],
    ans: 3,
  },
  {
    id: 233,
    topic: "AJAX & Local Storage",
    q: "What is the third argument of `xhr.open()` when `true`?",
    opts: [
      "Synchronous mode",
      "Secure mode",
      "Asynchronous mode",
      "Cache mode",
    ],
    ans: 2,
  },
  {
    id: 234,
    topic: "AJAX & Local Storage",
    q: "What does `localStorage.setItem(key, value)` do?",
    opts: [
      "Stores session data",
      "Stores data permanently in browser with no expiry",
      "Stores cookie",
      "Stores in memory",
    ],
    ans: 1,
  },
  {
    id: 235,
    topic: "AJAX & Local Storage",
    q: "What does `localStorage.getItem(key)` do?",
    opts: [
      "Removes item",
      "Updates item",
      "Returns the stored value or null",
      "Lists all keys",
    ],
    ans: 2,
  },
  {
    id: 236,
    topic: "AJAX & Local Storage",
    q: "What does `localStorage.removeItem(key)` do?",
    opts: [
      "Clears all storage",
      "Removes specific key-value pair",
      "Expires the item",
      "Returns removed value",
    ],
    ans: 1,
  },
  {
    id: 237,
    topic: "AJAX & Local Storage",
    q: "What does `localStorage.clear()` do?",
    opts: [
      "Removes one item",
      "Removes all items from localStorage",
      "Refreshes page",
      "Clears sessionStorage too",
    ],
    ans: 1,
  },
  {
    id: 238,
    topic: "AJAX & Local Storage",
    q: "What is the difference between `localStorage` and `sessionStorage`?",
    opts: [
      "No difference",
      "localStorage persists after tab close, sessionStorage clears on tab close",
      "sessionStorage is larger",
      "localStorage only stores strings",
    ],
    ans: 1,
  },
  {
    id: 239,
    topic: "AJAX & Local Storage",
    q: "What type of data does localStorage store?",
    opts: ["Objects directly", "Arrays directly", "Strings only", "Any type"],
    ans: 2,
  },
  {
    id: 240,
    topic: "AJAX & Local Storage",
    q: "How do you store an object in localStorage?",
    opts: [
      "localStorage.setItem('k', obj)",
      "localStorage.setObject('k', obj)",
      "localStorage.setItem('k', JSON.stringify(obj))",
      "localStorage.save(obj)",
    ],
    ans: 2,
  },
  {
    id: 241,
    topic: "AJAX & Local Storage",
    q: "What does `xhr.responseText` contain?",
    opts: [
      "Request headers",
      "Error message",
      "Server response as text",
      "Request URL",
    ],
    ans: 2,
  },
  {
    id: 242,
    topic: "AJAX & Local Storage",
    q: "What is CORS?",
    opts: [
      "Cross-Origin Resource Sharing",
      "Common Object Runtime System",
      "Cross-Origin Request Security",
      "Compiled Object Resolution Standard",
    ],
    ans: 0,
  },
  {
    id: 243,
    topic: "AJAX & Local Storage",
    q: "What HTTP header does the server send to allow CORS?",
    opts: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Allow-Origin",
      "CORS-Allow",
    ],
    ans: 1,
  },
  {
    id: 244,
    topic: "AJAX & Local Storage",
    q: "Which method retrieves parsed JSON from XHR response?",
    opts: [
      "xhr.response",
      "xhr.responseXML",
      "JSON.parse(xhr.responseText)",
      "xhr.json()",
    ],
    ans: 2,
  },
  {
    id: 245,
    topic: "AJAX & Local Storage",
    q: "What is a cookie compared to localStorage?",
    opts: [
      "Same thing",
      "Cookies are sent to server with requests, localStorage is not",
      "localStorage expires, cookies don't",
      "Cookies are larger",
    ],
    ans: 1,
  },
  {
    id: 246,
    topic: "AJAX & Local Storage",
    q: "What does `xhr.setRequestHeader()` do?",
    opts: [
      "Sets response headers",
      "Sets custom request headers",
      "Changes HTTP method",
      "Sets timeout",
    ],
    ans: 1,
  },
  {
    id: 247,
    topic: "AJAX & Local Storage",
    q: "What does `xhr.abort()` do?",
    opts: [
      "Deletes the XHR object",
      "Cancels in-progress request",
      "Retries request",
      "Parses response",
    ],
    ans: 1,
  },
  {
    id: 248,
    topic: "AJAX & Local Storage",
    q: "What does `xhr.timeout` property do?",
    opts: [
      "Sets max response size",
      "Sets maximum time for request before aborting",
      "Delays request start",
      "Sets retry count",
    ],
    ans: 1,
  },
  {
    id: 249,
    topic: "AJAX & Local Storage",
    q: "What is the purpose of `Content-Type: application/json` header?",
    opts: [
      "Accepts JSON",
      "Indicates the request body contains JSON",
      "Enables CORS",
      "Compresses data",
    ],
    ans: 1,
  },
  {
    id: 250,
    topic: "AJAX & Local Storage",
    q: "How many items can localStorage store?",
    opts: [
      "100 items max",
      "Unlimited",
      "~5MB of string data (browser dependent)",
      "1000 items max",
    ],
    ans: 2,
  },

  // ════════════════════════════════════════════
  // TOPIC 11: Node.js Fundamentals (25)
  // ════════════════════════════════════════════
  {
    id: 251,
    topic: "Node.js Fundamentals",
    q: "What is Node.js?",
    opts: [
      "A browser JavaScript engine",
      "A server-side JavaScript runtime built on V8",
      "A JavaScript framework",
      "A package manager",
    ],
    ans: 1,
  },
  {
    id: 252,
    topic: "Node.js Fundamentals",
    q: "What is the Node.js event loop?",
    opts: [
      "A loop for DOM events",
      "A mechanism to handle asynchronous operations non-blockingly",
      "A for loop in Node",
      "A timeout handler",
    ],
    ans: 1,
  },
  {
    id: 253,
    topic: "Node.js Fundamentals",
    q: "What does 'non-blocking I/O' mean in Node.js?",
    opts: [
      "I/O operations that crash the app",
      "I/O that pauses execution",
      "I/O that runs asynchronously without blocking the main thread",
      "I/O without error handling",
    ],
    ans: 2,
  },
  {
    id: 254,
    topic: "Node.js Fundamentals",
    q: "What is REPL in Node.js?",
    opts: [
      "A package manager",
      "A file system module",
      "Read-Eval-Print Loop — interactive shell",
      "Remote Execution Process Loop",
    ],
    ans: 2,
  },
  {
    id: 255,
    topic: "Node.js Fundamentals",
    q: "Which command runs a Node.js file?",
    opts: [
      "node run file.js",
      "npm file.js",
      "execute file.js",
      "node file.js",
    ],
    ans: 3,
  },
  {
    id: 256,
    topic: "Node.js Fundamentals",
    q: "What is `require()` in Node.js?",
    opts: [
      "An HTTP method",
      "A function to import modules",
      "A global variable",
      "A Node.js event",
    ],
    ans: 1,
  },
  {
    id: 257,
    topic: "Node.js Fundamentals",
    q: "What is `module.exports` used for?",
    opts: [
      "Importing modules",
      "Starting the server",
      "Exporting code from a module",
      "Setting environment variables",
    ],
    ans: 2,
  },
  {
    id: 258,
    topic: "Node.js Fundamentals",
    q: "What is the CommonJS module system?",
    opts: [
      "A browser-only module system",
      "Node.js's default module system using require/module.exports",
      "An ES module system",
      "A package manager",
    ],
    ans: 1,
  },
  {
    id: 259,
    topic: "Node.js Fundamentals",
    q: "What does `http.createServer()` do?",
    opts: [
      "Sends an HTTP request",
      "Creates a TCP socket",
      "Creates an HTTP server",
      "Connects to a database",
    ],
    ans: 2,
  },
  {
    id: 260,
    topic: "Node.js Fundamentals",
    q: "What is the `__dirname` variable in Node.js?",
    opts: [
      "Current file name",
      "Directory of current module",
      "Root directory",
      "Home directory",
    ],
    ans: 1,
  },
  {
    id: 261,
    topic: "Node.js Fundamentals",
    q: "What does `process.env` contain?",
    opts: [
      "CLI arguments",
      "Event loop state",
      "Environment variables",
      "Installed packages",
    ],
    ans: 2,
  },
  {
    id: 262,
    topic: "Node.js Fundamentals",
    q: "What module handles file operations in Node.js?",
    opts: ["path", "os", "fs", "http"],
    ans: 2,
  },
  {
    id: 263,
    topic: "Node.js Fundamentals",
    q: "What does `fs.readFile()` do?",
    opts: [
      "Creates a file",
      "Deletes a file",
      "Asynchronously reads a file",
      "Lists directory contents",
    ],
    ans: 2,
  },
  {
    id: 264,
    topic: "Node.js Fundamentals",
    q: "What does `fs.writeFile()` do?",
    opts: [
      "Appends to file",
      "Reads a file",
      "Creates/overwrites a file with given content",
      "Streams data",
    ],
    ans: 2,
  },
  {
    id: 265,
    topic: "Node.js Fundamentals",
    q: "What is a Node.js Stream?",
    opts: [
      "An HTTP response",
      "A sequence of data read/written in chunks",
      "A promise chain",
      "A database query",
    ],
    ans: 1,
  },
  {
    id: 266,
    topic: "Node.js Fundamentals",
    q: "What is npm?",
    opts: [
      "Node Package Manager for installing/managing packages",
      "Node Production Manager",
      "Network Protocol Manager",
      "None of these",
    ],
    ans: 0,
  },
  {
    id: 267,
    topic: "Node.js Fundamentals",
    q: "What does `npm init` do?",
    opts: [
      "Installs packages",
      "Starts Node server",
      "Creates package.json for a project",
      "Updates npm",
    ],
    ans: 2,
  },
  {
    id: 268,
    topic: "Node.js Fundamentals",
    q: "What is `package.json`?",
    opts: [
      "A JSON data file",
      "A config file listing project metadata and dependencies",
      "A Node.js core module",
      "A startup script",
    ],
    ans: 1,
  },
  {
    id: 269,
    topic: "Node.js Fundamentals",
    q: "What does `npm install <pkg>` do?",
    opts: [
      "Updates the package",
      "Removes a package",
      "Downloads and installs a package locally",
      "Creates a package",
    ],
    ans: 2,
  },
  {
    id: 270,
    topic: "Node.js Fundamentals",
    q: "What does `--save-dev` flag do in npm install?",
    opts: [
      "Installs globally",
      "Saves as production dependency",
      "Saves as development-only dependency",
      "Skips package.json update",
    ],
    ans: 2,
  },
  {
    id: 271,
    topic: "Node.js Fundamentals",
    q: "What is the URL module used for in Node.js?",
    opts: [
      "Making HTTP calls",
      "Parsing and formatting URL strings",
      "Routing HTTP requests",
      "Managing cookies",
    ],
    ans: 1,
  },
  {
    id: 272,
    topic: "Node.js Fundamentals",
    q: "What does `EventEmitter` allow in Node.js?",
    opts: [
      "Creating HTTP servers",
      "DOM event handling",
      "Custom event-driven communication between objects",
      "Managing async code",
    ],
    ans: 2,
  },
  {
    id: 273,
    topic: "Node.js Fundamentals",
    q: "What does `emitter.on(event, listener)` do?",
    opts: [
      "Triggers an event",
      "Removes an event listener",
      "Registers a listener for a named event",
      "Broadcasts to all listeners",
    ],
    ans: 2,
  },
  {
    id: 274,
    topic: "Node.js Fundamentals",
    q: "What does `emitter.emit(event)` do?",
    opts: [
      "Registers a listener",
      "Removes all listeners",
      "Fires the event, calling all registered listeners",
      "Creates a new event type",
    ],
    ans: 2,
  },
  {
    id: 275,
    topic: "Node.js Fundamentals",
    q: "What is middleware in Node.js context?",
    opts: [
      "Database connector",
      "A function that processes request before it reaches route handler",
      "A package manager plugin",
      "A file stream",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 12: Express.js (25)
  // ════════════════════════════════════════════
  {
    id: 276,
    topic: "Express.js",
    q: "What is Express.js?",
    opts: [
      "A database for Node.js",
      "A front-end framework",
      "A minimal Node.js web application framework",
      "A CSS framework",
    ],
    ans: 2,
  },
  {
    id: 277,
    topic: "Express.js",
    q: "How do you create an Express app?",
    opts: [
      "new Express()",
      "express.create()",
      "require('express')()",
      "Express.init()",
    ],
    ans: 2,
  },
  {
    id: 278,
    topic: "Express.js",
    q: "Which method defines a GET route in Express?",
    opts: ["app.fetch()", "app.get()", "app.receive()", "app.request()"],
    ans: 1,
  },
  {
    id: 279,
    topic: "Express.js",
    q: "Which method defines a POST route in Express?",
    opts: ["app.send()", "app.post()", "app.receive()", "app.push()"],
    ans: 1,
  },
  {
    id: 280,
    topic: "Express.js",
    q: "What does `res.send()` do?",
    opts: [
      "Parses request body",
      "Sends an HTTP response",
      "Creates a route",
      "Logs to console",
    ],
    ans: 1,
  },
  {
    id: 281,
    topic: "Express.js",
    q: "What does `res.json()` do?",
    opts: [
      "Parses JSON body",
      "Sends a JSON response",
      "Converts to JSON",
      "Reads JSON file",
    ],
    ans: 1,
  },
  {
    id: 282,
    topic: "Express.js",
    q: "What does `res.sendFile()` do?",
    opts: [
      "Sends JSON",
      "Sends a file as HTTP response",
      "Streams data",
      "Creates a file",
    ],
    ans: 1,
  },
  {
    id: 283,
    topic: "Express.js",
    q: "What does `req.params` contain?",
    opts: [
      "Query string parameters",
      "Request body",
      "URL route parameters (e.g., /user/:id)",
      "Request headers",
    ],
    ans: 2,
  },
  {
    id: 284,
    topic: "Express.js",
    q: "What does `req.query` contain?",
    opts: [
      "Route parameters",
      "Request body data",
      "URL query string parameters (e.g., ?name=val)",
      "Cookies",
    ],
    ans: 2,
  },
  {
    id: 285,
    topic: "Express.js",
    q: "What does `req.body` contain?",
    opts: [
      "Route parameters",
      "Query string",
      "Request body (for POST/PUT)",
      "Request headers",
    ],
    ans: 2,
  },
  {
    id: 286,
    topic: "Express.js",
    q: "What is Express middleware?",
    opts: [
      "A database connection",
      "Functions with access to req, res, and next that process requests",
      "A route file",
      "A view engine",
    ],
    ans: 1,
  },
  {
    id: 287,
    topic: "Express.js",
    q: "What does `next()` do in middleware?",
    opts: [
      "Sends response",
      "Ends request",
      "Passes control to next middleware/route",
      "Restarts server",
    ],
    ans: 2,
  },
  {
    id: 288,
    topic: "Express.js",
    q: "What does `app.use()` do?",
    opts: [
      "Creates a route",
      "Mounts middleware at a path",
      "Sets app configuration",
      "Starts server",
    ],
    ans: 1,
  },
  {
    id: 289,
    topic: "Express.js",
    q: "What does `express.static()` serve?",
    opts: [
      "Database files",
      "Template views",
      "Static files like HTML, CSS, images",
      "API endpoints",
    ],
    ans: 2,
  },
  {
    id: 290,
    topic: "Express.js",
    q: "Which middleware parses incoming JSON request bodies?",
    opts: [
      "bodyParser.text()",
      "express.urlencoded()",
      "express.json()",
      "bodyParser.raw()",
    ],
    ans: 2,
  },
  {
    id: 291,
    topic: "Express.js",
    q: "What does `app.listen(port, callback)` do?",
    opts: [
      "Makes HTTP request",
      "Starts the server on given port",
      "Connects to database",
      "Loads middleware",
    ],
    ans: 1,
  },
  {
    id: 292,
    topic: "Express.js",
    q: "What is a route handler in Express?",
    opts: [
      "A middleware for all routes",
      "A function that handles a specific HTTP method + path",
      "A database query",
      "A view template",
    ],
    ans: 1,
  },
  {
    id: 293,
    topic: "Express.js",
    q: "How do you define a route parameter in Express?",
    opts: ["/user/{id}", "/user/:id", "/user?id", "/:user[id]"],
    ans: 1,
  },
  {
    id: 294,
    topic: "Express.js",
    q: "What does `res.redirect()` do?",
    opts: [
      "Refreshes current page",
      "Sends a redirect response to a different URL",
      "Renders a template",
      "Loads a static file",
    ],
    ans: 1,
  },
  {
    id: 295,
    topic: "Express.js",
    q: "What does `res.status(404).send('Not Found')` do?",
    opts: [
      "Crashes the server",
      "Sends response with 404 status and message",
      "Creates a 404 page",
      "Logs error",
    ],
    ans: 1,
  },
  {
    id: 296,
    topic: "Express.js",
    q: "What is Express Router?",
    opts: [
      "A DNS resolver",
      "A mini-application for modular route handling",
      "A caching layer",
      "A template engine",
    ],
    ans: 1,
  },
  {
    id: 297,
    topic: "Express.js",
    q: "What does `express.urlencoded()` do?",
    opts: [
      "Parses URL parameters",
      "Parses URL-encoded form data from POST requests",
      "Encodes URLs",
      "Sets URL charset",
    ],
    ans: 1,
  },
  {
    id: 298,
    topic: "Express.js",
    q: "What is the purpose of error-handling middleware in Express?",
    opts: [
      "Routes all requests",
      "Catches and processes errors (has 4 params: err, req, res, next)",
      "Logs all requests",
      "Validates route params",
    ],
    ans: 1,
  },
  {
    id: 299,
    topic: "Express.js",
    q: "What does `app.delete()` define?",
    opts: [
      "Deletes the app",
      "A DELETE HTTP route handler",
      "Removes middleware",
      "Clears route cache",
    ],
    ans: 1,
  },
  {
    id: 300,
    topic: "Express.js",
    q: "What does `app.put()` define?",
    opts: [
      "Uploads files",
      "A PUT HTTP route handler for updates",
      "Adds data to queue",
      "Sets config",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 13: MongoDB & Mongoose (25)
  // ════════════════════════════════════════════
  {
    id: 301,
    topic: "MongoDB & Mongoose",
    q: "What type of database is MongoDB?",
    opts: [
      "Relational SQL database",
      "Document-oriented NoSQL database",
      "Graph database",
      "Key-value store",
    ],
    ans: 1,
  },
  {
    id: 302,
    topic: "MongoDB & Mongoose",
    q: "What format does MongoDB store data in?",
    opts: ["XML", "CSV", "BSON (Binary JSON)", "Plain JSON text"],
    ans: 2,
  },
  {
    id: 303,
    topic: "MongoDB & Mongoose",
    q: "What is a MongoDB collection?",
    opts: [
      "Equivalent to SQL table",
      "Equivalent to SQL row",
      "A database",
      "An index",
    ],
    ans: 0,
  },
  {
    id: 304,
    topic: "MongoDB & Mongoose",
    q: "What is a MongoDB document?",
    opts: [
      "A SQL table",
      "A SQL column",
      "A BSON record (like a SQL row)",
      "A schema definition",
    ],
    ans: 2,
  },
  {
    id: 305,
    topic: "MongoDB & Mongoose",
    q: "What is the default port for MongoDB?",
    opts: ["3306", "5432", "8080", "27017"],
    ans: 3,
  },
  {
    id: 306,
    topic: "MongoDB & Mongoose",
    q: "What does `db.collection.find()` do?",
    opts: [
      "Inserts a document",
      "Deletes documents",
      "Updates a document",
      "Retrieves documents matching query",
    ],
    ans: 3,
  },
  {
    id: 307,
    topic: "MongoDB & Mongoose",
    q: "What does `db.collection.insertOne()` do?",
    opts: [
      "Finds a document",
      "Deletes a document",
      "Inserts a single document",
      "Updates a document",
    ],
    ans: 2,
  },
  {
    id: 308,
    topic: "MongoDB & Mongoose",
    q: "What does `db.collection.updateOne()` do?",
    opts: [
      "Deletes the first match",
      "Inserts a document",
      "Finds first match",
      "Updates the first matching document",
    ],
    ans: 3,
  },
  {
    id: 309,
    topic: "MongoDB & Mongoose",
    q: "What does `db.collection.deleteOne()` do?",
    opts: [
      "Deletes all documents",
      "Deletes first matching document",
      "Archives a document",
      "Clears a collection",
    ],
    ans: 1,
  },
  {
    id: 310,
    topic: "MongoDB & Mongoose",
    q: "What is Mongoose?",
    opts: [
      "A MongoDB GUI",
      "An ODM (Object Document Mapper) for MongoDB in Node.js",
      "A SQL ORM",
      "A REST client",
    ],
    ans: 1,
  },
  {
    id: 311,
    topic: "MongoDB & Mongoose",
    q: "What does a Mongoose Schema define?",
    opts: [
      "Database connection",
      "API routes",
      "Structure and data types for MongoDB documents",
      "Server configuration",
    ],
    ans: 2,
  },
  {
    id: 312,
    topic: "MongoDB & Mongoose",
    q: "What does `mongoose.model()` create?",
    opts: [
      "A database connection",
      "A query",
      "A Model class for a MongoDB collection",
      "A schema",
    ],
    ans: 2,
  },
  {
    id: 313,
    topic: "MongoDB & Mongoose",
    q: "What does `Model.save()` do in Mongoose?",
    opts: [
      "Queries the database",
      "Saves a new or updated document to MongoDB",
      "Validates schema",
      "Connects to DB",
    ],
    ans: 1,
  },
  {
    id: 314,
    topic: "MongoDB & Mongoose",
    q: "What does `Model.find()` return in Mongoose?",
    opts: [
      "A single document",
      "A query that returns an array of matching documents",
      "A promise by default",
      "A boolean",
    ],
    ans: 1,
  },
  {
    id: 315,
    topic: "MongoDB & Mongoose",
    q: "What is `_id` in MongoDB?",
    opts: [
      "A user-defined field",
      "Auto-generated unique ObjectId for each document",
      "A foreign key",
      "A timestamp",
    ],
    ans: 1,
  },
  {
    id: 316,
    topic: "MongoDB & Mongoose",
    q: "What does the `$set` operator do in an update query?",
    opts: [
      "Replaces the whole document",
      "Sets/updates specific fields only",
      "Increments a value",
      "Removes a field",
    ],
    ans: 1,
  },
  {
    id: 317,
    topic: "MongoDB & Mongoose",
    q: "What does `mongoose.connect()` do?",
    opts: [
      "Runs a query",
      "Starts the server",
      "Establishes connection to MongoDB",
      "Creates a schema",
    ],
    ans: 2,
  },
  {
    id: 318,
    topic: "MongoDB & Mongoose",
    q: "What is the purpose of MongoDB indexes?",
    opts: [
      "Prevent duplicates",
      "Improve query performance",
      "Enforce relationships",
      "Encrypt data",
    ],
    ans: 1,
  },
  {
    id: 319,
    topic: "MongoDB & Mongoose",
    q: "What does `Model.findById(id)` do?",
    opts: [
      "Finds all documents",
      "Finds document by its _id",
      "Creates document with given id",
      "Deletes by id",
    ],
    ans: 1,
  },
  {
    id: 320,
    topic: "MongoDB & Mongoose",
    q: "What does `Model.findByIdAndUpdate()` do?",
    opts: [
      "Creates new document",
      "Finds and updates document with given id",
      "Finds and deletes",
      "Finds and returns copy",
    ],
    ans: 1,
  },
  {
    id: 321,
    topic: "MongoDB & Mongoose",
    q: "What is a MongoDB replica set?",
    opts: [
      "A set of schemas",
      "A group of MongoDB servers maintaining same data for high availability",
      "A backup file",
      "A type of index",
    ],
    ans: 1,
  },
  {
    id: 322,
    topic: "MongoDB & Mongoose",
    q: "What does the `required: true` in Mongoose schema do?",
    opts: [
      "Sets a default value",
      "Makes a field optional",
      "Throws validation error if field is missing",
      "Creates an index",
    ],
    ans: 2,
  },
  {
    id: 323,
    topic: "MongoDB & Mongoose",
    q: "What does `Model.deleteMany({})` do?",
    opts: [
      "Deletes first document",
      "Deletes all documents matching query",
      "Drops the collection",
      "Archives documents",
    ],
    ans: 1,
  },
  {
    id: 324,
    topic: "MongoDB & Mongoose",
    q: "What does `populate()` do in Mongoose?",
    opts: [
      "Fills default values",
      "Replaces ObjectId references with actual referenced documents",
      "Validates data",
      "Indexes fields",
    ],
    ans: 1,
  },
  {
    id: 325,
    topic: "MongoDB & Mongoose",
    q: "What is the `unique: true` constraint in a Mongoose schema?",
    opts: [
      "Makes field required",
      "Creates a unique index preventing duplicate values",
      "Encrypts the field",
      "Sets field as primary key",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 14: React Basics (25)
  // ════════════════════════════════════════════
  {
    id: 326,
    topic: "React Basics",
    q: "What is React?",
    opts: [
      "A full-stack framework",
      "A server-side language",
      "A JavaScript library for building user interfaces",
      "A database ORM",
    ],
    ans: 2,
  },
  {
    id: 327,
    topic: "React Basics",
    q: "What is JSX?",
    opts: [
      "A JSON extension",
      "JavaScript XML — syntax extension allowing HTML-like code in JS",
      "A CSS preprocessor",
      "A template engine",
    ],
    ans: 1,
  },
  {
    id: 328,
    topic: "React Basics",
    q: "What tool is recommended to scaffold a React project with Vite?",
    opts: [
      "create-react-app",
      "npm init react",
      "npx create-vite",
      "react-cli",
    ],
    ans: 2,
  },
  {
    id: 329,
    topic: "React Basics",
    q: "What is a React component?",
    opts: [
      "A CSS file",
      "A reusable, self-contained piece of UI",
      "A database model",
      "An HTTP route",
    ],
    ans: 1,
  },
  {
    id: 330,
    topic: "React Basics",
    q: "What is the difference between named and default exports?",
    opts: [
      "No difference",
      "Named uses `export`, default uses `export default`; one default per module, multiple named allowed",
      "Default uses `export`, named uses `export default`",
      "Only one named per module",
    ],
    ans: 1,
  },
  {
    id: 331,
    topic: "React Basics",
    q: "What does `useState` hook do?",
    opts: [
      "Fetches data",
      "Adds side effects",
      "Accesses context",
      "Adds state to a functional component",
    ],
    ans: 3,
  },
  {
    id: 332,
    topic: "React Basics",
    q: "What does `useState` return?",
    opts: [
      "Just the state value",
      "An object with value and setter",
      "An array: [currentState, setterFunction]",
      "A promise",
    ],
    ans: 2,
  },
  {
    id: 333,
    topic: "React Basics",
    q: "What triggers a React component to re-render?",
    opts: [
      "Any function call",
      "DOM change",
      "State or props change",
      "Timer events only",
    ],
    ans: 2,
  },
  {
    id: 334,
    topic: "React Basics",
    q: "What are props in React?",
    opts: [
      "Internal state",
      "Mutable data stores",
      "Immutable data passed from parent to child component",
      "Global variables",
    ],
    ans: 2,
  },
  {
    id: 335,
    topic: "React Basics",
    q: "What does `export default` allow when importing?",
    opts: [
      "Only named import",
      "Import with any name, without curly braces",
      "Import with curly braces",
      "Multiple exports",
    ],
    ans: 1,
  },
  {
    id: 336,
    topic: "React Basics",
    q: "What is a functional component in React?",
    opts: [
      "A component using class syntax",
      "A component that is a plain JavaScript function returning JSX",
      "A component with lifecycle methods",
      "A built-in HTML element",
    ],
    ans: 1,
  },
  {
    id: 337,
    topic: "React Basics",
    q: "What does the `key` prop do in a list of elements?",
    opts: [
      "Styles each element",
      "Helps React identify which items changed, for efficient re-rendering",
      "Sets element order",
      "Makes elements draggable",
    ],
    ans: 1,
  },
  {
    id: 338,
    topic: "React Basics",
    q: "What is conditional rendering in React?",
    opts: [
      "Rendering based on screen size",
      "Showing/hiding components based on state or props conditions",
      "Lazy loading",
      "Server-side rendering",
    ],
    ans: 1,
  },
  {
    id: 339,
    topic: "React Basics",
    q: "What does `useEffect` do?",
    opts: [
      "Manages state",
      "Runs side effects (data fetching, subscriptions) after render",
      "Stores context",
      "Memoizes values",
    ],
    ans: 1,
  },
  {
    id: 340,
    topic: "React Basics",
    q: "What does the dependency array in `useEffect` control?",
    opts: [
      "Initial state values",
      "When the effect runs — only re-runs when listed dependencies change",
      "Effect priority",
      "Cleanup function timing",
    ],
    ans: 1,
  },
  {
    id: 341,
    topic: "React Basics",
    q: "What happens when `useEffect` has an empty dependency array `[]`?",
    opts: [
      "Runs on every render",
      "Never runs",
      "Runs only once after initial render",
      "Runs on unmount only",
    ],
    ans: 2,
  },
  {
    id: 342,
    topic: "React Basics",
    q: "What is the virtual DOM?",
    opts: [
      "An HTML file",
      "Browser's real DOM",
      "A lightweight in-memory representation React uses to optimize real DOM updates",
      "A CSS render tree",
    ],
    ans: 2,
  },
  {
    id: 343,
    topic: "React Basics",
    q: "What does React's reconciliation do?",
    opts: [
      "Resets component state",
      "Diffs virtual DOM with real DOM to apply minimal updates",
      "Re-renders entire page",
      "Connects to backend",
    ],
    ans: 1,
  },
  {
    id: 344,
    topic: "React Basics",
    q: "How do you handle a click event in React JSX?",
    opts: [
      "onclick={handler}",
      "onClick={handler}",
      "on-click={handler}",
      "click={handler}",
    ],
    ans: 1,
  },
  {
    id: 345,
    topic: "React Basics",
    q: "What is prop drilling?",
    opts: [
      "Using context API",
      "Passing props through many component layers to reach a deeply nested child",
      "State management",
      "A performance technique",
    ],
    ans: 1,
  },
  {
    id: 346,
    topic: "React Basics",
    q: "What does `useContext` hook do?",
    opts: [
      "Creates context",
      "Subscribes a component to a React context",
      "Updates context",
      "Removes context",
    ],
    ans: 1,
  },
  {
    id: 347,
    topic: "React Basics",
    q: "What is the React Context API used for?",
    opts: [
      "HTTP requests",
      "Animation",
      "Managing global or shared state without prop drilling",
      "Database queries",
    ],
    ans: 2,
  },
  {
    id: 348,
    topic: "React Basics",
    q: "What does `React.Fragment` do?",
    opts: [
      "Creates a portal",
      "Groups children without adding extra DOM node",
      "Creates a context",
      "Lazily loads components",
    ],
    ans: 1,
  },
  {
    id: 349,
    topic: "React Basics",
    q: "What does `useRef` return?",
    opts: [
      "A state value",
      "A mutable ref object with `.current` property that doesn't trigger re-render",
      "A context",
      "A callback",
    ],
    ans: 1,
  },
  {
    id: 350,
    topic: "React Basics",
    q: "What is lazy loading in React?",
    opts: [
      "Loading data slowly",
      "Code splitting: loading component only when needed using React.lazy()",
      "Loading images lazily",
      "Deferring state updates",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 15: React Router & Hooks (25)
  // ════════════════════════════════════════════
  {
    id: 351,
    topic: "React Router & Hooks",
    q: "What does React Router enable?",
    opts: [
      "Server-side rendering",
      "Database connections",
      "Client-side navigation between pages without full reload",
      "CSS animations",
    ],
    ans: 2,
  },
  {
    id: 352,
    topic: "React Router & Hooks",
    q: "Which component wraps your app to enable routing?",
    opts: ["Router", "Switch", "Route", "BrowserRouter"],
    ans: 3,
  },
  {
    id: 353,
    topic: "React Router & Hooks",
    q: "Which component renders the first matching route?",
    opts: ["Router", "Switch", "BrowserRouter", "Routes"],
    ans: 3,
  },
  {
    id: 354,
    topic: "React Router & Hooks",
    q: "Which component defines a path-to-component mapping?",
    opts: ["Link", "Navigate", "Route", "Outlet"],
    ans: 2,
  },
  {
    id: 355,
    topic: "React Router & Hooks",
    q: "Which component creates navigation links without page reload?",
    opts: ["<a>", "<href>", "<Link>", "<NavRoute>"],
    ans: 2,
  },
  {
    id: 356,
    topic: "React Router & Hooks",
    q: "What does `useNavigate` hook do?",
    opts: [
      "Gets current URL",
      "Reads route params",
      "Provides programmatic navigation function",
      "Renders nested routes",
    ],
    ans: 2,
  },
  {
    id: 357,
    topic: "React Router & Hooks",
    q: "What does `useParams` hook return?",
    opts: [
      "Query strings",
      "Route parameters object",
      "Location object",
      "Navigation history",
    ],
    ans: 1,
  },
  {
    id: 358,
    topic: "React Router & Hooks",
    q: "What does `useLocation` hook return?",
    opts: [
      "GPS location",
      "Router history",
      "Object with current URL info (pathname, search, state)",
      "All route params",
    ],
    ans: 2,
  },
  {
    id: 359,
    topic: "React Router & Hooks",
    q: "What is a protected route?",
    opts: [
      "An HTTPS-only route",
      "A route that requires authentication before access",
      "A server route",
      "A route with error boundary",
    ],
    ans: 1,
  },
  {
    id: 360,
    topic: "React Router & Hooks",
    q: "What does `<Outlet>` do in nested routing?",
    opts: [
      "Creates a popup",
      "Exports route config",
      "Renders matched child route inside a parent layout",
      "Redirects to home",
    ],
    ans: 2,
  },
  {
    id: 361,
    topic: "React Router & Hooks",
    q: "What does `useReducer` hook do?",
    opts: [
      "Like useState but for complex state logic using reducer pattern",
      "Fetches data",
      "Manages routing",
      "Creates context",
    ],
    ans: 0,
  },
  {
    id: 362,
    topic: "React Router & Hooks",
    q: "What arguments does `useReducer` take?",
    opts: [
      "state and action",
      "(reducer, initialState)",
      "(initialState, actions)",
      "(dispatch, reducer)",
    ],
    ans: 1,
  },
  {
    id: 363,
    topic: "React Router & Hooks",
    q: "What does the `dispatch` function from `useReducer` do?",
    opts: [
      "Updates state directly",
      "Sends an action to the reducer",
      "Fetches new data",
      "Re-renders component",
    ],
    ans: 1,
  },
  {
    id: 364,
    topic: "React Router & Hooks",
    q: "What does `useCallback` hook do?",
    opts: [
      "Memoizes a value",
      "Runs an effect",
      "Memoizes a callback function to prevent unnecessary re-creation",
      "Subscribes to context",
    ],
    ans: 2,
  },
  {
    id: 365,
    topic: "React Router & Hooks",
    q: "What does `useMemo` hook do?",
    opts: [
      "Memoizes a callback",
      "Adds state",
      "Memoizes a computed value to avoid expensive recalculations",
      "Fetches data",
    ],
    ans: 2,
  },
  {
    id: 366,
    topic: "React Router & Hooks",
    q: "What is the purpose of `useRef` for DOM elements?",
    opts: [
      "Re-renders on change",
      "Stores mutable value",
      "Directly accesses DOM elements without causing re-render",
      "Creates animations",
    ],
    ans: 2,
  },
  {
    id: 367,
    topic: "React Router & Hooks",
    q: "What does lifting state up mean in React?",
    opts: [
      "Using Redux",
      "Moving state to a higher parent component so siblings can share it",
      "Optimizing renders",
      "Using context",
    ],
    ans: 1,
  },
  {
    id: 368,
    topic: "React Router & Hooks",
    q: "What is the reading list pattern in React?",
    opts: [
      "A design pattern",
      "Displaying fetched data as a list using state and map",
      "A router pattern",
      "A context pattern",
    ],
    ans: 1,
  },
  {
    id: 369,
    topic: "React Router & Hooks",
    q: "What does sibling data passing require in React without Context?",
    opts: [
      "Direct sibling communication",
      "Lifting state to common parent",
      "Using Redux",
      "Using useRef",
    ],
    ans: 1,
  },
  {
    id: 370,
    topic: "React Router & Hooks",
    q: "What does `<Navigate to='/login' />` do in React Router?",
    opts: [
      "Creates a link",
      "Renders login page",
      "Programmatically redirects user to login route",
      "Logs out user",
    ],
    ans: 2,
  },
  {
    id: 371,
    topic: "React Router & Hooks",
    q: "What is the custom hook naming convention?",
    opts: [
      "Must end with Hook",
      "Must start with 'use'",
      "Must start with 'with'",
      "No convention",
    ],
    ans: 1,
  },
  {
    id: 372,
    topic: "React Router & Hooks",
    q: "What is a custom hook?",
    opts: [
      "A built-in React function",
      "A reusable function starting with 'use' that can use other hooks",
      "A class method",
      "A router utility",
    ],
    ans: 1,
  },
  {
    id: 373,
    topic: "React Router & Hooks",
    q: "Can hooks be called inside conditions or loops?",
    opts: [
      "Yes, always",
      "Only in loops",
      "No, they must be called at top level of component/hook",
      "Only in conditions",
    ],
    ans: 2,
  },
  {
    id: 374,
    topic: "React Router & Hooks",
    q: "What does `useEffect` cleanup function do?",
    opts: [
      "Clears localStorage",
      "Runs before component unmounts or before effect re-runs, to clean subscriptions/timers",
      "Resets state",
      "Fetches fresh data",
    ],
    ans: 1,
  },
  {
    id: 375,
    topic: "React Router & Hooks",
    q: "What package provides React Router v6?",
    opts: [
      "react-dom-router",
      "react-navigation",
      "react-router",
      "react-router-dom",
    ],
    ans: 3,
  },

  // ════════════════════════════════════════════
  // TOPIC 16: Redux (25)
  // ════════════════════════════════════════════
  {
    id: 376,
    topic: "Redux",
    q: "What is Redux?",
    opts: [
      "A CSS framework",
      "A database",
      "A state management library for JavaScript apps",
      "A routing library",
    ],
    ans: 2,
  },
  {
    id: 377,
    topic: "Redux",
    q: "What are the three core principles of Redux?",
    opts: [
      "Store, Component, Action",
      "Single source of truth, State is read-only, Pure reducer functions",
      "Dispatch, Reduce, Select",
      "Init, Update, Render",
    ],
    ans: 1,
  },
  {
    id: 378,
    topic: "Redux",
    q: "What is a Redux store?",
    opts: [
      "A database",
      "The single object holding the entire application state",
      "A component",
      "A reducer",
    ],
    ans: 1,
  },
  {
    id: 379,
    topic: "Redux",
    q: "What is a Redux action?",
    opts: [
      "A component update",
      "A database query",
      "A plain object describing what happened (has `type` field)",
      "A CSS change",
    ],
    ans: 2,
  },
  {
    id: 380,
    topic: "Redux",
    q: "What is a Redux reducer?",
    opts: [
      "A component",
      "A pure function that takes state and action, returns new state",
      "An API call",
      "A middleware",
    ],
    ans: 1,
  },
  {
    id: 381,
    topic: "Redux",
    q: "What does `dispatch()` do in Redux?",
    opts: [
      "Reads state",
      "Sends an action to the store to update state",
      "Connects component to store",
      "Creates a reducer",
    ],
    ans: 1,
  },
  {
    id: 382,
    topic: "Redux",
    q: "What does `getState()` do in Redux?",
    opts: [
      "Dispatches action",
      "Returns current store state",
      "Subscribes to store",
      "Creates store",
    ],
    ans: 1,
  },
  {
    id: 383,
    topic: "Redux",
    q: "What does Redux Toolkit's `createSlice` do?",
    opts: [
      "Creates a React component",
      "Generates actions and reducer in one place",
      "Connects to database",
      "Creates middleware",
    ],
    ans: 1,
  },
  {
    id: 384,
    topic: "Redux",
    q: "What does `configureStore` from Redux Toolkit do?",
    opts: [
      "Creates a component",
      "Configures and creates the Redux store with reducers",
      "Adds middleware",
      "Connects React to Redux",
    ],
    ans: 1,
  },
  {
    id: 385,
    topic: "Redux",
    q: "What does `useSelector` hook do in React-Redux?",
    opts: [
      "Dispatches actions",
      "Provides store dispatch function",
      "Selects/reads state from Redux store",
      "Connects components",
    ],
    ans: 2,
  },
  {
    id: 386,
    topic: "Redux",
    q: "What does `useDispatch` hook return?",
    opts: [
      "Current state",
      "A selector",
      "The dispatch function for sending actions",
      "The store object",
    ],
    ans: 2,
  },
  {
    id: 387,
    topic: "Redux",
    q: "What does `Provider` component do in React-Redux?",
    opts: [
      "Provides routing",
      "Makes Redux store available to all nested React components",
      "Provides context",
      "Provides theme",
    ],
    ans: 1,
  },
  {
    id: 388,
    topic: "Redux",
    q: "What is Redux middleware?",
    opts: [
      "A component wrapper",
      "Code that intercepts actions before they reach the reducer",
      "A store enhancer",
      "A route guard",
    ],
    ans: 1,
  },
  {
    id: 389,
    topic: "Redux",
    q: "What is Redux Thunk used for?",
    opts: [
      "Syncing state",
      "Handling synchronous actions",
      "Writing action creators that return functions (for async operations)",
      "Creating selectors",
    ],
    ans: 2,
  },
  {
    id: 390,
    topic: "Redux",
    q: "What does `immer` (used inside Redux Toolkit) allow?",
    opts: [
      "Immutable state",
      "Writing 'mutating' code that produces immutable state updates",
      "Direct DOM mutation",
      "Async reducers",
    ],
    ans: 1,
  },
  {
    id: 391,
    topic: "Redux",
    q: "What is the data flow in Redux?",
    opts: [
      "Component → State → Action → Reducer",
      "UI → dispatch(action) → reducer → new state → UI updates",
      "Reducer → Action → Store → UI",
      "Store → Reducer → Component",
    ],
    ans: 1,
  },
  {
    id: 392,
    topic: "Redux",
    q: "Can you have multiple reducers in Redux?",
    opts: [
      "No, only one",
      "Yes, using combineReducers",
      "Only with Toolkit",
      "Only with middleware",
    ],
    ans: 1,
  },
  {
    id: 393,
    topic: "Redux",
    q: "What does `combineReducers` do?",
    opts: [
      "Merges all state into one reducer",
      "Splits one reducer into many",
      "Combines multiple reducer functions into single root reducer",
      "Creates the store",
    ],
    ans: 2,
  },
  {
    id: 394,
    topic: "Redux",
    q: "What must a reducer always return?",
    opts: [
      "null",
      "An action",
      "An async promise",
      "A new state (never mutate, always return new object)",
    ],
    ans: 3,
  },
  {
    id: 395,
    topic: "Redux",
    q: "What is the `initialState` in a Redux slice?",
    opts: [
      "First dispatched action",
      "The default/starting state of the slice",
      "An empty object always",
      "The store itself",
    ],
    ans: 1,
  },
  {
    id: 396,
    topic: "Redux",
    q: "What does `extraReducers` in createSlice handle?",
    opts: [
      "Extra UI reducers",
      "Actions from other slices or async thunks",
      "Extra middleware",
      "Local state",
    ],
    ans: 1,
  },
  {
    id: 397,
    topic: "Redux",
    q: "What does `createAsyncThunk` do in Redux Toolkit?",
    opts: [
      "Creates sync action",
      "Creates a thunk for async operations with pending/fulfilled/rejected actions",
      "Creates a reducer",
      "Connects to API",
    ],
    ans: 1,
  },
  {
    id: 398,
    topic: "Redux",
    q: "What is 'selector' in Redux context?",
    opts: [
      "CSS selector",
      "A function that extracts specific data from the store state",
      "A component",
      "An action creator",
    ],
    ans: 1,
  },
  {
    id: 399,
    topic: "Redux",
    q: "Why is Redux recommended for large apps?",
    opts: [
      "Better CSS management",
      "Faster rendering",
      "Predictable, centralized state management that scales well",
      "Built-in routing",
    ],
    ans: 2,
  },
  {
    id: 400,
    topic: "Redux",
    q: "What does `store.subscribe()` do?",
    opts: [
      "Dispatches an action",
      "Returns state",
      "Registers a callback that runs whenever state changes",
      "Creates a selector",
    ],
    ans: 2,
  },

  // ════════════════════════════════════════════
  // TOPIC 17: jQuery (25)
  // ════════════════════════════════════════════
  {
    id: 401,
    topic: "jQuery",
    q: "What is jQuery?",
    opts: [
      "A server-side framework",
      "A CSS preprocessor",
      "A fast, lightweight JavaScript library simplifying DOM manipulation",
      "A database driver",
    ],
    ans: 2,
  },
  {
    id: 402,
    topic: "jQuery",
    q: "What does `$(document).ready()` ensure?",
    opts: [
      "jQuery is loaded",
      "Page is fully loaded including images",
      "DOM is ready before code runs",
      "Server is connected",
    ],
    ans: 2,
  },
  {
    id: 403,
    topic: "jQuery",
    q: "What is the jQuery selector symbol?",
    opts: ["#", "@", "&", "$"],
    ans: 3,
  },
  {
    id: 404,
    topic: "jQuery",
    q: "What does `$('#id')` select?",
    opts: [
      "All elements with class 'id'",
      "Element with id='id'",
      "All id elements",
      "Elements with tag 'id'",
    ],
    ans: 1,
  },
  {
    id: 405,
    topic: "jQuery",
    q: "What does `$('.class')` select?",
    opts: [
      "Element with id='class'",
      "All elements with given class",
      "Tag named 'class'",
      "First element only",
    ],
    ans: 1,
  },
  {
    id: 406,
    topic: "jQuery",
    q: "What does `.text()` do in jQuery?",
    opts: [
      "Gets/sets HTML content",
      "Gets/sets only text content (no HTML tags)",
      "Hides text",
      "Styles text",
    ],
    ans: 1,
  },
  {
    id: 407,
    topic: "jQuery",
    q: "What does `.html()` do in jQuery?",
    opts: [
      "Gets/sets text only",
      "Gets/sets inner HTML content",
      "Hides element",
      "Creates new HTML",
    ],
    ans: 1,
  },
  {
    id: 408,
    topic: "jQuery",
    q: "What is the difference between `.text()` and `.html()` as setters?",
    opts: [
      "Same behavior",
      "text() treats value as plain text, html() interprets HTML tags",
      "html() is deprecated",
      "text() allows HTML",
    ],
    ans: 1,
  },
  {
    id: 409,
    topic: "jQuery",
    q: "What does `.click()` do in jQuery?",
    opts: [
      "Simulates click",
      "Binds a click event handler OR triggers a click",
      "Removes click handler",
      "Prevents click",
    ],
    ans: 1,
  },
  {
    id: 410,
    topic: "jQuery",
    q: "What does `.on('event', handler)` do in jQuery?",
    opts: [
      "Removes event",
      "Triggers event",
      "Attaches event handler (works for dynamic elements too)",
      "Prevents event",
    ],
    ans: 2,
  },
  {
    id: 411,
    topic: "jQuery",
    q: "What does `.hide()` do in jQuery?",
    opts: [
      "Deletes element",
      "Sets display: none",
      "Sets visibility: hidden",
      "Reduces opacity",
    ],
    ans: 1,
  },
  {
    id: 412,
    topic: "jQuery",
    q: "What does `.show()` do in jQuery?",
    opts: [
      "Creates element",
      "Reloads page",
      "Removes display: none, making element visible",
      "Toggles visibility",
    ],
    ans: 2,
  },
  {
    id: 413,
    topic: "jQuery",
    q: "What does `.toggle()` do in jQuery?",
    opts: [
      "Toggles between two classes",
      "Alternates between hide() and show()",
      "Toggles event handler",
      "Toggles disabled state",
    ],
    ans: 1,
  },
  {
    id: 414,
    topic: "jQuery",
    q: "What does `.fadeOut()` do in jQuery?",
    opts: [
      "Removes element",
      "Animates element to transparency then hides",
      "Changes color",
      "Slides out element",
    ],
    ans: 1,
  },
  {
    id: 415,
    topic: "jQuery",
    q: "What does `.slideUp()` do in jQuery?",
    opts: [
      "Moves element up",
      "Hides element with sliding up animation",
      "Scrolls page up",
      "Sorts elements upward",
    ],
    ans: 1,
  },
  {
    id: 416,
    topic: "jQuery",
    q: "What does `.addClass()` do?",
    opts: [
      "Replaces all classes",
      "Removes a class",
      "Adds a CSS class to selected elements",
      "Creates a new class",
    ],
    ans: 2,
  },
  {
    id: 417,
    topic: "jQuery",
    q: "What does `.css('property', 'value')` do in jQuery?",
    opts: [
      "Reads a CSS file",
      "Gets or sets CSS property directly",
      "Removes CSS class",
      "Adds a stylesheet",
    ],
    ans: 1,
  },
  {
    id: 418,
    topic: "jQuery",
    q: "What does `.val()` do for form inputs?",
    opts: [
      "Validates input",
      "Gets or sets the value of form element",
      "Clears input",
      "Disables input",
    ],
    ans: 1,
  },
  {
    id: 419,
    topic: "jQuery",
    q: "What does `$.ajax()` do?",
    opts: [
      "Creates animations",
      "Performs jQuery DOM manipulation",
      "Makes asynchronous HTTP requests",
      "Binds events",
    ],
    ans: 2,
  },
  {
    id: 420,
    topic: "jQuery",
    q: "What does `.each()` do in jQuery?",
    opts: [
      "Counts elements",
      "Filters elements",
      "Iterates over matched elements executing a function",
      "Sorts elements",
    ],
    ans: 2,
  },
  {
    id: 421,
    topic: "jQuery",
    q: "What does `.find('selector')` do?",
    opts: [
      "Searches the whole document",
      "Finds descendants matching selector within selected elements",
      "Finds parent",
      "Finds siblings",
    ],
    ans: 1,
  },
  {
    id: 422,
    topic: "jQuery",
    q: "What does `.parent()` do in jQuery?",
    opts: [
      "Gets root element",
      "Gets all ancestors",
      "Gets immediate parent element",
      "Gets first child",
    ],
    ans: 2,
  },
  {
    id: 423,
    topic: "jQuery",
    q: "What does `.children()` do?",
    opts: [
      "Gets all descendants",
      "Gets direct child elements only",
      "Gets sibling elements",
      "Gets parent element",
    ],
    ans: 1,
  },
  {
    id: 424,
    topic: "jQuery",
    q: "What does `.keyup()` bind to?",
    opts: [
      "Key press event",
      "Key down event",
      "Event when user releases a key",
      "Focus event",
    ],
    ans: 2,
  },
  {
    id: 425,
    topic: "jQuery",
    q: "What does the `change()` event in jQuery bind to?",
    opts: [
      "Fires on every keypress",
      "Fires when element value changes and loses focus",
      "Fires on focus",
      "Fires on click",
    ],
    ans: 1,
  },

  // ════════════════════════════════════════════
  // TOPIC 18: ES6+ Features (25)
  // ════════════════════════════════════════════
  {
    id: 426,
    topic: "ES6+ Features",
    q: "What is destructuring assignment?",
    opts: [
      "Deleting object properties",
      "Unpacking values from arrays/objects into variables",
      "Cloning objects",
      "Freezing variables",
    ],
    ans: 1,
  },
  {
    id: 427,
    topic: "ES6+ Features",
    q: "What does the spread operator `...` do with arrays?",
    opts: [
      "Flattens arrays",
      "Expands array into individual elements",
      "Sorts array",
      "Creates shallow copy only",
    ],
    ans: 1,
  },
  {
    id: 428,
    topic: "ES6+ Features",
    q: "What is a template literal?",
    opts: [
      "A string in single quotes",
      "String with backticks allowing multi-line and embedded expressions",
      "An HTML template",
      "A string library",
    ],
    ans: 1,
  },
  {
    id: 429,
    topic: "ES6+ Features",
    q: "What does optional chaining `?.` do?",
    opts: [
      "Creates optional parameters",
      "Safely accesses nested property, returns undefined if null/undefined in chain",
      "Checks type",
      "Validates data",
    ],
    ans: 1,
  },
  {
    id: 430,
    topic: "ES6+ Features",
    q: "What does the nullish coalescing operator `??` do?",
    opts: [
      "Checks for null only",
      "Returns left side if not null/undefined, else returns right side",
      "Same as ||",
      "Throws on null",
    ],
    ans: 1,
  },
  {
    id: 431,
    topic: "ES6+ Features",
    q: "What is a `Map` in ES6?",
    opts: [
      "Array with numeric keys",
      "Object that maps keys to values where keys can be any type",
      "A function",
      "A Set variant",
    ],
    ans: 1,
  },
  {
    id: 432,
    topic: "ES6+ Features",
    q: "What is a `Set` in ES6?",
    opts: [
      "An array without methods",
      "A collection of unique values",
      "A Map variant",
      "An immutable list",
    ],
    ans: 1,
  },
  {
    id: 433,
    topic: "ES6+ Features",
    q: "What does `for...of` iterate over?",
    opts: [
      "Object keys",
      "Object properties",
      "Iterable values (arrays, strings, maps, sets)",
      "Only arrays",
    ],
    ans: 2,
  },
  {
    id: 434,
    topic: "ES6+ Features",
    q: "What does `for...in` iterate over?",
    opts: [
      "Array values",
      "Iterable values",
      "Enumerable object keys (property names)",
      "Set values",
    ],
    ans: 2,
  },
  {
    id: 435,
    topic: "ES6+ Features",
    q: "What is shorthand property syntax in ES6 objects?",
    opts: [
      "Using computed keys",
      "When variable name matches property name: `{x}` instead of `{x: x}`",
      "Arrow functions in objects",
      "Default exports",
    ],
    ans: 1,
  },
  {
    id: 436,
    topic: "ES6+ Features",
    q: "What are computed property names in ES6?",
    opts: [
      "Properties set at compile time",
      "Using `[expression]` as key in object literal",
      "Auto-generated keys",
      "Template literal keys",
    ],
    ans: 1,
  },
  {
    id: 437,
    topic: "ES6+ Features",
    q: "What does `class` syntax in ES6 provide?",
    opts: [
      "New OOP runtime",
      "Syntactic sugar over prototype-based inheritance",
      "A new type system",
      "Backend routing",
    ],
    ans: 1,
  },
  {
    id: 438,
    topic: "ES6+ Features",
    q: "What does `extends` do in an ES6 class?",
    opts: [
      "Imports another class",
      "Creates subclass inheriting from parent class",
      "Copies class methods",
      "Seals a class",
    ],
    ans: 1,
  },
  {
    id: 439,
    topic: "ES6+ Features",
    q: "What does `super()` do in a subclass constructor?",
    opts: [
      "Calls sibling class",
      "Calls the parent class constructor",
      "Creates parent instance",
      "Overrides parent method",
    ],
    ans: 1,
  },
  {
    id: 440,
    topic: "ES6+ Features",
    q: "What is the `static` keyword in a class?",
    opts: [
      "Makes property immutable",
      "Defines method/property on the class itself, not instances",
      "Makes class final",
      "Exports automatically",
    ],
    ans: 1,
  },
  {
    id: 441,
    topic: "ES6+ Features",
    q: "What does `WeakMap` differ from `Map`?",
    opts: [
      "WeakMap is faster",
      "WeakMap keys must be strings",
      "WeakMap keys are weakly referenced objects and not enumerable",
      "WeakMap has more methods",
    ],
    ans: 2,
  },
  {
    id: 442,
    topic: "ES6+ Features",
    q: "What is `Symbol` used for in ES6?",
    opts: [
      "String comparison",
      "Unique identifiers that never collide, often used as object keys",
      "Number formatting",
      "Type checking",
    ],
    ans: 1,
  },
  {
    id: 443,
    topic: "ES6+ Features",
    q: "What does `Array.from()` do?",
    opts: [
      "Converts array to string",
      "Creates array from array-like or iterable objects",
      "Deep clones array",
      "Merges arrays",
    ],
    ans: 1,
  },
  {
    id: 444,
    topic: "ES6+ Features",
    q: "What does `Object.entries()` return?",
    opts: [
      "Array of keys",
      "Array of values",
      "Array of [key, value] pairs",
      "Object count",
    ],
    ans: 2,
  },
  {
    id: 445,
    topic: "ES6+ Features",
    q: "What is a Proxy in ES6?",
    opts: [
      "A middleware function",
      "An object wrapping another, intercepting operations like get/set",
      "A class decorator",
      "A security module",
    ],
    ans: 1,
  },
  {
    id: 446,
    topic: "ES6+ Features",
    q: "What does the `import` statement do?",
    opts: [
      "Copies file",
      "Executes a function",
      "Imports bindings exported from another module",
      "Loads CSS",
    ],
    ans: 2,
  },
  {
    id: 447,
    topic: "ES6+ Features",
    q: "What are ES Modules (ESM)?",
    opts: [
      "CommonJS replacement",
      "The official JS module system using import/export (supported in browsers/Node)",
      "A build tool",
      "A bundler format",
    ],
    ans: 1,
  },
  {
    id: 448,
    topic: "ES6+ Features",
    q: "What does `Array.findIndex()` return?",
    opts: [
      "The found element",
      "The index of first element satisfying condition, or -1",
      "A new array",
      "Boolean",
    ],
    ans: 1,
  },
  {
    id: 449,
    topic: "ES6+ Features",
    q: "What does `String.includes()` check?",
    opts: [
      "If string is a substring of another",
      "If string starts with a value",
      "If a substring exists within the string",
      "If string ends with a value",
    ],
    ans: 2,
  },
  {
    id: 450,
    topic: "ES6+ Features",
    q: "What does `String.startsWith()` do?",
    opts: [
      "Checks if string ends with value",
      "Checks if string contains value",
      "Trims string start",
      "Checks if string begins with given value",
    ],
    ans: 3,
  },

  // ════════════════════════════════════════════
  // TOPIC 19: Regular Expressions & Error Handling (25)
  // ════════════════════════════════════════════
  {
    id: 451,
    topic: "Regex & Error Handling",
    q: "What is a Regular Expression?",
    opts: [
      "A math formula",
      "A pattern for matching character combinations in strings",
      "A template literal",
      "A loop structure",
    ],
    ans: 1,
  },
  {
    id: 452,
    topic: "Regex & Error Handling",
    q: "What does `/\\d/` match in regex?",
    opts: [
      "Any letter",
      "Any whitespace",
      "Any digit (0-9)",
      "Any word character",
    ],
    ans: 2,
  },
  {
    id: 453,
    topic: "Regex & Error Handling",
    q: "What does `/\\w/` match in regex?",
    opts: [
      "Whitespace",
      "Any digit",
      "Any word character (letter, digit, underscore)",
      "Special characters",
    ],
    ans: 2,
  },
  {
    id: 454,
    topic: "Regex & Error Handling",
    q: "What does the `g` flag do in a regex?",
    opts: [
      "Case insensitive",
      "Global — finds all matches, not just first",
      "Multiline",
      "Greedy matching",
    ],
    ans: 1,
  },
  {
    id: 455,
    topic: "Regex & Error Handling",
    q: "What does the `i` flag do in a regex?",
    opts: [
      "Ignore whitespace",
      "Case-insensitive matching",
      "Inverted match",
      "Indexed matching",
    ],
    ans: 1,
  },
  {
    id: 456,
    topic: "Regex & Error Handling",
    q: "What does `^` mean at the start of a regex pattern?",
    opts: [
      "Not operator",
      "End of string",
      "Any character",
      "Start of string/line",
    ],
    ans: 3,
  },
  {
    id: 457,
    topic: "Regex & Error Handling",
    q: "What does `$` mean at the end of a regex pattern?",
    opts: [
      "Match any char",
      "Start of string",
      "End of string/line",
      "Optional character",
    ],
    ans: 2,
  },
  {
    id: 458,
    topic: "Regex & Error Handling",
    q: "What does `*` quantifier mean in regex?",
    opts: ["One or more", "Exactly one", "Zero or more", "Zero or one"],
    ans: 2,
  },
  {
    id: 459,
    topic: "Regex & Error Handling",
    q: "What does `+` quantifier mean in regex?",
    opts: ["Zero or more", "Zero or one", "Exactly one", "One or more"],
    ans: 3,
  },
  {
    id: 460,
    topic: "Regex & Error Handling",
    q: "What does `?` quantifier mean in regex?",
    opts: ["One or more", "Zero or more", "Zero or one", "Exactly one"],
    ans: 2,
  },
  {
    id: 461,
    topic: "Regex & Error Handling",
    q: "What does `str.match(regex)` return?",
    opts: [
      "Boolean",
      "Array of matches or null",
      "Index of match",
      "Replaced string",
    ],
    ans: 1,
  },
  {
    id: 462,
    topic: "Regex & Error Handling",
    q: "What does `str.replace(regex, replacement)` do?",
    opts: [
      "Tests pattern",
      "Finds all matches",
      "Splits string",
      "Returns new string with matched parts replaced",
    ],
    ans: 3,
  },
  {
    id: 463,
    topic: "Regex & Error Handling",
    q: "What does `regex.test(str)` return?",
    opts: [
      "Array of matches",
      "The matched string",
      "A boolean — true if pattern matches",
      "The index",
    ],
    ans: 2,
  },
  {
    id: 464,
    topic: "Regex & Error Handling",
    q: "What does `try...catch` do in JavaScript?",
    opts: [
      "Loops until error",
      "Runs try block, catches errors in catch block without crashing",
      "Logs errors only",
      "Retries failed code",
    ],
    ans: 1,
  },
  {
    id: 465,
    topic: "Regex & Error Handling",
    q: "What does the `catch(e)` block receive?",
    opts: [
      "The code that failed",
      "The error object with message and stack",
      "A boolean",
      "The return value",
    ],
    ans: 1,
  },
  {
    id: 466,
    topic: "Regex & Error Handling",
    q: "What does `finally` block do in try-catch?",
    opts: [
      "Runs only on success",
      "Runs only on error",
      "Always runs after try and catch",
      "Handles async errors",
    ],
    ans: 2,
  },
  {
    id: 467,
    topic: "Regex & Error Handling",
    q: "What does `throw new Error('msg')` do?",
    opts: [
      "Logs error",
      "Exits function",
      "Creates and throws a custom error",
      "Ignores error",
    ],
    ans: 2,
  },
  {
    id: 468,
    topic: "Regex & Error Handling",
    q: "What does `error.message` contain?",
    opts: [
      "Error type",
      "Stack trace",
      "Human-readable error description",
      "Error code",
    ],
    ans: 2,
  },
  {
    id: 469,
    topic: "Regex & Error Handling",
    q: "What is the purpose of custom error classes?",
    opts: [
      "Faster errors",
      "Better logging",
      "Create specific error types extending Error for precise handling",
      "Replace try-catch",
    ],
    ans: 2,
  },
  {
    id: 470,
    topic: "Regex & Error Handling",
    q: "What does optional chaining `?.` prevent?",
    opts: [
      "Null assignment",
      "TypeError when accessing property on null/undefined",
      "Infinite loops",
      "Syntax errors",
    ],
    ans: 1,
  },
  {
    id: 471,
    topic: "Regex & Error Handling",
    q: "What does `[a-z]` match in regex?",
    opts: [
      "Any character",
      "Only lowercase letters a to z",
      "Any alphanumeric",
      "Uppercase A to Z",
    ],
    ans: 1,
  },
  {
    id: 472,
    topic: "Regex & Error Handling",
    q: "What does `[^abc]` mean in regex?",
    opts: [
      "a or b or c",
      "Starts with abc",
      "Any character NOT a, b, or c",
      "Empty string",
    ],
    ans: 2,
  },
  {
    id: 473,
    topic: "Regex & Error Handling",
    q: "What does `\\s` match in regex?",
    opts: [
      "Any digit",
      "Any letter",
      "Start of string",
      "Any whitespace character",
    ],
    ans: 3,
  },
  {
    id: 474,
    topic: "Regex & Error Handling",
    q: "Which Error type is thrown for calling undefined as a function?",
    opts: ["SyntaxError", "RangeError", "ReferenceError", "TypeError"],
    ans: 3,
  },
  {
    id: 475,
    topic: "Regex & Error Handling",
    q: "What does `ReferenceError` indicate?",
    opts: [
      "Invalid syntax",
      "Operation on wrong type",
      "Value out of range",
      "Accessing an undeclared variable",
    ],
    ans: 3,
  },

  // ════════════════════════════════════════════
  // TOPIC 20: Node.js REST API & Full Stack (25)
  // ════════════════════════════════════════════
  {
    id: 476,
    topic: "REST API & Full Stack",
    q: "What does REST stand for?",
    opts: [
      "Real-time Sync Transfer",
      "Remote Execution State Transfer",
      "Representational State Transfer",
      "Recursive State Tree",
    ],
    ans: 2,
  },
  {
    id: 477,
    topic: "REST API & Full Stack",
    q: "Which HTTP method is used to retrieve data?",
    opts: ["POST", "PUT", "DELETE", "GET"],
    ans: 3,
  },
  {
    id: 478,
    topic: "REST API & Full Stack",
    q: "Which HTTP method is used to create new data?",
    opts: ["GET", "PATCH", "DELETE", "POST"],
    ans: 3,
  },
  {
    id: 479,
    topic: "REST API & Full Stack",
    q: "Which HTTP method is used to update existing data fully?",
    opts: ["PATCH", "POST", "GET", "PUT"],
    ans: 3,
  },
  {
    id: 480,
    topic: "REST API & Full Stack",
    q: "Which HTTP method is used for partial updates?",
    opts: ["PUT", "POST", "GET", "PATCH"],
    ans: 3,
  },
  {
    id: 481,
    topic: "REST API & Full Stack",
    q: "Which HTTP method deletes a resource?",
    opts: ["GET", "REMOVE", "PUT", "DELETE"],
    ans: 3,
  },
  {
    id: 482,
    topic: "REST API & Full Stack",
    q: "What does HTTP status 201 mean?",
    opts: ["OK", "Not Found", "Unauthorized", "Created successfully"],
    ans: 3,
  },
  {
    id: 483,
    topic: "REST API & Full Stack",
    q: "What does HTTP status 404 mean?",
    opts: ["Server Error", "Created", "Resource Not Found", "Unauthorized"],
    ans: 2,
  },
  {
    id: 484,
    topic: "REST API & Full Stack",
    q: "What does HTTP status 401 mean?",
    opts: ["Not Found", "Server Error", "Unauthorized", "Forbidden"],
    ans: 2,
  },
  {
    id: 485,
    topic: "REST API & Full Stack",
    q: "What does HTTP status 500 mean?",
    opts: ["Success", "Redirect", "Not Found", "Internal Server Error"],
    ans: 3,
  },
  {
    id: 486,
    topic: "REST API & Full Stack",
    q: "What is JWT used for?",
    opts: [
      "Data storage",
      "Style management",
      "Stateless authentication — securely transmitting user identity as JSON token",
      "File upload",
    ],
    ans: 2,
  },
  {
    id: 487,
    topic: "REST API & Full Stack",
    q: "What are the three parts of a JWT token?",
    opts: [
      "Header, Payload, Signature",
      "Username, Password, Token",
      "Key, Value, Expiry",
      "Auth, Data, Hash",
    ],
    ans: 0,
  },
  {
    id: 488,
    topic: "REST API & Full Stack",
    q: "How is JWT sent in an HTTP request?",
    opts: [
      "In request body",
      "As a cookie only",
      "As query param",
      "In Authorization header as Bearer token",
    ],
    ans: 3,
  },
  {
    id: 489,
    topic: "REST API & Full Stack",
    q: "What does bcrypt do?",
    opts: [
      "Encrypts files",
      "Hashes passwords securely",
      "Signs JWT tokens",
      "Connects to database",
    ],
    ans: 1,
  },
  {
    id: 490,
    topic: "REST API & Full Stack",
    q: "What is CORS and why is it needed?",
    opts: [
      "Cache mechanism",
      "Cross-Origin Resource Sharing — allows browser to request resources from different origin",
      "Code style rule",
      "CSS framework",
    ],
    ans: 1,
  },
  {
    id: 491,
    topic: "REST API & Full Stack",
    q: "What npm package enables CORS in Express?",
    opts: ["helmet", "morgan", "cors", "express-cors"],
    ans: 2,
  },
  {
    id: 492,
    topic: "REST API & Full Stack",
    q: "What is Mongoose middleware/hooks?",
    opts: [
      "Express middleware",
      "Functions that run before/after Mongoose operations (pre/post)",
      "CORS handler",
      "Schema validator",
    ],
    ans: 1,
  },
  {
    id: 493,
    topic: "REST API & Full Stack",
    q: "What does `dotenv` package do in Node.js?",
    opts: [
      "Adds TypeScript support",
      "Validates environment",
      "Loads environment variables from .env file into process.env",
      "Manages package versions",
    ],
    ans: 2,
  },
  {
    id: 494,
    topic: "REST API & Full Stack",
    q: "What is the purpose of `.env` file?",
    opts: [
      "Styling variables",
      "Build configuration",
      "Store sensitive configuration (API keys, DB URIs) outside code",
      "Test scripts",
    ],
    ans: 2,
  },
  {
    id: 495,
    topic: "REST API & Full Stack",
    q: "What does `express.Router()` create?",
    opts: [
      "A mini Express app for modular route organization",
      "The main app",
      "A database connection",
      "A middleware",
    ],
    ans: 0,
  },
  {
    id: 496,
    topic: "REST API & Full Stack",
    q: "What is the MVC pattern in web development?",
    opts: [
      "Model-View-Controller — separates data, UI, and logic",
      "Multi-Version Control",
      "Mobile-View-Component",
      "Module-Variable-Class",
    ],
    ans: 0,
  },
  {
    id: 497,
    topic: "REST API & Full Stack",
    q: "What does `helmet` package do in Express?",
    opts: [
      "Handles authentication",
      "Sets security-related HTTP headers",
      "Manages files",
      "Enables CORS",
    ],
    ans: 1,
  },
  {
    id: 498,
    topic: "REST API & Full Stack",
    q: "What does `morgan` package do in Express?",
    opts: [
      "Handles JWT",
      "Manages CORS",
      "Logs HTTP requests",
      "Hashes passwords",
    ],
    ans: 2,
  },
  {
    id: 499,
    topic: "REST API & Full Stack",
    q: "What is API versioning (e.g., /api/v1)?",
    opts: [
      "Caching API responses",
      "Managing multiple API versions simultaneously without breaking old clients",
      "Securing API",
      "Rate limiting",
    ],
    ans: 1,
  },
  {
    id: 500,
    topic: "REST API & Full Stack",
    q: "What is the purpose of `res.locals` in Express?",
    opts: [
      "Stores cookies",
      "Caches responses",
      "Passes data from middleware to route handlers within the same request",
      "Sets headers",
    ],
    ans: 2,
  },
];

// Group by topic
const TOPICS = [...new Set(ALL_QUESTIONS.map((q) => q.topic))];

// Color palette per topic
const TOPIC_COLORS = [
  "#FF6B6B",
  "#FF8E53",
  "#FFC154",
  "#54D98C",
  "#4ECDC4",
  "#45B7D1",
  "#6C63FF",
  "#FF63A5",
  "#A06CD5",
  "#43AA8B",
  "#F94144",
  "#F3722C",
  "#90BE6D",
  "#577590",
  "#277DA1",
  "#E76F51",
  "#2A9D8F",
  "#E9C46A",
  "#264653",
  "#8338EC",
];

const topicColorMap = {};
TOPICS.forEach((t, i) => {
  topicColorMap[t] = TOPIC_COLORS[i % TOPIC_COLORS.length];
});

// ─── Shuffle utility ──────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function QuizApp() {
  const [screen, setScreen] = useState("home"); // home | topic-select | quiz | result
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [chosen, setChosen] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [filter, setFilter] = useState("all"); // all | wrong | correct

  const startQuiz = useCallback((topics, count = null) => {
    let pool = ALL_QUESTIONS.filter((q) => topics.includes(q.topic));
    pool = shuffle(pool);
    if (count) pool = pool.slice(0, count);
    setQuestions(pool);
    setSelectedTopics(topics);
    setAnswers({});
    setChosen(null);
    setRevealed(false);
    setCurrent(0);
    setScreen("quiz");
  }, []);

  const startAll = () => startQuiz(TOPICS);
  const startCustom = () => setScreen("topic-select");

  const handleTopicToggle = (t) => {
    setSelectedTopics((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );
  };

  const handleAnswer = (idx) => {
    if (revealed) return;
    setChosen(idx);
    setRevealed(true);
    setAnswers((prev) => ({ ...prev, [questions[current].id]: idx }));
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setScreen("result");
    } else {
      setCurrent((c) => c + 1);
      setChosen(null);
      setRevealed(false);
    }
  };

  const score = questions.filter((q) => answers[q.id] === q.ans).length;
  const pct = questions.length
    ? Math.round((score / questions.length) * 100)
    : 0;

  const topicStats = TOPICS.map((t) => {
    const qs = questions.filter((q) => q.topic === t);
    const correct = qs.filter((q) => answers[q.id] === q.ans).length;
    return { topic: t, total: qs.length, correct };
  }).filter((s) => s.total > 0);

  const reviewQuestions = questions.filter((q) => {
    if (filter === "wrong") return answers[q.id] !== q.ans;
    if (filter === "correct") return answers[q.id] === q.ans;
    return true;
  });

  // ── HOME ──
  if (screen === "home")
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Segoe UI',system-ui,sans-serif",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 600 }}>
          <div style={{ fontSize: 64, marginBottom: 8 }}>⚡</div>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(28px,5vw,48px)",
              fontWeight: 800,
              margin: "0 0 8px",
              background: "linear-gradient(90deg,#a78bfa,#60a5fa,#34d399)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.2,
            }}
          >
            Full Stack Dev Quiz
          </h1>
          <p
            style={{
              color: "#94a3b8",
              fontSize: 16,
              margin: "0 0 40px",
              lineHeight: 1.6,
            }}
          >
            500 questions across 20 topics — HTML, CSS, JavaScript, Node.js,
            React, Redux, MongoDB, jQuery & more
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={startAll}
              style={{
                padding: "16px 36px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg,#a78bfa,#6d28d9)",
                color: "#fff",
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: 0.5,
                boxShadow: "0 4px 24px rgba(109,40,217,0.5)",
              }}
            >
              All 500 Questions →
            </button>
            <button
              onClick={startCustom}
              style={{
                padding: "16px 36px",
                borderRadius: 12,
                border: "2px solid #475569",
                cursor: "pointer",
                background: "transparent",
                color: "#cbd5e1",
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              Choose Topics
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            {TOPICS.map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 600,
                  background: topicColorMap[t] + "22",
                  color: topicColorMap[t],
                  border: `1px solid ${topicColorMap[t]}44`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    );

  // ── TOPIC SELECT ──
  if (screen === "topic-select")
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
          fontFamily: "'Segoe UI',system-ui,sans-serif",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <button
            onClick={() => setScreen("home")}
            style={{
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: 14,
              marginBottom: 20,
              padding: 0,
            }}
          >
            ← Back
          </button>
          <h2
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: 800,
              margin: "0 0 8px",
            }}
          >
            Choose Topics
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: 24 }}>
            {selectedTopics.length} of {TOPICS.length} selected
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              gap: 12,
              marginBottom: 24,
            }}
          >
            {TOPICS.map((t) => {
              const sel = selectedTopics.includes(t);
              const c = topicColorMap[t];
              const cnt = ALL_QUESTIONS.filter((q) => q.topic === t).length;
              return (
                <div
                  key={t}
                  onClick={() => handleTopicToggle(t)}
                  style={{
                    padding: "14px 16px",
                    borderRadius: 12,
                    cursor: "pointer",
                    background: sel ? c + "33" : "#1e1b4b",
                    border: `2px solid ${sel ? c : "#334155"}`,
                    transition: "all 0.15s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: sel ? "#fff" : "#94a3b8",
                        fontSize: 13,
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {t}
                    </span>
                    <span style={{ fontSize: 18 }}>{sel ? "✓" : "○"}</span>
                  </div>
                  <div
                    style={{
                      color: sel ? c : "#475569",
                      fontSize: 11,
                      marginTop: 4,
                    }}
                  >
                    {cnt} questions
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={() => setSelectedTopics(TOPICS)}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #475569",
                background: "none",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Select All
            </button>
            <button
              onClick={() => setSelectedTopics([])}
              style={{
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid #475569",
                background: "none",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              Clear All
            </button>
            {selectedTopics.length > 0 && (
              <button
                onClick={() => startQuiz(selectedTopics)}
                style={{
                  padding: "10px 28px",
                  borderRadius: 8,
                  border: "none",
                  background: "linear-gradient(135deg,#a78bfa,#6d28d9)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 700,
                  marginLeft: "auto",
                }}
              >
                Start Quiz (
                {
                  ALL_QUESTIONS.filter((q) => selectedTopics.includes(q.topic))
                    .length
                }{" "}
                Qs) →
              </button>
            )}
          </div>
        </div>
      </div>
    );

  // ── QUIZ ──
  if (screen === "quiz") {
    const q = questions[current];
    const progress = (current / questions.length) * 100;
    const topicColor = topicColorMap[q.topic] || "#a78bfa";

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
          fontFamily: "'Segoe UI',system-ui,sans-serif",
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: 680 }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <button
              onClick={() => setScreen("home")}
              style={{
                background: "none",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              ✕ Exit
            </button>
            <span style={{ color: "#94a3b8", fontSize: 14 }}>
              {current + 1} / {questions.length}
            </span>
          </div>

          {/* Progress bar */}
          <div
            style={{
              height: 6,
              background: "#1e293b",
              borderRadius: 4,
              marginBottom: 24,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: 4,
                transition: "width 0.3s",
                background: `linear-gradient(90deg,${topicColor},${topicColor}88)`,
                width: `${((current + (revealed ? 1 : 0)) / questions.length) * 100}%`,
              }}
            />
          </div>

          {/* Topic badge */}
          <div style={{ marginBottom: 12 }}>
            <span
              style={{
                padding: "4px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                background: topicColor + "22",
                color: topicColor,
                border: `1px solid ${topicColor}44`,
              }}
            >
              {q.topic}
            </span>
          </div>

          {/* Question */}
          <div
            style={{
              background: "#1e1b4b",
              border: "1px solid #312e81",
              borderRadius: 16,
              padding: "24px",
              marginBottom: 20,
            }}
          >
            <h2
              style={{
                color: "#e2e8f0",
                fontSize: "clamp(16px,2.5vw,20px)",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {q.q}
            </h2>
          </div>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {q.opts.map((opt, i) => {
              let bg = "#1e1b4b",
                border = "#312e81",
                color = "#cbd5e1";
              if (revealed) {
                if (i === q.ans) {
                  bg = "#14532d";
                  border = "#22c55e";
                  color = "#bbf7d0";
                } else if (i === chosen && chosen !== q.ans) {
                  bg = "#450a0a";
                  border = "#ef4444";
                  color = "#fecaca";
                }
              } else if (chosen === i) {
                bg = "#2e1065";
                border = topicColor;
              }
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  style={{
                    padding: "15px 20px",
                    borderRadius: 12,
                    border: `2px solid ${border}`,
                    background: bg,
                    color,
                    fontSize: 15,
                    textAlign: "left",
                    cursor: revealed ? "default" : "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: border + "33",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      flexShrink: 0,
                      color: border,
                    }}
                  >
                    {["A", "B", "C", "D"][i]}
                  </span>
                  {opt}
                  {revealed && i === q.ans && (
                    <span style={{ marginLeft: "auto" }}>✓</span>
                  )}
                  {revealed && i === chosen && chosen !== q.ans && (
                    <span style={{ marginLeft: "auto" }}>✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Next */}
          {revealed && (
            <button
              onClick={handleNext}
              style={{
                marginTop: 20,
                width: "100%",
                padding: "16px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg,#a78bfa,#6d28d9)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {current + 1 >= questions.length
                ? "See Results 🎉"
                : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── RESULT ──
  if (screen === "result") {
    const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👏" : pct >= 40 ? "📚" : "💪";
    const grade =
      pct >= 90
        ? "A+"
        : pct >= 80
          ? "A"
          : pct >= 70
            ? "B"
            : pct >= 60
              ? "C"
              : pct >= 40
                ? "D"
                : "F";

    if (reviewMode) {
      const rq = reviewQuestions[reviewIdx];
      if (!rq)
        return (
          <div
            style={{
              minHeight: "100vh",
              background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Segoe UI',system-ui,sans-serif",
            }}
          >
            <div style={{ textAlign: "center", color: "#94a3b8" }}>
              <p style={{ fontSize: 18 }}>No questions match this filter.</p>
              <button
                onClick={() => {
                  setReviewMode(false);
                  setFilter("all");
                }}
                style={{
                  padding: "12px 24px",
                  borderRadius: 8,
                  border: "1px solid #475569",
                  background: "none",
                  color: "#a78bfa",
                  cursor: "pointer",
                  fontSize: 14,
                }}
              >
                Back to Results
              </button>
            </div>
          </div>
        );
      const userAns = answers[rq.id];
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
            fontFamily: "'Segoe UI',system-ui,sans-serif",
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: 680 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <button
                onClick={() => setReviewMode(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                }}
              >
                ← Results
              </button>
              <span style={{ color: "#94a3b8", fontSize: 13 }}>
                {reviewIdx + 1} / {reviewQuestions.length}
              </span>
            </div>
            <span
              style={{
                padding: "4px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                background: topicColorMap[rq.topic] + "22",
                color: topicColorMap[rq.topic],
              }}
            >
              {rq.topic}
            </span>
            <div
              style={{
                background: "#1e1b4b",
                border: "1px solid #312e81",
                borderRadius: 16,
                padding: 24,
                margin: "12px 0 16px",
              }}
            >
              <h2
                style={{
                  color: "#e2e8f0",
                  fontSize: 18,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {rq.q}
              </h2>
            </div>
            {rq.opts.map((opt, i) => {
              let bg = "#1e1b4b",
                border = "#312e81",
                color = "#cbd5e1";
              if (i === rq.ans) {
                bg = "#14532d";
                border = "#22c55e";
                color = "#bbf7d0";
              } else if (i === userAns && userAns !== rq.ans) {
                bg = "#450a0a";
                border = "#ef4444";
                color = "#fecaca";
              }
              return (
                <div
                  key={i}
                  style={{
                    padding: "14px 18px",
                    borderRadius: 12,
                    border: `2px solid ${border}`,
                    background: bg,
                    color,
                    fontSize: 14,
                    marginBottom: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: border + "33",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 700,
                      color: border,
                    }}
                  >
                    {["A", "B", "C", "D"][i]}
                  </span>
                  {opt}
                  {i === rq.ans && (
                    <span style={{ marginLeft: "auto" }}>✓ Correct</span>
                  )}
                  {i === userAns && userAns !== rq.ans && (
                    <span style={{ marginLeft: "auto" }}>✗ Your answer</span>
                  )}
                </div>
              );
            })}
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              <button
                disabled={reviewIdx === 0}
                onClick={() => setReviewIdx((r) => r - 1)}
                style={{
                  flex: 1,
                  padding: "13px",
                  borderRadius: 10,
                  border: "1px solid #475569",
                  background: "none",
                  color: reviewIdx === 0 ? "#475569" : "#94a3b8",
                  cursor: reviewIdx === 0 ? "default" : "pointer",
                  fontSize: 14,
                }}
              >
                ← Prev
              </button>
              <button
                disabled={reviewIdx >= reviewQuestions.length - 1}
                onClick={() => setReviewIdx((r) => r + 1)}
                style={{
                  flex: 1,
                  padding: "13px",
                  borderRadius: 10,
                  border: "1px solid #475569",
                  background: "none",
                  color:
                    reviewIdx >= reviewQuestions.length - 1
                      ? "#475569"
                      : "#a78bfa",
                  cursor:
                    reviewIdx >= reviewQuestions.length - 1
                      ? "default"
                      : "pointer",
                  fontSize: 14,
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
          fontFamily: "'Segoe UI',system-ui,sans-serif",
          padding: "24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: 720 }}>
          {/* Score Card */}
          <div
            style={{
              background: "linear-gradient(135deg,#1e1b4b,#312e81)",
              border: "1px solid #4c1d95",
              borderRadius: 20,
              padding: "32px",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            <div style={{ fontSize: 56 }}>{emoji}</div>
            <h1
              style={{
                color: "#fff",
                fontSize: 36,
                fontWeight: 900,
                margin: "8px 0 4px",
              }}
            >
              {score} / {questions.length}
            </h1>
            <div
              style={{
                fontSize: 64,
                fontWeight: 900,
                lineHeight: 1,
                background: "linear-gradient(90deg,#a78bfa,#60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {pct}%
            </div>
            <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 4 }}>
              Grade: <strong style={{ color: "#a78bfa" }}>{grade}</strong>
            </div>
          </div>

          {/* Topic breakdown */}
          <h3
            style={{
              color: "#e2e8f0",
              fontSize: 18,
              fontWeight: 700,
              margin: "0 0 16px",
            }}
          >
            Performance by Topic
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 28,
            }}
          >
            {topicStats.map(({ topic, total, correct }) => {
              const p = Math.round((correct / total) * 100);
              const c = topicColorMap[topic];
              return (
                <div
                  key={topic}
                  style={{
                    background: "#1e1b4b",
                    borderRadius: 12,
                    padding: "12px 16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        color: "#e2e8f0",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {topic}
                    </span>
                    <span
                      style={{
                        color:
                          p >= 70 ? "#22c55e" : p >= 40 ? "#f59e0b" : "#ef4444",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {correct}/{total} ({p}%)
                    </span>
                  </div>
                  <div
                    style={{
                      height: 5,
                      background: "#0f172a",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        borderRadius: 3,
                        background: c,
                        width: `${p}%`,
                        transition: "width 0.5s",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Review options */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 16,
            }}
          >
            {[
              ["all", "Review All", "#a78bfa"],
              ["wrong", "Review Wrong ✗", "#ef4444"],
              ["correct", "Review Correct ✓", "#22c55e"],
            ].map(([f, label, c]) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setReviewIdx(0);
                  setReviewMode(true);
                }}
                style={{
                  flex: 1,
                  minWidth: 140,
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: `2px solid ${c}44`,
                  background: `${c}11`,
                  color: c,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "inherit",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Replay */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => startQuiz(selectedTopics)}
              style={{
                flex: 1,
                padding: "15px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg,#a78bfa,#6d28d9)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "inherit",
              }}
            >
              🔄 Retake Quiz
            </button>
            <button
              onClick={() => {
                setScreen("home");
                setSelectedTopics([]);
              }}
              style={{
                flex: 1,
                padding: "15px",
                borderRadius: 12,
                border: "1px solid #475569",
                background: "none",
                color: "#94a3b8",
                cursor: "pointer",
                fontSize: 15,
                fontFamily: "inherit",
              }}
            >
              🏠 Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}
