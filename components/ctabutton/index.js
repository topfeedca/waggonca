import React from 'react'
import styled from 'styled-components'

export default function CTAButton({
  children,
  onClick,
  href,
  blank,
}) {

  const targets = {
    blank: '_blank',
    self: '_self',
    parent: '_parent',
    top: '_top',
  };

  const renderTarget = (type) => {
    if (!type || type === null || type === undefined) {
      return '_self'
    }

    return targets[type];
  }

  if (href) {
    return (
      <Button as="a" href={href} target={renderTarget(blank)}>
        {children}
      </Button>
    )
  }

  return (
    <Button as="button" onClick={onClick}>
      {children}
    </Button>
  );
}

const Button = styled.div`
  background: #3dace4;
  border-radius: 50px;
  padding: 18px 68px;
  border: none;
  color: #fff;
  font-size: 17px;
  outline: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: '#3299c9';
  }

  &:active {
    background: #1293ce;
  }
`;
