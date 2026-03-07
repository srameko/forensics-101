---
layout: section
subtitle: Where investigators find evidence
---

# Forensic Artifacts

---

## What Are Forensic Artifacts?

Forensic artifacts are traces of activity left by users, applications, or the operating system.

These artifacts help investigators answer questions such as:

- What happened?
- When did it happen?
- Which user was involved?

Artifacts provide valuable evidence about system activity.

---

## Sources of Artifacts

Artifacts can originate from many system components:

- filesystems
- operating system logs
- application data
- browser history
- system configuration

Investigators correlate multiple artifact sources to reconstruct events.

---

## Artifact Categories

Artifacts typically fall into several categories:

- user activity
- program execution
- file access
- system events
- network activity

Each category reveals different aspects of system behavior.

---

## Common Windows Artifacts

Important forensic artifacts on Windows systems include:

- Prefetch files
- Event Logs
- Registry
- Jump Lists
- Recycle Bin
- Browser artifacts

These artifacts help reconstruct user and system activity.

---

## Windows Prefetch

Prefetch files record program execution.

Location:

```
C:\Windows\Prefetch\
```

Prefetch files contain:

- program name
- execution timestamps
- number of executions
- referenced files

---

## Windows Event Logs

Windows logs many types of system events.

Location:

```
C:\Windows\System32\winevt\Logs\
```

Event logs contain information about:

- authentication activity
- service execution
- process creation
- system events

---

## Important Windows Event IDs

Common event IDs used in investigations include:

- **4624** – successful login
- **4625** – failed login
- **4688** – process creation
- **4720** – user account created
- **7045** – service installed

These events help investigators track system activity.

---

## Windows Registry

The Windows Registry stores configuration and activity information.

Registry hive location:

```
C:\Windows\System32\Config\
```

Important hives include:

- SAM
- SYSTEM
- SOFTWARE
- SECURITY
- NTUSER.DAT

Registry analysis often reveals user activity and system configuration.

---

## Linux System Logs

Important log locations:

```
/var/log/syslog
/var/log/auth.log
/var/log/messages
```

These logs record:

- system activity
- authentication attempts
- service events

---

## Linux User Artifacts

User activity may appear in:

```
~/.bash_history
~/.ssh/
~/.config/
```

These files may reveal:

- executed commands
- SSH connections
- application configuration

---

## macOS System Artifacts

macOS systems store artifacts in several locations:

- unified system logs
- recent items databases
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

## Artifact Correlation

A single artifact rarely tells the whole story.

Investigators correlate multiple sources:

- filesystem metadata
- system logs
- registry entries
- application artifacts

This correlation helps reconstruct a timeline of events.

---

## Key Takeaway

Forensic artifacts exist across many system components.

Effective investigations require:

- identifying relevant artifacts
- collecting evidence from multiple sources
- correlating artifact data
