---
layout: section
subtitle: Timeline and supertimeline analysis
---

# Timeline Analysis

---

## Why Timeline Analysis Matters

A forensic investigation is about reconstructing events.

Questions investigators ask:

```
What happened?
When did it happen?
What happened before and after?
```

Timeline analysis reconstructs system activity chronologically.

---

## Basic Timeline Concept

Example system activity:

```
10:01 File created
10:02 File modified
10:05 File deleted
10:06 USB device connected
10:07 Program executed
```

A timeline allows investigators to correlate events.

---

## Sources of Timestamps

Timestamps originate from many sources.

Examples:

```
filesystem metadata
event logs
registry
browser history
application logs
```

Combining these creates a more accurate timeline.

---

## Filesystem Timestamps

Filesystems record timestamps for files.

Example:

```
Creation
Modification
Access
Metadata change
```

These timestamps form the basis of many timelines.

---

## MACB Timestamps

MACB stands for:

```
M  Modified
A  Accessed
C  Metadata Changed
B  Birth (Created)
```

Example:

```
File created      B
File modified     M
Metadata changed  C
File opened       A
```

These events describe file activity.

---

## MACB Visualization

```
Time →
----------------------------------

B  File created
M  File modified
A  File accessed
C  Metadata changed
```

Example:

```
10:01 B
10:02 M
10:03 A
10:04 C
```

---

## Why Timestamps Can Be Misleading

Timestamps may change without user interaction.

Examples:

```
antivirus scanning
system indexing
backup operations
```

Investigators must interpret timestamps carefully.

---

# Timeline with Sleuth Kit

---

## Generating a Bodyfile

First step in timeline creation:

```
fls -r -m / disk.img > bodyfile
```

Options:

```
-r   recursive listing
-m   mount point
```

The bodyfile contains filesystem metadata.

---

## Bodyfile Format

Example entry:

```
0|/Users/alice/document.txt|129|r/rrwxrwxrwx|0|0|1024|1696000000|1696000500|1696000600|1696000700
```

Fields include:

```
file path
inode
file size
MACB timestamps
```

---

## Creating Timeline with mactime

Convert bodyfile into timeline.

```
mactime -b bodyfile
```

Example output:

```
Date        Time        Activity
----------------------------------------
2023-10-01  10:01       document.txt created
2023-10-01  10:02       document.txt modified
2023-10-01  10:03       document.txt accessed
```

---

## Filtering Timeline

Example:

```
mactime -b bodyfile 2023-10-01..2023-10-03
```

This filters events by date range.

Useful during investigations.

---

# Supertimeline

---

## What is a Supertimeline?

A supertimeline combines many artifact sources.

Instead of only filesystem timestamps.

Example sources:

```
filesystem
event logs
registry
browser history
prefetch
USB artifacts
```

All events are merged into a single timeline.

---

## Supertimeline Concept

```
Filesystem events
       +
Registry events
       +
Log events
       +
Application events
---------------------------
        Supertimeline
```

This provides a much richer view of system activity.

---

# log2timeline

---

## log2timeline Overview

log2timeline is part of the Plaso framework.

It parses hundreds of artifact types.

Examples:

```
Windows event logs
registry
browser history
filesystem metadata
```

The result is a timeline database.

---

## Creating a Timeline Database

Example command:

```
log2timeline.py timeline.plaso disk.img
```

This extracts artifacts and stores them in a plaso file.

---

## Converting Timeline Output

Generate human readable output:

```
psort.py -o l2tcsv timeline.plaso > timeline.csv
```

Example output:

```
Date        Time        Description
-----------------------------------------
2023-10-01  10:01       File created
2023-10-01  10:02       File modified
2023-10-01  10:03       Chrome executed
2023-10-01  10:05       USB inserted
```

---

## Timeline Correlation

Example investigation:

```
10:01 malware downloaded
10:02 malware executed
10:03 persistence created
10:05 command and control connection
```

A timeline reveals the attack chain.

---

## Timeline Visualization

Example investigation flow:

```
User login
   ↓
File download
   ↓
File execution
   ↓
Persistence installed
   ↓
Network activity
```

Timeline analysis connects these events.

---

## Advantages of Supertimelines

Supertimelines provide:

```
better context
event correlation
cross-artifact visibility
```

This is critical in incident response investigations.

---

# Anti-Forensics: Timestomping

---

## What is Timestomping?

Timestomping is a technique used to manipulate file timestamps.

Attackers modify timestamps to hide malicious activity.

Example goal:

```
Make malicious file appear older than it actually is
```

This can disrupt timeline analysis.

---

## Example Scenario

Original timeline:

```
10:01 malware.exe created
10:02 malware.exe executed
```

After timestomping:

```
10:01 system file created
08:13 malware.exe created
```

The malicious file now appears older than system activity.

---

## Typical Timestomping Targets

Attackers modify timestamps such as:

```
Creation time
Modification time
Access time
Metadata change time
```

These correspond to:

```
MACB timestamps
```

---

## Timestomping Tools

Examples of tools used for timestomping.

```
PowerShell
SetFile
touch
```

Example PowerShell:

```
(Get-Item malware.exe).CreationTime="01/01/2015"
```

Example Linux:

```
touch -t 201501010101 malware
```

---

## Example MACB Manipulation

Normal timeline:

```
B 10:01 file created
M 10:02 file modified
A 10:03 file accessed
```

After timestomping:

```
B 2015-01-01
M 2015-01-01
A 2015-01-01
```

File appears historically old.

---

## Detecting Timestomping

Investigators look for inconsistencies.

Examples:

```
MFT timestamps vs FILE_NAME timestamps
log events vs file timestamps
prefetch execution vs file creation time
```

When timestamps do not match → suspicious activity.

---

## NTFS Timestamp Comparison

NTFS stores timestamps in multiple locations.

Example:

```
$STANDARD_INFORMATION
$FILE_NAME
```

These timestamps may differ if timestomping occurs.

---

## Example Detection Strategy

Example correlation:

```
File creation timestamp → 2015
Prefetch execution → 2024
Event log process creation → 2024
```

Conclusion:

```
Timestamp manipulation likely occurred
```

---

## Key Takeaways

Never trust a single timestamp source.

Good forensic practice:

```
Correlate multiple artifacts
Validate timeline events
Look for inconsistencies
```
