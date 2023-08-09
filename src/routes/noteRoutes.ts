import express from 'express';
import * as noteService from '../services/noteService';
import { validateNote, validateNoteId } from './utils';

const router = express.Router();

router.get('/notes', noteService.getAllNotes);
router.get('/notes/:id', validateNoteId, noteService.getNoteById);
router.post('/notes', validateNote, noteService.createNote);
router.patch('/notes/:id', validateNoteId, noteService.updateNote);
router.delete('/notes/:id', validateNoteId, noteService.deleteNote);

export default router;
