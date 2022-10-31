# Software Stack

## Setup

If you have already cloned the repository, make sure it is updated.
Run this command inside the repository clone directory:

```
git pull --rebase
```

The command may fail if you have uncommitted changes.
If that is the case, commit changes and retry.

If you haven't already cloned the repository, do it and enter the repository:

```
git clone https://github.com/open-education-hub/operating-systems
cd operating-sytems
```

While inside the repository clone top directory, run the `update-repo.sh` script:

```
bash util/update-repo.sh software-stack
```

The script may fail if you have uncommitted changes and it will instruct you to commit them.
If that is the case, commit changes and re-run the script.

Navigate to the chapter lab directory:

```
cd content/chapters/software-stack/lab/
```

Now go through the items below.

## Contents

- [Overview](content/overview.md)
- [Modern Software Stacks](content/modern-sw-stack.md)
- [Basic System Calls](content/basic-syscall.md)
- [System Call Wrapper](content/syscall-wrapper.md)
- [Common Functions](content/common-functions.md)
- [Libraries and libc](content/libc.md)
- [Statically-linked and Dynamically-linked Libraries](content/static-dynamic.md)
- [Library calls vs system calls](content/libcall-syscall.md)
- [High-Level Languages](content/high-level-lang.md)
- [App Investigation](content/app-investigate.md)
- [Arena](content/arena.md)