const SettingsData = [
  {
    Title: "Profile details",
    Content: "Change your display name, contact, profile image ",
    Link: "",
  },
  {
    Title: "Manage addresses",
    Content: "Save and update all your addresses here",
    Link: "",
  },
  {
    Title: "Change password",
    Content: "Set a new password",
    Link: "",
  },
];

function Setting({ data }) {
  return (
    <>
      <div className="setting-box">
        <div className="setting-title">{data.Title}</div>
        <div className="setting-content">{data.Content}</div>
      </div>
    </>
  );
}

function Settings() {
  return (
    <>
      <div className="outerbox-mob">
        <div className="navbox-mob" style={{ paddingLeft: "20px" }}>
          Settings
        </div>
        <div className="textboxlong-mob">
          {SettingsData.map((data) => (
            <Setting data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Settings;
