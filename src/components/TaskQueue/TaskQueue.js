import Tasks from './Tasks';
export default function TaskQueue() {
  return (
    <section
      aria-labelledby="primary-heading"
      className="min-w-0 flex-1 h-full flex flex-col  border-r overflow-y-scroll"
    >
      <h1 id="primary-heading" className="sr-only">
        Task Queue
      </h1>
      <Tasks />
    </section>
  );
}
