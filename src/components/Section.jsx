export default function Section({ title, children, ...extraProps }) {
  return (
    <section {...extraProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
