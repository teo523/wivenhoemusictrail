# Wivenhoe Music Trail data structure

The programme is now separated into three layers in `data.ts`:

- `locations`: physical places. One location = one map marker.
- `artistEvents`: individual artists/activities. One artist event = one Artists-view card and one `/events/[slug]` page.
- `timelineRows`: simplified timetable rows and blocks. A timeline block can reference one or many artist events through `artistEventIds`.

## Open Studios

`open-studios` is one timeline block but references five artist events. Those artist events point to four physical locations because Juanes Sanchez and Abigail Lovejoy currently share `15 Claremont Road` in the supplied data.

## Songwriters

`songwriters` is one timeline block. It references five separate artist-event slots, all pointing to the single `rose-crown` location. The supplied programme does not yet include the five names/images/individual times, so these are explicitly marked TBC rather than invented.

To confirm a songwriter later, edit the corresponding `songwriter-1` ... `songwriter-5` entry in `artistEvents`; the timeline and map do not need to change.
