import { RSAA } from 'redux-api-middleware';
import {
    ACTIONS_GET_FAILURE, ACTIONS_GET_REQUEST, ACTIONS_GET_SUCCESS,
    ACTIONS_POST_FAILURE, ACTIONS_POST_REQUEST, ACTIONS_POST_SUCCESS,
    ACTIONS_DELETE_FAILURE, ACTIONS_DELETE_REQUEST, ACTIONS_DELETE_SUCCESS
} from "../types/actions";
import { host } from "./host";


export const getActions = () => ({
    [RSAA]: {
        endpoint: `${host}/actions`,
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        types: [
            ACTIONS_GET_REQUEST,
            ACTIONS_GET_SUCCESS,
            ACTIONS_GET_FAILURE]
    }
});

export const postAction = (payload) => ({
    [RSAA]: {
        endpoint: `${host}/actions`,
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        types: [
            ACTIONS_POST_REQUEST,
            ACTIONS_POST_SUCCESS,
            ACTIONS_POST_FAILURE]
    }
});


export const deleteAction = (payload) => ({
    [RSAA]: {
        endpoint: `${host}/actions`,
        method: 'DELETE',
        body: JSON.stringify(payload),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        types: [
            ACTIONS_DELETE_REQUEST,
            ACTIONS_DELETE_SUCCESS,
            ACTIONS_DELETE_FAILURE]
    }
});