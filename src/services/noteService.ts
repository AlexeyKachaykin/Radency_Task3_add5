
import { Request, Response } from 'express';
import * as noteRepository from '../repositories/noteRepository';

export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const notes = await noteRepository.getAllNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving notes' });
    }
};

export const getNoteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const note = await noteRepository.getNoteById(id);
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving note' });
    }
};

export const createNote = async (req: Request, res: Response) => {
    const note = req.body;
    try {
        const newNote = await noteRepository.createNote(note);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ error: 'Error creating note' });
    }
};

export const updateNote = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedNote = req.body;
    try {
        const note = await noteRepository.updateNote(id, updatedNote);
        if (note) {
            res.json(note);
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating note' });
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await noteRepository.deleteNote(id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting note' });
    }
};
