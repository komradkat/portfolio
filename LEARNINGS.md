# Learnings

## Alpine.js Animations
- **Issue:** Progress bars in the "Technical Expertise" section were not animating (filling up) when scrolled into view.
- **Cause:** The `x-intersect` directive relies on the Alpine.js Intersect plugin, which was missing from the project dependencies.
- **Solution:** Added the `@alpinejs/intersect` plugin via CDN (`<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/intersect@3.x.x/dist/cdn.min.js"></script>`). This resolved the issue, allowing the `x-intersect` logic to trigger the animations correctly.
- **Takeaway:** Always verify plugin dependencies when using advanced Alpine.js directives like `x-intersect`.
