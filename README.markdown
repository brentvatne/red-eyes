## Wake up Heroku apps for me

Free Heroku apps running on one dyno fall with 30 minutes of inactivity,
that is annoying when you want to have a demo available for a few days
but don't want to have to pay to avoid the boot time on just a few
visits (eg: client work, want to show prototype to client, they might
just visit once and a slow initial load time could look bad).

So this app will just do a GET request on any urls that you give it
every 10 minutes (or however long you specify in the scheduler).

Deploy this to Heroku as you usually do, then add the Heroku Scheduler
addon, and have `rake wake_up` run every 10 minutes.

![process scheduler config](https://raw.githubusercontent.com/brentvatne/red-eyes/master/public/scheduler.png)

Don't be a jerk and run this indefinitely on 100 apps.
