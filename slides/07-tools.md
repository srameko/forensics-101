---
layout: section
subtitle: Tools used in forensic investigations
---

# Forensic Tools

---

## Why Tools Matter

Digital forensics relies heavily on specialized tools.

These tools help investigators:

- acquire disk images
- analyze filesystems
- recover deleted files
- extract forensic artifacts
- build timelines

Understanding how these tools work is essential for investigations.

---

## Tool Categories

Forensic tools generally fall into several categories:

- acquisition tools
- filesystem analysis tools
- recovery tools
- artifact extraction tools
- timeline analysis tools

Each category supports a different phase of the investigation.

---

## Disk Imaging Tools

Common disk acquisition tools include:

- `dd`
- `dc3dd`
- FTK Imager
- Guymager

These tools create **forensic images of storage media**.

---

## Example: dd

The `dd` command performs a raw sector-by-sector copy.

Example:

```
dd if=/dev/sda of=disk.img bs=4M status=progress
```

This command copies an entire disk into an image file.

---

## Example: dc3dd

`dc3dd` is an enhanced forensic version of `dd`.

Example:

```
dc3dd if=/dev/sda of=disk.img hash=sha256 log=acquisition.log
```

Additional features include:

- hash verification
- improved error handling
- logging

---

## The Sleuth Kit

The Sleuth Kit (TSK) is a widely used forensic toolkit.

It allows investigators to:

- analyze filesystems
- recover deleted files
- inspect filesystem metadata

TSK works directly with disk images.

---

## Important Sleuth Kit Tools

Common Sleuth Kit commands include:

- `mmls`
- `fsstat`
- `fls`
- `icat`
- `istat`

Each command provides different forensic insights.

---

## Example: mmls

`mmls` displays partition layouts.

Example:

```
mmls disk.img
```

This helps identify partitions inside a disk image.

---

## Example: fls

`fls` lists files and directories from a filesystem.

Example:

```
fls -r disk.img
```

Options:

- `-r` → recursive listing
- `-d` → show deleted files

---

## Example: icat

`icat` extracts file content from a disk image.

Example:

```
icat disk.img 128 > recovered_file.txt
```

This command extracts the file associated with inode 128.

---

## File Carving Tools

File carving tools recover files without filesystem metadata.

Common tools include:

- scalpel
- foremost
- photorec
- bulk extractor

These tools scan raw disk data for file signatures.

---

## Example: Scalpel

Example command:

```
scalpel disk.img -o output_directory
```

Scalpel scans the disk image and extracts recognized file types.

---

## Timeline Tools

Timeline tools reconstruct system activity chronologically.

Common tools include:

- log2timeline
- plaso
- Timesketch

These tools combine multiple artifact sources.

---

## Example: log2timeline

Example command:

```
log2timeline.py timeline.plaso disk.img
```

This extracts artifacts from the disk image into a timeline database.

---

## Creating a Timeline

Example workflow:

1. Extract artifacts using log2timeline
2. Convert timeline data
3. Analyze activity chronologically

Example command:

```
psort.py -o l2tcsv timeline.plaso > timeline.csv
```

This produces a timeline that investigators can analyze.

---

## Typical DFIR Tool Workflow

A simplified investigation workflow might look like:

1. Acquire disk image (`dd`)
2. Identify partitions (`mmls`)
3. Analyze filesystem (`fsstat`)
4. List files (`fls`)
5. Recover files (`icat`)
6. Extract artifacts (`log2timeline`)
7. Build timeline

Each step reveals additional evidence.

---

## Key Takeaway

Forensic tools help investigators transform raw disk data into useful evidence.

By combining multiple tools, investigators can:

- analyze filesystems
- recover deleted files
- extract artifacts
- reconstruct system activity
