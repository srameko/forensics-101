---
layout: section
subtitle: Why digital forensics matters
---

# Digital Forensics

---

## What is Digital Forensics?

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Digital forensics is the process of:

1. Collecting evidence  
2. Preserving evidence  
3. Analyzing artifacts  
4. Presenting findings  

The goal is to reconstruct **what actually happened on a system**.

</div>

<div style="flex:2">

<div>

```mermaid
flowchart TD
A[User Activity]
B[System Artifacts]
C[Forensic Analysis]
D[Incident Reconstruction]

A --> B
B --> C
C --> D
```

</div>

</div>

</div>

---

## Questions Forensics Can Answer

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Investigators try to answer questions such as:

- What happened?
- When did it happen?
- How did it happen?
- Who was involved?
- What data was affected?

</div>

<div style="flex:2">

<div>

```mermaid
flowchart TD
A[Incident]
B[Evidence]
C[Analysis]
D[Conclusion]

A --> B --> C --> D
```

</div>

</div>

</div>

---

## Digital Evidence is Everywhere

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Modern systems constantly generate traces.

Examples include:

- filesystem metadata  
- system logs  
- browser history  
- application data  
- network logs  

These traces become **forensic artifacts**.

</div>

<div style="flex:2">

<div>

```mermaid
flowchart TD
A[User Action]
B[System Event]
C[Stored Artifact]

A --> B
B --> C
```

</div>

</div>

</div>

---

## Example Incident

Imagine the following situation:

- A company reports suspicious activity
- Files suddenly disappear
- Unusual network traffic appears

Investigators must determine:

- what happened
- how the attacker entered
- what data was accessed

Digital forensics helps answer these questions.

---

## Real-World Use Cases

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:1">

- malware investigations  
- data breaches  
- insider threats  
- fraud investigations  

</div>

<div style="flex:1">

- corporate investigations  
- law enforcement  
- incident response  
- threat hunting  

</div>

</div>

---

## Digital Forensics vs Incident Response

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

### Incident Response

- detect attacks  
- contain threats  
- restore systems  

### Digital Forensics

- analyze evidence  
- reconstruct events  
- support investigations  

</div>

<div style="flex:2">

<div>

```mermaid
flowchart LR
A[Incident Detection]
B[Incident Response]
C[Forensic Analysis]
D[Lessons Learned]

A --> B --> C --> D
```

</div>

</div>

</div>

---

## Skills Used in Digital Forensics

Digital forensics combines several disciplines:

- technical knowledge  
- analytical thinking  
- attention to detail  
- investigative methodology  

It is both **technical analysis and investigative work**.

---

## What You Will Learn

In this workshop we will explore:

1. Disk acquisition  
2. Filesystem structures  
3. Forensic artifacts  
4. File recovery  
5. Timeline reconstruction  

These concepts form the foundation of forensic analysis.

---

## From Evidence to Story

<div>

```mermaid
flowchart LR
A[Artifacts]
B[Analysis]
C[Timeline]
D[Incident Reconstruction]

A --> B --> C --> D
```

</div>

Digital forensics turns raw technical data into a narrative explaining what happened.
