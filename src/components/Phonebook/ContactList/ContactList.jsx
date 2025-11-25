


const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="w-full m-auto max-w-md">
      <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">Contacts</h2>
      <ul className="flex flex-col gap-3">
        {contacts.map(({ id, name, number }) => (
          <li 
            key={id} 
            className="flex justify-between items-center bg-white border-b border-gray-300 py-2 px-4"
          >
            <span className="text-gray-800">{name}: {number}</span>
            <button
              className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
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
