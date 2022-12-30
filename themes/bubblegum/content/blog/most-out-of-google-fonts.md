---
title: "How to get the most out of Google Fonts"
description: "Google Fonts is an amazing tool to manage and use fonts on your website. But how does it work? And how can you apply their state-of-the-art techniques if you need to use a font that isn't available on Google Fonts?"
date: 2022-11-02
external: false
---

# Other article (How to get the most out of Google Fonts)
### Google Fonts Subset API
If you use Google Fonts to fetch your fonts, it is incredibly easy to subset your fonts.
You can use the previously discussed CSS property in your font-face, or you can use the Google Fonts subset API.
Using the Google Fonts API is a better method if you want to refrain from manually specifying font-face rules.
Simply add the text `&text=` to the end of the URL, and then add the characters that you want to use.
Alternatively, you can select a few presets of characters that are commonly used. You can add `&subset=latin` or `&subset=latin-ext` to the URL for example.

### File Sizes of Subsets
You can use the calculator below to get more insights about the file sizes of different font subsets.
Feel free to play around with it! You can use ***Poppins*** as another font for example.

{% fontFileSizeCalculator /%}
