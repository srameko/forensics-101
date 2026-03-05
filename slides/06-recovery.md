---
layout: section
subtitle: Recovering deleted files
---

# Recovering Deleted Files

---

## File Deletion

Deleting a file usually does **not erase the data**.

Instead:

- metadata is marked deleted
- clusters become available

---

## Example Recovery

```bash
icat disk.dd 128 > recovered.txt
```
