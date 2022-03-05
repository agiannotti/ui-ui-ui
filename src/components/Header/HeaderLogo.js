import XaqtLogo from '../../assets/element.png';

export default function HeaderLogo() {
  return (
    <div className="inset-y-0 left-0 flex-shrink-0">
      <a
        href="#!"
        className="flex items-center justify-center h-16 bg-accent bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent w-20"
      >
        <img className="h-12 w-auto" src={XaqtLogo} alt="Passport" />
      </a>
    </div>
  );
}
