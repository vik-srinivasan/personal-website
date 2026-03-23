I need to talk about what's been happening with AI this month, because my workflow has changed so dramatically over the past few weeks that it almost feels unfair. I'm shipping things faster than I ever have. I'm building projects I would've scoped as "maybe someday" and finishing them in a weekend. And honestly, I'm still adjusting to the pace.

This isn't a product review or a state-of-the-industry breakdown. I don't care about benchmarks or leaderboards or whatever Twitter is arguing about today. This is me telling you what I've actually been using, what's actually working, and what's genuinely freaking me out a little.

## Claude Code Changed How I Build Software

Let me start with the thing that's had the biggest impact on my day-to-day: **Claude Code**. I've been using it since the early days, back when it was rough around the edges and you had to fight it a little to get what you wanted. The 2.0 era is a completely different experience. Features are shipping almost daily — better context handling, smarter tool use, tighter file management, the kind of quality-of-life improvements that individually seem small but compound on each other in a way that fundamentally changes how fast you can move. Every time I open my terminal there's something new.

Here's what my actual workflow looks like now, and I want to be specific because I think the vague "AI makes me faster" stuff doesn't help anyone.

I'll start a session with a goal in mind — say, "I need to add a new page to my portfolio site with routing, components, styles, and markdown rendering." In the old world, that's an afternoon minimum. I'm scaffolding files, writing boilerplate CSS, setting up routes, wiring up data, tweaking responsive breakpoints, testing on mobile. It's not hard work, but it's a lot of surface area that eats time.

Now I describe the architecture I want, point Claude Code at the existing patterns in my codebase, and let it generate the scaffolding while I focus on the decisions that actually matter — what should the page feel like? What's the content strategy? How does this fit into the overall navigation flow? The agent handles the "how" while I handle the "what" and "why." I built this entire blog tab — the one you're reading right now — in a single session. The routing, the components, the CSS modules, the markdown rendering pipeline, all of it. And it wasn't a hack job. It followed the exact same patterns as my existing sports blog, used the same CSS variables, matched the same responsive breakpoints. That's the part that surprised me: the agent didn't just write code, it understood the conventions of my codebase and respected them.

I want to be clear — this isn't autopilot. I'm reviewing every file, catching things that don't quite fit, making judgment calls about naming and structure. There's a version of this where you just accept everything the agent outputs and you end up with a codebase that feels stitched together by five different people. That's not how I use it. I treat the agent like a very fast junior developer who needs architectural guidance but can execute reliably once you give it clear direction. That mental model has worked really well for me.

## Cowork Is the Real Unlock

But the real game-changer — the thing that's shifted my workflow more than any single model improvement — has been **Cowork**. The ability to spin up background agents that work on tasks while I do other things.

Let me give you a concrete example. Last week I had three things on my plate: a data pipeline refactor that had been sitting on my to-do list for a month, a new React component I needed to design, and a batch of tests I'd been putting off writing. In the old world, that's a prioritization problem. You pick the most urgent one, grind through it, and the other two slip another week.

With Cowork, I kicked off the data pipeline refactor in one background session with detailed instructions about the target architecture and the edge cases I'd already identified. Then I switched to my main session and started designing the component. Halfway through that, I spun up another background agent to start scaffolding the test suite. By the time I finished the component design, the pipeline refactor was done and waiting for my review, and the test scaffolding was 80% there.

I finished all three in an afternoon. A month of to-do list items, done between lunch and dinner. And the quality wasn't compromised — I still reviewed every diff, caught a couple of edge cases the agent missed on the pipeline work, and restructured some of the test organization. But the raw throughput increase is staggering. It's not 2x faster. It's closer to 5x on tasks that involve a lot of boilerplate or pattern-following.

The thing that took me a while to internalize is that this changes *what you say yes to*. When execution is cheap, you stop saying "that's a good idea but I don't have time for it." You just do it. Side projects that I would've put in the "maybe someday" bucket are now weekend builds. Features I would've deprioritized because the implementation cost was too high suddenly become no-brainers. My backlog has actually gotten shorter for the first time in years, and that's a weird feeling.

## Opus 4.6 Feels Different

Anthropic dropped **Opus 4.6** and **Sonnet 4.6** this month, and I want to be specific about why these matter to me personally. It's not about benchmarks. I genuinely do not care about MMLU scores or whatever leaderboard is trending this week. What I care about is my lived experience of using these models every day for real work.

Here's what changed: when I give Opus a complex, multi-step instruction — "refactor this module, but keep the public API the same, add error handling for these three edge cases, and write tests" — it actually does all of it. Correctly. On the first try, more often than not.

That didn't used to happen. Even six months ago, you'd give a model a compound instruction and it would nail the first two parts and then lose the thread. You'd get hallucinated imports. Functions that referenced variables from the wrong scope. Test files that imported from paths that didn't exist. The iteration tax was brutal — you'd spend almost as much time fixing the AI's output as you would've spent writing it yourself, and then you'd wonder why you bothered.

