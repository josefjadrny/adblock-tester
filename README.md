# Adblock-tester
Simple and lightweight library with no dependencies for detect adblock, adblock plus or custom easylist

## Detecting adblock and ablock plus
There is global object **AdblockTester** with function isAdblockEnabled returning true or false

```adblockTester.isAdblockEnabled()```

## Detecting custom EasyList
You have to find some blocked element from this EasyList (they are published online). Look for blocked element id like

```###ad-banner```

You can test if this element is blocked with


```adblockTester.isElementWithIdBlocked('elementId')```

___

Testing functionalities are executed **on-the-fly**, so rather call them once and save the result to your custom variable, cookie etc.

[DEMO HTML](index.html)

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)