import React, { useCallback } from "react";
import IUser from "../states/IUser";
import CountButton from "./CountButton";
import TextBox from "./TextBox";

const UserForm: React.FC<IUser> = (props) => {
  const { name, count } = props;
  const onNameChange = useCallback((value: string) => {}, []);
  const onCountClick = useCallback(() => {}, []);
  return (
    <div>
      <p>
        <TextBox
          type="text"
          value={name}
          label="UserName"
          onChangeText={onNameChange}
        />
        {}
      </p>
      <p>
        <CountButton count={count} label="visit" onClick={onCountClick} />
        {}
      </p>
    </div>
  );
};

export default UserForm;
