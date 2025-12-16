import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

export function ProtectedRoute({ isPrivate }: { isPrivate: boolean }) {
    const { user, isLoading } = userTracker (() => {
        return {
            user: Meteor.user(),
            isLoading: Meteor.logginnIn(),
        };
    });
    if (isLoading){
        //Aparecerá "loading" enquanto esta sendo processado
        return <div>Carregando...</div>;
    }
    if (user && !isPrivate) {
        //Redirecionar para o Usuario Logado
        return <Navigate to="/" replace/>;
    }
    if (user && isPrivate ) {
        //redireciona para usuario nao logado
        return<Navigate to="/login" replace/>;
    }

    return <Outlet />;
}