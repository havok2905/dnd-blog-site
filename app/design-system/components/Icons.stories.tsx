import {
  CheckIcon,
  DoubleCheckIcon,
  ListIcon,
  XIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from './Icons';

export default {
  title: 'Icons'
};

const Template = () => {
  return (
    <>
      <CheckIcon
        height="20px"
        width="20px"/>
      <DoubleCheckIcon
        height="20px"
        width="20px"/>
      <ListIcon
        height="20px"
        width="20px"/>
      <XIcon
        height="20px"
        width="20px"/>
      <ZoomInIcon
        height="20px"
        width="20px"/>
      <ZoomOutIcon
        height="20px"
        width="20px"/>
    </>
  );
};

export const Default = Template.bind({});
