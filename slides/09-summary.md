---
layout: section
subtitle: Key concepts and investigation workflow
---

# Summary

---

## What We Covered

During this introduction to digital forensics we explored:

- filesystem structures
- forensic artifacts
- file recovery
- timeline analysis
- memory forensics
- forensic tools

These concepts form the foundation of forensic investigations.

---

## Filesystem Concepts

We examined how filesystems store and manage data.

Key concepts include:

- filesystem layout
- metadata structures
- cluster allocation
- directory entries

Understanding filesystem internals is essential for forensic analysis.

---

## FAT Filesystem

Important FAT concepts:

- cluster chains
- FAT allocation table
- directory entries
- deleted file markers

Deletion in FAT modifies metadata but often leaves data recoverable.

---

## NTFS Filesystem

Important NTFS structures:

- Master File Table (MFT)
- file attributes
- timestamps
- alternate data streams

NTFS stores extensive metadata useful for forensic investigations.

---

## File Recovery

When files are deleted:

1. The filesystem marks metadata as deleted
2. Disk space becomes available for reuse
3. File data may still remain on disk

Investigators can often recover deleted files from remaining disk data.

---

## Forensic Artifacts

Artifacts provide evidence of system and user activity.

Common artifact sources include:

- filesystem metadata
- event logs
- registry data
- application artifacts

These artifacts help investigators reconstruct events.

---

## Forensic Tools

Important forensic tools include:

- `dd`
- The Sleuth Kit
- `scalpel`
- `log2timeline`
- Volatility 3

Each tool helps extract different types of forensic evidence.

---

## Timeline Analysis

Timeline analysis reconstructs events chronologically.

Typical timeline sources include:

- filesystem timestamps
- system logs
- registry artifacts
- application data

This helps investigators understand system activity.

---

## Memory Forensics

RAM contains volatile evidence that is lost on shutdown.

Key memory forensics concepts:

- acquire memory before shutting down the system
- Volatility 3 for memory analysis
- process analysis (`pslist`, `pstree`, `cmdline`)
- network connections (`netscan`)
- malware detection (`malfind`)

Memory forensics reveals evidence invisible on disk.

---

## Anti-Forensics

Attackers may attempt to hide their actions.

Common techniques include:

- timestomping
- log deletion
- artifact removal

Investigators must validate evidence using multiple artifact sources.

---

## Core DFIR Workflow

A simplified forensic investigation workflow:

1. Acquire memory image
2. Acquire disk image
3. Identify partitions
4. Analyze filesystem
5. Extract artifacts
6. Recover files
7. Build timeline
8. Reconstruct the incident

This structured process helps investigators understand what happened.

---

## Key Takeaways

Important lessons from digital forensics:

- never trust a single artifact
- correlate multiple sources
- verify timestamps
- preserve evidence integrity

Careful analysis of system artifacts allows investigators to reconstruct events.
