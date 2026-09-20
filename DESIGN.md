# Chill Space Design Direction

This file keeps our visual decisions consistent while we build the website step by step.

## Product feeling

Chill Space is a private planning space for close friends.

Our visual idea is an **after-hours guest list**: calm, refined, social, and slightly cinematic.

- Design personality: quiet luxury, not corporate software.
- Design variation: 7/10 — recognizable without becoming confusing.
- Motion: 5/10 — noticeable feedback, never constant movement.
- Information density: 4/10 — relaxed, but not wastefully empty.

## Information priority

1. Upcoming plans — what is actually happening.
2. Suggest a hangout — the quickest useful action.
3. Hangout ideas — choices the group is discussing.
4. Details — shown only when somebody asks for them.

## Visual system

- Use a small set of named color variables.
- Keep backgrounds cool and dark; use rare color only for meaningful emphasis.
- Use typography and spacing before borders, shadows, or decoration.
- Keep text lines around 65–75 characters when possible.
- Use this spacing scale: `4, 8, 12, 16, 24, 32, 48, 72px`.
- Space between groups should be at least twice their internal spacing.
- Align related headings, fields, rows, and buttons to shared edges.
- Use border radius selectively; not every element needs a rounded container.
- Prefer surface contrast and thin borders over large shadows.
- If depth is needed, use one subtle neutral shadow style.
- Add one restrained mineral or paper-like texture later; avoid decorative blobs.

## Layout identity

- Upcoming plans should feel like the main guest list.
- The suggestion form should be compact and immediately usable.
- Ideas should read as connected rows, not repeated SaaS cards.
- Details stay hidden until requested through clear progressive disclosure.
- Mobile layout will be designed from content needs, not arbitrary device names.

## Reference synthesis

We borrow principles from existing products, not their exact appearance.

- [Partiful](https://partiful.com/) makes creating an event fast and makes guest responses socially visible.
- [Resident Advisor](https://ra.co/events) treats events as an editorial, information-rich list.
- [Soho House](https://www.sohohouse.com/) uses restraint, hospitality language, and selective visual emphasis.
- Chill Space combines these into a **friends' night ledger**: numbered ideas, stable rows, and confirmed plans promoted into a guest-list area.
- Our signature interaction will be an idea visibly moving from discussion into Upcoming plans.

## Motion rules

Motion must explain feedback, state, hierarchy, or continuity.

- Button feedback: about `100–150ms`.
- Routine state changes: about `150–300ms`.
- Moving an idea into Upcoming plans: about `300–500ms`.
- Prefer `transform` and `opacity` for smooth animation.
- Provide a `prefers-reduced-motion` alternative.
- Do not animate every element or add fade effects while scrolling.

## Interaction rules

- Use plain, action-specific labels.
- Every input must have a connected label.
- Keyboard focus must always be visible.
- Never communicate status using color alone.
- Empty states should explain the next useful action.
- Important controls must remain visible on small screens.

## Avoid

- Purple gradient backgrounds.
- A centered hero floating over glowing blobs.
- Three identical feature cards.
- Glass effects everywhere.
- Giant rounded containers and excessive pill buttons.
- Decorative labels, arrows, or badges without meaning.
- Multiple competing shadows.
- Placeholder copy presented as real product content.
- Animation without a clear purpose.

## Quality checks

- Test widths near `320px`, `768px`, `1024px`, and `1440px`.
- Test keyboard-only use and visible focus.
- Test empty, single-item, multiple-item, and error states.
- Maintain at least `4.5:1` contrast for normal-sized text.
- Confirm long titles and descriptions do not break the layout.
- Confirm reduced-motion users receive a stable experience.

## Research references

- [Frontend Design](https://www.ui-skills.com/skills/anthropics/frontend-design)
- [Taste Skill](https://www.ui-skills.com/skills/leonxlnx/taste-skill)
- [Better Layout](https://www.ui-skills.com/skills/jakubkrehel/better-layout)
- [Animate](https://www.ui-skills.com/skills/pbakaus/animate)
- [Frontend UI Engineering](https://www.ui-skills.com/skills/addyosmani/frontend-ui-engineering)
- [Beautiful Shadows](https://www.ui-skills.com/skills/mengTo/beautiful-shadows)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
