


const ContactForm = ({ name, number, onChange, onSubmit }) => {
  return (
    <form className="flex flex-col items-center gap-4 text-amber-950" onSubmit={onSubmit}>
      <div className="flex flex-col items-start gap-1 w-full max-w-sm">
        <label className="text-[#3316b4] text-2xl font-bold underline">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
          placeholder="Enter contact"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sky-400"
        />
      </div>

      <div className="flex flex-col items-start gap-1 w-full max-w-sm">
        <label className="text-[#080977] text-2xl font-bold underline">Number:</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={onChange}
          required
          placeholder="Enter number"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sky-400"
        />
      </div>

      <button
        type="submit"
        className="bg-sky-600 text-white font-semibold px-6 py-2 rounded hover:bg-sky-700 transition-colors"
      >
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
