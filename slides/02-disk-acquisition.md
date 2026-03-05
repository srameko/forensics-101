# Disk Acquisition

Acquisition should create a **forensic image**.

Common formats:

- RAW (dd)
- E01 (EnCase)
- AFF

---

## Example

```bash
dd if=/dev/sda of=image.dd bs=4M
```

---

# Hash Verification

Evidence integrity must be verified using hashes.

Common algorithms:

- MD5
- SHA1
- SHA256
