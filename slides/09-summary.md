---
layout: section
subtitle: Key concepts and investigation workflow
---

# Summary

---

## What We Covered

During this introduction to digital forensics we explored:

```
filesystem structures
forensic artifacts
file recovery
timeline analysis
forensic tools
```

These concepts form the foundation of forensic investigations.

---

# Filesystems

---

## Filesystem Fundamentals

We examined how filesystems store data.

Key structures:

```
Boot sector
File allocation structures
Directory entries
Data clusters
```

Understanding filesystem internals is essential for forensic analysis.

---

## FAT Filesystem

Important FAT concepts:

```
cluster chains
FAT allocation table
directory entries
deleted file markers
```

Deletion in FAT only modifies metadata.

Data often remains recoverable.

---

## NTFS Filesystem

Important NTFS structures:

```
Master File Table (MFT)
attributes
data runs
alternate data streams
```

NTFS stores extensive metadata useful for investigations.

---

# File Recovery

---

## Deleted File Recovery

When files are deleted:

```
metadata changes
clusters become reusable
data remains on disk
```

Forensic tools reconstruct files from remaining data structures.

---

## File Carving

File carving allows recovery when metadata is lost.

Tools detect file types using signatures.

Example signatures:

```
JPEG
PDF
ZIP
```

This technique analyzes raw disk data.

---

# Forensic Artifacts

---

## System Artifacts

Investigators rely on many artifact sources.

Examples:

```
filesystem metadata
event logs
registry
browser history
application artifacts
```

Artifacts reveal user and system activity.

---

## Artifact Locations

We examined common artifact locations across operating systems.

Windows

```
Prefetch
Jump Lists
Event logs
Registry
Recycle Bin
```

Linux

```
/var/log
.bash_history
cron jobs
```

macOS

```
unified logs
recent items
system logs
```

---

# Forensic Tools

---

## Core Investigation Tools

Important forensic tools include:

```
dd
The Sleuth Kit
scalpel
log2timeline
```

Each tool focuses on different aspects of forensic analysis.

---

## Typical DFIR Workflow

A simplified forensic workflow:

```
Acquire disk image
Identify partitions
Analyze filesystem
Locate artifacts
Recover files
Build timeline
```

This structured process helps investigators reconstruct events.

---

# Timeline Analysis

---

## Timeline Reconstruction

Timeline analysis reconstructs events chronologically.

Sources include:

```
filesystem timestamps
event logs
registry artifacts
application data
```

This provides insight into system activity.

---

## Supertimeline

A supertimeline merges many artifact sources.

```
filesystem events
log events
registry changes
application activity
```

This provides a detailed picture of system behavior.

---

# Anti-Forensics

---

## Timestomping

Attackers may manipulate timestamps to hide activity.

Example techniques:

```
timestamp modification
log deletion
artifact removal
```

Investigators must validate timestamps across multiple sources.

---

# Key Takeaways

---

## Core Principles of Digital Forensics

Important lessons:

```
Never trust a single artifact
Correlate multiple data sources
Validate timelines
Preserve evidence integrity
```

Forensic analysis relies on careful interpretation of system artifacts.

---

## What Comes Next

In the practical workshop you will:

```
analyze a disk image
locate artifacts
recover deleted files
build a forensic timeline
```

This will demonstrate how these concepts apply to real investigations.
