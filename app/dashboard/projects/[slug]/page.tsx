export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full p-5">
      <h1 className="text-3xl font-extrabold">{params.slug}</h1>
    </div>
  );
}
