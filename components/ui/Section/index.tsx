const Section = ({ children }) => {
  return (
    <section className="pt-24 pb-32 bg-white">
      <div className="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row">{children}</div>
      </div>
    </section>
  );
};

export default Section;
