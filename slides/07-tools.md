---
layout: section
subtitle: Where investigators find evidence
---

# Forensic Artifacts

---

## What Are Forensic Artifacts?

Forensic artifacts are traces of activity left by users, applications, or the operating system.

These artifacts help investigators answer questions such as:

- What happened on the system?
- When did it happen?
- Which user was involved?

Artifacts often contain valuable evidence about system activity.

---

## Sources of Artifacts

Artifacts can originate from many parts of a system:

- filesystems
- operating system logs
- application data
- browser history
- system configuration

Investigators correlate multiple artifact sources to reconstruct events.

---

## Common Artifact Categories

Artifacts can generally be grouped into several categories:

- user activity
- program execution
- file access
- system events
- network activity

Each category reveals a different part of system behavior.

---

## Windows Artifacts

Common forensic artifacts on Windows systems include:

- Prefetch files
- Event Logs
- Registry
- Jump Lists
- Recycle Bin
- Browser artifacts

These artifacts help reconstruct user and system activity.

---

## Windows Prefetch

Prefetch files track program execution.

Location:

```
C:\Windows\Prefetch\
```

Prefetch files contain:

- program name
- execution timestamps
- number of executions
- referenced files

This makes them extremely valuable during investigations.

---

## Windows Event Logs

Windows logs system and security events.

Location:

```
C:\Windows\System32\winevt\Logs\
```

Event logs record many system activities.

Examples include:

- user logins
- service activity
- process creation
- system changes

---

## Important Windows Event IDs

Some event IDs frequently used in investigations include:

- **4624** – successful login
- **4625** – failed login
- **4688** – process creation
- **4720** – user account created
- **7045** – service installed

These events help track system activity.

---

## Windows Registry

The Windows Registry stores configuration and activity information.

Example registry hive locations:

```
C:\Windows\System32\Config\
```

Important hives include:

- SAM
- SYSTEM
- SOFTWARE
- SECURITY
- NTUSER.DAT

Registry analysis can reveal user activity and system configuration.

---

## Linux Artifacts

Linux systems store important artifacts in system logs and user files.

Examples include:

- system logs
- shell history
- authentication logs
- scheduled tasks

These artifacts provide insight into system activity.

---

## Linux Log Files

Important log locations:

```
/var/log/syslog
/var/log/auth.log
/var/log/messages
```

These logs record:

- system events
- authentication attempts
- service activity

---

## Linux User Artifacts

User activity often appears in:

```
~/.bash_history
~/.ssh/
~/.config/
```

These files can reveal:

- executed commands
- SSH connections
- application settings

---

## macOS Artifacts

macOS systems store many artifacts in system databases and logs.

Examples include:

- unified logs
- recent items
- application logs
- user activity databases

These artifacts help reconstruct system usage.

---

## macOS Unified Logs

macOS uses a centralized logging system.

Investigators can query logs using:

```
log show
```

These logs may contain:

- system events
- application activity
- security events

---

## Correlating Artifacts

A single artifact rarely tells the whole story.

Investigators correlate multiple sources:

- filesystem metadata
- system logs
- registry entries
- application artifacts

This process helps reconstruct a timeline of events.

---

## Key Takeaway

Forensic artifacts exist across many system components.

Effective investigations require:

- identifying relevant artifacts
- collecting evidence from multiple sources
- correlating data across systems
