---
layout: section
subtitle: Tools used in forensic analysis
---

# Forensic Tools

---

## Sleuth Kit

Common tools:

- mmls
- fsstat
- fls
- istat
- icat
- blkls
- mactime

---

## Example Workflow

```bash
fsstat disk.dd
fls disk.dd
icat disk.dd 128 > file
```
