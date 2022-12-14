import { Routes, Route, Navigate } from "react-router-dom";
import {
    Login,
    Profile,
    Today,
} from './../vistas/index';

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="today" element={<Today />} />
                <Route path="profile" element={<Profile />} />
                {/* <Route path="/*" element={<Navigate to="/today" />} /> */}
            </Routes>
        </>
    );
}

