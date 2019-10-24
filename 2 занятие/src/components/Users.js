import React from "react";
import User from "./User";


export default function Users() {
  return (
    <div className="right">
      <User
        src="http://okhtalab.ru/files/2017/05/img-david-lynch-01-_184117216071.jpg"
        alt="man"
        name="Scott"
      />
      <div className="users_block">
        <User
          src="http://okhtalab.ru/files/2017/05/img-david-lynch-01-_184117216071.jpg"
          alt="man"
          name="Scott"
          min
        />
        <User
          src="http://okhtalab.ru/files/2017/05/img-david-lynch-01-_184117216071.jpg"
          alt="man"
          name="Scott"
          min
        />
        <User
          src="http://okhtalab.ru/files/2017/05/img-david-lynch-01-_184117216071.jpg"
          alt="man"
          name="Scott"
          min
        />
        <User
          src="http://okhtalab.ru/files/2017/05/img-david-lynch-01-_184117216071.jpg"
          alt="man"
          name="Scott"
          min
        />
      </div>
    </div>
  );
}
