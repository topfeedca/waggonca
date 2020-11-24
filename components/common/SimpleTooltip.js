import React from 'react'
import { css } from "styled-components"
import Tooltip from 'react-simple-tooltip'

const ToolTipOptions = {
  arrow: 0,
  background: "#adadad",
  border: "#adadad",
  color: "#fff",
  fadeDuration: 0,
  fadeEasing: "linear",
  fixed: false,
  fontFamily: "inherit",
  fontSize: "inherit",
  offset: 0,
  padding: 12,
  placement: "top",
  radius: 0,
  zIndex: 1,
}

export default function SimpleTooltip(props) {
  return (
    <Tooltip
      // arrow={0}
      // background="#adadad"
      // border="#adadad"
      // color="#fff"
      // content="😎fdsafdsafds afs dafdsa fsdafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsa"
      // fadeDuration={0}
      // fadeEasing="linear"
      // fixed={false}
      // fontFamily="inherit"
      // fontSize="inherit"
      // offset={2}
      // padding={8}
      // placement="top"
      // radius={0}
      // zIndex={1}
      {...ToolTipOptions}
      {...props}
      // customCss={css`
      //   * {
      //     border-radius: 8px !important;
      //     word-wrap: wrap;
      //   }
      // `}
      customCss={css`
        white-space: nowrap;

        * {
          border-radius: 3px;
        }
      `}
    >
      <Tooltip>
        {props.children}
      </Tooltip>
    </Tooltip>
  );
}