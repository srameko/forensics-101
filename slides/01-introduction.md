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

<v-click>

1. Collecting evidence  

</v-click>

<v-click>

2. Preserving evidence  

</v-click>

<v-click>

3. Analyzing artifacts  

</v-click>

<v-click>

4. Presenting findings  

</v-click>

The goal is to reconstruct **what actually happened on a system**.

</div>

<div style="flex:2">

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

---

## Questions Forensics Can Answer

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem">

<div style="flex:3">

Investigators try to answer questions such as:

<v-click>

- What happened?

</v-click>

<v-click>

- When did it happen?

</v-click>

<v-click>

- How did it happen?

</v-click>

<v-click>

- Who was involved?

</v-click>

<v-click>

- What data was affected?

</v-click>

</div>

<div style="flex:2">

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

---

## Example Incident

Imagine the following situation:

<v-click>

- A company reports suspicious activity

</v-click>

<v-click>

- Files suddenly disappear

</v-click>

<v-click>

- Unusual network traffic appears

</v-click>

Investigators must determine:

<v-click>

- what happened

</v-click>

<v-click>

- how the attacker entered

</v-click>

<v-click>

- what data was accessed

</v-click>

Digital forensics helps answer these questions.

---

## Real-World Use Cases

Digital forensics is used in many investigations:

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

<v-click>

1. Disk acquisition  

</v-click>

<v-click>

2. Filesystem structures  

</v-click>

<v-click>

3. Forensic artifacts  

</v-click>

<v-click>

4. File recovery  

</v-click>

<v-click>

5. Timeline reconstruction  

</v-click>

These concepts form the foundation of forensic analysis.

---

## From Evidence to Story

```mermaid
flowchart LR
A[Artifacts]
B[Analysis]
C[Timeline]
D[Incident Reconstruction]

A --> B --> C --> D
```

Digital forensics turns raw technical data into a narrative explaining what happened.
