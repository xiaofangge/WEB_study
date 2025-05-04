import { useParams, useSearchParams } from "react-router-dom";

const Article = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const id = typeof params.id !== "undefined" ? params.id : searchParams.get("id");
  const name = typeof params.name !== "undefined" ? params.name : searchParams.get("name");
  return <div>我是文章页面
    <p>文章ID：{id}</p>
    <p>文章名称：{name}</p>
  </div>;
};

export default Article;