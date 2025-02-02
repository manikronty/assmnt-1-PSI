const Intrests = ({ data, setData }) => {
  const { intrests } = data;
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={intrests.includes("coding")}
          />
          coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={intrests.includes("music")}
          />
          music
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={intrests.includes("javascript")}
          />
          javascript
        </label>
      </div>
    </div>
  );
};

export default Intrests;
