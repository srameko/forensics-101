---
layout: section
subtitle: Where to find forensic artifacts
---

# Forensic Artifacts

---

## Why Artifacts Matter

Artifacts help investigators answer:

- What happened
- When it happened
- Who did it
- Which files were involved

Artifacts exist across multiple system components:

```
filesystem
logs
registry
application data
```

---

# Windows Artifacts

---

## Windows Artifact Locations

Common forensic artifacts in Windows systems.

```
User profile
Event logs
Registry
System directories
```

Example base path:

```
C:\Users\<username>\
```

---

## Windows – Prefetch

Prefetch records application execution.

Location:

```
C:\Windows\Prefetch\
```

Example file:

```
CHROME.EXE-3A1B2C4D.pf
```

Information stored:

```
program executed
execution count
last run time
loaded files
```

---

## Windows – LNK Files

Shortcut files reveal user activity.

Location:

```
C:\Users\<user>\AppData\Roaming\Microsoft\Windows\Recent\
```

Information contained:

```
original file path
volume serial number
timestamps
```

Useful for identifying opened files.

---

## Windows – Jump Lists

Jump lists record recently accessed files.

Location:

```
C:\Users\<user>\AppData\Roaming\Microsoft\Windows\Recent\AutomaticDestinations\
```

Example artifact:

```
recent documents
recent applications
```

---

## Windows – Recycle Bin

Deleted files are stored in:

```
C:\$Recycle.Bin\
```

Files are stored as:

```
$Rxxxxx
$Ixxxxx
```

$I files contain metadata including:

```
original path
deletion timestamp
```

---

## Windows – Amcache

Tracks executed programs.

Location:

```
C:\Windows\AppCompat\Programs\Amcache.hve
```

Contains:

```
executed binaries
file hashes
timestamps
```

---

## Windows – ShimCache

Application compatibility cache.

Registry location:

```
HKLM\SYSTEM\CurrentControlSet\
Control\Session Manager\AppCompatCache
```

Shows:

```
executed programs
file paths
```

---

# Windows Event Logs

---

## Event Log Location

Windows logs are stored in:

```
C:\Windows\System32\winevt\Logs\
```

Examples:

```
Security.evtx
System.evtx
Application.evtx
```

---

## Important Security Event IDs

Useful security events:

```
4624  Successful logon
4625  Failed logon
4634  Logoff
4672  Admin privileges assigned
4688  Process creation
4698  Scheduled task created
4720  User account created
4726  User account deleted
```

---

## Process Creation Events

Process execution logging:

```
Event ID 4688
```

Shows:

```
process name
parent process
command line
user account
```

Important for incident response.

---

# Windows Registry Artifacts

---

## User Assist

Tracks executed programs.

Registry key:

```
HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist
```

Information stored:

```
executed applications
execution count
timestamps
```

---

## Run Keys (Persistence)

Startup persistence keys.

```
HKCU\Software\Microsoft\Windows\CurrentVersion\Run
HKLM\Software\Microsoft\Windows\CurrentVersion\Run
```

Programs listed here run at login.

---

## USB Device History

Connected USB devices.

```
HKLM\SYSTEM\CurrentControlSet\Enum\USBSTOR
```

Contains:

```
device identifiers
connection history
```

---

# Linux Artifacts

---

## Linux Log Files

Common log locations:

```
/var/log/syslog
/var/log/auth.log
/var/log/messages
```

These logs record:

```
logins
system activity
authentication events
```

---

## Linux Authentication Logs

Authentication events:

```
/var/log/auth.log
```

Example entries:

```
ssh login attempts
sudo commands
failed logins
```

---

## Linux Bash History

User command history:

```
~/.bash_history
```

Contains executed commands.

Example:

```
wget malicious.sh
chmod +x malicious.sh
./malicious.sh
```

---

## Linux Cron Jobs

Scheduled tasks.

Locations:

```
/etc/crontab
/var/spool/cron/
/etc/cron.*
```

Attackers often use cron for persistence.

---

# macOS Artifacts

---

## macOS Unified Logs

Modern macOS systems use unified logging.

Access via:

```
log show
```

Logs stored in:

```
/var/db/diagnostics/
```

---

## macOS User Activity

Recent file access:

```
~/Library/Preferences/com.apple.recentitems.plist
```

Contains recently opened files.

---

## macOS Login History

Login records:

```
/var/log/system.log
```

Also visible using:

```
last
```

---

## macOS Application Usage

Application history:

```
~/Library/Application Support/com.apple.spotlight
```

Tracks indexed files and usage.

---

# Cross-Platform Artifacts

---

## Browser History

Browsers store user activity.

Example locations:

Chrome

```
~/.config/google-chrome/Default/History
```

Windows

```
C:\Users\<user>\AppData\Local\Google\Chrome\User Data\Default\History
```

macOS

```
~/Library/Application Support/Google/Chrome/Default/History
```

---

## USB Artifacts

USB activity can be found in:

Windows registry

```
SYSTEM\CurrentControlSet\Enum\USBSTOR
```

Linux logs

```
/var/log/syslog
```

macOS logs

```
system.log
```

---

# Investigation Workflow

---

## Practical Artifact Workflow

Typical DFIR artifact workflow:

```
Check event logs
Inspect registry artifacts
Analyze filesystem artifacts
Review command history
Build timeline
```

Artifacts together reconstruct user activity.

---

## Key Takeaways

Important artifact categories:

```
filesystem metadata
system logs
registry artifacts
application history
```

These artifacts allow investigators to reconstruct system activity.
