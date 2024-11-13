# Note-Taking Application - README

## Overview

This project is a note-taking application that allows users to create, edit, customize, and delete notes. Built with React and TypeScript, the app features type-safe state management and provides an intuitive interface to manage your notes effectively. Users can add text, format it (bold, italic), and choose custom colors for each note.

## Features

- **Add Note**: Users can create notes with customizable text and styling (bold, italic, color).
- **Edit Note**: Existing notes can be edited by the user.
- **Mark Notes as Done**: Users can mark notes as "done," which strikes through the note text.
- **Delete Note**: Users can delete notes from the list.
- **Customizable Styles**: Notes support customizable styles including text color, bold, and italic.

## Project Structure

- **`NoteList` Component**: Displays the list of notes, including an empty message if no notes are present.
- **`Note` Component**: Handles individual note display and allows users to edit or delete notes, as well as mark them as "done."
- **`AddNote` Component**: A form for adding new notes with options for text styling and color customization.
- **State Management**: Uses `useNotesDispatch` to manage the state of notes, supporting actions for adding, editing, changing status, and deleting notes.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. **Add a Note**: Enter text in the input field and customize its appearance (color, bold, italic). Click on "Add Note" to save it.
2. **Edit a Note**: Click the "Edit" button to change the text of an existing note.
3. **Mark a Note as Done**: Check the checkbox next to a note to mark it as completed, which will strike through the note text.
4. **Delete a Note**: Click the "Delete" button to remove a note from the list.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Adds type safety to the codebase, ensuring a more reliable and maintainable app.
- **Material UI**: Provides a set of pre-styled components like `TextField`, `Checkbox`, and `Button` for a consistent and user-friendly design.
- **React Hooks**: `useState` and custom hooks for managing state and handling side effects in a functional component architecture.

## Contributing

If you wish to contribute to the development of this project, please fork the repository, create a new branch, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
