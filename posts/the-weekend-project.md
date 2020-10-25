---
layout: base
title: the-weekend-project
tags: ["post"]
date: 2020-09-20
description: 'The "weekend-project" project'
---

# The weekend project

I've always wanted to build something _meaningful_. I tried to come up with an original idea, the "next big thing".

But like many other developers, I would start a project, create a GitHub repo, write code for a day, and get bored!

I think I've finally realised that what I care about is not _really_ building the next big thing, it's just _learning_ something new.

And now I have tons of open source GitHub repos that don't really go anywhere and don't really do anything more than a very small prototype.

So I decided to make them _official_ "weekend projects", and here I am with this "weekend project" project. 😅

## What's a _weekend project_?

So first, let's define the rules. What is a weekend project?

- maybe it was meant to _learn_ something: a new piece of tech, a new language, etc
- definitely not _professional_, nobody paid you for it, and it's nothing critical, so there might not be tests, CI, CD, ...
- more important, something that started with _no expectations_: literally "I wanted to write this for fun"

I want to emphasize on the fact that it doesn't _really_ mean "I wrote this over a weekend", but that's when I usually write my side projects!

## How does it work?

For each public GitHub repository that you consider a "weekend project", add this line in the readme:

```md
[![weekend-project](https://the-weekend-project.vercel.app/api/svg)](https://tducasse.com/posts/the-weekend-project)
```

This will add the following badge to your README:

[![weekend-project](https://the-weekend-project.vercel.app/api/svg)](https://tducasse.com/posts/the-weekend-project)

Now, if you want to display the number of weekend projects you have, I've also written a route that returns a fancy SVG! 💄

[![weekend list](https://the-weekend-project.vercel.app/api/count?user=tducasse)](https://the-weekend-project.vercel.app/api/list?user=tducasse)

To add it to your README, you can use this:

```md
[![weekend list](https://the-weekend-project.vercel.app/api/count?user=YOUR_USERNAME)](https://the-weekend-project.vercel.app/api/list?user=YOUR_USERNAME)
```

You might have noticed that this code includes a link to _yet another route_ (`/list`): this is a very raw (but convenient) HTML page displaying all your weekend projects, accessible when you click on the image 😊
