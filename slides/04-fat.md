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

- Boot Sector
- FAT Table
- Root Directory
- Data Area

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

Each area has a specific role in managing files.

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

Example table:

```
Cluster   FAT Entry
-------   ---------
2         3
3         4
4         EOF
```

This means:

```
Cluster chain

2 → 3 → 4 → EOF
```

Each cluster points to the next cluster belonging to the file.

---

## File Stored in Clusters

Files are stored across one or more clusters.

Example:

```
File A

+-------+-------+-------+
|   2   |   3   |   4   |
+-------+-------+-------+
```

The FAT table links these clusters together.

---

## Directory Entries

Files are represented by directory entries.

Typical directory entry fields include:

- filename
- extension
- attributes
- timestamps
- starting cluster
- file size

Example structure:

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

These entries are critical forensic artifacts.

---

## FAT File Deletion

When a file is deleted in FAT:

1. The first character of the filename is replaced
2. The directory entry becomes available
3. The data clusters remain on disk

Because of this behavior, deleted files can often be recovered.

---

## Deleted File Marker

The first byte of the filename is replaced with:

```
0xE5
```

Example:

Original filename:

```
TEST.TXT
```

After deletion:

```
?EST.TXT
```

The entry is marked as deleted but still recoverable.

---

## Why Recovery Works

Deletion only modifies filesystem metadata.

The data clusters often remain untouched until overwritten.

```
Directory entry → marked deleted
Cluster chain → still contains data
```

Forensic tools can reconstruct files from this information.

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
