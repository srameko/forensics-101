# Recovering Deleted Data

Deleting a file usually does **not erase the data**.

Instead:

- metadata entry is marked deleted
- clusters become available for reuse

---

## Example

```bash
icat disk.dd 128 > recovered.txt
```
