import React from 'react';
import { LinkBtn } from '../Buttons/LinkBtn/LinkBtn';
import './ConfirmActionDialog.css';

export function ConfirmActionDialog(props) {
    /*
    * dialogTitle = props.dialogTitle
    * dialogDesc = props.dialogDesc
    * */
    const userName = 'Artur';
    const dialogTitle = 'Telegram';
    const dialogDesc = `Add ${userName} to the channel`;
    return (
      <div className="ConfirmActionDialog">
            <div className="ConfirmActionDialog__overlay">
          <div className="ConfirmActionDialog__popup">
                <h3 className="ConfirmActionDialog__title">{dialogTitle}</h3>
                    <p className="ConfirmActionDialog__desc">{dialogDesc}</p>
                    <div className="ConfirmActionDialog__control-wrap">
                        <LinkBtn
                      className="ConfirmActionDialog__control ConfirmActionDialog__nav_reject"
                      btnText="Cancel"
                    />
                        <LinkBtn
                            className="ConfirmActionDialog__control ConfirmActionDialog__nav_confirm"
                      btnText="Ok"
                    />
                    </div>
                </div>
        </div>
        </div>
    );
}
