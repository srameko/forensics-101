---
layout: section
subtitle: Creating forensic disk images
---

# Disk Acquisition

---

## Forensic Images

Acquisition should create a **forensic image**.

Common formats:

- RAW (dd)
- E01
- AFF

---

## Example

```bash
dd if=/dev/sda of=image.dd bs=4M
```

---

## Hash Verification

Evidence integrity must be verified using:

- MD5
- SHA1
- SHA256
