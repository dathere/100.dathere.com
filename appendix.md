---
jupytext:
    text_representation:
        extension: .md
        format_name: myst
kernelspec:
    display_name: Python 3
    language: python
    name: python3
---

# Appendix

Here you may find conceptual content related to the exercises in the book.

## qsv version

qsv has multiple versions and may differ for each system. Here we run [a command](https://github.com/jqnatividad/qsv/blob/master/docs/PERFORMANCE.md#version-details) to show what version of qsv this book is using along with other information:

```bash
qsv --version
```

```{code-cell} python3
:tags: [remove-input, scroll-output]

result = !qsv --version
print(result.n)

```

## qsv release assets

A mapping of qsv release files for an arbitrary version X.Y.Z and platforms they may run on are shown in the table below.

```{table} qsv release assets (vX.Y.Z)
:name: qsv-release-assets

| File                                      | Platform |
| ----------------------------------------- | ------------------------- |
| `qsv-X.Y.Z-x86_64-pc-windows-msvc.zip`    | 64-bit MSVC (Windows 10+)            |
| `qsv-X.Y.Z.msi`                           | Windows                   |
| `qsv-X.Y.Z-x86_64-pc-windows-gnu.zip`     | 64-bit MinGW (Windows 10+)            |
| `qsv-X.Y.Z-i686-pc-windows-msvc.zip`      | 32-bit MSVC (Windows 10+)               |
| `qsv-X.Y.Z-aarch64-apple-darwin.zip`      | ARM64 macOS (11.0+, Big Sur+)       |
| `qsv-X.Y.Z-x86_64-apple-darwin.zip`       | 64-bit macOS (10.12+, Sierra+)      |
| `qsv-X.Y.Z-aarch64-unknown-linux-gnu.zip` | ARM64 Linux (kernel 4.1, glibc 2.17+)                 |
| `qsv-X.Y.Z-x86_64-unknown-linux-gnu.zip`  | 64-bit Linux (kernel 3.2+, glibc 2.17+)              |
| `qsv-X.Y.Z-x86_64-unknown-linux-musl.zip` | 64-bit Linux with musl 1.2.3              |
| `qsv-X.Y.Z-i686-unknown-linux-gnu.zip`    | 32-bit Linux (kernel 3.2+, glibc 2.17+)                 |
```

:::{note}
The listed OS/architecture are primarily based on [information from "The rustc book"](https://doc.rust-lang.org/nightly/rustc/platform-support.html).
:::
