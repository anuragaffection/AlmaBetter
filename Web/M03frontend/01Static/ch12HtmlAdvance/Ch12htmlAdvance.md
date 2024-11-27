Here are answers to your questions:

### 1. **How to use `<aside>` & its significance**
The `<aside>` tag in HTML is used for content that is tangentially related to the main content. It is often used for sidebars, pull quotes, advertisements, or other elements that provide supplementary information.

Example:
```html
<aside>
    <p>This is additional information related to the article.</p>
</aside>
```
**Significance:** 
- Improves semantic structure and accessibility.
- Helps browsers and search engines understand the content better.

---

### 2. **What is `<marquee>` in HTML?**
The `<marquee>` tag is used to create scrolling text or images. However, it is obsolete and not recommended for use in modern web development. Instead, use CSS animations for similar effects.

Example:
```html
<marquee behavior="scroll" direction="left">This is scrolling text.</marquee>
```

---

### 3. **How to create a nested table?**
A nested table is a table within a table. You simply place one `<table>` inside a `<td>` (table cell) of another table.

Example:
```html
<table border="1">
    <tr>
        <td>Main Table Cell 1</td>
        <td>
            <table border="1">
                <tr>
                    <td>Nested Table Cell</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
```

---

### 4. **Security concerns in using `<iframe>`**
- **Cross-Site Scripting (XSS):** An attacker can inject malicious content into an iframe.
- **Clickjacking:** Malicious sites can embed your page in an iframe to trick users into clicking something unintended.
- **Performance Issues:** Iframes can slow down page loading.
  
**Solutions:**
- Use the `sandbox` attribute to restrict iframe functionality.
- Use the `X-Frame-Options` HTTP header to prevent embedding on other sites.

---

### 5. **Difference between `<iframe>` and `<frame>`**
| Feature           | `<iframe>`                             | `<frame>`                           |
|--------------------|----------------------------------------|--------------------------------------|
| Use               | Embeds content within a page.          | Used in frameset to divide the page into sections. |
| HTML Version      | Still supported.                      | Deprecated in HTML5.                |
| Flexibility       | Can be styled with CSS.               | Limited styling options.            |

---

### 6. **GET vs POST in forms**
| Method | Description                                                                                     |
|--------|-------------------------------------------------------------------------------------------------|
| GET    | Sends form data as URL parameters, visible in the address bar. Best for non-sensitive data.    |
| POST   | Sends form data in the body of the HTTP request, not visible in the URL. Best for sensitive data.|

---

### 7. **Describe `<label>`**
The `<label>` tag is used to bind a text label to a form control, improving accessibility. Clicking on the label focuses the associated input.

Example:
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

---

### 8. **Name vs Value**
- **Name:** Refers to the identifier of a form control, used to send data to the server.
- **Value:** Refers to the data entered or selected by the user, representing the content of the control.

Example:
```html
<input type="text" name="username" value="JohnDoe">
```

---

### 9. **Div vs Span**
| Feature           | `<div>`                                   | `<span>`                       |
|--------------------|-------------------------------------------|---------------------------------|
| Purpose           | Block-level container for structuring content. | Inline container for styling or grouping text. |
| Usage             | Wrapping sections or blocks of content.   | Wrapping small portions of text. |

Example:
```html
<div>This is a block.</div>
<span>This is inline.</span>
```

---

### 10. **Lazy vs Eager**
- **Lazy:** Defers loading or initialization until it's needed.
  - Example: Lazy loading images or modules to improve performance.
  - Example in HTML: `<img loading="lazy" src="image.jpg" alt="Lazy Loaded Image">`
  
- **Eager:** Loads or initializes immediately, regardless of whether it is currently required.  
  - Example: Images with `loading="eager"` load immediately.
