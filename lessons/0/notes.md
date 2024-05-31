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

# Lesson 0: Exploring qsv help messages and syntax

## Listing all commands

This may be your first time using qsv, so let's see what qsv has to offer. We'll run qsv with the `--list` flag.

```{code-cell}
:tags: ["scroll-output"]
qsv --list
```

Here we see a list of commands and a brief description about them.[^1]

## Viewing a command's help message

You may view a command's help message by running:

```bash
qsv <command> --help
```

For example I may run the following to get the help message for the `headers` command:

```{code-cell}
:tags: ["scroll-output"]
qsv headers --help
```

Usually you'll find a similar structure for other qsv commands:

-   Description about the command
-   More details
-   Examples and/or a link to them
-   Usage format
-   Subcommands[^2]
-   Arguments
-   Options (flags)

## Displaying headers of a CSV

Let's try viewing the headers in the `fruits.csv` file located in `lessons/0`. Based on the command format in the "Usage" section of the help message for `qsv headers`, we'll run:

```{code-cell}
qsv headers fruits.csv
```

## Recap

In this lesson we've covered how to:

-   List all available qsv commands with `qsv --list`
-   View the help message for an individual command with `qsv <command> --help`
-   Interpret the parts of a command help message
-   Run a command on an arbitrary CSV file, getting the headers with `qsv headers <filepath>`

Now it's your turn to take on the first exercise.

## Exercise 0: Total rows

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/dathere/100.dathere.com/main?labpath=lessons%2F0%2Fexercise.ipynb)

Using a qsv command, get the total number of rows that are in the `fruits.csv` file.

> Here we list qsv commands for your reference. Solve this exercise using [Thebe](exercises-setup:thebe), [Binder](exercises-setup:binder) or [locally](exercises-setup:local).

```{code-cell}
:tags: ["scroll-output"]
qsv --list
```

:::{hint}
:class: dropdown

The `count` command may be useful for this exercise. Make sure to learn how `qsv count` determines the row count in order to complete this exercise as intended.

:::

::::{admonition} Solution
:class: dropdown seealso

As with other solutions you may see in the upcoming exercises, there may be many ways to solve an exercise with qsv. A solution could be running the command:

```bash
qsv count fruits.csv --no-headers
```

And the output should be:

```bash
4
```

:::{admonition} Why not 3?
:class: dropdown hint

The exercise requires finding the **total number of rows** in `fruits.csv`. As described in the help message for `qsv count` (you may run `qsv count -h` to get the help message):

<q>Note that the **count will not include the header row (unless `--no-headers` is given)**.</q>

If you run `qsv count fruits.csv` then in your terminal you should see `3` as the output. Running it again this time with the `--no-headers` flag (or `-n` for short), you get the correct number of total rows `4` which includes the header row (which is the first row in the CSV file).

It may sound unusual that by using the `--no-headers` flag, the header row gets included in the row count. You may share any ideas for improvements to qsv on [qsv's GitHub discussions](https://github.com/jqnatividad/qsv/discussions).

:::

::::

[^1]: Not all 50+ commands may be listed using `qsv --list` since features may be disabled for a given qsv binary file (e.g., OS compatibility for certain commands).
[^2]: In this case `qsv headers` does not have any subcommands.
