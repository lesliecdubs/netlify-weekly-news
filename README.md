# Netlify Weekly News

This repo contains a rough mock-up of a weekly dashboard for [Netlify](https://www.netlify.com/) users. The dashboard provides a quick run-down of the past week's site traffic, number of deploys by site, and noteworthy events.

Check out the [live demo >](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)


## 👩🏻‍💻 Implementation Notes

### 🤔 Decision Making:

- **Charts galore with a mini news feed.**
Visually representing the statistics make them easier and faster for users to consume. I chose to set up the charts as follows:

	- *Line graph for site traffic.* The colored bands of the stacked line graph make it easy to see the site with the most traffic at a glance, while also indicating the relationship of traffic levels between each site.

	- *Pie chart for deploy activity.* The date of each deploy was irrelevant here since we were most interested in comparison between the three sites. The pie chart allows us to see how much of the user's total work (deploys) went toward each site.

	- *Text-based news feed.* Unlike the other stats, the easiest way to show noteworthy events by date and site was with text in a familiar "news feed" format.

- **The real thing would have live data, of course.**
In the real world, the dashboard would be wired up to display data from actual sources (as opposed to the static JSON I mocked up). However, in an effort to make my JSON more similar to a real API, I organized the data in one array of objects that I manipulated to get the dataset needed for each individual display.



### 💾 Technology:

- **Built on GatsbyJS, the static site generator for React.** While Jekyll or Middleman could have handled the job, I was able to get started in Gatsby more quickly by using my own Gatsby boilerplate, which includes pre-installed plugins, helper files, and stylesheets for painless setup.

- **AmCharts charting library.** Once I decided the best way to display most of the information was through charting, the biggest decision I had to make was what library to use. I ultimately chose [AmCharts](https://www.amcharts.com/javascript-charts/) because it:
	-  uses SVG instead of HTML5 canvas, which makes for easier implementation of responsiveness and accessibility
	-  is compatible with all major modern browsers and some older ones
	-  has a [responsive plugin](https://www.amcharts.com/kbase/making-charts-responsive/) for overriding settings at different breakpoints
	-  is one of the few charting libraries with [built-in Section 508 compliance](https://www.amcharts.com/accessibility/accessible-charts/); also offers additional features for augmenting and improving accessibility
	-  straightforward and easy to use with solid documentation, making the charts easier for future developers to work with

	The only downside to AmCharts is that the current stable release for use in React is only partially available on npm, so it required CDN script includes. This library still won out due to its baked-in accessibility and responsiveness, and [AmCharts4](https://www.amcharts.com/v4/), currently in beta, will be fully available on npm.



### ✉️ Email Newsletter
It would be useful to send a weekly email newsletter containing updates from the Weekly News dashboard. To do this, I would:

- **Store static images of each user's charts on a server.** First, set up a weekly scheduled server task that would save a static PNG of each user's chart (using the [AmCharts exports add-on](https://www.amcharts.com/kbase/export-charts-advanced/), which allows you to turn each SVG chart into an email-ready image format). The images would be stored at a URL that included differentiation by Netlify username, preferably on a CDN.

- **Send email with dynamic chart images.** In the newsletter template, I would use a mail merge to feed in the dynamic chart images by auto-populating the appropriate Netlify user's username (i.e., http://base.url/${USERNAME}-weekly-news-traffic.png). The image at this URL would auto-update every week thanks to the server task.


## ✏️ To Dos

Still on the docket:

-   **Add newsletter sign-up.** Add Netlify form to handle email newsletter signups. Use Zapier or similar service to send form responses to database.

-   **Implement testing.** Install Jest and set up snapshot and unit testing.

-   **Improve accessibility.** While I made tech decisions and wrote markup with accessibility in mind, a full audit is recommended. This would include (but not be limited to):
	- addition of skip link in main nav
	- addition of aria attributes (as needed)
	- complete walk-through with popular screen readers on desktop (Mac and Windows) and mobile devices (iOS and Android) to address weak or confusing areas
	- ensure best practices, including adding image alt text, checking color contrast, and running the aXe Chrome extension to identify outstanding issues

- **Run full QA.** While I did a cursory browser check in the latest versions of Chrome, Firefox, and Safari, the dashboard should be tested for all modern browsers and devices, including Edge, IE11, and the latest Android stock browsers.

- **Upgrade AmCharts**. Once [AmCharts4](https://www.amcharts.com/v4/) is released as stable, investigate upgrading and remove CDN scripts in favor of an npm package. Switching will simplify dependency management and cut down external script loading time.

- **Clean up JS lists that use `i` for a key.** React doesn't recommend [using indexes for keys](https://reactjs.org/docs/lists-and-keys.html#keys) if the order of items may change. Should check where this may have been overlooked and implement more trustworthy keys.

- **Consider setting up charts as a single React component.** Could pass the config settings to a single chart component as opposed to defining these in individual components. If more than the two existing chart types (line and pie) are expected in the future, combining into a single component would cut down on repetition.
