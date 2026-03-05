---
layout: section
subtitle: Collecting forensic disk images
---

# Disk Acquisition

---

## What is Disk Acquisition

Disk acquisition is the process of creating a **forensic copy of storage media**.

The goal is to preserve digital evidence while allowing analysis on a duplicate.

Key principle:

```
Never analyze the original evidence
```

Investigators work on a copy of the data.

---

## Why Imaging is Necessary

Direct analysis of the original disk can:

```
modify timestamps
alter filesystem metadata
destroy evidence
```

Forensic imaging prevents these risks.

---

## Types of Acquisition

Two common acquisition methods:

### Dead acquisition

```
system powered off
disk removed
image created from storage media
```

### Live acquisition

```
system running
image collected from active system
```

Dead acquisition is preferred whenever possible.

---

## Disk Imaging Concept

```
Original Disk
      |
      v
Forensic Image
      |
      v
Forensic Analysis
```

The forensic image contains an **exact copy of the disk sectors**.

---

## Disk Image Formats

Common forensic image formats:

```
RAW (.img)
E01 (EnCase format)
AFF (Advanced Forensic Format)
```

RAW images are simple sector-by-sector copies.

---

## Write Blockers

Write blockers prevent modification of the original disk.

Types:

```
hardware write blockers
software write blockers
```

Example hardware devices:

```
Tableau write blocker
WiebeTech write blocker
```

These ensure evidence integrity.

---

## Imaging with dd

The `dd` utility performs raw disk copying.

Example command:

```
dd if=/dev/sda of=disk.img bs=4M status=progress
```

Parameters:

```
if = input file (source disk)
of = output file (image file)
bs = block size
```

---

## dd with Error Handling

Example forensic imaging command:

```
dd if=/dev/sda of=evidence.img bs=4M conv=noerror,sync
```

Options:

```
noerror → continue on read errors
sync → pad missing blocks
```

Useful for damaged disks.

---

## dc3dd

`dc3dd` is an enhanced forensic version of dd.

Features:

```
hash calculation
error handling
progress reporting
```

Example:

```
dc3dd if=/dev/sda of=disk.img hash=sha256 log=acquisition.log
```

---

## GUI Imaging Tools

Graphical acquisition tools include:

```
Guymager
FTK Imager
EnCase Imager
```

These tools provide:

```
hash verification
evidence metadata
logging
```

---

## Hash Verification

After imaging, investigators verify integrity using hashes.

Example:

```
sha256sum disk.img
```

Example result:

```
b1946ac92492d2347c6235b4d2611184 disk.img
```

Hash values confirm the image was not modified.

---

## Hash Verification Workflow

```
Hash original disk
      |
      v
Create forensic image
      |
      v
Hash disk image
      |
      v
Compare hashes
```

Matching hashes confirm integrity.

---

## Chain of Custody

Investigators must document evidence handling.

Example information:

```
who collected evidence
when it was collected
where it was stored
who accessed it
```

Proper documentation ensures legal validity.

---

## Key Takeaways

Important acquisition principles:

```
never modify original evidence
create verified disk images
use write blockers
document acquisition process
```

These steps ensure reliable forensic analysis.
