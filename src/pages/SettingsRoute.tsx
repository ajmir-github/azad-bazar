import { SignOutIcon, ThemeIcon } from "@/components/Icons";
import SettingCollapse from "@/components/SettingCollapse";
import { useAppDispatch, useAppSelector } from "@/context";
import uiSlice from "@/context/uiSlice";

const Themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

export default function SettingsRoute() {
  const selectTheme = useAppSelector((state) => state.ui.theme);
  const dispatch = useAppDispatch();
  return (
    <div className="grid gap-2 p-2">
      <SettingCollapse Icon={<ThemeIcon />} label="Change the theme">
        {Themes.map((theme) => (
          <div className="form-control">
            <label className="label cursor-pointer gap-4">
              <span className="label-text uppercase">{theme}</span>
              <input
                type="radio"
                name="theme-radios"
                className="radio"
                value={theme}
                checked={theme === selectTheme}
                onClick={() => dispatch(uiSlice.actions.changeTheme(theme))}
              />
            </label>
          </div>
        ))}
      </SettingCollapse>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>

      <button className="btn btn-error">
        <SignOutIcon />
        Sign out
      </button>
    </div>
  );
}