Now the iteration tax is way lower. Not zero. I still catch things. But the ratio of "useful output on first try" to "needs significant rework" has flipped completely. And when you multiply that across every interaction in a day, across every project in a week, the productivity gain is enormous. It's the difference between the AI being a tool you use sometimes and the AI being the default way you work.

Sonnet 4.6 is honestly the one I reach for most, though. It's fast enough for the rapid-fire back-and-forth of active development — the "try this, no wait, actually do it this way, okay now add this" rhythm that real coding sessions have. And it's smart enough that I rarely feel like I'm sacrificing quality for speed. For writing components, debugging, brainstorming architecture, sketching out data models — Sonnet handles it. I save Opus for the heavy stuff: complex refactors, tricky algorithmic problems, anything where I need the model to hold a lot of context and reason carefully across it.

The gap between "frontier" and "practical" has never been smaller, and that matters more than any benchmark. The best model in the world is useless if it's too slow or too expensive for your actual workflow. Sonnet 4.6 is fast, cheap, and smart enough for 90% of what I do. That's a bigger deal than people realize.

## I Built My Own Claw Machine (Because OpenClaw Scared Me)

Okay, here's the part of this post that's going to sound unhinged to anyone outside the AI space: I built an AI-powered claw machine this month. Yes, a physical claw machine, controlled by a language model. Let me explain.

**OpenClaw** launched as an open-source project for exactly this — robotic claw systems controlled by AI. The concept is genuinely cool: you give the model a camera feed and control over the claw actuators, and it figures out how to pick up objects. It's the kind of project that immediately grabs your attention because it bridges the gap between AI in the cloud and AI in the physical world.

I was genuinely excited when I saw it. Then I looked at the code and my excitement turned into concern pretty fast.

The safety story was basically nonexistent. No force limits on the actuators — the model could command as much grip force as the hardware would allow. No bounded workspace constraints — nothing preventing the claw from moving outside its intended operating area. No validation layer between the model's output and the physical hardware. The commands went straight from the model's text output to motor control with essentially nothing in between.

Here's why that matters. When you're working with pure software, a hallucinated command is an error message. Maybe a crash. You fix it and move on. When you're dealing with physical hardware, a hallucinated command can strip a gear, break an actuator, damage whatever object is in the claw, or in a worst-case scenario, hurt someone nearby. The failure modes are fundamentally different, and the OpenClaw codebase didn't seem to acknowledge that difference at all.

So I did what felt like the obvious thing: I built my own version with actual guardrails. Here's what I added:

- **Force feedback limits** — the claw physically cannot apply more than a configurable threshold of force, regardless of what the model commands. The safety layer sits between the model output and the motor controller, and it's not optional. You can't prompt your way past it.
- **Bounded workspace** — both software and physical limits on where the claw can operate. If the model tries to move outside the defined area, the command gets rejected before it reaches the hardware.
- **Action validation** — every single command gets checked against a set of safety constraints before execution. Is the force within limits? Is the position within bounds? Is the velocity reasonable? If any check fails, the command doesn't execute.
- **Dead man's switch** — if anything unexpected happens — a sensor reading that's out of range, a command that fails validation, a communication timeout — the system stops everything and waits for human input. It doesn't try to recover on its own. It doesn't improvise.

Building this took me about a week, and honestly, most of that time was the safety engineering, not the AI integration. The actual "get Claude to control a claw" part was surprisingly straightforward. The hard part was thinking through every failure mode and making sure the system degrades gracefully rather than dangerously.

It's not that I think the OpenClaw team had bad intentions. I think they were excited about the capability and treated safety as something they'd get to later. That's a pattern I see constantly in AI right now, and it bothers me more every month. The capabilities are sprinting ahead and the safety work is jogging behind. Everyone wants to ship the demo. Nobody wants to write the validation layer. I'd rather be the person who builds the guardrails in from day one, even if it means the demo takes an extra week to ship. The boring safety engineering is what separates a cool project from a responsible one.

## Perplexity Computer Changed How I Research

I've been using **Perplexity Computer** since it launched, and it's one of those products that makes you realize how much time you were wasting on things you didn't think of as wasteful.

Here's a specific example. I was evaluating deployment platforms for a side project — comparing pricing tiers, feature sets, cold start times, regional availability, and free tier limits across like eight different services. The old workflow: open a tab for each provider, navigate to their pricing page, try to find the specific metric I care about (which is always buried three clicks deep), copy the number into a spreadsheet, repeat for the next provider. Half an hour minimum, and most of that time is just navigating websites and waiting for pages to load.

With Perplexity Computer, I described what I needed: "Compare Vercel, Netlify, Railway, Render, and Fly.io on pricing, cold start times, and free tier limits for a React app with a Node backend." It went and visited each site, pulled the relevant details, and gave me a structured comparison. Two minutes. And it caught a pricing change on one of the platforms that I would've missed because I was working off stale memory from the last time I checked.

