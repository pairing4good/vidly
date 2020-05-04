import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Like = (props) => {
  return (
    <FontAwesomeIcon
      onClick={() => props.onLike(props.movie)}
      icon={props.movie.liked ? faHeartSolid : faHeartEmpty}
    />
  );
};

export default Like;
