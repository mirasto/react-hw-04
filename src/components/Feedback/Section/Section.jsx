const Section = ({ children, title }) => {
  return (
    <section
      className="
    w-full max-w-md mx-auto 
    bg-white 
    rounded-xl 
    p-6 
    mt-8
    shadow-[0_4px_12px_rgba(0,0,0,0.12)]
  "
    >
      <h1 className="text-2xl font-semibold text-gray-900 text-center mt-3">{title}</h1>
      {children}
    </section>
  );
};
export default Section;
