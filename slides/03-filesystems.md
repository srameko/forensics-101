---
layout: section
subtitle: Understanding how data is stored
---

# Filesystems

---

## Why Filesystems Matter

Digital forensics often begins with understanding the filesystem.

A filesystem defines:

- how data is stored
- how files are organized
- how metadata is recorded

Forensic analysis relies heavily on filesystem structures.

---

## What a Filesystem Does

A filesystem is responsible for:

- organizing files and directories
- allocating disk space
- storing metadata
- tracking file locations

Without the filesystem, data would simply be raw bytes on disk.

---

## Filesystem Components

Most filesystems contain similar core structures:

- boot sector
- allocation structures
- directory entries
- data area

Understanding these structures is essential for forensic analysis.

---

## Disk Layout Overview

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Each area serves a specific purpose:

- **Boot Sector** – filesystem parameters and boot code
- **Allocation Tables** – track which clusters are in use
- **Directory Entries** – file names and metadata
- **Data Area** – actual file content

</div>

<div style="flex:2">

```
+--------------------+
| Boot Sector        |
+--------------------+
| Allocation Tables  |
+--------------------+
| Directory Entries  |
+--------------------+
| Data Area          |
+--------------------+
```

</div>

</div>

---

## File Metadata

Filesystems store metadata about files.

Common metadata includes:

- file name
- file size
- timestamps
- file permissions
- file location

This metadata is often crucial forensic evidence.

---

## File Timestamps

Most filesystems track timestamps such as:

- creation time
- modification time
- access time
- metadata change time

These timestamps are often used to build forensic timelines.

---

## The MACB Model

In forensic analysis, timestamps are often summarized as MACB.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

These timestamps help investigators reconstruct activity on a system.

</div>

<div style="flex:2">

```
M → Modified
A → Accessed
C → Metadata Changed
B → Created (Birth)
```

</div>

</div>

---

## File Deletion

When a file is deleted:

1. The filesystem marks the entry as deleted
2. Disk space becomes available for reuse
3. The file data may still remain on disk

Because of this behavior, deleted files can often be recovered.

---

## Why This Matters for Forensics

Filesystem analysis allows investigators to:

- recover deleted files
- analyze metadata
- reconstruct timelines
- identify suspicious activity

Understanding filesystem internals is a core skill in digital forensics.

---

## Filesystems We Will Examine

In this workshop we will focus on:

- FAT filesystems
- NTFS filesystems

These filesystems are common and widely used in forensic investigations.
