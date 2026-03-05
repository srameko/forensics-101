---
layout: section
subtitle: File Allocation Table structure
---

# FAT File System

---

## FAT Layout

Main components:

- Boot sector
- FAT tables
- Root directory
- Data clusters

---

## FAT Directory Entry

Directory entries contain:

- filename
- starting cluster
- file size
- timestamps

---

## FAT Deletion

When a file is deleted:

- filename first byte replaced
- cluster chain cleared
