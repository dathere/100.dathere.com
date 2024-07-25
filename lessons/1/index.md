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

# Lesson 1: Displaying file content with `qsv table`

We have yet to see what data is in our `fruits.csv` file. Let's find out!

## Viewing raw file content in the terminal

If you're familiar with the Bash terminal on Linux or macOS, you may already know some ways to view raw file contents such as with the `cat` command. For example you may run:

```{code-cell}
cat fruits.csv
```

On Windows command prompt (cmd.exe) and Powershell you may use the `type` command instead. Git Bash and Powershell also have the `cat` command.

Alternatively with qsv you may run:

```{code-cell}
qsv select 1- fruits.csv
```

You may learn more about the `select` command in a later lesson.

:::{admonition} Other ways to view CSV content in the terminal (optional)
:class: dropdown hint

Some other ways you may view CSV content for `fruits.csv` include running:

-   `qsv cat rows fruits.csv`
-   `qsv slice fruits.csv`
-   `qsv fmt fruits.csv`
-   If you have the `qsv sqlp` command available, you may run `qsv sqlp fruits.csv 'SELECT * FROM fruits' --float-precision 2`. This may also print the shape of the file content `(3, 2)` representing 3 rows and 2 columns.

These should all give the same output as `qsv select 1- fruits.csv`. However the output may differ if you modify the commands (e.g., add other options) or use a different file format (e.g., `fruits.tsv` with tab separated values may be represented with commas as the delimiter instead).

:::

## Increasing readability with `qsv table`

If you look carefully you'll notice there are various kinds of fruits and their prices as we've discovered in the previous lesson using `qsv headers`. However, you may want to view the data in a "prettier" format. `qsv table` may assist with this problem by showing aligned output.

```{code-cell}
:tags: ["scroll-output"]
qsv table --help
```

For example, you may run the following command:

```{code-cell}
qsv table fruits.csv
```

Here we see the content of `fruits.csv` as a table with aligned columns.

## Recap

In this lesson we've covered how to:

-   View raw file content with `cat <filepath>` (`type <filepath>` on Windows command prompt), or `qsv select 1- <filepath>`
-   View CSV file content in a table format with `qsv table <filepath>`

Now it's your turn to explore some of the various options `qsv table` has to offer in Exercise 1.

## Exercise 1: Viewing file content with tables

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/dathere/100.dathere.com/main?labpath=lessons%2F1%2Fexercise.ipynb)

Using `qsv table` and its options, complete each of the following tasks on the `fruits.csv` and `fruits_extended.csv` files:

1. Print `fruits.csv` as a table with right-aligned column entries.
2. Print `fruits_extended.csv` as a table.
3. Print `fruits_extended.csv` as a table with each column having a minimum width of `20`.
4. Print `fruits_extended.csv` as a table with the minimum number of spaces between each column being `20`.
5. Print `fruits_extended.csv` as a table with each column having a limited length of `5`.

> Here we show the usage text of `qsv table` for your reference. Solve this exercise using [Thebe](exercises-setup:thebe), [Binder](exercises-setup:binder) or [locally](exercises-setup:local).

```{code-cell}
:tags: ["scroll-output"]
qsv table --help
```

::::{admonition} Solution for task 1
:class: dropdown seealso

The `--align` (or `-a`) option may be used to set how entries should be aligned in a column by also passing an argument `<arg>` of either `left`, `center`, or `right`. By default the entries are left-aligned.

To right-align all column entries, run:

```bash
qsv table fruits.csv --align right
```

```console
     fruit  price
     apple  2.50
    banana  3.00
strawberry  1.50
```

::::

::::{admonition} Solution for task 2
:class: dropdown seealso

This task is straightforward to complete and primarily for you to view the newly introduced file `fruits_extended.csv`. Run:

```bash
qsv table fruits_extended.csv
```

```console
fruit       price  size    availability
apple       2.50   medium  available
banana      3.00   medium  available
strawberry  1.50   small   available
orange      2.00   medium  out of stock
pineapple   3.50   large   available
grape       4.00   small   out of stock
mango       1.80   medium  available
watermelon  6.00   large   available
pear        2.20   medium  out of stock
```

::::

::::{admonition} Solution for task 3
:class: dropdown seealso

The `--width` (or `-w`) option may be used to specify the minimum width of each column. By default the width is set to `2`. Run:

```bash
qsv table fruits_extended.csv --width 20
```

```console
fruit                 price                 size                  availability
apple                 2.50                  medium                available
banana                3.00                  medium                available
strawberry            1.50                  small                 available
orange                2.00                  medium                out of stock
pineapple             3.50                  large                 available
grape                 4.00                  small                 out of stock
mango                 1.80                  medium                available
watermelon            6.00                  large                 available
pear                  2.20                  medium                out of stock
```

::::

::::{admonition} Solution for task 4
:class: dropdown seealso

The `--pad` (or `-p`) option may be used to specify the number of spaces between each column. By default `--pad` is set to `2`. Run:

```bash
qsv table fruits_extended.csv --pad 20
```

```console
fruit                         price                    size                      availability
apple                         2.50                     medium                    available
banana                        3.00                     medium                    available
strawberry                    1.50                     small                     available
orange                        2.00                     medium                    out of stock
pineapple                     3.50                     large                     available
grape                         4.00                     small                     out of stock
mango                         1.80                     medium                    available
watermelon                    6.00                     large                     available
pear                          2.20                     medium                    out of stock
```

Completing the previous task 3 and this task 4 may help you understand the visual difference between using `--width` and `--pad`. Recall you may also use multiple options such as `--width` and `--pad` together.

::::

::::{admonition} Solution for task 5
:class: dropdown seealso

The `--condense` (or `-c`) option may be used to limit the length of each column (see `qsv table --help` for more details on how this works). Run:

```bash
qsv table fruits_extended.csv --condense 5
```

```console
fruit     price  size      avail...
apple     2.50   mediu...  avail...
banan...  3.00   mediu...  avail...
straw...  1.50   small     avail...
orang...  2.00   mediu...  out o...
pinea...  3.50   large     avail...
grape     4.00   small     out o...
mango     1.80   mediu...  avail...
water...  6.00   large     avail...
pear      2.20   mediu...  out o...
```

::::
