# QRS SOC 2 Compliance Checklist — Phase 2 Migration

**Owner:** Bilal Ahmad (PM/QA)
**Reviewer:** Jordan Markwith (CEO / ISO)
**Scope:** WordPress → Next.js + Payload CMS rebuild
**Trust Service Criteria covered:** Security, Availability, Confidentiality, Privacy

---

## How to use this checklist

This is the SOC 2 evidence list for the migration. Most controls were established in Phase 1; the rebuild must **preserve, not regress** them. A few new controls land in Phase 2 (Cloudflare edge, Payload CMS, PR/CI deploy trail).

For every item below, capture:

1. **Status** — ☐ pending / ☑ done / ⚠ not applicable (with reason)
2. **Evidence** — screenshot, config snippet, URL, or log excerpt
3. **Date verified**
4. **Where stored** — typically a folder in the QRS Drive `/SOC2/Phase2-Evidence/`

Anything marked **`[GATE]`** is a cutover blocker — the DNS switch doesn't happen until it's green.

---

## A. Audit-critical pages preserved

Every page below must exist on the new site, content-identical-or-better, before cutover. Slugs must match Phase 1 or be 301-redirected.

| # | Control | Evidence required |
|---|---|---|
| A1 | `/privacy/` migrated, content matches or improves on Phase 1 | URL + side-by-side content diff |
| A2 | `/terms/` migrated, all 16 sections present | URL + section list |
| A3 | `/security/` migrated, all sections (Approach, Compliance, Infrastructure, Identity & Access, App Security, Data Protection, People, Incident Response, VDP, Subprocessors, Policies, Contact) | URL + heading list |
| A4 | `/security/vdp/` migrated **at the same slug** (RFC 9116 Policy field depends on this) | URL returns 200, all 9 sections present including "3. Out of Scope" |
| A5 | `/subprocessors/` migrated with all seven rows + 30-day notice text | URL + table screenshot |
| A6 | `/cookies/` migrated with all 8 sections + cookie list | URL + section count |
| A7 | `/support/` migrated with severity levels + mailbox list | URL |
| A8 | Branded 404 page served on 404 responses | curl test of a nonexistent path returns the branded page |
| A9 | Branded 500 page served on 5xx responses | Server config snippet (Vercel `next.config.js` or Cloudflare) |
| A10 | `/.well-known/security.txt` returns 200, valid RFC 9116 (Contact, Expires <12mo, Policy = `/security/vdp/`, Preferred-Languages) | `curl https://qrsrisk.com/.well-known/security.txt` |
| A11 | `robots.txt` returns 200 and does not block admin paths | curl output |
| A12 | `sitemap.xml` returns 200, includes all P0 + differentiator pages | curl output + Search Console submission screenshot |

---

## B. Security headers (must match or beat Phase 1)

Phase 1 ended at securityheaders.com **Grade A** (capped by CSP looseness). Phase 2 target: **Grade A+**, with CSP tightened.

