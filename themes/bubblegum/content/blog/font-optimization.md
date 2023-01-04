---
title: "The Techniques of Google Fonts, and how to apply them manually"
description: "Google Fonts is an amazing tool to manage and use fonts on your website. But how does it work? And how can you apply their state-of-the-art techniques if you need to use a font that isn't available on Google Fonts?"
date: 2023-01-04
external: false
draft: false
homepage: true
---

In this article, we will explore a few techniques that Google Fonts uses to optimize font performance on the web. 
These techniques can be useful when you need to manually optimize your fonts. 
Additionally, it will give you a ton of valuable insight into the world of fonts on the web!

## Font Subsetting
Font subsetting is a way to reduce the file size of fonts and speed up page load time by only including the characters that are actually used on the page, rather than the entire font. 
Most fonts have a large number of rarely used characters, such as Ë, ó, and ẞ, which can take up valuable kilobytes.

However, it's important to be careful with font subsetting, as it can impact the appearance of text if not done correctly. 
If characters are removed from the font and are still used on the page, the browser will substitute them with a fallback font, which can break the design of the page. 
This is especially common on websites with built-in internationalization.

### Manually subsetting local fonts
If you aren't using an external service like Google Fonts to subset your fonts, you can do it manually.

There are a few tools that can help you with this:  
If you want to use a website to subset your fonts, I can recommend [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator).  
It offers a ton of options to subset your fonts, and it's free to use.  
If you prefer to use the terminal, you can use a CLI like [Subfont](https://github.com/Munter/subfont).  

#### Subfont sizes
You can use the calculator below to get more insight about the file sizes of different font subsets.
Feel free to play around with it! You can use ***Poppins*** as another font for example.  
All fonts are fetched from Google Fonts, so you can use any font that's available on Google Fonts.

{% fontFileSizeCalculator /%}

### The unicode-range property
If you already have a font with various subsets. For example, if you're using Google Fonts, you can use the `unicode-range` property.
It will automatically load the correct subsets based on the characters specified in the unicode-range property.

With the unicode-range property, you can specify a range of unicodes (characters) that are used on the website.
You can find all unicodes and the specific unicode ranges on [Unicode Table](https://unicode-table.com/en/#control-character).
For Latin, you want to use ```U+0020-007F```, which includes all basic latin characters.  

Here's an example of how to use the unicode-range property in a @font-face rule:
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
This allows you to mix fonts, and for example use a serif font for certain characters and a monofont for other characters.
While you may not need this feature often, it can be fun to experiment with.

## Fallback Font Styling
When an external font hasn't been loaded yet, a fallback font will be visible until the external font has finished loading. 
The difference between these two fonts can be quite noticeable and distracting for users. 
However, you can style the fallback font to minimize the differences between the two fonts.

You can use the widget below to generate the CSS for your fallback font.  
Use a [Font Face Observer](https://fontfaceobserver.com/) to actually apply the CSS to your fallback font.

{% fontWidget /%}
Based on [Monica Dinculescu](https://meowni.ca/font-style-matcher/) her amazing work  
Use her tool if you're using a font that isn't available on Google Fonts

## Further Reading
In this article, Chris Coyier explains more about fallback fonts.  
Read [Fallback Font Explanation](https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/)  

This comprehensive article explains more about the different font loading techniques.
The article has an incredible amount of information, be sure to check it out if you're interested!
View [Comprehensive Webfonts](https://www.zachleat.com/web/comprehensive-webfonts/)
