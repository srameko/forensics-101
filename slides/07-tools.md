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

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

This command copies an entire disk into an image file.

</div>

<div style="flex:2">

```
dd if=/dev/sda of=disk.img bs=4M status=progress
```

</div>

</div>

---

## Example: dc3dd

`dc3dd` is an enhanced forensic version of `dd`.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Additional features include:

- hash verification
- improved error handling
- logging

</div>

<div style="flex:2">

```
dc3dd if=/dev/sda of=disk.img hash=sha256 log=acquisition.log
```

</div>

</div>

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

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

This helps identify partitions inside a disk image.

</div>

<div style="flex:2">

```
mmls disk.img
```

</div>

</div>

---

## Example: fls

`fls` lists files and directories from a filesystem.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Options:

- `-r` → recursive listing
- `-d` → show deleted files

</div>

<div style="flex:2">

```
fls -r disk.img
```

</div>

</div>

---

## Example: icat

`icat` extracts file content from a disk image.

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

This command extracts the file associated with inode 128.

</div>

<div style="flex:2">

```
icat disk.img 128 > recovered_file.txt
```

</div>

</div>

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

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Scalpel scans the disk image and extracts recognized file types.

</div>

<div style="flex:2">

```
scalpel disk.img -o output_directory
```

</div>

</div>

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

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

This extracts artifacts from the disk image into a timeline database.

</div>

<div style="flex:2">

```
log2timeline.py timeline.plaso disk.img
```

</div>

</div>

---

## Creating a Timeline

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Example workflow:

1. Extract artifacts using log2timeline
2. Convert timeline data
3. Analyze activity chronologically

</div>

<div style="flex:2">

```
psort.py -o l2tcsv timeline.plaso > timeline.csv
```

This produces a timeline that investigators can analyze.

</div>

</div>

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
