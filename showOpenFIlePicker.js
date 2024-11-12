document.getElementById('filePickerButton').addEventListener('click', async () => {
    try {
        // Show the file picker
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        const contents = await file.text();

        // Display the file contents
        document.getElementById('fileContent').textContent = contents;
    } catch (error) {
        console.error('Error picking file:', error);
    }
});
