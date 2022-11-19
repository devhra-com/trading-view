import React from 'react';
import { ReactComponent as EmptySvg } from '../assets/empty.svg';
import Result from './Result';

type EmptyProps = {
  message?: string;
  title: string;
};

function Empty({ message, title }: EmptyProps) {
  return <Result image={<EmptySvg />} subTitle={message} title={title} />;
}

export default Empty;
