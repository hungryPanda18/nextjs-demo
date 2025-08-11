interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: BlogPageProps) {
  return <h1>Post: {params.slug} page it is </h1>;
}