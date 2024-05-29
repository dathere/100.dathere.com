## How to set up the exercises

### Choose an approach

Each exercise should have a launch button for launching an online Jupyter lab environment which may take some seconds/minutes to launch completely. You may choose to launch an exercise by clicking the following button when it appears in a lesson:

![Binder](https://mybinder.org/badge_logo.svg)

However, you may choose to run the exercises on your system. The rest of this page is an overview of how to load the exercises and how to install qsv locally. You may [continue to the next page](notes.md) instead if you won't do exercises on your system.

### 1. Download and extract the exercises

1. [Click here to download the `100.dathere.com.zip` file](https://github.com/dathere/100.dathere.com/archive/refs/heads/main.zip).
2. Unzip `100.dathere.com.zip`. You may delete everything except the `lessons` folder.

As you follow along with a lesson page on `100.dathere.com`, once an exercise appears then you may change directory into the relevant folder (e.g., `cd lessons/0` for the first exercise). We recommend you ignore the `notes.md` file in each lesson folder as the lesson is rendered as intended on `100.dathere.com` and the file may also contain the solution to the exercise.

### 2. Set up qsv

:::note
If you already have qsv installed on your system and accessible from `PATH` then you may [skip to step 3](#optional-set-up-qsv-bash-completions).
:::

#### Download and extract qsv

You may download qsv as an executable file which you may run in a terminal like other commands. There are [multiple ways](https://github.com/jqnatividad/qsv#installation-options) to download qsv and multiple versions of qsv.

Here's one way to download the latest version (arbitrarily represented as version `X.Y.Z`). You may download the latest version of qsv from the latest releases on GitHub at: [https://github.com/jqnatividad/qsv/releases/latest](https://github.com/jqnatividad/qsv/releases/latest#). Under the Assets section of the latest release you may find many files, so choose the right one based on your operating system and system architecture.

Here are the files we suggest if you're unsure:

| OS      | Suggested file(s)                                                                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows | Run the `qsv-X.Y.Z.msi` installer and go through its installation process.                                                                                            |
| macOS   | Depending on your architecture, choose between `qsv-X.Y.Z-aarch64-apple-darwin.zip` and `qsv-X.Y.Z-x86_64-apple-darwin.zip`                                           |
| Linux   | `qsv-X.Y.Z-x86_64-unknown-linux-gnu.zip` (the `musl.zip` may not have all of qsv's capabilities available but may have more compatibility with various Linux distros) |

:::{seealso}
If you'd like to know more about each file, see the [table for qsv release assets](qsv-release-assets).
:::

If you have a `.zip` file downloaded then make sure to unzip it and locate the `qsv` file within it (or `qsv.exe` for Windows). You may start using qsv with that file right away if you'd like!

#### Add qsv to your PATH

To ensure you may access qsv from your terminal in any directory without having to specify a path to the qsv binary file, you'll need to add qsv to your PATH environment variable.

If you used the `qsv-X.Y.Z.msi` installer for Windows then this should have already been done for you. You may verify this works by opening a terminal (Windows Terminal, Command Prompt, Git Bash, Powershell, etc.), type `qsv --list`, and press enter to run the command. This should output the list of available qsv commands as intended.

For macOS and Linux there are various ways to add qsv to the PATH. One way is moving the `qsv` binary file to `/usr/local/bin`, which you may do by changing your directory to where `qsv` is located and running:

```bash
sudo mv qsv /usr/local/bin
```

You may need to restart your terminal. Try running `qsv --list`, which should output the list of available commands.

### 3 (Optional). Set up qsv bash completions

Bash completions allow you to press the tab key at certain locations while typing a qsv command to get suggestions (completions) so you may view available commands, subcommands, and options within your terminal (assuming you're using a compatible terminal such as Git Bash on Windows).

![qsv bash completions example](media/qsv-completions-demo.gif)

You can download the current bash completions file from qsv's source code at [`contrib/bashly/completions.bash`](https://github.com/jqnatividad/qsv/blob/master/contrib/bashly/completions.bash). Then you may run `source completions.bash` to enable the completions in your current terminal instance. You may also move `completions.bash` to your home directory (`~/completions.bash`) and also create a `.bashrc` file in your home directory (`~/.bashrc`) to include `source completions.bash` as a line within it for the completions script to run whenever you launch a bash terminal.

## Recap

If you chose to do a local installation, then by now you should have the following available on your system:

-   The `lessons` folder
-   qsv (available from your PATH)
-   qsv bash completions (optional)
