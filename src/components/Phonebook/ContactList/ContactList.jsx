


const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="w-full m-auto max-w-md mt-5">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">Contacts</h2>

      <ul className="flex flex-col gap-3">
        {contacts.map(({ id, name, number }) => (
          <li
            key={id}
            className="
          flex justify-between items-center
          bg-white 
          rounded-lg
          px-4 py-3
          shadow-sm
          border border-gray-200
          hover:shadow-md
          transition
        "
          >
            <span className="text-gray-900 font-medium">
              {name}: {number}
            </span>

            <button
              className="
            bg-red-600 text-white 
            px-3 py-1.5 
            rounded-md text-sm font-medium
            hover:bg-red-700 
            active:scale-[0.97]
            transition
          "
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
