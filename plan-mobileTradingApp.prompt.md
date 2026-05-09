## Plan: Mobile Trading App Build Plan

Build a production-ready baseline Expo Router mobile trading app from the current reset scaffold by first establishing design-system foundations from DESIGN.md, then implementing end-to-end user journeys (auth, dashboard, markets, asset detail, trade ticket, orders, profile) with mock-first data and strict performance/accessibility checks. This approach reduces rework by locking tokens, navigation, and data contracts before screen implementation.

**Steps**
1. Phase 1 - Foundation and Architecture
2. Confirm route architecture using Expo Router from existing app shell: keep stack entry in app/_layout.tsx and introduce grouped route segments for auth flow, tab flow, and modal/trade overlays. This is blocking for all screen work.
3. Define design tokens from DESIGN.md as first-class constants (colors, typography, spacing, radius, shadows, layout helpers) plus dark-theme defaults and safe-area spacing helpers. This is blocking for component implementation.
4. Install and configure required UI/runtime packages for the design system and charts (expo-blur, charting library, svg, any icon/data utility selected). This depends on step 2 conventions and blocks chart and glassmorphism screens.
5. Establish typed domain contracts for mock data (portfolio summary, watchlist rows, candles/time-series, order entities, user profile, auth state). This can run in parallel with step 4, but both must finish before feature screens.
6. Phase 2 - Reusable UI and Feature Modules
7. Build reusable primitives aligned to DESIGN.md: buttons, text inputs, card/surface wrappers, chip/timeframe selector, price/change badges, and chart wrapper. Depends on step 3.
8. Build feature-level modules using primitives: portfolio snapshot block, watchlist list item, asset header stats, trade ticket form sections, order row, profile setting item. Depends on step 7 and step 5.
9. Add app-wide state strategy for mock-first mode (local module + context/store) to support cross-screen consistency for balances, watchlist, selected asset, and order placement simulation. Depends on step 5 and step 8.
10. Phase 3 - Screen Implementation (Full Scope)
11. Implement onboarding/auth screens and guard behavior for initial app entry (sign-in/sign-up placeholders with validation/UI states). Depends on step 2 and step 7.
12. Implement bottom-tab experience for Home/Portfolio, Markets/Watchlist, Orders/History, and Profile with tab styling mapped to design tokens. Depends on step 2 and step 7; can proceed in parallel by tab after shared nav setup.
13. Implement asset detail screen with chart + timeframe controls and route params from watchlist selections. Depends on step 8 and step 12.
14. Implement trade ticket (buy/sell) as modal or pushed screen with amount/quantity inputs, review state, and mocked confirmation. Depends on step 13 and step 9.
15. Wire navigation flows end-to-end: dashboard/watchlist -> detail -> trade -> order history updates, and auth -> main app transition. Depends on steps 11-14.
16. Phase 4 - Quality, Accessibility, and Hardening
17. Apply accessibility pass: roles/labels, minimum touch targets, hitSlop where needed, contrast checks on all financial state colors, and readable dynamic text. Depends on all implemented screens.
18. Apply performance pass: memoization for expensive rows, optimized FlatList settings for markets/orders, and avoidance of unnecessary re-renders in chart/price widgets. Depends on all implemented list/chart surfaces.
19. Add testing baseline: smoke tests for core primitives and navigation-critical flows, plus deterministic mock-data fixtures for stable UI tests. Depends on feature completion.
20. Phase 5 - API-ready Handoff
21. Define API integration seam points (service interfaces and adapters) so live market/trading endpoints can replace mocks without screen rewrites. Depends on step 9 and step 15.
22. Document migration checklist from mock mode to live API mode (auth token flow, polling/streaming strategy, error/retry states, offline handling boundaries).

**Relevant files**
- /home/kobi/Projects/text-with-ai-tools2/DESIGN.md - source of visual system and component behavior requirements to codify.
- /home/kobi/Projects/text-with-ai-tools2/app/_layout.tsx - existing root navigator entry to evolve into grouped stack architecture.
- /home/kobi/Projects/text-with-ai-tools2/app/index.tsx - current placeholder entry that will be replaced by app routing landing logic.
- /home/kobi/Projects/text-with-ai-tools2/package.json - dependency and script updates for chart/blur/theme support.
- /home/kobi/Projects/text-with-ai-tools2/app.json - app-level settings that may need dark-theme/splash alignment with fintech branding.
- /home/kobi/Projects/text-with-ai-tools2/tsconfig.json - strict typing baseline and path aliases to keep as foundation for typed domain modules.

**Verification**
1. Dependency and static checks: install succeeds, expo start launches, and lint/type checks pass with strict mode.
2. Navigation checks: auth entry, tab navigation, detail routing with params, and trade ticket transitions all work on Android emulator and Expo Go.
3. UI fidelity checks against DESIGN.md: color token usage, typography hierarchy, spacing rhythm, border radius levels, and glass/overlay treatment are consistent.
4. Financial UX checks: positive/negative/neutral values render with correct semantic colors; tabular numbers align in lists and price displays.
5. Accessibility checks: screen-reader labels, button roles, touch target sizes, and contrast targets satisfy defined requirements.
6. Performance checks: smooth scrolling in watchlist/orders lists, acceptable chart rendering responsiveness, and no major frame drops on mid-range Android devices.

**Decisions**
- Included scope: Onboarding/Auth, Home Dashboard, Markets/Watchlist, Asset Detail with Chart, Trade Ticket, Orders/History, Profile/Settings.
- Data strategy: mock data first with explicit API seam for later swap.
- Delivery depth: production-ready baseline (not just MVP wireframe).
- Architecture choice: continue with Expo Router and file-based navigation instead of introducing a separate React Navigation root setup.
- Excluded from this plan iteration: real brokerage execution, payment/kyc workflows, push notifications, and backend deployment.

**Further Considerations**
1. Charting library final choice (react-native-chart-kit vs victory-native) should be decided early to avoid refactors in detail screens.
2. Decide whether trade ticket is a modal overlay or dedicated route now; this affects navigation shape and gesture UX.
3. Confirm if profile/settings includes theme lock and biometric placeholders in baseline, or deferred to post-baseline iteration.