# UtahJS 2023

## In Many Cases, Promises May Make For A Better Pattern Than async/await
(Corey Brown)

- Promises are more explicit than async/await
- Easier error handling with .catch
- Promise chaining is a step to FP

## Skills for debugging complex problems
(Nick Humrich)

- Take care of yourself
- Find someone to handle communication (Incident manager)
- Eliminate bias and prove yourself wrong
- Have fast feedback loops
- Find what the problem is not
- Have an MCVE when asking for help
    - Minimal
    - Compete
    - Verifiable
    - Example
- Use traces instead of logs
- Postmortems and retros
    - Don’t focus on what happened
    - Focus on how it could’ve gone better
- “The improvement of daily work is more important than daily work itself” - The Unicorn Project

## Critical Security Mistakes in Frontend Applications
(Dan Neciu)

- Second order thinking - with any change, think about any side effects
- Always validate/clean user input on frontend and backend
- Use hash params instead of query params for sensitive data

## Make Work Not Suck: Improving the Developer Experience
(Todd Fisher)

- Which metrics can help us improve?
    - The Joel Test
    - DORA Metrics
    - Ask what things make your less enjoyable
    - Group those into
        - Things I can do
        - Things I can influence
        - Things I can’t do anything about
- Diffusing situations:
    - Avoid personal attacks
    - Listen
    - Lean on relationships
    - Assume you don’t know everything
- Get to know your coworkers
    - Conversations
    - Food
    - “Get to know you” presentations
    - Offsites
- Estimations
    - Managing expectations
        - Articulate objectives
        - Break it down and prioritize
        - Fixed scope vs fixed delivery
        - Frequent updates

## Hydration, Islands, Streaming, and Resumability!
(Matheus Albuquerque)

- Islands Architecture
    - Reduces JS code sent to client
    - Faster page loads
    - Highly dynamic pages requires many islands
- Progressively enhances html
- Static elements + dynamic elements
- Hydration code is only sent for dynamic elements
- React SSR
- React Server Components

## Get Your Web App Development in Shape with SvelteKit
(Brian Rinaldi)

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)

## Understanding Dependencies in JavaScript to Create a More Performant App
(Tyler Hawkins)

- Use a bundle analyzer
- Lazy load (by page at least)
- Use dynamic imports
- Choose small 3rd party libs

## Instant Enterprise
(Matt Wood)

- [Instant Enterprise](https://instant-enterprise.vercel.app/roadmap)
