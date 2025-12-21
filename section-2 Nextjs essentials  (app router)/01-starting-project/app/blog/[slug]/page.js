export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Posts..</h1>
      <h1>{params.slug}</h1>
    </main>
  );
}