I've also been using it for things I wouldn't have bothered researching before. Quick comparisons of libraries, checking if a specific API supports a feature I need, finding documentation for obscure configuration options. The friction of research has dropped low enough that I actually do it instead of guessing or going with whatever I used last time. That's subtle but it leads to better decisions.

It's not perfect. It gets tripped up by dynamic content sometimes — SPAs that don't render pricing tables until you interact with them, sites with aggressive bot detection, pages that require authentication. And you need to sanity-check the results, because occasionally it'll misread a table or confuse pricing tiers. But the trajectory is clear. We're moving from "AI that tells you how to do something" to "AI that just does it for you," and that shift is happening faster than I expected.

## How My Day Actually Looks Now

I want to paint a picture of what a normal workday looks like for me in February 2026, because I think it's different enough from even six months ago that it's worth documenting.

I start by opening Claude Code and reviewing whatever the background agents finished overnight or from the previous session. Usually there's a PR or two to review — code the agent wrote based on instructions I left before signing off. I'll read through the diffs, leave comments, request changes if something's off, or approve and merge if it's good. That takes maybe 15 minutes and gets work shipped before I've finished my coffee.

Then I'll plan my day. But here's the thing — the planning itself has changed. I used to think in terms of "what can I realistically finish today?" Now I think in terms of "what decisions do I need to make today?" because the execution part is largely handled. If I can make the design decisions and write clear specs, the implementation happens in parallel while I think about the next thing.

Mid-morning I'm usually in a flow state on the hardest problem of the day — the thing that actually requires my full attention. Architecture decisions, debugging something subtle, thinking through user experience. The stuff AI is bad at, or at least the stuff where I don't trust it to make the call without me. While I'm doing that, I'll have one or two Cowork sessions running on the more straightforward tasks.

Afternoons are for review and iteration. Checking on what the agents produced, refining things, writing tests for edge cases I thought of while doing the morning's deep work. And honestly? I'm usually done by 4 or 5 with more shipped than I used to get done in a full, intense day.

The biggest shift isn't speed. It's energy. I used to end the day mentally drained from context-switching between creative work and mechanical work. Now the mechanical work is largely handled, and I spend most of my cognitive budget on the creative stuff. I'm less tired and more productive. That's not a tradeoff, that's a free lunch, and I'm still not used to it.

## The Honest Version of How I Feel About All This

Here's where I get real for a second, because I think the AI discourse is split between people who are unreasonably optimistic and people who are unreasonably scared, and neither camp is being honest about the complicated middle.

I'm more productive than I've ever been. I'm building better things, faster, with fewer frustrating bottlenecks. By every measurable standard, this is the best time to be a developer who's willing to lean into these tools. I'm not worried about my job. If anything, I feel more valuable than I did a year ago, because I've invested in learning how to use these tools effectively and most people haven't.

But there's a part of me that finds the speed unsettling. Not in a "robots are taking my job" way. It's more existential than that. The gap between "I had this idea" and "it exists in the world" has shrunk to almost nothing. Ideas used to be cheap and execution was expensive. That asymmetry created a natural filter — only the ideas you cared enough about to invest real time and effort in would actually get built. Now execution is getting cheap too. The filter is gone, or at least it's way thinner.

That means the only thing that still costs something is taste. Knowing what's worth building. Knowing when a feature is done versus when it needs one more iteration. Knowing when the AI's output is good enough and when it's subtly wrong in a way that'll bite you later. Knowing what your users actually need versus what's technically impressive. That kind of judgment can't be automated, and it's becoming the single most valuable skill a developer can have.

I keep thinking about this analogy: the invention of the printing press didn't make everyone a great writer. It just made it cheaper to publish. The people who thrived were the ones who had something worth saying. AI tools are the same. They make it cheaper to build. The people who'll thrive are the ones who know what's worth building.

The people who are going to struggle are the ones who defined their value by their ability to execute — to write code fast, to memorize APIs, to grind through boilerplate. That stuff is rapidly getting commoditized. The people who are going to thrive are the ones who defined their value by their judgment, their taste, and their ability to understand problems deeply. The tools amplify whatever you bring to the table. If you bring craft, you get superpowers. If you bring nothing, you get very fast nothing.

## What's Next

I don't know what March is going to look like. If it's anything like February, I'll need to rewrite this post in three weeks because everything will have changed again. The pace is genuinely hard to keep up with, and I say that as someone who's actively trying.

What I do know is that I'm not going back. The old workflow — manually writing every line, context-switching between creative decisions and boilerplate, spending half my day on work that doesn't require my brain — that's over for me. I've seen what's possible when you let the tools handle what they're good at and focus your energy on what only you can do. The ceiling on what one person can build has gone up dramatically, and I intend to find out exactly how high it goes.

I'm here for it.
