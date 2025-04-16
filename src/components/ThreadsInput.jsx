import React, { useState } from 'react';

const ThreadsInput = ({ addThread }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  function addthread() {
    if (body.trim()) {
      addThread(title, body, category);
      setBody('');
      setTitle('');
      setCategory('');
    }
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }
  return (
    <section className="w-full mb-8">
      <div className="border px-8 py-4">
        <h2 className="text-center text-xl font-bold pb-6">Thread Baru</h2>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="judul"
            className="border px-2 py-1 rounded-md"
          />
          <textarea
            className="border min-h-24 px-2 py-1"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
          <button
            type="button"
            onClick={addthread}
            className="border py-1 rounded-md hover:cursor-pointer"
          >
            Buat Threads
          </button>
        </form>
      </div>
    </section>
  );
};

export default ThreadsInput;
