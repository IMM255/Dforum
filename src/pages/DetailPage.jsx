import React, { useEffect } from 'react';
import ThreadDetail from '../components/ThreadDetail';
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
import CommentList from '../components/CommentList';
import ThreadComment from '../components/ThreadComment';

const DetailPage = () => {
  const { threadId } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);
  console.log('id', threadId);

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

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ content }));
  };

  if (!detailThread) {
    return null;
  }
  return (
    <section className="grid mt-10 place-items-center mx-8 xl:mx-2">
      <div className='border pb-10 md:w-[700px] '>
        <ThreadDetail
          {...detailThread}
          authUser={authUser.id}
          upVotes={onUpVoteThread}
          downVotes={onDownVoteThread}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neutralVotes={onNeutralizeVoteThread}
        />
        <ThreadComment  createComment={onCommentThread} />;
        <CommentList threadId={detailThread.id} comments={detailThread.comments} authUser={authUser.id}  upVoteComment={onUpVoteComment} downVoteComment={onDownVoteComment}
        />
      </div>
    </section>
  );
};

export default DetailPage;
