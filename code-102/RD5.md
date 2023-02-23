# Designing web pages with CSS

## Class notes and reading assignment: Read 05

Start of the day misc. notes:
- Practice working in the **shell** rather than relying on the GUI. You need the practice *now.*
- The <head> section contains metadata *about* the website.  The <title> portion is visible on the top of the browser or tab.  This is the **only** visible part of the <head> section.  The <head> lives outside of the <body> and is not to be confused with the <header>.
- Seriously, get ***very comfortable with git commands.  A-C-P!***
- HTML is just boxes in boxes.  You should always have a **<header>, <main>, and <footer>.  These are all contained in the <body> element.  Other elements such as <nav> can live within these elements.  
- The **ALT key** will move selected text or individual lines up and down within most text editors (including VSCode).

#### CSS basics, and why do hackers in movies usually have scrolling CSS?
!(css hackerman)[https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg]

CSS stands for **Cascading Style Sheets**.  It is its own rules based language separate from HTML.  If **HTML is our structure,** then **CSS is our style.**  The two go hand in hand.

- CSS is used to apply specific styling to each element of the page.  This is done in a **stylesheet,** where the CSS rules are housed.
- HTML elements are styled in a CSS sheet with **arguments.** This is done by opening with a **selector,** followed by curly braces {}. 
- In the curly braces will be **declarations,** consisting of a **property** to be modified and the **value** by which it will be modified.
- For example, a header could be specified to have red font and specific size;
    h1 {
        color: red;
        font-size: 5em;
    }
- Each declaration is separated by a semi-colon.  Each property and value are separated by a colon.  This is similar to .cfg files in some mods you've played.
- CSS is separated into **modules,** which are basic categories of function.  Don't worry about it too much right now, just try to remember that **like is grouped with like.**
- CSS is developed by a semi-official working group of industry experts, browser vendors, etc.  As new features of CSS are rolled out, browsers become compatible at different rates.
- Backwards compatibility with old CSS features is **very important.**  Sites built at the dawn of CSS still need to be correctly rendered today.

### How to add CSS to your page

- According to [W3Schools](https://www.w3schools.com/css/css_howto.asp) there are three ways of inserting a style sheet.
    1. External CSS
    2. Internal CSS
    3. Inline CSS
- **External CSS:** a very convenient way to change the look of a whole website.  You only have to modify one file!
    - HTML pages need a link to the external style sheet in the **<link>** element, in the **<head>** section.
    > <head>
      <link rel="stylesheet" href="mystyle.css">
      </head>
    - You can write an external style sheet in any text editor, saving the file with the **.css** extension.  *The external style sheet should contain no HTML tags.*
- **Internal CSS:** a style sheet used if one single HTML page has a unique style.
    - Internal style sheets live in the <style> element inside of the <head> section.  It is written in the exact same way as a independent CSS sheet.
- **Inline CSS:** an inline style can be used if you need a unique style for a **single element.**
    - To add inline CSS, put the CSS element in your respective HTML element before the value. example-
        - <h1 style="color:blue;text-align:center;">This is a heading</h1>
            <p style="color:red;">This is a paragraph.</p>
    - Inline CSS takes priority over internal or external style sheets, or the browser defaults.
***CSS order of operations!*** The browser searches for CSS guidance in this order.    
    - External
    - Internal
    - Inline
- Inline style overrides internal style, which overrides external style.

- **Useful tip!** Using the <border> tag in a <style> element on your HTML page can be very useful for drawing clear lines around every element on the page.
- Furthermore, you can pop out developer tools on a page in the browser to view the eleements AND see them highlighted on the page.  Very useful for visualizing your changes.

- **CSS Color values:** there's several ways to have colors represented.  You can use the color picker within VSCode or any number of [web based tools](https://color.adobe.com/create/color-wheel).

Per [W3Schools](https://www.w3schools.com/cssref/css_colors_legal.php):
> Colors in CSS can be specified by the following methods:

    Hexadecimal colors
    Hexadecimal colors with transparency
    RGB colors
    RGBA colors
    HSL colors
    HSLA colors
    Predefined/Cross-browser color names
    With the currentcolor keyword
- You can use **id values** to apply rules to specific elements. i.e.
    - #hero {
        float: left;
    }
        -...allows any element with the #hero designation to follow that float rule.
- **class values** are used to apply specific rules as you do with ID values, but with sets of elements instead of individuals.
- Classes are stated with a dot before the class name, ID values with a # symbol=
    - .class-name {
        background-:color red;
    }
    - #IDname {
        float: left;
    }



#### Things to learn later
- So, so, so much CSS.  
- This seems like it's just going to be about practice.