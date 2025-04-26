import React, { useEffect } from 'react';
import ThreadDetail from '../components/ThreadDetail';
import CategoryPopular from '../components/CategoryPopular';
import UserActive from '../components/UserActive';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncAddComment,
  asyncDownVoteComment,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteComment,
  asyncUpVoteThreadDetail,
} from '../states/threadDetail/action';

const DetailPage = () => {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThreadDetail(id));
  };
  const onNeutralizeVoteThread = (id) => {
    dispatch(asyncNeutralizeVoteThreadDetail(id));
  };
  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThreadDetail(id));
  };
  const onUpVoteComment = ({ threadId, commentId }) => {
    dispatch(asyncUpVoteComment({ threadId, commentId }));
  };

  const onDownVoteComment = ({ threadId, commentId }) => {
    dispatch(asyncDownVoteComment({ threadId, commentId }));
  };

  const onCommentThread = ({ id, content }) => {
    dispatch(asyncAddComment({ id, content }));
  };

  if (!detailThread) {
    return null;
  }
  return (
    <section className="grid md:grid-cols-4 mt-10 place-items-center md:place-items-start mx-8 xl:mx-2">
      <CategoryPopular />
      <ThreadDetail
        createComment={onCommentThread}
        {...detailThread}
        authUser={authUser.id}
        upVotes={onUpVoteThread}
        downVotes={onDownVoteThread}
        upVoteComment={onUpVoteComment}
        downVoteComment={onDownVoteComment}
        neutralVotes={onNeutralizeVoteThread}
      />
      <UserActive />
    </section>
  );
};

export default DetailPage;
