const Settings = ({ data, setData }) => {
    const { theme } = data;
  
    const handleDataChange = (e) => {
      setData((prevState) => ({ ...prevState, theme: e.target.name }));
    };
  
    return (
      <div>
        <div>
          <label>
            <input
              type="radio"
              
              name="dark"
              checked={theme === "dark"}
              onChange={handleDataChange} // Fixed camelCase issue
            />
            Dark
          </label>
        </div>
  
        <div>
          <label>
            <input
              type="radio"
            
              name="light"
              checked={theme === "light"}
              onChange={handleDataChange} // Fixed camelCase issue
            />
            Light
          </label>
        </div>
      </div>
    );
  };
  
  export default Settings;
  