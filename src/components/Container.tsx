type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[680px] px-6 md:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
