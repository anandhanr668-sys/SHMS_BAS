import { useEffect, useState } from "react";
import useSettingsStore from "../../store/settingsStore";

export default function SettingsPage() {
  const {
    settings,
    loading,
    error,
    saving,
    fetchSettings,
    updateSettings
  } = useSettingsStore();

  const [form, setForm] = useState({
    hospitalName: "",
    theme: "light",
    allowRegistrations: false
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  useEffect(() => {
    if (settings) {
      setForm(settings);
    }
  }, [settings]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(form);
  };

  if (loading) return <p>Loading settings...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>System Settings</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Hospital Name</label><br />
          <input
            name="hospitalName"
            value={form.hospitalName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Theme</label><br />
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="allowRegistrations"
              checked={form.allowRegistrations}
              onChange={handleChange}
            />
            Allow Patient Registrations
          </label>
        </div>

        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}
