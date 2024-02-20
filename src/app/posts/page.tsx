import RecommendList from "@components/recommendList/recommendList";
import Link from "next/link";
import React from "react";

export default function PostPage() {
  return (
    <div className="body-box">
      <h3 className="board-title">새로 만든 post page</h3>

      <RecommendList />
      <button className="button">
        <Link href="/recommend-board/create-post">글 쓰기</Link>
      </button>
    </div>
  );
}
