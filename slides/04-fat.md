---
layout: section
subtitle: File Allocation Table internals
---

# FAT Filesystem

---

## FAT Filesystem Overview

FAT = **File Allocation Table**

Historically used in:

- MS-DOS
- Windows 95/98
- USB flash drives
- SD cards

Variants:

- FAT12
- FAT16
- FAT32

---

## FAT Disk Layout

```
+----------------------+
| Boot Sector          |
+----------------------+
| FAT Table #1         |
+----------------------+
| FAT Table #2         |
+----------------------+
| Root Directory       |
+----------------------+
| Data Area            |
+----------------------+
```

Explanation:

- Boot sector contains filesystem metadata
- FAT tables track cluster allocation
- Root directory contains file entries
- Data area stores file content

---

## Boot Sector

The FAT boot sector contains important metadata.

Examples:

- bytes per sector
- sectors per cluster
- number of FAT tables
- root directory size

Example fields:

```
Bytes per sector
Sectors per cluster
Reserved sectors
Number of FATs
Root directory entries
```

These values are used to locate filesystem structures.

---

## Data Storage Concept

Files are stored in **clusters**.

A cluster is a group of sectors.

Example:

```
Cluster size = 4 KB
```

A file may occupy multiple clusters.

---

## Cluster Chain

Clusters belonging to a file are linked through the FAT.

Example FAT table:

```
Cluster   FAT Entry
-------   ---------
2         3
3         4
4         EOF
```

Cluster chain:

```
2 -> 3 -> 4 -> EOF
```

Meaning the file occupies clusters 2, 3 and 4.

---

## Visual Cluster Chain

```
File A

+-------+-------+-------+
|   2   |   3   |   4   |
+-------+-------+-------+
```

FAT table links these clusters together.

---

## FAT Entry Values

FAT entries store the status of clusters.

Examples:

```
0x0000   free cluster
0xFFF7   bad cluster
0xFFFF   end of file
```

Meaning:

- free clusters can be allocated
- bad clusters should not be used
- EOF marks the end of a cluster chain

---

## Directory Entries

Each file is described by a **directory entry**.

Directory entry size:

```
32 bytes
```

Structure:

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

---

## Directory Entry Attributes

File attributes define file type and properties.

Examples:

```
0x01 Read Only
0x02 Hidden
0x04 System
0x08 Volume Label
0x10 Directory
0x20 Archive
```

These attributes help identify special files.

---

## Long File Names

Original FAT used **8.3 filenames**.

Example:

```
FILE.TXT
```

Modern FAT uses **Long File Name (LFN)** entries.

LFN entries are stored as multiple directory entries.

---

## Example Directory Entry

Example file:

```
REPORT.TXT
```

Directory entry stores:

```
Filename
Attributes
Timestamp
Starting cluster
File size
```

The cluster number points to the file data.

---

## File Deletion

When a file is deleted, its directory entry is modified.

Example:

```
TEST.TXT
```

becomes:

```
?EST.TXT
```

Actually the first byte becomes:

```
0xE5
```

Meaning:

```
Directory entry is available for reuse
```

---

## Deleted File Example

```
Original:

TEST.TXT

Deleted:

E5EST.TXT
```

The rest of the metadata remains intact.

---

## What Happens to the Data?

Deleting a file does **not erase the data**.

Only metadata is changed.

Clusters remain in the data area until overwritten.

Example:

```
Cluster chain still contains file data
```

---

## Why Forensic Recovery Works

Recovery tools use:

- directory entries
- cluster numbers
- FAT tables

to reconstruct deleted files.

Example tools:

- The Sleuth Kit
- Autopsy
- EnCase

---

## FAT Weaknesses

FAT has several limitations:

- fragmentation
- lack of journaling
- limited metadata
- limited file size

Despite this, FAT is useful for forensic education.

---

## Forensic Relevance

FAT is important because:

- simple structure
- clear deletion mechanism
- easy cluster analysis

It is often used in **forensic training datasets**.
