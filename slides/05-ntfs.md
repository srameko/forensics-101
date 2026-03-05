---
layout: section
subtitle: NTFS internals and forensic artifacts
---

# NTFS Filesystem

---

## NTFS Overview

NTFS = **New Technology File System**

Introduced with:

- Windows NT
- Windows 2000
- Windows XP
- modern Windows systems

Key characteristics:

- journaling filesystem
- advanced metadata
- security descriptors
- better reliability than FAT

---

## NTFS Disk Layout

```
+----------------------+
| Boot Sector          |
+----------------------+
| MFT (Master File Table)
+----------------------+
| MFT Mirror           |
+----------------------+
| Metadata Files       |
+----------------------+
| User Data            |
+----------------------+
```

Important concept:

```
Everything is a file
```

Even filesystem metadata.

---

## Master File Table (MFT)

The **Master File Table** is the core structure of NTFS.

It contains:

```
One record per file
```

Typical size of one record:

```
1024 bytes
```

Every file and directory has a corresponding MFT entry.

---

## MFT Record Structure

```
+----------------------+
| MFT Header           |
+----------------------+
| Attribute #1         |
+----------------------+
| Attribute #2         |
+----------------------+
| Attribute #3         |
+----------------------+
| ...                  |
+----------------------+
```

Attributes store all file metadata.

---

## NTFS Attributes

NTFS stores file information as **attributes**.

Examples:

```
$STANDARD_INFORMATION
$FILE_NAME
$DATA
$SECURITY_DESCRIPTOR
```

Attributes can store:

- timestamps
- file names
- permissions
- file content

---

## $STANDARD_INFORMATION

This attribute contains key metadata.

Example:

```
Creation Time
Modification Time
MFT Modification Time
Access Time
```

These timestamps are known as:

```
MACB timestamps
```

---

## MACB Timestamps

MACB stands for:

```
M  Modified
A  Accessed
C  Metadata Changed
B  Birth / Created
```

Example timeline:

```
File created
File modified
File accessed
Metadata updated
```

These timestamps are very important in forensic investigations.

---

## $FILE_NAME Attribute

Stores information about the filename.

Contains:

```
Filename
Parent directory reference
File timestamps
File size
```

A file may have multiple filename attributes.

Example:

```
Short name
Long name
```

---

## $DATA Attribute

This attribute contains the actual file content.

Example:

```
File bytes
```

Small files may be stored directly inside the MFT record.

This is called:

```
Resident data
```

---

## Resident vs Non-Resident Data

Resident file:

```
Data stored inside MFT record
```

Non-resident file:

```
Data stored in disk clusters
```

Example layout:

```
MFT Record
    |
    +-- Data runs
           |
           +-- Cluster chain
```

---

## Data Runs

NTFS uses **data runs** to describe where file clusters are located.

Example:

```
Cluster 100 -> length 5
Cluster 200 -> length 3
```

Meaning:

```
clusters 100-104
clusters 200-202
```

This allows efficient storage of fragmented files.

---

## Alternate Data Streams (ADS)

NTFS supports **multiple data streams** per file.

Example:

```
file.txt
file.txt:secret
```

The second stream may contain hidden data.

Example usage:

```
Zone.Identifier
```

This is often used to mark downloaded files.

---

## NTFS Journaling

NTFS includes a **transaction log**.

Log file:

```
$LogFile
```

Purpose:

```
track filesystem changes
recover from crashes
```

This can also provide useful forensic artifacts.

---

## NTFS Metadata Files

NTFS stores internal metadata as special files.

Examples:

```
$MFT
$MFTMirr
$LogFile
$Bitmap
$Secure
```

These files manage filesystem state.

---

## NTFS Deletion

When a file is deleted:

```
MFT entry is marked as unused
```

However:

```
File data often remains on disk
```

Until overwritten.

This allows forensic recovery.

---

## NTFS Forensic Value

NTFS provides many forensic artifacts:

- MFT records
- timestamps
- filename history
- alternate data streams
- journal logs

These artifacts help reconstruct system activity.

---

## Why NTFS is Important for DFIR

Most modern Windows systems use NTFS.

Therefore forensic investigations often rely on:

```
MFT analysis
timeline reconstruction
artifact correlation
```
