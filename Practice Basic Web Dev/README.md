## What accessibility technology has to be in mind?

1. Screen readers
2. Speech recognition
3. Screen magnifiers
4. Alternative input devices

**Tip: In the browser you can enable accessibility tree.**

### How to check the accessibility?

- Using AT
- contrast checker
- Automated Tools
  --> Lighthouse
  --> Accessibility Inspector
  --> aXe
- AI assistants

## Accessibility Guidelines

- A - less accessible
- AA - Accessible
- AAA - Most Accessible (Highest grade)

### Contrast Ratios

x - your contrast value
Color contrast ratio ---> 4.75 < x < 7

Example: If you have a text blending with background image. You can blend the image with background color.

```css
background-color: #fff;
background-blend-mode: lighten;
```

Check learn more about the css property background-blend-mode [click me](https://www.w3schools.com/cssref/pr_background-blend-mode.php)

### Alternative Text images

Who this helps?

- People with little or no vision.
- People who have turned off images.
- Search engines like google.

### Links

- Should use <a> tag.
- Should be recognizable as links.
- Should have non-ambiguous text.

### Labels

The input fields need to have both labels and placeholders. Either one of those cannot replace other.
Both are needed.

- Label Clearly explain what kind of information is expected in the input field.

- The placeholder provides a hint or example of what kind of information should be entered, often
  within the input field itself.

### Fieldsets and Legend

Fieldsets and legends are valuable tools for organizing and grouping related input elements on web
forms. Visually groups related input elements, separating them from other sections of the form.

Legend:
Provides a descriptive caption for the fieldset, summarizing its contents.

```html
<fieldset>
  <legend>Personal Information</legend>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" /><br />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</fieldset>
```

### HTML semantics

#### Landmark Regions

- `<nav>`
- `<header>`
- `<main>`
- `<section>`
- `<article>`
- `<dialog>`
- `<footer>`

Some important tips:

- Avoid nesting landmarks unnecessarily.
- Ensure landmarks are keyboard accessible and focusable.
- Combine landmarks with skip links for additional navigation options.

##

#### Lists

If we have consecutive elements then we better use `<ul>`. This helps assistive technologies to announce
the start and end of the list and number of items in the list.

##

#### Text font-size

Try to use `rem` units size this is relative to document root. Using `px` will not modify the size but
`rem` does when user changes their document root, lets say from `14px` to `16px`

`rem` vs `em`
rem is relative to the `px` defined in the document root whereas the `em` is relative to the parent
element (`px` defined by parent element).

##

#### Headings

- Heading numbers should be consecutive.
- Only user one `h1` per page.
- Apply them for structure, not style.

## ARIA

### ARIA BASICS

Accessible Rich Internet Applications.

`<button>` already comes with in-built ARIA features accessibility, roles, states and keyboard
interaction. If we create a `<div>` to act like button we lose out those features. We can add those
features with ARIA:

```html
<div class="btn" role="button" tabindex="0">I am a button</div>
```

`role='button'` provides context to screen-readers that is a button & `tabindex="0"` provides keyboard
support.

ARIA - Remember compliments HTML does not replace the HTML semantics.

### ARIA Live Region

Announcing Updates with ARIA Live Regions.
ARIA Live Settings:

- `aria-live="off"`: (default) No announcements. Use for content users don't need immediate updates
  on, like decorative elements or frequently changing content like stock tickers.

- `aria-live="polite"`: Announces updates when the user is idle. Use for important but non-urgent
  info, like new messages or notifications, to avoid interrupting active navigation or content consumption.

- `aria-live="assertive"`: Immediately interrupts the user to announce critical updates, like error
  messages or urgent alerts. Use sparingly as it disrupts user flow and should be reserved for truly
  time-sensitive information.

- Consider using `aria-atomic="true"` to announce the entire region as a whole, even if only part of it changes.

Sample Code:

```html
<div aria-live="polite" id="status-updates">
  <p>No new messages yet.</p>
</div>
<button onclick="addNewMessage()">Get new message</button>
<script>
  // Function to simulate new message arrival
  function addNewMessage() {
    const statusUpdates = document.getElementById("status-updates");
    statusUpdates.innerHTML = "You have a new message!";
  }
</script>
```

### Programmatic focus management

Common use cases:

- When opening Models or Menus.
- After completing actions like form submissions.
- To maintain a logical flow of navigation.

Scenario: Once a user submits a form the focus should be enabled on button "Back to Homepage". This
way the accessability will be better since the user does not have to look for such button.

Have to be used in moderate as this can disorient user.

### Skip Navigation Link

How to hide skip link:

```css
left: 100%;
```

```css
transform: translate(100%, 0);
```

```css
opacity: 0;
```

How **NOT** to hide skip link:

```css
display: none;
```

```css
visibility: hidden;
```

```html
<a hidden> Link </a>
```
