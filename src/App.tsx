import { BrowserRouter, Route, Routes } from "react-router-dom";
// layouts
import RootLayout from "./Layouts/RootLayout";
import AppLayout from "./Layouts/AppLayout";
// middle routes
import ProtectedRoute from "./features/ProtectedRoute";
import UnProtectedRoute from "./features/UnProtectedRoute";
// routes
import RootRoute from "./pages/RootRoute";
import AddRoute from "./pages/AddRoute";
import SearchRoute from "./pages/SearchRoute";
import SettingsRoute from "./pages/SettingsRoute";
import ProfileRoute from "./pages/ProfileRoute";
import RegisterRoute from "./pages/RegisterRoute";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<RootRoute />} />
            <Route path="/search" element={<SearchRoute />} />
            <Route path="/add" element={<AddRoute />} />
            <Route path="/settings" element={<SettingsRoute />} />
            <Route path="/profile" element={<ProfileRoute />} />
            {/* <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route> */}
          </Route>
          <Route
            path="/register"
            element={
              <UnProtectedRoute>
                <RegisterRoute />
              </UnProtectedRoute>
            }
          />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
