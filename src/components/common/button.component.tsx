interface ButtonProps {
  event?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  text: string;

}

export default function Button({ event, className, text }:ButtonProps) {
  return (
    <div>
      <button 
      onClick={event} 
      className={className}
      >
        {text}
      </button>
    </div>
  );
}

