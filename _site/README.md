# Jekyll Cloudcannon Boilerplate

## Dependencies

This boilerplate uses the following dependencies & plugins:

- Jekyll (~>4.1)
- jekyll-sitemap
- jekyll-feed
- jekyll-webp (1.0)
- [Gridlex CSS Flexbox](https://gridlex.devlint.fr/) (2.7.1)

## Utility classes

### Padding & Margins
Use from the pre-existing utility classes for paddings & margins. Variable values can be adjusted here: `/_sass/_utility.scss`.

The syntax is similar to Bootstrap:

- `p` for padding, `m` for margin, followed by the **axis or direction** which it should apply to: `x` for horizontal, `y` for vertical with padding **and** margin, and `t` (top), `b` (bottom) `l` (left) and `r` (right) for margins **only**, followed by a dash (`-`) and appending the value to the end.
- For the padding, we work with the following:
  - `lg` for large padding (i.e.: `.px-lg`)
  - `md` for medium padding (i.e.: `.px-md`)
  - `sm` for small padding (i.e.: `.px-sm`)

_It is important to note that the padding is followed by an `!important` statement as to override the Gridlex classes and giving you the ability to add padding to the `col` containers_

- For margins, we use absolute responsive values (in `rem`):
  - `mb-2` would apply `2rem` to `margin-bottom`
  - `mt-1` would apply `1rem` to `margin-top`
  - Values go from 1 to 4, but this can be expanded as needed.


