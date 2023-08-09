import {Note,  NoteCreationAttributes } from '../models/index';

export const getAllNotes = async (): Promise<Note[]> => {
    const notes = await Note.findAll();
    return notes;
};

export const getNoteById = async (id: string): Promise<Note | null> => {
    const note = await Note.findByPk(id);
    return note;
};
export const createNote = async (note: NoteCreationAttributes): Promise<Note> => {
    const newNote = await Note.create(note);
    return newNote;
};

export const updateNote = async (id: string, updatedNote: NoteCreationAttributes): Promise<Note | null> => {
    const note = await Note.findByPk(id);
    if (note) {
        await note.update(updatedNote);
        return note;
    }
    return null;
};

export const deleteNote = async (id: string): Promise<boolean> => {
    const result = await Note.destroy({
        where: { id },
    });
    return result > 0;
};
