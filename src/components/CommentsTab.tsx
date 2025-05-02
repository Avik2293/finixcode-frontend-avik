import React from 'react';
import { comments } from '../data/comments';

// Comment data structure
interface Comment {
    id: number;
    author: string;
    avatar?: string;
    content: string;
    timestamp: string;
    replies?: Comment[];
}

const allComments: Comment[] = comments;

const CommentsTab: React.FC = () => {

    // Recursive component for rendering comments and replies
    const CommentItem = ({ comment, depth = 0 }: { comment: Comment; depth?: number }) => (
        <div className={`${depth > 0 ? 'mt-2' : ''}`}>
            <div>
                <div className={`flex flex-col gap-3 ${comment.replies ? "bg-[#34735F]" : "bg-[#FDE8CD]"} p-2 rounded-xl`}>
                    <div className='flex items-center'>
                        <div className={`w-8 h-8 ${!comment.replies ? "bg-[#34735F]" : "bg-[#FDE8CD]"} rounded-full flex-shrink-0 flex items-center justify-center ${comment.replies ? "text-[#34735F]" : "text-[#FDE8CD]"} font-medium text-sm mr-2`}>
                            {comment.avatar}
                        </div>

                        <div className={`flex-1 ${!comment.replies ? "text-[#34735F]" : "text-[#FDE8CD]"}`}>
                            <div className="flex justify-between items-start">
                                <p className="font-medium">{comment.author}</p>

                                <span className="text-sm flex gap-2 items-center">
                                    {comment.timestamp}
                                    <img src={"../src/assets/dots-vertical.png"} alt="Logo" className="h-4 w-auto" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className={`${!comment.replies ? "text-[#34735F]" : "text-[#FDE8CD]"} font-light`}>{comment.content}</p>
                </div>

                {
                    comment.replies &&
                    <button className="text-[#808080] text-sm font-medium flex items-center mt-2">
                        {/* <FaReply className="mr-1" /> */}
                        <img src={"../src/assets/corner-up-right.png"} alt="Logo" className="h-5 w-auto mr-1" />
                        Reply
                    </button>
                }
            </div>

            {/* Render replies if they exist */}
            {comment.replies && comment.replies.length > 0 && (
                <div className={`ml-${depth === 0 ? 8 : 4} mt-2`}>
                    {comment.replies.map((reply) => (
                        <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-4 bg-[#FFFFFF] rounded-xl">
            {/* Comments Section */}
            <div className="space-y-4">
                {/* Render all comments */}
                {allComments.map((comment) => (
                    <div key={comment.id} className="">
                        <CommentItem comment={comment} />
                    </div>
                ))}

                {/* Comment Input */}
                <div className="mt-8">
                    <input
                        type="text"
                        className="w-full p-3 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Write a comment"
                    // rows={3}
                    />

                    {/* <div className="flex justify-end mt-3">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
                            Post Comment
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CommentsTab;