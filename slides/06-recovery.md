---
layout: section
subtitle: Recovering deleted files and forensic artifacts
---

# Deleted Files & Recovery

---

## What Happens When a File is Deleted

Deleting a file usually does **not remove the data immediately**.

Instead the filesystem:

- marks metadata as deleted
- frees the clusters
- leaves the data intact

```
Metadata  -> deleted
Clusters  -> reusable
Data      -> still present
```

---

## Conceptual Example

Before deletion:

```
Directory entry -> cluster 12
Cluster chain -> 12 -> 13 -> 14
```

After deletion:

```
Directory entry -> marked deleted
Clusters -> available for reuse
```

Data remains until overwritten.

---

## FAT Deletion Example

Directory entry:

```
TEST.TXT
```

After deletion:

```
E5EST.TXT
```

Meaning:

```
0xE5 = entry available
```

Cluster chain may still contain the file data.

---

## NTFS Deletion

In NTFS the file is marked as deleted in the **MFT record**.

Example:

```
MFT entry flag -> unused
```

The file content may still exist in the clusters.

---

## Why Recovery Works

Forensic tools reconstruct files using:

- metadata structures
- cluster allocation
- file system artifacts

Example workflow:

```
Find file metadata
Locate clusters
Extract file data
```

---

## Sleuth Kit Overview

The Sleuth Kit provides command line tools for forensic analysis.

Common tools:

```
mmls
fsstat
fls
istat
icat
blkls
mactime
```

Each tool analyzes a different aspect of the filesystem.

---

## Step 1 – Identify Partitions

```
mmls disk.img
```

Example output:

```
DOS Partition Table
Offset Sector: 0

Slot    Start      End        Length
00:00   0000000000 0000002047 2048   Primary Table
00:01   0000002048 0004095999 4093952 NTFS
```

This tells us where the filesystem starts.

---

## Step 2 – Filesystem Information

```
fsstat disk.img
```

This command shows:

- filesystem type
- cluster size
- metadata locations
- MFT position

Example:

```
File System Type: NTFS
Cluster Size: 4096
MFT Entry Size: 1024
```

---

## Step 3 – List Files

```
fls disk.img
```

Example output:

```
r/r 128-128-1: document.txt
r/r *129-129-1: deleted.txt
d/d 130-130-1: Documents
```

Deleted files are marked with:

```
*
```

---

## Step 4 – Inspect File Metadata

```
istat disk.img 129
```

This displays:

- timestamps
- file size
- cluster locations
- metadata attributes

Example:

```
Created: 2023-10-01
Modified: 2023-10-02
Accessed: 2023-10-03
```

---

## Step 5 – Recover File Data

```
icat disk.img 129 > recovered.txt
```

Meaning:

```
Extract file content from inode / MFT entry
```

Recovered file is written to disk.

---

## Extract Unallocated Space

Sometimes deleted files no longer have metadata.

We can analyze **unallocated space**.

```
blkls disk.img > unallocated.raw
```

This extracts all unused disk space.

---

## File Carving

File carving searches raw data for file signatures.

Example:

```
foremost disk.img
```

or

```
scalpel disk.img
```

These tools detect files based on headers.

Example signatures:

```
JPEG
PDF
ZIP
DOCX
```

---

## Slack Space

Slack space is unused space within clusters.

Example:

```
Cluster size = 4096 bytes
File size = 3000 bytes
Slack = 1096 bytes
```

Diagram:

```
+-----------------------+
| File Data             |
+-----------------------+
| Slack Space           |
+-----------------------+
```

Slack space may contain remnants of previous files.

---

## Timeline Creation

Timeline analysis reconstructs system activity.

Steps:

```
fls -r -m / disk.img > bodyfile
```

Then generate timeline:

```
mactime -b bodyfile
```

Output:

```
Date        Time        Activity
--------------------------------
2023-10-01  File created
2023-10-02  File modified
2023-10-03  File accessed
```

---

## Why Timelines Are Useful

Timelines help investigators answer:

- What happened?
- When did it happen?
- What files were involved?

Timeline correlation is key in incident response.

---

## Typical DFIR Workflow

```
1 Identify partitions
2 Identify filesystem
3 List files
4 Locate deleted files
5 Recover data
6 Build timeline
```

Tools involved:

```
mmls
fsstat
fls
istat
icat
mactime
```

---

## Key Takeaways

Deleted files often remain recoverable because:

- metadata structures persist
- clusters are reused later
- filesystem artifacts remain

This is why **forensic recovery is possible**.
