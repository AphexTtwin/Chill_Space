# Chill Space — HTML notes

HTML describes a web page's structure. Chill Space is our practice project: friends will eventually plan hangouts, share photos, and chat.

## Document structure

- `<!doctype html>` tells the browser to use modern HTML rules. It has no closing tag.
- `<html lang="en">` wraps the document. `lang="en"` says its language is English.
- `<head>` holds information about the page, such as its title and character encoding.
- `<meta charset="UTF-8">` lets the browser read characters such as accents and emoji correctly.
- `<title>Chill Space</title>` sets the browser tab's text.
- `<body>` holds what appears on the page.

## Elements and headings

Most elements have an opening tag, content, and a closing tag:

```html
<h1>Chill Space</h1>
```

- `<h1>` is the page's main heading. `<h2>` is a heading for a section.
- `<p>` is a paragraph.
- Closing tags repeat the opening tag's name with `/`, such as `</h1>`.
- Indentation and blank lines make the code easier to read. They do not create the visible spacing between headings and paragraphs.

## Lists

`<ul>` makes a bulleted list. Each item goes inside an `<li>`:

```html
<ul>
	<li>Movie night</li>
	<li>Food meetup</li>
</ul>
```

Put existing ideas in the list. A text box for entering a new idea belongs outside the list.

## Inputs and labels

- `<input type="text">` creates a one-line text box.
- `<input type="checkbox">` creates a box you can toggle on and off.
- `<input>` has no closing tag. HTML alone does not save what someone typed or checked.
- `<label>` names a field. Clicking its text focuses the matching input.

```html
<label for="idea">Hangout idea</label>
<input id="idea" type="text">
```

The label's `for` value must match the input's `id`. An `id` should be unique on the page. This connection also helps screen readers describe the field.

## Attributes

Attributes add information inside an opening tag: `type="text"` chooses an input type; `id="idea"` names an element; `for="idea"` connects a label to it.

## Tables and expandable details

- `<table>` contains structured rows and columns.
- `<tr>` creates a row, `<th>` creates a heading cell, and `<td>` creates a data cell.
- `<thead>` groups column headings; `<tbody>` groups the changing idea rows.
- `<details>` creates an expandable section and `<summary>` creates its clickable title.
- The `.open` property is `true` when `<details>` is open and `false` when closed.

## JavaScript and the page

- `const` creates a variable that will not be reassigned; `let` creates one that can change.
- `document.querySelector("#idea")` finds the element whose `id` is `idea`.
- `.value` reads an input; `.trim()` removes unwanted spaces around its text.
- `addEventListener("submit", ...)` or `addEventListener("click", ...)` reacts to a user action.
- `event.preventDefault()` stops a form from refreshing the page.
- `document.createElement()` creates a new HTML element from JavaScript.
- `.textContent` changes an element's visible text.
- `.append()` places elements inside another element; `.remove()` removes an element.
- `if`, `else`, and `return` control which instructions run.
- A boolean stores `true` or `false`; `!value` flips it.

## Dates and validation

- `new Date()` creates a Date object representing the current moment.
- `new Date(dateInput.value)` converts the selected date text into a Date object.
- `datetime-local` lets someone choose a local date and time.
- `required`, `reportValidity()`, and `setCustomValidity()` help reject missing or past dates.
- `toLocaleString()` formats a Date for the browser's language and time zone.

## Current Chill Space flow

1. A friend suggests a title and optional details.
2. Other friends can mark themselves interested.
3. The organizer chooses a future date and confirms the plan.
4. The idea moves into Upcoming plans.
5. Each friend can mark themselves going or withdraw.

The current version stores everything only in the open browser page. Refreshing clears it. Shared data and accounts will come with the backend type shii haha.
