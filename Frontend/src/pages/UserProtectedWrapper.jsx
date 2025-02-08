import React, { useContext } from "react";
import UserContext, { UserDataContext } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

const userProtectedWrapper = () => {
    const { user } = useContext(UserDataContext);
    const navigate = useNavigate();


  return <div>userProtectedWrapper</div>;
};

export default userProtectedWrapper;
