---
theme: ./theme
title: Digital Forensics Fundamentals
---

# Digital Forensics
## Introduction to File System Forensics

Workshop preparation  
Based on CIRCL DFIR training material

---

# What is Digital Forensics

Digital forensics is the process of:

- identifying
- collecting
- preserving
- analyzing
- presenting

digital evidence.

---

# Digital Evidence

Digital evidence must be:

- preserved
- reproducible
- verifiable
- documented

Important concept:

**Chain of Custody**

---

# Typical Forensic Workflow

1. Identification
2. Acquisition
3. Preservation
4. Analysis
5. Reporting

---

# Disk Acquisition

Acquisition should create a **forensic image**.

Common formats:

- RAW (dd)
- E01 (EnCase)
- AFF

Example:

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

Example:

```bash
sha256sum image.dd
```

---

# File System Forensics

Goal:

Understand how files are stored on disk.

File systems manage:

- file metadata
- cluster allocation
- directory structures

---

# Organizing Data on Disk

A file system maintains:

- metadata
- cluster allocation
- file content

Metadata contains:

- filename
- timestamps
- file size
- permissions
- cluster locations

---

# Deleting Files

Deleting a file usually does **not erase the data**.

Instead:

- metadata entry is marked deleted
- clusters become available for reuse

---

# Slack Space

Unused space within clusters may contain remnants of data.

Types:

- RAM slack
- file slack

---

# Recovering Deleted Data

Manual recovery example:

```bash
dd if=disk.raw of=file.txt bs=32 skip=5003 count=2
```

Metadata-based recovery:

```bash
icat disk.raw inode > recovered.txt
```

---

# Sleuth Kit

Common tools:

- mmls
- fsstat
- fls
- istat
- icat
- blkls
- mactime

Example:

```bash
fsstat disk.dd
fls disk.dd
icat disk.dd inode > file
```

---

# File System Timeline

Important timestamps:

- Created
- Modified
- Accessed
- Metadata changed

Known as:

**MACB timestamps**

---

# FAT File System

FAT = File Allocation Table.

Structure:

- Boot sector
- FAT tables
- Root directory
- Data clusters

---

# FAT Directory Entry

Directory entries store:

- filename
- starting cluster
- file size
- timestamps

---

# FAT Deletion

When a file is deleted:

- first byte of filename is replaced
- cluster chain is cleared

---

# FAT Slack Space Analysis

Example:

```bash
dd if=fat16.dd skip=172 count=4 | xxd
```

---

# FAT Data Hiding

Data may be hidden in:

- bad sectors
- unused clusters
- slack space

---

# NTFS File System

NTFS = New Technology File System.

Key concepts:

- everything is a file
- metadata stored in MFT
- journaling file system

Important structures:

- $MFT
- $LogFile
- $Bitmap
- $Boot

---

# Master File Table (MFT)

The MFT contains one record per file.

Record size:

1024 bytes.

---

# MFT Attributes

Common attributes:

- $STANDARD_INFORMATION
- $FILE_NAME
- $DATA

---

# NTFS Timestamps

NTFS stores timestamps in multiple attributes.

Examples:

- file creation
- modification
- access
- MFT modification

---

# NTFS Alternate Data Streams

NTFS allows hidden data streams.

Example:

```bash
type secret.txt > file.txt:hidden.txt
```

Detection:

```bash
dir /r
```

---

# File Carving

File carving recovers files without metadata.

Tools:

- foremost
- scalpel

---

# Strings Search

Example:

```bash
strings disk.dd | less
```

Useful for:

- URLs
- commands
- indicators

---

# Summary

Digital forensics allows investigators to:

- recover deleted files
- analyze file systems
- reconstruct timelines
- detect hidden data
