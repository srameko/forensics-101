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

1. Acquire disk image
2. Identify partitions
3. Analyze filesystem
4. Extract artifacts
5. Recover files
6. Build timeline
7. Reconstruct the incident

This structured process helps investigators understand what happened.

---

## Key Takeaways

Important lessons from digital forensics:

- never trust a single artifact
- correlate multiple sources
- verify timestamps
- preserve evidence integrity

Careful analysis of system artifacts allows investigators to reconstruct events.
