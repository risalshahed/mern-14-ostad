export default function Skills() {
  const skills = [
    {
      id: crypto.randomUUID(),
      technology: 'HTML'
    },
    {
      id: crypto.randomUUID(),
      technology: 'CSS'
    },
    {
      id: crypto.randomUUID(),
      technology: 'JavaScript'
    },
    {
      id: crypto.randomUUID(),
      technology: 'Tailwind'
    },
    {
      id: crypto.randomUUID(),
      technology: 'React JS'
    },
    {
      id: crypto.randomUUID(),
      technology: 'Next'
    }
  ]

  return (
    <section className='max-w-5xl mx-auto py-20 px-5'>
      <h2 className="text-3xl font-bold mb-5">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {
          skills.map((skill) =>
            <span
              key={skill.id}
              className='border px-4 py-2'
            >
              {skill.technology}
            </span>
          )
        }
      </div>
    </section>
  )
}
