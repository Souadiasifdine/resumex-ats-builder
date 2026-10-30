# ResumeX — Private, ATS-aware resume builder
 
ResumeX helps students, graduates, and early-career job seekers turn their experience into a clear, printable resume. This enhanced version combines a guided editor, 16 templates, live A4 preview, transparent content checks, browser-local saving, and PDF export.
 
**Live demo:** https://resumex-0.netlify.app
 
> **Attribution:** This project is a modified version of [Rafivali Shaik's ResumeX](https://github.com/rafivalih/ResumeX). The original author and project are credited in `CREDITS.md`. The changes in this version are listed below.
 
## Built with AI assistance
 
This enhanced version was designed and developed with the help of AI tools (Kimi and Claude). The project idea, the choice of target users, testing, and the final review were done by the author. AI was used to generate and edit code and documentation.
 
## What is new compared to the original
 
- Redesigned landing page, navigation, builder, review page, and template gallery.
- Transparent nine-rule readiness checklist (`src/lib/ats.js`) with unit tests.
- One-click fictional sample resume for demonstrations.
- Executive template connected through a new renderer.
- Safer loading of saved data, responsive preview, and clearer export guidance.
## Team and roles
 
Solo project by **Souadia Sifeddine** (GitHub: [Souadiasifdine](https://github.com/Souadiasifdine)).
 
- Chose the idea and the target users (students and first-time job seekers).
- Directed the redesign, tested every page, reviewed the changes, and deployed the website.
- Reviewed the documentation and the pitch, and recorded the demo video.
- Code and interface design were generated and edited with AI tools (Kimi and Claude) under my direction.
## Tech stack and AI tools
 
React 18, Vite, Tailwind CSS, React Router, Context API, Lucide React, react-to-print. Deployed on Netlify. AI tools: Kimi and Claude.
 
## The problem
 
Many first-time applicants face three connected problems:
 
- They do not know how to turn responsibilities into specific, credible achievements.
- Resume tools often hide export behind registration or payment.
- “ATS scores” can be opaque, giving users confidence without explaining what was checked.
## The product
 
ResumeX provides a focused workflow:
 
1. Enter personal details, summary, experience, projects, skills, education, and certifications.
2. Watch the resume update immediately in the selected template.
3. Improve the draft using nine visible content checks.
4. Review the final document and open the browser's PDF export flow.
### Key features
 
- 16 selectable resume layouts, including a connected Executive template.
- Real-time editing and A4 preview.
- Nine-rule ATS readiness checklist with actionable explanations.
- One-click fictional sample resume for product demonstrations.
- Automatic draft and template persistence in browser `localStorage`.
- Responsive editor, mobile preview dialog, and keyboard-visible focus states.
- PDF export through `react-to-print` and the browser print dialog.
- No login, backend, tracking pixel, or personal-data upload.
## What the readiness score means
 
The score is **deterministic content guidance**, not an AI evaluation or a guarantee of ATS compatibility. It awards up to 100 points across:
 
| Check | Points |
| --- | ---: |
| Name and target job title | 10 |
| Valid-looking email and phone | 10 |
| Focused summary length | 15 |
| At least three technical skills | 10 |
| Experience or project evidence | 15 |
| Education | 10 |
| Measurable achievement | 15 |
| Action-oriented language | 10 |
| No listed generic buzzwords | 5 |
 
The implementation is in `src/lib/ats.js`; every rule and its weight can be inspected and tested. Different ATS products parse documents differently, so users must still inspect the exported PDF and tailor it to each role.
 
## Technology
 
- React 18 + Vite
- Tailwind CSS
- React Router (hash routing)
- Context API for resume state
- Lucide React icons
- `react-to-print` for export
- Browser `localStorage` for on-device persistence
## Run locally
 
Requires Node.js and npm.
 
```bash
git clone https://github.com/Souadiasifdine/resumex-ats-builder.git
cd resumex-ats-builder
npm install
npm run dev
```
 
Open the local URL printed by Vite.
 
### Production build
 
```bash
npm run build
npm run preview
```
 
The production output is generated in `dist/`. Vite uses a relative base path so the build can be hosted at a domain root or in a subdirectory.
 
## Five-minute demo path
 
1. Open **Explore with sample data** on the home page, or **Load sample** in the builder.
2. Edit Amina Benali's job title and observe the live preview.
3. Open **View all checks** in ATS readiness.
4. Remove the summary or measurable achievement and watch the score and suggestions change.
5. Switch between One Page ATS, Classic, Modern, and Executive.
6. Select **Review & download**, then **Download PDF**.
7. In the browser dialog, choose **Save as PDF** and A4 paper.
All sample people, links, employers, and achievements are fictional demonstration data.
 
## Project structure
 
```text
src/
├── components/
│   ├── Form/                 # Guided resume sections
│   ├── Templates/            # Printable resume layouts
│   ├── AtsPanel.jsx          # Live score and suggestions
│   ├── Navbar.jsx
│   └── TemplateSwitcher.jsx
├── context/
│   └── ResumeContext.jsx     # State, sample data, local persistence
├── lib/
│   └── ats.js                # Transparent readiness rules
├── pages/
│   ├── Home.jsx
│   ├── Templates.jsx
│   ├── Builder.jsx
│   ├── MyResume.jsx
│   └── About.jsx
├── App.jsx
└── main.jsx
```
 
## Privacy and current limitations
 
- Drafts are stored only in the current browser. They do not sync across devices.
- Clearing site data removes the saved draft.
- PDF layout depends partly on the browser print engine; users should review the output.
- The readiness score does not compare a resume with a specific job description.
- No online account, cloud database, or remote AI service is used.
## Roadmap
 
- JSON draft import/export for backup and device transfer.
- Job-description keyword comparison with explainable matches.
- Motivation letter writer for jobs and scholarships.
- Training section for new graduates.
- Optional user-controlled AI writing suggestions with clear privacy disclosure.
- Automated template rendering and accessibility tests.
- Additional language support, including Arabic and French.
## Original project
 
Original author: **Rafivali Shaik**  
Source: https://github.com/rafivalih/ResumeX  
Original demo: https://rafivalih.github.io/ResumeX/
 
See `CREDITS.md` for reuse notes and `PITCH.md` for the three-minute presentation script.
 
