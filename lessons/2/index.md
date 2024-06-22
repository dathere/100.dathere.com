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

:::{admonition} Lesson is a work in progress
:class: warning

This lesson is not complete. Stay tuned!

:::

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

If you're not sure what `stdin`, `stdout`, and `stderr` are then we recommend reading the "Command data streams (`stdin`, `stdout`, and `stderr`)" section in the Appendix.

<!-- Add link to appendix or do a dropdown or continue lesson and explain each one. -->
<!-- Improve flow for previous sentence to next one or modify flow. -->

For example let's say we want to display the previous output with `qsv table`. We can run the following to pipe the output into `qsv table`:

```{code-cell}
:tags: ["scroll-output"]
qsv select 1,4 fruits_extended.csv | qsv table
```

Now we've got what we were looking for!

:::{admonition} Exercise is a work in progress
:class: important

The exercise for this lesson is not available yet. Stay tuned!

:::
