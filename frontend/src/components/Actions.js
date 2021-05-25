import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { last15Actions } from '../selectors/actions';
import { deleteAction, getActions } from '../operations/actions';

const Actions = ({ fetchActions, actions, delAction }) => {

    useEffect(() => fetchActions(), [fetchActions]);
    return (
        <div className="actions">
            <h2 className="title has-text-black-ter is-2">ACTIONS</h2>
            {actions.map((action, index) =>
                <div key={index} className="notification has-background-grey-lighter">
                    <button class="delete" onClick={() => {
                        if (window.confirm('Are you sure you want to delete action?')) {
                            delAction({ action: action })
                        }
                    }}></button>
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
        },
        delAction: (action) => {
            dispatch(deleteAction(action));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
