const projects: [string, string, string[]][] = [['Signal / 01', 'A calmer way to understand complex data.', ['Product design', 'React', 'Data viz']], ['Morrow / 02', 'A small brand with a big digital presence.', ['Identity', 'Next.js', 'Motion']]];

export default function Projects() {
  return <section className="section" id="work"><div className="container"><div className="section-heading"><h2>Selected work</h2><p>Projects shaped by curiosity, constraints, and collaboration.</p></div><div className="projects-grid grid">{projects.map(([name, description, tags]) => <article className="project-card" key={name}><div className="project-visual">{name}</div><div className="project-info"><h3>{description}</h3><p>From early direction through a polished, working release.</p><div className="tags">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>;
}
