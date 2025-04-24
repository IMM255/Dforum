import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ThreadComment = ({ createComment }) => {
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate('/');

  function commentHandler() {
    if (content.trim()) {
      createComment({ id, content });
      setContent('');
      navigate('/');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }
  return (
    <div className="px-8">
      <h3>Tambahkan Komentar</h3>
      <textarea
        value={content}
        onChange={handleTextChange}
        className="w-full h-22 border"
        name=""
        id=""
      ></textarea>
      <button
        type="submit"
        onClick={commentHandler}
        className="border px-2 py-1 w-full"
      >
        Kirim
      </button>
    </div>
  );
};

export default ThreadComment;
