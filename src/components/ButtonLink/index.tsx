import React from 'react';
import styled from 'styled-components';

interface IButtonLinkProps {
  text: string;
  link: string;
  external?: boolean;
}

const ButtonLink = ({ text, link, external }: IButtonLinkProps) => {
  return (
    <SButton
      href={`${link}`}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noreferrer noopener' : 'tag'}
    >
      {text}
    </SButton>
  );
};

export default ButtonLink;

const SButton = styled.a`
  margin: 20px 10%;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 10px;
  color: ${(props) => props.theme.color.primary};
  text-decoration: none;
  transition: 0.2s linear;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.action};
    border-color: ${(props) => props.theme.color.action};
  }
`;
