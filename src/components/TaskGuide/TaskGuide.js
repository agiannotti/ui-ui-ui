import CallUI from './CallUI/CallContainer';

export default function TaskGuide() {
  return (
    <section
      aria-labelledby="secondary-heading"
      className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto border-r bg-white"
    >
      <h1 id="primary-heading" className="sr-only">
        Guide
      </h1>
      <CallUI />
    </section>
  );
}
