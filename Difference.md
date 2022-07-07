**Hey Iyan,**

I saw your website in the wild and explored the code base.

## Some of the things I noticed

-  You're using React v17 and other outdated dependencies.
-  There is code repeatations.
-  Your Lighthouse scores on mobile is in ~80s.
-  You're not completely utilizing Next.js out-of-the-box features.
-  Components are not reusable.
-  Homepage link doesn't highlight on initail load.
-  Sitemap.xml isn't optimal. redirect to `www`, unwanted and incomplete links.
-  Unwanted dependencies (`@mdx-js/*`)

## What I have done

-  Started with a new `create-next-app`.
-  Utilized cool Next.js features like SWC compiler, Next.js Script component.
-  Updated Deps to latest stable, Next.js to 12.2.0, React to 18.2.0.
-  Fixed Hydration issues (client server mismatch)
-  Reduced code repetition, Extraced components.
-  Use shared layout for header, footer and animations.
-  Disabled ISR as nothing changes untill next build.
-  Handle 404 by returning not found = true.
-  Enable SWC and other experimental features.
-  Fixed Scroll Restoration (exprimental).
-  Added minimum cache of 90 days for `next/image`.
-  Used `next-sitemap` fixing sitemap errors.
-  Fixed robots.txt sitemap links, eliminating redirect to www.
-  Utilized Next.js automatic font optimization (reducing page size by ~166 kb).
-  Used single source of truth of navigation links, reducing repeated code and complexity.
-  Exactly same Layout and Animations (ditto look and feel).
-  Used opinionated file structure.
-  Moved some dependencies to devDependencies (sass, tailwindcss).
-  Used TailwindCSS official prettier plugin for classes formatting.
-  Improved prettier config (removed deprecated features).
-  Configured Eslint with recommended nextjs rules.
-  Used Semantic HTML tags.
-  Used `next/script` for Umami Analytics.

## Lighthouse Scores

You can also test the live url [here](https://iyansr.vercel.app/)

Thanks.

## Result

before:

<https://speedvitals.com/report/www.iyansr.id/j7arwo/> // mobile - 71
<https://speedvitals.com/report/www.iyansr.id/Ae1ihB/> // desktop - 94
<https://pagespeed.web.dev/report?url=https%3A%2F%2Fwww.iyansr.id%2F&form_factor=mobile> // pagespeed insights - 70 / 95

after:

<https://speedvitals.com/report/iyansr.vercel.app/yziYbp/> // mobile - 100
<https://speedvitals.com/report/iyansr.vercel.app/zkN3T5/> // desktop - 100
<https://pagespeed.web.dev/report?url=https%3A%2F%2Fiyansr.vercel.app%2F&form_factor=mobile> // pagespeed insights - 92 / 100
