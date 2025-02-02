import Intrests from "./Intrests";
import Settings from "./Settings";
import Profile from "./Profile";
import { useState } from "react";

const Tabs = () => {
  const [data, setData] = useState({
    name: "manik",
    age: "23",
    email: "manik@gmail.com",
    intrests: ["coding", "music"],
    theme: "dark",
  });
  const [activetab, setactivetab] = useState(0);

  const Tab = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Intrests",
      component: Intrests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = Tab[activetab].component;
  return (
    <div>
      <div className="Header-pos">
        {Tab.map((t, index) => (
          <div className="Header" onClick={() => setactivetab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="discription">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Tabs;
