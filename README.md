# Tshepang Mathe — Portfolio

Personal portfolio site for Tshepang Mathe, a second-year Computer Science
(Extended Diploma) student at Tshwane University of Technology (TUT).

Built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no
build step. Open `index.html` in a browser and it just works.

## Structure

```
portfolio/
│
├── index.html              Main page — all sections (Home, About, Skills,
│                            Projects, Education, Journey, GitHub, Contact)
├── css/
│   └── style.css            All styling, incl. light/dark auto theme
├── js/
│   └── script.js             Mobile nav toggle, scroll-reveal, footer year
├── assets/
│   └── images/
│       └── ccna-certificate.png   CCNA: Introduction to Networks certificate
└── README.md
```

## Running it

No install, no server required:

1. Download/clone this folder.
2. Open `index.html` directly in any modern browser.

If you'd rather serve it locally (e.g. to test relative paths exactly as a
host would): `npx serve .` or Python's `python3 -m http.server`.

## Sections

- **Home** — intro, current stack, CTA buttons
- **About** — who I am, what I'm learning, what I'm working toward
- **Skills** — grouped by Programming / Web Development / Computer Science / Tools
- **Projects** — the SA Mathematics Tutor Platform (in progress), with a live demo link
- **Education** — TUT Extended Diploma coursework + CCNA certificate (with image)
- **Journey** — study year, project count, modules completed, currently learning
- **GitHub** — link to github.com/TSHEPANGMATHE
- **Contact** — email, GitHub, LinkedIn

## Notes

- Theme follows the visitor's OS light/dark preference automatically
  (`prefers-color-scheme`); no toggle needed.
- Respects `prefers-reduced-motion` — scroll-reveal animation is disabled
  for visitors who ask for it.
- No contact form and no CV download button — neither exists yet, so
  neither is faked. Contact is a direct `mailto:` link.
- All project, education, and certification info reflects what's actually
  completed — nothing here is placeholder or invented content.

## Editing content

Everything is static markup in `index.html` — no CMS, no data file. To add
a new project, copy an existing `.project-card` block; to update a skill,
edit the relevant `<li>` inside `.skill-grid`.
