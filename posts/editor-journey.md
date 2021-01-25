---
layout: base
title: editor-journey
tags: ["post"]
date: 2021-01-25
excerpt: Why do I keep switching code editors?
---

# A random list of code editors and IDEs I've tried

## Dreamweaver
I started my coding journey when I was a child, building random websites that would never get published because I was too young to own a credit card. At the time, I was using Dreamweaver, a super cool [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) editor. It was very simple, but I was _building_ something, and it was super fun!

## Texas Instruments calculator
Yeah, you read that right. At the time, I was still in high school, and when I read "programmable calculator" in the manual, I had to know more... Oh, how much fun did I have during my math classes! I can only imagine my match teacher wondering why I needed to use it _all the time_... 🤣

## EMACS
Then came University, and my C teacher didn't leave us any options: _"use EMACS and C tags"_. I became quite proficient at it, loving how integrated the editor was with the rest of the system, especially having a terminal literally one shortcut away.

This is probably **lifechanging editor #1**: code navigation using paragraphs, using shortcuts instead of the mouse, selecting with the keyboard, typing "I want to do this" instead of a shortcut.

## Eclipse
Again in Uni, I had to learn Java, and at the time the _de facto_ free IDE was Eclipse. I learned to like the power of the refactoring tools, search and replace, etc, but I felt a bit limited in terms of keybindings. I tried to set up everything to mirror my emacs muscle memory, but it was not the same. And lauching Eclipse was a very painful 45 seconds of starting at the splashscreen and wondering if something was happening or if it was dead 😅

## IntelliJ IDEA
Last year in Uni, Android Project, and we're told to use Android Studio (basically IntelliJ IDEA). Very similar to Eclipse, except that everything works out of the box, and I don't know, it feels better _integrated_, better organised maybe. Still a pretty slow startup, but then, who really restarts their IDE ten times a day?

## Back to Eclipse!
First job after Uni, I get stuck on a full Java stack, where I am not even allowed to use another editor (can't remember why, probably some sort of security concern!).

## Sublime Text
But one day, I wanted to do some very simple operations on multiple lines, and Eclipse couldn't do it easily, so I tried to think of other solutions. How do other people solve this problem? Turns out, Sublime Text has multiple cursors, and it's suuuuuper fast! So I slyly download Sublime, learn a few shortcuts, and I become twice as fast as I was with Eclipse.

I learn that you can sync Eclipse and the filesystem using a watcher, so that saving a file outside Eclipse triggers a recompilation inside Eclipse, and I just never use Eclipse again!

**Lifechanging editor #2**: multi cursors, search and replace using regexes, using a command palette when I forget how to reach something, and PLUGINS!

## Atom
For a few years, I used only Sublime. I learned how to do things everyday that seemed like dark magic to other people, and it was super cool to _feel_ fast. And then, I got into front end dev more and more, and people started using Atom. I didn't understand: it felt super slow, and I already could do everything Atom does in Sublime, why would I switch? Now, don't get me wrong, I enjoy changing my workflow. In fact, I actively _try_ to change my workflow. But I can't even remember the number of times I downloaded and installed Atom, attracted by the "it's open source" tag, but uninstalled it in 10 minutes just because it was so slow...

## VS Code
And then Microsoft decided they could actually make Atom better. And against all odds, people liked it, and the community decided to settle on this one and make a billion plugins. The old "if a problem exists, there's a JS library to solve it" started becoming true for VS Code extensions as well. Sublime Text started becoming a bit stale, and I decided to jump on the bandwagon and follow the masses to the new accepted web-ide-code-editor-hybrid-software.

Well, this is probably not because it became faster and more because machines are more powerful nowadays, but I've forgotten how slow it is. It's got a very fast startup, has multiple cursors, "code intelligence", extensions, I'm sure my language is supported there (regardless of how new and niche it is), there's "format on save" plugins so I can just write ugly code and save it, etc.

**Lifechanging editor #3**: building upon my two previous favourite editors, and blending everything I liked into one pretty satisfying experience, well done VS Code.

## Vim (well, Neovim)
How many times have I tried learning vim? First when I was using emacs, just wondering what it was and what the whole [war](https://en.wikipedia.org/wiki/Editor_war) was about. Then probably at least 60 other times, just because I either read an article saying "I still use Vim", or saw a video of someone editing code faster than I could think.

I started a new job, and decided I was going to spend as much time as required learning Vim and, more specifically, Neovim. So I read every "getting started with vim", did every tutorial you can find online, and after maybe two weeks, I finally felt comfortable editing code the Vim way.

**Lifechanging editor #4**: vim motions, mostly!

This is when things started going awry.

I installed one plugin. Then another one. Then 10 other ones. I customised my `init.vim` to make vim do what I want an editor to do. And eventually ended up replicating something _very_ similar to what I was doing in VS Code. But my workflow felt a bit weaker.

## Still VS Code
Here are the main reasons:
- search and replace is very good in VS Code. Or maybe I'm just used to it? In Vim, I use [FZF](https://github.com/junegunn/fzf) and [ripgrep](https://github.com/BurntSushi/ripgrep), and even [FAR](https://github.com/brooth/far.vim), but nothing gives me the amount of flexibility I get with the combination of VS Code's search and replace and its fuzzy finder.
- I work with a monorepo, and in VS Code, I just use [Monorepo Workspace](https://marketplace.visualstudio.com/items?itemName=folke.vscode-monorepo-workspace) to open a new VS Code window when I want to open a specific repo. In Vim, I have tried using tabs and saved sessions, where each tab is set up to a different folder, and tmux, using tmuxinator, but I still can't get used to the workflow. Also, it ended up taking _more_ memory than VS Code - probably because I misconfigured something, but it's not the point.

## So what am I using now?
Well, VS Code again. But with the Vim extension. The main reason is that I went back to VS Code, and I started seeing random `j`s and `i`s in my code, or even `:w` 😆.

Right now, I'm actually considering going back to pure VS Code, just because I'm still not entirely sure if I'm faster the Vim way, or if it's more a matter of spending more time with the old workflow again.