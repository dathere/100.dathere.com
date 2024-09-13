---
jupytext:
    text_representation:
        extension: .md
        format_name: myst
kernelspec:
    display_name: Bash
    language: bash
    name: bash
---

# Lesson 2: Piping commands

We've been using one command at a time, but what if we want to use multiple?

For example let's say I want to only see what fruits there are and their availability from `fruits_extended.csv` in a nicely formatted table.

## Selecting the columns

Take a brief look at `qsv select`:

```{code-cell}
:tags: ["scroll-output"]
qsv select -h
```

There are several ways to select the columns we want. Let's take a look at the headers first:

```{code-cell}
:tags: ["scroll-output"]
qsv headers fruits_extended.csv
```

We only want data within the `fruit` and `availability` columns. Let's try selecting the data within those columns:

```{code-cell}
:tags: ["scroll-output"]
qsv select 1,4 fruits_extended.csv
```

Great, we got the column data that we're looking for. But how do we run this data through `qsv table`?

## Command redirection

If you're not sure what `stdin`, `stdout`, and `stderr` are then we recommend reading the [Command data streams](command-data-streams) section in the Appendix.

<!-- Add link to appendix or do a dropdown or continue lesson and explain each one. -->
<!-- Improve flow for previous sentence to next one or modify flow. -->

For example let's say we want to display the previous output with `qsv table`. We can run the following to pipe the output into `qsv table`:

```{code-cell}
:tags: ["scroll-output"]
qsv select 1,4 fruits_extended.csv | qsv table
```

Now we've got what we were looking for!

Notice that the output of the first command `qsv select 1,4 fruits_extended.csv` was used as the input for `qsv table`.


## Exercise 2: Piping commands example

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/dathere/100.dathere.com/main?labpath=lessons%2F2%2Fexercise.ipynb)

Pipe the first and second columns of `fruits_extended.csv` into `qsv table`.

After running that pipeline and viewing the output, try adding `qsv transpose` before `qsv table` in the pipeline and see what the output looks like.

> Here we show the usage text of `qsv select` for your reference. Solve this exercise using [Thebe](exercises-setup:thebe), [Binder](exercises-setup:binder) or [locally](exercises-setup:local).

```{code-cell}
:tags: ["scroll-output"]
qsv select --help
```

::::{admonition} Solution
:class: dropdown seealso

For the first part, you may run:

```bash
qsv select 1,2 fruits_extended.csv | qsv table
```

The output should be:

```
fruit       price
apple       2.50
banana      3.00
strawberry  1.50
orange      2.00
pineapple   3.50
grape       4.00
mango       1.80
watermelon  6.00
pear        2.20
```

The second part is adding `qsv transpose` within the pipeline:

```bash
qsv select 1,2 fruits_extended.csv | qsv transpose | qsv table
```

The output should be:

```
fruit  apple  banana  strawberry  orange  pineapple  grape  mango  watermelon  pear
price  2.50   3.00    1.50        2.00    3.50       4.00   1.80   6.00        2.20
```

::::
