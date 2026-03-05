# FAT File System

FAT = File Allocation Table.

Structure:

- Boot sector
- FAT tables
- Root directory
- Data clusters

---

# FAT Directory Entry

Directory entries store:

- filename
- starting cluster
- file size
- timestamps

---

# FAT Deletion

When a file is deleted:

- first byte of filename is replaced
- cluster chain is cleared
