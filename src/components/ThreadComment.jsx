import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ThreadComment = ({ createComment }) => {
  const [content, setContent] = useState('');

  function commentHandler() {
    createComment(content);
    setContent('');
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

ThreadComment.propTypes = {
  createComment: PropTypes.func.isRequired
};

export default ThreadComment;
