const lessons = [['Building in public', 'Writing, prototyping, and sharing the work along the way.'], ['Accessibility first', 'Making inclusive choices part of the process, not a final pass.'], ['The craft of restraint', 'Learning when a product needs more, and when it needs less.']];

export default function LearningJourney() {
  return <section className="section" id="learning"><div className="container"><div className="section-heading"><h2>Learning journey</h2><p>The ideas currently influencing how I work.</p></div><div className="learning-list">{lessons.map(([title, text], index) => <article className="learning-item" key={title}><strong>0{index + 1} / {title}</strong><span>{text}</span></article>)}</div></div></section>;
}
