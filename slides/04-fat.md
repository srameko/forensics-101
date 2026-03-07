---
layout: section
subtitle: File Allocation Table filesystem
---

# FAT Filesystem

---

## What is FAT?

FAT stands for **File Allocation Table**.

It is one of the earliest widely used filesystems and is still found on:

- USB drives
- SD cards
- embedded systems
- legacy Windows systems

Because of its simple structure, FAT is often used to teach filesystem forensics.

---

## FAT Filesystem Structure

A FAT disk typically contains four main areas:

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

- **Boot Sector** – filesystem parameters
- **FAT Table** – cluster allocation tracking
- **Root Directory** – top-level directory entries
- **Data Area** – actual file content

Each area has a specific role in managing files.

</div>

<div style="flex:2">

```
+----------------------+
| Boot Sector          |
+----------------------+
| FAT Table            |
+----------------------+
| Root Directory       |
+----------------------+
| Data Area            |
+----------------------+
```

</div>

</div>

---

## Boot Sector

The boot sector contains important filesystem metadata.

Examples include:

- filesystem type
- cluster size
- number of FAT tables
- location of filesystem structures

Investigators often analyze the boot sector to understand disk layout.

---

## FAT Table Concept

The **File Allocation Table** tracks how clusters are linked together.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Each cluster points to the next cluster belonging to the file.

```
Cluster   FAT Entry
-------   ---------
2         3
3         4
4         EOF
```

</div>

<div style="flex:2">

Cluster chain:

```
2 → 3 → 4 → EOF
```

</div>

</div>

---

## File Stored in Clusters

Files are stored across one or more clusters.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

The FAT table links these clusters together into a chain.

A file may span many clusters depending on its size.

</div>

<div style="flex:2">

```
File A

+-------+-------+-------+
|   2   |   3   |   4   |
+-------+-------+-------+
```

</div>

</div>

---

## Directory Entries

Files are represented by directory entries.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Typical directory entry fields include:

- filename
- extension
- attributes
- timestamps
- starting cluster
- file size

These entries are critical forensic artifacts.

</div>

<div style="flex:2">

```
+------------+
| Filename   |
| Extension  |
| Attributes |
| Time       |
| Date       |
| Cluster    |
| File Size  |
+------------+
```

</div>

</div>

---

## FAT File Deletion

When a file is deleted in FAT:

1. The first character of the filename is replaced
2. The directory entry becomes available
3. The data clusters remain on disk

Because of this behavior, deleted files can often be recovered.

---

## Deleted File Marker

The first byte of the filename is replaced with `0xE5`.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Original filename:

```
TEST.TXT
```

The entry is marked as deleted but still contains recoverable data.

</div>

<div style="flex:2">

After deletion:

```
?EST.TXT
```

First byte → `0xE5`

</div>

</div>

---

## Why Recovery Works

Deletion only modifies filesystem metadata.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

The data clusters often remain untouched until overwritten.

Forensic tools can reconstruct files from this information.

</div>

<div style="flex:2">

```
Directory entry → marked deleted
Cluster chain  → still contains data
```

</div>

</div>

---

## FAT Forensic Opportunities

Investigators can often:

- recover deleted files
- analyze directory entries
- reconstruct cluster chains
- identify previously deleted filenames

This makes FAT relatively easy to analyze compared to more complex filesystems.

---

## Key Takeaway

FAT deletion does **not erase data**.

It only:

- marks directory entries as deleted
- frees clusters for reuse

Until clusters are overwritten, the data may still be recoverable.
