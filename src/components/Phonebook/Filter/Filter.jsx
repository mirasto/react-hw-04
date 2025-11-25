


const Filter = ({ onChange }) => {
  return (
    <div>
      <h2 className="text-center text-2xl">Filter contacts</h2>
      <input
        className="text-center m-auto block text-2xl mt-[30px] border-2 p-2"
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
