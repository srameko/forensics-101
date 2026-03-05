---
layout: section
subtitle: Understanding how data is stored
---

# File System Basics

---

## File Systems

File systems manage:

- file metadata
- cluster allocation
- directory structures

---

## Metadata

Metadata typically includes:

- filename
- timestamps
- file size
- permissions

---

## Disk Structure

```mermaid
flowchart LR
    A[Physical Disk]
    B[MBR]
    C[Partition]
    D[Filesystem]
    E[Files]

    A --> B --> C --> D --> E
```

---

## Disk Layout

```
+------------------------------------------------+
|                Physical Disk                   |
+------------------------------------------------+
| MBR | Partition 1 | Partition 2 | Partition N |
+------------------------------------------------+
```

---

## Master Boot Record (MBR)

The **Master Boot Record** is located in the first sector of the disk.

It contains:

- boot loader code
- partition table
- boot signature

---

## MBR Structure

```
+----------------------------+
| Boot Code (446 bytes)      |
+----------------------------+
| Partition Table (64 bytes) |
+----------------------------+
| Signature 0x55AA (2 bytes) |
+----------------------------+
```

---

## Partition Table Entry

Each partition entry is **16 bytes**.

```
+---------------------+
| Boot flag           |
| Starting CHS        |
| Partition type      |
| Ending CHS          |
| Starting LBA        |
| Size in sectors     |
+---------------------+
```

---

## Partition Types

Examples:

- `0x07` NTFS / exFAT
- `0x0B` FAT32
- `0x83` Linux filesystem
- `0x82` Linux swap

---

## Filesystem Concept

Inside a partition we find a **filesystem**.

Typical responsibilities:

- manage file metadata
- allocate storage blocks
- organize directories
- track free space

---

## Filesystem Layout (Generic)

```
+----------------------+
| Boot Sector          |
+----------------------+
| Filesystem Metadata  |
+----------------------+
| Allocation Structures|
+----------------------+
| Data Blocks          |
+----------------------+
```

---

## Blocks / Clusters

Files are not stored as continuous data.

They are split into **blocks (or clusters)**.

```
File A

+-----+-----+-----+
| B1  | B2  | B3  |
+-----+-----+-----+
```

---

## Fragmentation

Files can become fragmented across the disk.

```
Disk Blocks

+---+---+---+---+---+---+
|A1 |B1 |A2 |C1 |A3 |D1 |
+---+---+---+---+---+---+
```

File A is stored in blocks:

```
A1 -> A2 -> A3
```

---

## Deleted Files (Concept)

When a file is deleted:

- metadata entry is marked as deleted
- clusters become available
- data usually remains on disk

This is why **forensic recovery is possible**.
