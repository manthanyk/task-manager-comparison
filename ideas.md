# Design Exploration — Task Manager Comparison

## Three directions considered

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| **Monday Papertrail** | An editorial workbench made from vivid paper, ink, tabs, and engineering evidence. It treats the comparison as a tangible investigation rather than another dashboard. | 0.04 |
| **Instrument Panel** | A measured, technical control room with dense status blocks and a quiet high-contrast data language. | 0.08 |
| **Soft Utility** | A calm, airy notebook-inspired interface that lets the task lists feel personal and low-pressure. | 0.02 |

## Chosen direction — Monday Papertrail

**Design Movement.** Modern Swiss editorial design translated into a tactile digital workbench. The interface takes cues from marked-up technical manuals, loose index cards, and print production rather than a conventional SaaS dashboard.

**Core Principles.** Evidence takes precedence over claims. Hierarchy comes through asymmetry, scale changes, and generous margins. Materials should feel handled: paper, ink, clips, rules, and stamps create warmth without sacrificing utility. All interactions are direct and legible.

**Color Philosophy.** Warm ivory establishes a paper field and reduces screen fatigue. **Ultramarine Ink (#2647E8)** is the signature brand color; it signals deliberate engineering decisions. Vermilion marks friction or the generated-at-speed path, while orange carries transient emphasis. Charcoal holds the system together like printed ink.

**Layout Paradigm.** A persistent narrow evidence rail anchors the page on large screens, while content moves through stacked editorial spreads rather than centred cards. The hero is off-axis, with copy left and a tabletop scene right. The individual apps use a split action bar rather than a conventional dashboard frame.

**Signature Elements.** Offset paper tabs, ruled-note labels in monospaced type, oversized checkmarks and strikethrough marks, and fine cross-rules separate sections.

**Interaction Philosophy.** Controls behave like deliberate desk actions. Filters move through an underlined choice state, task completion makes the checkmark land decisively, and links lift like an index card. There is no theatrical motion.

**Animation.** Entrance movement uses a 220ms opacity/translate reveal with 40ms staggering for grouped items. Toggle and button feedback remains below 160ms and uses a 0.97 press scale. Completion animates only checkmark and text opacity. Motion is disabled for `prefers-reduced-motion`.

**Typography System.** Fraunces is reserved for editorial headlines and conclusions. IBM Plex Mono carries labels, metrics, filters, and evidentiary details. App work surfaces use system sans-serif for editable task titles.

**Brand Essence.** A hands-on evidence board for engineers comparing how AI coding workflows change their ownership of code. **Tactile, candid, analytical.**

**Brand Voice.** Headlines are firm and observational; CTAs describe the next concrete action. Example lines: “Two builds. Keep the receipts.” and “Open the version you can explain.” Generic greetings and empty growth language are prohibited.

**Wordmark & Logo.** The mark is a cobalt check contained by two offset paper-card silhouettes, creating an abstract stacked task ledger. The wordmark uses an all-caps monospaced treatment with one red offset rule.

**Signature Brand Color.** **Ultramarine Ink — #2647E8.**

## Style Decisions

- Every route remains inside the comparison-desk world: build pages are inspected paper/workbench artifacts, never neutral centered SaaS demos.
- The Vibe build uses vermilion and orange with looser generated-at-speed paper cues, while the Pair build uses ultramarine with cleaner ruled engineering cues; the two builds must be distinguishable before their labels are read.
- Charcoal is reserved for evidence slabs, inspection surrounds, and hard editorial contrast, always paired with visible paper, ink, and ledger motifs.
