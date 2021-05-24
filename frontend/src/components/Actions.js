import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { last15Actions } from '../selectors/actions';
import { getActions } from '../operations/actions';

const Actions = ({ fetchActions, actions }) => {

    useEffect(() => fetchActions(), [fetchActions]);
    return (
        <div className="actions">
            <h2 className="title has-text-black-ter is-2">ACTIONS</h2>
            {actions.map((action, index) =>
                <div key={index} className="box has-background-grey-lighter">
                    <p className="is-large has-text-link-dark is-size-4">{action}</p>
                    <p className="is-small is-size-6"></p>
                </div>
            )}
        </div >
    );
};

const mapStateToProps = (state) => {
    return {
        actions: last15Actions(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActions: () => {
            dispatch(getActions());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
