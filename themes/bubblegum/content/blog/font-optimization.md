---
title: "The Techniques of Google Fonts, and how to apply them manually"
description: "Google Fonts is an amazing tool to manage and use fonts on your website. But how does it work? And how can you apply their state-of-the-art techniques if you need to use a font that isn't available on Google Fonts?"
date: 2022-11-02
external: false
draft: true
---

In this article, we will take a look at a few of the techniques that Google Fonts implements.
This will give you a ton of valuable insight into the world of fonts on the web!
When you need to manually optimize your fonts, you can use these techniques to get the best performance possible.

## Font Subsetting
With font subsetting, the file size of fonts can be significantly reduced, which can speed up the page load time.
This is done by only including the characters that are actually used on the page, rather than the entire font.
Most fonts have a ton of rarely used characters, like *Ë*, *ó*, and *ẞ*. These characters take up valuable KBs. 

However, it's important to note that font subsetting can have an impact on the appearance of the text if not done carefully.
If characters are removed from the font, and are still used on the page, the browser will substitute them with a fallback.
This can break the design of the page, and should be avoided. This is especially common on websites with internatiolanization built-in.

### The unicode-range property
Thesedays, the most performant and easiest method to subset your fonts is to use the `unicode-range` property.
This property allows you to specify which characters you want to include in the font file.

Since the most common usecase is to use a range of unicodes (charachters) from a font, you can specify a range.
You can find the unicode ranges for each font on [Unicode Table](https://unicode-table.com/en/#control-character).
For Latin, you want to use ```U+0020-007F```, which includes all the characters from space to tilde.

```css
@font-face {
  font-family: 'Roboto';
  src: url(https://url.com) format('woff2');
  unicode-range: `U+0020-007F;
}
```
See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range) for more information. 

#### Fun Fact
You can use the `unicode-range` property to include multiple ranges of characters from different fonts.
This allows you to mix fonts, and for example use a serif font for certain characters and a mono font for other characters.
Most likely, you won't need this, but it's fun to experiment with and might be useful someday ;).

### Fallback Font Styling
Add info about how to use it, and copy CSS button

{% fontWidget /%}
Based on [Monica Dinculescu](https://meowni.ca/font-style-matcher/) her work


### Further Reading
https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/
https://helenvholmes.com/writing/type-is-your-right/
https://www.zachleat.com/web/comprehensive-webfonts/