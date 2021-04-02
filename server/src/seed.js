const UserModel = require('../src/models/user.model')
const NoteModel = require('../src/models/note.model')
const NotebookModel = require('../src/models/notebook.model')
const { dbConnect, disconnect } = require('./db/connect');
const dbConnectionURL = require('./db/config')


async function start() {
  try {
    dbConnect()

    const ivan = new UserModel({
      name: 'Ivan',
      email: 'ivan@gmail.ru',
      password: '12345'
    })

    const maria = new UserModel({
      name: 'Maria',
      email: 'maria@gmail.com',
      password: '12345'
    })

    const noteFirst = new NoteModel({
      text: 'Buy:\n1.milk\n2.eggs',
    })

    const noteSecond = new NoteModel({
      text: 'Football tomorrow at 7pm',
    })

    const noteThird = new NoteModel({
      text: 'Send email to Maria',
    })

    const noteFourth = new NoteModel({
      text: 'My friend happy birthday',
    })

    const notebookFirst = new NotebookModel({
      title: 'My notebook',
    })

    const notebookSecond = new NotebookModel({
      title: 'My notebook',
    })

    notebookFirst.user = ivan
    notebookSecond.user = maria
    notebookFirst.notes.push(noteThird, noteSecond)
    notebookSecond.notes.push(noteFirst, noteFourth)
    await ivan.save()
    await maria.save()
    await noteFirst.save()
    await noteSecond.save()
    await noteThird.save()
    await noteFourth.save()
    await notebookFirst.save()
    await notebookSecond.save()
  } catch (e) {
    console.log(e);
  }
  disconnect();
}

start();