| # | Header | Required value / target | Evidence |
|---|---|---|---|
| B1 | `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Response header capture |
| B2 | `X-Content-Type-Options` | `nosniff` | Response header capture |
| B3 | `X-Frame-Options` | `SAMEORIGIN` or `DENY` | Response header capture |
| B4 | `Referrer-Policy` | `strict-origin-when-cross-origin` | Response header capture |
| B5 | `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` (extend as needed) | Response header capture |
| B6 | `Content-Security-Policy` | **Tightened from Phase 1** — no `'unsafe-eval'`; `'unsafe-inline'` removed where possible (use nonces or hashes for any inline scripts) | CSP value + Report-Only logs |
| B7 | `Cross-Origin-Opener-Policy` (new in Phase 2) | `same-origin` | Response header capture |
| B8 | `Cross-Origin-Embedder-Policy` (new in Phase 2) | `require-corp` or `credentialless` | Response header capture |
| B9 | TLS 1.3 enabled at the edge (Cloudflare) | SSL Labs report URL, target **Grade A or A+** |
| B10 | HTTP → HTTPS 301 site-wide | `curl -I http://qrsrisk.com/` returns 301 to https |
| B11 | `securityheaders.com` overall grade | Target **A+**, evidence: report URL |
| B12 | `[GATE]` HSTS preload submission **deferred 60 days** after stable launch (don't break rollback) | Calendar reminder set for day 60 |

---

## C. Access controls + change management

Closes the "deploy audit log" SOC 2 item from Phase 1. The PR → merge → deploy trail is now the audit log.

| # | Control | Evidence |
|---|---|---|
| C1 | GitHub repo for marketing site under QRS org, branch protection on `main` | Repo settings screenshot showing required reviews, status checks |
| C2 | Required PR review before merge | Branch protection settings screenshot |
| C3 | Lighthouse-CI status check gating PRs against v2 budgets (Perf ≥ 90, A11y ≥ 95, BP ≥ 95, SEO ≥ 95) | CI run history |
| C4 | Vercel deployment requires successful CI | Vercel project settings screenshot |
| C5 | Jordan as Owner on GitHub repo, Cloudflare account, Vercel project, Payload Super Admin | Member lists exported |
| C6 | Bilal as Collaborator on GitHub repo, Vercel team, Payload Admin (build-phase only — transition to Editor or remove on handoff) | Member lists; calendar reminder for role review at +30 days post-launch |
| C7 | clients.1356@gmail.com (Bilal) retained on Search Console at Owner level, with Jordan also as Owner | Search Console Users & Permissions screenshot |
| C8 | Payload CMS roles configured: Super Admin, Admin, Editor, Reviewer, Read-only | Payload roles config screenshot |
| C9 | All vendor accounts (Vercel, Cloudflare, Payload, PostgreSQL host, SMTP, Calendly) use SSO via Google Workspace where supported, MFA required where SSO unavailable | Per-vendor screenshot |
| C10 | WordPress Activity Log plugin remains active until WP decommissioning | Plugin status |

---

## D. Data handling — forms + submissions

| # | Control | Evidence |
|---|---|---|
| D1 | All forms gated with Cloudflare Turnstile (no reCAPTCHA) | Form HTML inspection + Turnstile dashboard |
| D2 | Form submissions stored encrypted at rest in Payload + Postgres | Payload collection config + Postgres encryption verification |
| D3 | Form submission access limited to Admin / Super Admin roles | Payload access-control rules screenshot |
| D4 | Privacy Notice and Terms hyperlinked on every form that collects personal data (Demo, Validation Report, Newsletter, Contact, Privacy Request, Press, RFP, Partners, Escalations) | Form-by-form inspection |
| D5 | Privacy / Data-Subject Request form routes to `privacy@qrsrisk.com` and is monitored | Test ping + receipt log |
| D6 | Form submission log exportable (for DSAR responses) | Export sample |
| D7 | CRM webhook structure ready (no live integration yet — webhook endpoint stubbed) | Code snippet of webhook handler |

---

## E. Vulnerability disclosure (VDP)

| # | Control | Evidence |
|---|---|---|
| E1 | `/security/vdp/` page live at the same slug as Phase 1 (do not change) | URL returns 200 |
| E2 | `security.txt` Policy field points to `https://qrsrisk.com/security/vdp/` | File contents |
| E3 | `security@qrsrisk.com` mailbox routes correctly | Test ping + delivery confirmation |
| E4 | Safe Harbor language preserved in VDP section 5 | Side-by-side content diff with Phase 1 |
| E5 | Coordinated disclosure window (90 days) unchanged | Content match |
| E6 | PGP / encrypted email path documented | Section text match |

---

## F. Mailbox controls

| # | Control | Evidence |
|---|---|---|
| F1 | All five mailboxes route correctly post-cutover: `privacy@`, `security@`, `support@`, `escalations@`, `legal@` | Test ping to each, receipt screenshots |
| F2 | Mailboxes monitored on a defined cadence (document who, how often) | Internal procedure doc reference |
| F3 | MX records pointing to Google Workspace (unchanged by cutover) | `dig MX qrsrisk.com` output before and after |
| F4 | New addresses added in Phase 2 (`sales@`, `rfp@`, `press@`, `partners@`) configured if applicable | Google Workspace user list |

---

## G. Cookie consent + privacy

| # | Control | Evidence |
|---|---|---|
| G1 | Cookie banner renders on first visit, no non-essential cookies set before consent | Incognito session network capture |
| G2 | Cookie Preferences footer button **actually re-opens the consent UI** (the Phase 1 bug — verify with click test in incognito) | Screen recording or click-test result |
| G3 | GPC (Global Privacy Control) signal honored where required | Test with GPC-enabled browser |
| G4 | "Cookie Notice" link on Privacy §11 points to `/cookies/` | HTML inspection |
| G5 | Cookie list on `/cookies/` page reflects the cookies actually being set | Crawl + cookie inventory diff |
| G6 | Subprocessors list updated to include Phase 2 vendors (Vercel, Cloudflare edge, Payload, PostgreSQL host, SMTP provider) with 30-day advance notice published | Subprocessors page diff |

---

## H. Audit logs + monitoring

| # | Control | Evidence |
|---|---|---|
| H1 | GitHub: full PR / merge / deploy history retained, exportable | Sample export |
| H2 | Vercel deployment log retained for at least 90 days | Vercel project settings screenshot |
| H3 | Cloudflare access log + WAF events retained per plan | Cloudflare Analytics screenshot |
| H4 | Payload CMS: version history + rollback enabled on all collections | Payload collection config |
| H5 | Payload CMS: per-record audit log captures who changed what, when | Sample audit entry |
| H6 | WordPress Activity Log retained throughout migration window + 30 days post-launch | Plugin status + export at cutover |
| H7 | Form submissions, login attempts, and admin actions are logged | Payload audit log + Vercel + Cloudflare access log |

---

## I. Cutover gates (DNS doesn't flip until all green)

| # | `[GATE]` | Evidence |
|---|---|---|
| I1 | Staging site (password-protected, `noindex`) passes the v2 acceptance criteria on all five P0 pages, desktop and mobile | Lighthouse reports for `/`, `/privacy/`, `/terms/`, `/security/`, `/security/vdp/` desktop + mobile |
| I2 | All 301 redirects validated against the Phase 1 URL inventory — zero 404s on any old URL | Crawl-then-compare report |
| I3 | `security.txt`, `robots.txt`, `sitemap.xml` all return 200 on staging | curl output |
| I4 | All forms submit successfully from staging and route to the correct mailbox | Per-form test record |
| I5 | All mailboxes confirmed routing on the new infrastructure | Test ping log |
| I6 | DNS TTLs lowered to ≤ 5 minutes at least 48 hours before cutover | DNS provider screenshot |
| I7 | Apex + `www` mapped; `app.`, `api.`, `docs.`, `status.` confirmed untouched | DNS zone export |
| I8 | WordPress backup taken, archived, retained 30 days | Backup file + storage location |
| I9 | Rollback runbook reviewed and signed off | Document reference + approver signature |
| I10 | Search Console + Bing Webmaster verified for both old and new properties | Verification screenshots |

---

## J. Post-cutover monitoring (30 days)

| # | Control | Cadence | Evidence |
|---|---|---|---|
| J1 | Cloudflare 404 logs reviewed for surprise 404s | Daily for week 1, weekly thereafter | Log excerpts |
| J2 | Search Console Coverage report reviewed for regressions | Weekly | Screenshot |
| J3 | SSL Labs + securityheaders.com re-run | Day 1, Day 14, Day 30 | Report URLs |
| J4 | Lighthouse budgets re-verified on all five P0 pages | Day 1, Day 30 | Report URLs |
| J5 | Mailbox routing re-tested | Day 1, Day 14 | Test ping log |
| J6 | Form submission spot-checks (Demo + Support at minimum) | Day 1, Day 14 | Submission records |
| J7 | WordPress decommissioning decision at Day 30 (decommission only if no rollback was needed and no inbound traffic to old URLs) | Day 30 | Decision memo |
| J8 | HSTS preload submission **only after Day 60** stable | Calendar reminder Day 60 | Submission record |

---

## K. Vanta integration

| # | Control | Evidence |
|---|---|---|
| K1 | Vanta continuous monitoring covers the new infrastructure (Vercel, Cloudflare, Payload host, Postgres host) | Vanta integrations screenshot |
| K2 | New subprocessors added to Vanta inventory | Vanta subprocessor list |
| K3 | Any new SOC 2 control gaps identified by Vanta scans triaged within SLA (critical: 48h; high: 7 days, per Secure Software Development Policy) | Vanta findings dashboard |
| K4 | Quarterly access review continues to include all new vendor accounts | Access review log |

---

## L. Documentation updates

| # | Control | Evidence |
|---|---|---|
| L1 | `/security/` page updated to reflect Phase 2 infrastructure (Vercel, Cloudflare, Payload, Postgres) | Page diff |
| L2 | `/subprocessors/` page updated with new subprocessors + 30-day notice published | Page diff |
| L3 | DESIGN.md kept in sync with anything new added during the build | Repo commit history |
| L4 | Internal policies (Incident Response, BC/DR, Secure Software Development) reviewed if the rebuild changes any control | Policy review log |
| L5 | This checklist itself stored in `/SOC2/Phase2-Evidence/` and referenced in the Phase 2 launch report | Folder link |

---

## Acceptance criteria summary

Phase 2 SOC 2 sign-off requires:

1. **Every `[GATE]` item green** before DNS cutover (Section I).
2. **All Section A–H controls** have evidence captured in `/SOC2/Phase2-Evidence/`.
3. **30-day monitoring (Section J)** completed without unresolved findings.
4. **Phase 2 launch report** filed referencing this checklist.

Sign-off when complete: ☐ Bilal (PM) ☐ Jordan (CEO/ISO)

---

*Last updated: 2026-06-25 · Jordan Markwith · QRS Quantum Risk Systems*
