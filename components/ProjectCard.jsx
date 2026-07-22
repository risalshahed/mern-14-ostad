export default function ProjectCard({ project, onView }) {
  return (
    <div className="border p-5 rounded">
      <h3 className="text-xl font-bold">
        {project.title}
      </h3>
      <p>
        {project.description}
      </p>
      <button
        onClick={() => onView(project)}
        className="mt-3 border px-3 py-2 rounded"
      >
        View Details
      </button>
    </div>
  )
}
