---
layout: base
title: js-db
tags: ["post"]
date: 2020-10-25
description: "A very minimal JavaScript in memory database"
---

# Or how to keep server-side state without an actual DB...

So you're working on this side-project (perhaps even a [weekend-project](./posts/the-weekend-project)?), you deployed your frontend to [Netlify](https://www.netlify.com/) or something similarly straightforward, and now you're thinking about adding a backend?

Unfortunately, while deploying a bunch of static files is super easy - and nowadays, very often free of charge - deploying a backend is a _little bit_ more involved. Most of the time I use something like [Heroku](https://www.heroku.com/), because it's very convenient, and follows the same "deploy-on-push" philosophy that's become standard lately.

Most of my side-projects don't really care about _actual_ data persistence; I don't need user accounts, sso, databases, etc, and I don't mind losing all my data - because there's no data to begin with! 😁

But what if you want to share state between clients? Maybe you're creating a multiplayer video game that requires server-side logic (that's my use-case)? To be honest, I'm not _entirely_ sure what you would want to do and why people need a database for in their side-projects, but I'm sure there are other legit use-cases! 😃

I've always found this hard to deal with, because you have to:

- find a free database provider
- make a choice (SQL, NOSQL, whatever), and I'm really bad at making choices! I will spend a full day down the rabbit-hole, trying to find _the best solution_ for my needs, and then I end up doing nothing.

So here I am, writing my own in-memory database: [js-db](https://github.com/tducasse/js-db)! 🎉

# What is it?

JavaScript objects, plain and simple. Nothing more! Yeah, I know, it's very [god-class](https://en.wikipedia.org/wiki/God_object), but it suits my needs: have a server side record of what's going on between two clients, while they are connected.

Nothing fancy, really:

```js
// register a collection
register("users");

// magically appears on the global `db` object,
// so you can insert a new object in `users`
db.users.insert({ name: "John" });

// get the record
const user = db.users.findOne({ name: "John" });
console.log(user);
// { name: "John" }
```

Let's just have a super quick look at what's available (at the time of writing!)

- CRUD operators: `find`, `findOne`, `insert`, `remove`, `update`
- query objects: `{ key: value}`
- update objects: `{ $set: { key: value }, $push: { key: value } }`

You might have noticed that I've shamelessly stolen some of [MongoDB](https://www.mongodb.com/)'s syntax; it's not a coincidence! While I absolutely see the limitations of NOSQL, and I usually _much_ prefer good ol' SQL, MongoDB's query syntax is _very nice_ when dealing with JSON-like objects.

# Features and limitations

## Dot-notation

I've implemented very basic support for nested properties, using the usual `dot-notation`:

```js
register("users");
db.users.insert({ name: "John" });

db.users.update({ name: "John" }, { $set: { "address.city": "Melbourne" } });
const users = db.users.find();
// [{ name: "John", address: { city: "Melbourne" }}]

const user = db.users.findOne({ "address.city": "Melbourne" });
// [{ name: "John", address: { city: "Melbourne" }}]
```

Have a look at the tests

## Available as an npm module, but also in the browser

If you (for some obscure reason 😁) want to use this pseudo database in the browser, you can! I actually publish an UMD module, so something like this would work:

```html
<html>
  <head>
    <script src="https://unpkg.com/@tducasse/js-db/dist/umd/js-db.js"></script>
    <script>
      // the script is exported as 'jsdb'
      jsdb.register("users");
      jsdb.db.users.insert({ name: "name" });
      const user = jsdb.db.users.findOne();
      console.log(user.name);
      // "name"
    </script>
  </head>
</html>
```

## Init helpers

Seed your own init data:

```js
const items = {
  users: [{ name: "John" }, { name: "Joe" }],
  cities: [{ name: "Paris" }],
};

seed(items);

const users = db.users.find();
// [{ name: "John" }, { name: "Joe" }]
const cities = db.cities.find();
// [{ name: "Paris" }]
```

Reset the whole db with `db.reset()`

## Performance

Nope, I don't care about this. It's for side projects, if I wanted actual performance, I would just use an actual database!

# Things I use it with...

## Create your own database shell

I would not say this is _100% supported_, but _I_ use it:

```js
// start a socket on 1337, somewhere in your code
net
  .createServer((socket) => {
    const r = repl.start({
      prompt: "js-db>",
      input: socket,
      output: socket,
      terminal: true,
      preview: false,
    });
    // share the `db` object with the socket
    r.context.db = db;
  })
  .listen(1337);

// in `cli.js`
import net from "net";

const sock = net.connect(1337);

process.stdin.pipe(sock);
sock.pipe(process.stdout);

process.stdin.on("data", (b) => {
  if (b.length === 1 && b[0] === 4) {
    process.stdin.emit("end");
  }
});
```

```json
// in package.json
{
  "scripts:
    // I use esm, but you get the idea
    "cli": "node -r esm cli.js"
}
```

It allows me to just fire a shell on the side, and access the database _live_. But this was a bit fiddly, so I ended up building an admin interface, using websockets.

## WebSockets

I won't include the example here because it's quite long (let me know if you're interested and I'll do a proper write-up though) but, using websockets, I've built an admin interface to keep an eye on the database in realtime. It's not great security-wise (it's terrible, really!), but again **side-projects**, so who cares? It beats having to properly enter debug-mode or writing 10 `console.log()` statement to see what's going on 😬.

Also noteworthy: this was built as a backend for a video game built in [Godot](https://godotengine.org/) - again, using websockets. If you want more info on this, let me know and I'll write someting up 😀.

But enough paraphrasing the [README](https://github.com/tducasse/js-db/blob/main/README.md), I think you get the idea!
