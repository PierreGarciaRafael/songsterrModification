# Learn note with tabs
## Concept
This booklet is designed to learn notes on the fretboard, with tab-like notation & without partition. It only works on [songsterr.com](https://www.songsterr.com/) for now.
## Context
Tabs are great for quick reading for guitar players as you can see what string to fret & to play at which time. However using tabs, you don't directly know which note you play, which means you have to learn notes on the fretboard by yourself.
Although partition are great to learn how to find notes, there's always ambiguity as guitar notes are not unique, (for example in standard tuning playing the A string at fret 5 and the D string at fret 0 produce the same note with different tone).
## Solution
Taking the best of partitions & tabs, I created new guitar notation: Nablature. 
It borrows string fret notation from tabs & replaces numbers with the [english note letter](https://en.wikipedia.org/wiki/Key_signature_names_and_translations). It means you have to search which fret you have to press on the fretboard. The goal is to be able to find notes intuitively on the fretboard.
## How to read
Rodeo (by Kyuss) intro riff, tab notation:
```

E--------------------------------------------------------
B--------------------------------------------------------
G 12~---12-13-15-13-12-13-12~-----12-11------------------ 
D-----------------------------------------8-8-8-8-8/13-10
A--------------------------------------------------------
E--------------------------------------------------------
```
Nab notation:
```

E-----------------------------------------------------
B-----------------------------------------------------
G-G~---G-G#-A#-G#-G-G#-G~---G-f#----------------------
D---------------------------------a#-a#-a#-a#-a#/D#--C
A-----------------------------------------------------
E-----------------------------------------------------
```
The letters are the notes you need to play. If you don't know how to find notes on the fretboard checkout [this](https://www.guitar-chord.org/fretboard.html).
When letters are uppercased, it means they are over fret 12.
It also works with non-standard tunings.
## How to use
### Setup
[Create a boomarklet](https://www.freecodecamp.org/news/what-are-bookmarklets/) on your browser modify it so the url is :

`javascript: (() => {[replace with body of songsterrTabToNab.js]})()`.

### On songsterr
Now when you're on [songsterr](songster.com), you just have to click on the boomarklet to change the tab notation to nab. If you want the tab back, refresh the page.
### Limitations
-You might have to click multiple times on the bookmarklet: (songsterr doesn't load all of the tab directly, so if you scroll there might be some tab notation)

-If you click on an icon on the left panel, [songsterr](songsterr.com) will refresh the tab, and fret number will be added, you can always refresh & click again on your bookmarklet.
