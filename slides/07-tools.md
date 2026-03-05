---
layout: section
subtitle: Practical forensic analysis tools
---

# Forensic Tools

---

## Toolchain Overview

A typical forensic investigation uses multiple tools.

```
Disk image
   |
   v
Acquisition
   |
   v
Filesystem analysis
   |
   v
File recovery
   |
   v
Timeline analysis
```

Example toolchain:

```
dd
The Sleuth Kit
scalpel
log2timeline
```

---

# Disk Acquisition

---

## Disk Imaging

Before analysis we must create a **forensic disk image**.

Goals:

- preserve original evidence
- perform analysis on a copy
- maintain forensic integrity

Common format:

```
RAW disk image
```

---

## dd – Basic Disk Imaging

The `dd` utility copies raw disk data.

Example:

```
dd if=/dev/sda of=disk.img bs=4M status=progress
```

Meaning:

```
if = input file (source disk)
of = output file (image)
bs = block size
```

---

## dd – Forensic Imaging Example

```
dd if=/dev/sda of=evidence.img bs=4M conv=noerror,sync
```

Options:

```
noerror → continue on read errors
sync → pad blocks with zeros
```

Useful when imaging damaged disks.

---

## Hash Verification

After imaging we verify integrity.

```
sha256sum evidence.img
```

Example:

```
b1946ac92492d2347c6235b4d2611184 evidence.img
```

Hash ensures evidence integrity.

---

# Filesystem Analysis

---

## Identify Partitions

```
mmls disk.img
```

Example output:

```
DOS Partition Table

Slot    Start      End        Length
00:01   0000002048 0004095999 4093952 NTFS
```

This tells us where the filesystem begins.

---

## Filesystem Metadata

```
fsstat disk.img
```

Example output:

```
File System Type: NTFS
Cluster Size: 4096
MFT Entry Size: 1024
```

This reveals filesystem structures.

---

## Listing Files

```
fls disk.img
```

Example:

```
r/r 128-128-1: report.txt
r/r *129-129-1: deleted.txt
```

Symbol:

```
*
```

means **deleted file**.

---

## Inspect File Metadata

```
istat disk.img 129
```

Example:

```
Created: 2023-10-01
Modified: 2023-10-02
Accessed: 2023-10-03
```

Also shows cluster allocation.

---

## Recover File Data

```
icat disk.img 129 > recovered.txt
```

This extracts file content from disk image.

---

# File Carving

---

## What is File Carving?

File carving searches raw disk data for file signatures.

Useful when:

- metadata is destroyed
- filesystem is corrupted
- deleted files lost their directory entries

---

## Scalpel

Scalpel is a **file carving tool**.

It scans disk images for file headers.

Example:

```
scalpel disk.img
```

Recovered files are placed into output folders.

---

## Example Signatures

Carving tools detect file types using signatures.

Example:

```
JPEG  FF D8 FF
PDF   25 50 44 46
ZIP   50 4B 03 04
```

These signatures mark file headers.

---

# Timeline Analysis

---

## Why Timelines Matter

Investigators want to know:

```
What happened?
When did it happen?
Which files were involved?
```

Timeline analysis answers these questions.

---

## log2timeline

log2timeline extracts timestamps from many sources.

Artifacts include:

```
filesystem metadata
Windows artifacts
logs
registry
```

Output is stored in a timeline database.

---

## log2timeline Example

```
log2timeline.py timeline.plaso disk.img
```

This parses artifacts and creates a **plaso timeline file**.

---

## Generate Timeline

Convert timeline database to readable format:

```
psort.py -o l2tcsv timeline.plaso > timeline.csv
```

Example output:

```
Date        Time        Description
-----------------------------------------
2023-10-01  10:32       File created
2023-10-01  10:33       File modified
2023-10-01  10:35       File deleted
```

---

## Timeline Correlation

Example timeline reconstruction:

```
10:32 File created
10:33 File modified
10:35 File deleted
10:36 USB inserted
```

Investigators correlate these events.

---

## Full DFIR Workflow

```
1 Acquire disk image (dd)
2 Identify partitions (mmls)
3 Inspect filesystem (fsstat)
4 List files (fls)
5 Recover deleted files (icat)
6 Carve files (scalpel)
7 Build timeline (log2timeline)
```

---

## Key Commands

Disk imaging

```
dd if=/dev/sda of=disk.img bs=4M
```

Filesystem analysis

```
mmls
fsstat
fls
istat
icat
```

Recovery

```
scalpel
```

Timeline

```
log2timeline
psort
```
