# Troubleshooting common issues

This document wants to list and show how to fix common issues. If you encounter an issue that is not listed here, you can post a comment in the ***# ?*** **|** ***help-desk*** channel of 0L Discord server.

Here is the list of issues:
- [Error (100): loadAccounts: misc error, message: "expected value at line 1 column 1"](#Error-(100))
- [Hard reset the application files](#Hard-resetting-the-application-files)
- [Restore your local tower](#Restore-your-local-tower)

## Error (100): loadAccounts: misc error, message: "expected value at line 1 column 1"

This issue usually happens when the Carpe application is closed abruptly, like during a crash or a power loss for example. You need to proceed to a [Hard reset the application files](#Hard-resetting-the-application-files).

## Hard resetting the application files
The application files are stored in a folder named *.0L* and the instructions below are for regenerating a clean *.0L* folder.

1. Close Carpe;

2. Backup the application files. One can do so by renaming the original *.0L* folder by *.0L.back*, for example. The *.0L* folder are stored in your user directory:
  - Windows Users: *C:\\Users\\your_username\\.0L*
  - Mac and Linux Users: *~/.0L* or */home/your_username/.0L* for Linux or */Users/your_username/.0L* for Mac.

  Note: The *.0L* folder is a hidden folder so you may need to enable displaying hidden files to see them.

3. Open Carpe and reimport your account using your mnemonics. This will generate a new *.0L* folder with clean files;

4. Close Carpe one last time;

5. Recover your local tower height to resume mining. Copy the *vdf_proofs* folder(s) from the backed up folder *0L.back* into the newly created *.0L* folder.

  Note: there might be multiple vdf_proofs_xxx folders, copy all of them in the *.0L* folder.

Now you should be all set to resume mining. If your local height is less than the on-chain height, you need to [Restore your local tower](#Restore-your-local-tower).

## Restore your local tower

The tower consists in the proofs you submitted to the network during the "*mining*" process. Hence, your tower is actually stored on-chain. To restore it, and resume your mining, follow these instructions:

1. Optional step: Backup the *.0L* folder are stored in your user directory:
  - Windows Users: *C:\\Users\\your_username\\.0L*
  - Mac and Linux Users: *~/.0L* or */home/your_username/.0L* for Linux or */Users/your_username/.0L* for Mac.


2. Go to [https://0lexplorer.io/](https://0lexplorer.io/)

2. On the top right corner of the page you should see a search bar. Type your account address in and press Enter.

3. You should now be in a your account page. In the **Tower Stats** section, you should see a button **VDF Proofs**, click on it to download the on-chain proofs as a zip file named as "**vdf_proofs_*address*.zip**".

4. Extract the proofs (files named "proofs_*xyz*.json") from the zip file in the folder
  - Windows Users: C:\\Users\\your_username\\.0L\\vdf_proofs_*address*\\
  - Mac and Linux Users: **~/.0L/vdf_proofs_*address*** or
      - **/home/*your_username*/.0L/vdf_proofs_*address*** for Linux or
      - **/Users/*your_username*/.0L/vdf_proofs_*address*** for Mac.

  Overwriting existing proofs.

Open Carpe to verify your local height matches the on-chain height and resume mining!
