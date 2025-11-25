const Section = ({ children, title }) => {
  return (
    <section className="w-full max-w-md mx-auto bg-white shadow-1xl rounded-lg p-6 mt-[50px]">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{title}</h1>
      {children}
    </section>
  );
};
export default Section;
