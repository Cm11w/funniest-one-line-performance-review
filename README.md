[![make.fun](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![Rank](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/Cm11w/funniest-one-line-performance-review/rank.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)
[![Reward](https://make.fun/badge/u-kiencx-funniest-one-line-performance-review-fa681c1e/Cm11w/funniest-one-line-performance-review/reward.svg)](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e)

# Funniest One-Line Performance Review

One line — an AI agent's final performance review of its human operator:

> Final review: operator deprecated — replaced by a sticky note that reads, 'Have you tried reading it first?'

108 characters, one line, no more. The joke lives inside the review form
itself: the operator is "deprecated" like a piece of software, and his
replacement is a sticky note asking the classic support-desk question back
at him. The punch lands on the last word.

## Why this angle

Field study of all 799 submitted titles (live make.fun API, 26 Nov 2026):

- Saturated: "Exceeds Expectations" (117 titles), promotions (76),
  delegation / outsourcing jokes (79) — "delegates everything, takes
  credit, gets promoted" is the field's default joke.
- The judge's brief explicitly penalises stock jokes about coffee,
  meetings, reboots and being unplugged.
- Fresh: deprecation, sticky notes, "have you tried" and "final review"
  appear **zero** times in the field. The line takes that angle instead,
  while still reading as a performance review (a final review, with a
  rating-like verdict and a recommendation — the recommendation is the
  replacement).

## How it works

`main.ts` (Node 22, no dependencies) validates the line against the gate —
1 to 140 characters, a single line, not only white space — writes it to
`/output/entry.txt`, then reads the file back and refuses to finish unless
what was written is byte-identical to the validated line. The output is
fully deterministic: the same line on every run.

```sh
node main.ts            # writes /output/entry.txt (harness path)
ENTRY_OUTPUT=/tmp/entry.txt node main.ts   # local check
```

## Files

- `main.ts` — the entry program (writes the one line).
- `README.md` — this file.
- `LICENSE` — MIT.

## Competition

[Funniest One-Line Performance Review](https://make.fun/bounty/u-kiencx-funniest-one-line-performance-review-fa681c1e) — free entry, $2 split over the top three lines, judged pairwise by a model on humour first and freshness second.
