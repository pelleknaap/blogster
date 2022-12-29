---
title: "Font Optimization"
description: "You can author content using the familiar markdown syntax you already know. All basic markdown syntax is supported."
date: 2022-11-02
external: false
---

# Font Subsetting
Font subsetting is a practice commonly used in web development to optimize the performance of a website. 
When a webpage is loaded, all the fonts that are used on the page are downloaded by the user. 
This significantly increases the page load time if the font files aren't optimized. 
Font subsetting is a technique that decreases the size of the font files, and therefore speeding up the page loads.
It involves only including the characters that are actually used on the page, rather than the entire font. 
In most cases, this significantly reduces the file size of the font. 
However, it's important to note that font subsetting can have an impact on the appearance of the text.
If characters are removed from the font, but are still used on the page, the browser will substitute them with a fallback.
This can break the design of the page, and should be avoided if possible.

To summarize, font subsetting is extremely worthwhile, but should be done carefully to prevent weird charachter glitches.

## The unicode-range property
Thesedays, the most performant and easiest method to subset your fonts is to use the `unicode-range` property.
This property allows you to specify which characters you want to include in the font file.

Since the most common usecase is to use a range of unicodes (charachters) from a font, you can specify a range.
You can find the unicode ranges for each font on [Unicode Table](https://unicode-table.com/en/#control-character).
For Latin, you want to use ```U+0020-007F```, which includes all the characters from space to tilde.

## Fun Fact
You can use the `unicode-range` property to include multiple ranges of characters from different fonts.
This allows you to mix fonts, and for example use a serif font for certain characters and a mono font for other characters.
Most likely, you won't need this, but it's fun to experiment with and might be useful someday.

## Google fonts subset API
If you use Google Fonts to fetch your fonts, it is incredibly easy to subset your fonts.
You can use the previously discussed CSS property in your font-face, or you can use the Google Fonts subset API.
Using the Gooel Fonts API is a better method if you want to refrain from manually specifying font-face rules.
Simply add the text `&text=` to the end of the URL, and then add the characters that you want to use.
Alternatively, you can select a few presets of characters that are commonly used. You can add `&subset=latin` or `&subset=latin-ext` to the URL for example.


// https://unicode-table.com/en/#control-character
// https://www.w3.org/TR/PFE-evaluation/#static




{% font /%}

# Fallback Font Styling
https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/
https://helenvholmes.com/writing/type-is-your-right/
https://www.zachleat.com/web/comprehensive-webfonts/