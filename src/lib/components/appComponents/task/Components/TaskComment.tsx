import { TaskComments } from "@/store/definitions";

export default function TaskComment({ comment }: { comment: TaskComments }) {
  return (
    <div className="p-3">
      <div className="f-08">{comment.user_name}</div>
    </div>
  );
}
